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
            colors: colors,
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

    updateColors(palette) {
        if (!this.chart) return;
        
        const colors = this.dataManager.getColors();
        
        this.chart.updateOptions({
            colors: colors
        }, false, true);
    }

    updateData(newData) {
        if (this.chart && newData.datasets) {
            const series = newData.datasets.map(dataset => ({
                name: dataset.label || 'Series',
                data: dataset.data || []
            }));
            this.chart.updateSeries(series, true);
        }
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

    setChartType(type) {
        if (!this.chart) return;
        
        let apexType = type;
        if (type === 'area') {
            apexType = 'area';
        } else if (type === 'bar') {
            apexType = 'bar';
        } else {
            apexType = 'line';
        }

        this.chart.updateOptions({
            chart: {
                type: apexType
            }
        });
    }

    destroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}

if (typeof window !== 'undefined') {
    window.ApexChartsWrapper = ApexChartsWrapper;
}
