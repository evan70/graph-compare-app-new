class ApexChartsWrapper {
    constructor(containerId, dataManager, themeManager, colorManager) {
        this.container = document.getElementById(containerId);
        this.dataManager = dataManager;
        this.themeManager = themeManager;
        this.colorManager = colorManager;
        this.chart = null;
        this.options = {
            useGradient: false,
            useSmoothing: true
        };
        
        if (this.colorManager) {
            this.colorManager.addListener((colors) => this.updateColors(colors));
        }
    }

    init() {
        const data = this.dataManager.getCurrentData();
        const colors = this.colorManager.getCurrentPalette();
        const themeConfig = this.themeManager.getThemeConfig();

        const options = {
            series: data.datasets.map(dataset => ({
                name: dataset.label,
                data: dataset.data
            })),
            colors: colors,
            chart: {
                type: 'line',
                height: '100%',
                background: 'transparent'
            },
            xaxis: {
                categories: data.labels,
                labels: {
                    style: {
                        colors: themeConfig.colors.text
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: themeConfig.colors.text
                    }
                }
            },
            grid: {
                borderColor: themeConfig.colors.border
            }
        };

        this.chart = new ApexCharts(this.container, options);
        this.chart.render();
        
        // Exportujeme inštanciu do window objektu
        window.apexChart = this.chart;
    }

    updateColors(colors) {
        if (!this.chart) return;
        
        this.chart.updateOptions({
            colors: colors
        });
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
