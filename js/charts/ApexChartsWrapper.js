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
        this.chart = new ApexCharts(
            this.container, 
            this.getInitialConfig()
        );
        this.chart.render();
    }

    getInitialConfig() {
        const data = this.dataManager.getCurrentData();
        const colors = this.dataManager.getColors();
        const isDark = this.themeManager.getCurrentTheme() === 'dark';

        return {
            chart: {
                type: 'line',
                height: '100%',
                background: 'transparent',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            series: data.datasets.map(dataset => ({
                name: dataset.label,
                data: dataset.data
            })),
            colors: colors,
            xaxis: {
                categories: data.labels,
                labels: {
                    style: {
                        colors: isDark ? '#e2e5ec' : '#666'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: isDark ? '#e2e5ec' : '#666'
                    }
                }
            },
            stroke: {
                curve: this.options.useSmoothing ? 'smooth' : 'straight',
                width: 2
            },
            fill: {
                type: this.options.useGradient ? 'gradient' : 'solid',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    opacityFrom: 0.25,
                    opacityTo: 0,
                    stops: [0, 100]
                }
            },
            markers: {
                size: 4,
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 6
                }
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
            }
        };
    }

    updateData(newData) {
        if (this.chart) {
            this.chart.updateSeries(
                newData.datasets.map(dataset => ({
                    name: dataset.label,
                    data: dataset.data
                }))
            );
        }
    }

    updateOptions(newOptions) {
        if (this.chart) {
            this.chart.updateOptions(newOptions);
        }
    }

    destroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}