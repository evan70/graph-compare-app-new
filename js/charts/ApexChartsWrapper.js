class ApexChartsWrapper {
    constructor(containerId, dataManager, themeManager) {
        this.container = document.getElementById(containerId);
        this.dataManager = dataManager;
        this.themeManager = themeManager;
        this.chart = null;
        this.options = {
            useGradient: false,
            useSmoothing: true
        };
    }

    init() {
        const data = this.dataManager.getCurrentData();
        const colors = this.dataManager.getColors();
        const isDark = this.themeManager.getCurrentTheme() === 'dark';

        const config = {
            series: data.datasets.map(dataset => ({
                name: dataset.label,
                data: dataset.data
            })),
            colors: colors, // Pridané farby z DataManager
            chart: {
                type: 'line',
                height: 350,
                background: isDark ? '#1a1d24' : '#ffffff',
                foreColor: isDark ? '#e2e5ec' : '#666666'
            },
            xaxis: {
                categories: data.labels
            },
            grid: {
                borderColor: isDark ? '#2d3139' : '#ddd',
                strokeDashArray: 4
            },
            theme: {
                mode: isDark ? 'dark' : 'light'
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center'
            },
            stroke: {
                curve: this.options.useSmoothing ? 'smooth' : 'straight',
                width: 2
            }
        };

        this.chart = new ApexCharts(this.container, config);
        this.chart.render();
    }

    updateOptions(themeConfig) {
        if (this.chart) {
            const newOptions = {
                chart: {
                    background: themeConfig.colors.background,
                    foreColor: themeConfig.colors.text
                },
                grid: {
                    borderColor: themeConfig.colors.border
                },
                theme: {
                    mode: themeConfig.theme
                }
            };
            this.chart.updateOptions(newOptions, false, true);
        }
    }

    updateData(newData) {
        if (this.chart && newData.datasets) {
            const series = newData.datasets.map(dataset => ({
                name: dataset.label || 'Series',
                data: dataset.data || []
            }));
            const colors = this.dataManager.getColors(); // Získanie farieb pri aktualizácii
            this.chart.updateOptions({ colors: colors }, false); // Aktualizácia farieb
            this.chart.updateSeries(series, true);
        }
    }

    destroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}

// Export pre prehliadač
window.ApexChartsWrapper = ApexChartsWrapper;
