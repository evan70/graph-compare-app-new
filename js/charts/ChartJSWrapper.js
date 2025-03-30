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
                    borderColor: dataset.color || colors[index % colors.length],
                    backgroundColor: this.options.useGradient ? 
                        this.createGradient(dataset.color || colors[index % colors.length]) : 
                        'transparent',
                    tension: this.options.useSmoothing ? 0.4 : 0
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { 
                            color: isDark ? '#e2e5ec' : '#666666' 
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { 
                            color: isDark ? '#2d3139' : '#dddddd' 
                        },
                        ticks: { 
                            color: isDark ? '#e2e5ec' : '#666666' 
                        }
                    },
                    y: {
                        grid: { 
                            color: isDark ? '#2d3139' : '#dddddd' 
                        },
                        ticks: { 
                            color: isDark ? '#e2e5ec' : '#666666' 
                        }
                    }
                }
            }
        };
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
        // Konvertuje hex na rgba s danou priehľadnosťou
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
}

// Export pre prehliadač
window.ChartJSWrapper = ChartJSWrapper;
