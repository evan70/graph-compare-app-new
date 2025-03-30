class ChartJSWrapper {
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
        const colors = this.dataManager.getColors();
        const isDark = this.themeManager.getCurrentTheme() === 'dark';

        return {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: data.datasets.map((dataset, index) => ({
                    ...dataset,
                    borderColor: colors[index % colors.length],
                    backgroundColor: this.options.useGradient ? 
                        this.createGradient(colors[index % colors.length]) : 
                        'transparent',
                    tension: this.options.useSmoothing ? 0.4 : 0,
                    fill: false
                }))
            },
            options: this.getChartOptions()
        };
    }

    updateColors(palette) {
        if (!this.chart) return;
        
        const colors = this.dataManager.getColors();
        
        this.chart.data.datasets.forEach((dataset, index) => {
            const color = colors[index % colors.length];
            dataset.borderColor = color;
            dataset.backgroundColor = this.options.useGradient ? 
                this.createGradient(color) : 
                (dataset.fill ? this.adjustColor(color, 0.2) : 'transparent');
        });
        
        this.chart.update();
    }

    createGradient(color) {
        if (!this.container) return color;
        
        const ctx = this.container.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, this.container.height);
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, this.adjustColor(color, 0.1));
        
        return gradient;
    }

    adjustColor(color, opacity) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
}

if (typeof window !== 'undefined') {
    window.ChartJSWrapper = ChartJSWrapper;
}
