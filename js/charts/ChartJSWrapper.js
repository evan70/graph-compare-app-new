class ChartJSWrapper {
    constructor(containerId, dataManager, themeManager, colorManager) {
        this.container = document.getElementById(containerId);
        this.dataManager = dataManager;
        this.themeManager = themeManager;
        this.colorManager = colorManager;
        this.chart = null;
        
        if (this.colorManager) {
            this.colorManager.addListener((colors) => this.updateColors(colors));
        }
    }

    getChartOptions() {
        const isDark = this.themeManager.getCurrentTheme() === 'dark';
        const textColor = isDark ? '#e2e5ec' : '#666666';
        const gridColor = isDark ? '#2d3139' : '#ddd';

        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor,
                        borderColor: gridColor
                    },
                    ticks: {
                        color: textColor
                    }
                },
                y: {
                    grid: {
                        color: gridColor,
                        borderColor: gridColor
                    },
                    ticks: {
                        color: textColor
                    }
                }
            }
        };
    }

    init() {
        const ctx = this.container.getContext('2d');
        this.chart = new Chart(ctx, this.getInitialConfig());
    }

    updateData(newData) {
        if (this.chart) {
            this.chart.data = newData;
            this.chart.update();
        }
    }

    updateOptions(newOptions) {
        if (this.chart) {
            Object.assign(this.chart.options, newOptions);
            this.chart.update();
        }
    }

    destroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    setChartType(type) {
        if (!this.chart) return;
        
        // Pre 'area' použijeme 'line' s fill: true
        const chartType = type === 'area' ? 'line' : type;
        this.chart.config.type = chartType;
        
        // Nastavenie fill podľa typu
        this.chart.data.datasets.forEach(dataset => {
            if (type === 'area') {
                dataset.fill = true;
            } else {
                dataset.fill = this.options.useGradient;
            }
        });
        
        this.chart.update();
    }

    getInitialConfig() {
        const data = this.dataManager.getCurrentData();
        const colors = this.colorManager.getCurrentPalette();
        const options = this.getChartOptions();

        return {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: data.datasets.map((dataset, index) => ({
                    ...dataset,
                    borderColor: colors[index % colors.length],
                    backgroundColor: colors[index % colors.length],
                    fill: false,
                    tension: 0.4
                }))
            },
            options: options
        };
    }

    updateColors(colors) {
        if (!this.chart) return;
        
        this.chart.data.datasets.forEach((dataset, index) => {
            const color = colors[index % colors.length];
            dataset.borderColor = color;
            dataset.backgroundColor = color;
        });
        
        this.chart.update();
    }
}

if (typeof window !== 'undefined') {
    window.ChartJSWrapper = ChartJSWrapper;
}
