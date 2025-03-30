class FullscreenManager {
    constructor(themeManager, dataManager, colorManager) {
        this.themeManager = themeManager;
        this.dataManager = dataManager;
        this.colorManager = colorManager;
        
        this.overlay = document.querySelector('.fullscreen-overlay');
        this.container = document.querySelector('.fullscreen-graf-container');
        this.closeBtn = document.querySelector('.fullscreen-close-btn');
        this.fullscreenBtns = document.querySelectorAll('.fullscreen-btn');
        
        this.currentChart = null;
        this.originalChartInstance = null;
        this.chartType = null;
        
        this.initEventListeners();
    }

    initEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isActive()) {
                this.exitFullscreen();
            }
        });

        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.exitFullscreen());
        }

        this.fullscreenBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const chartId = btn.getAttribute('data-graf');
                if (chartId === 'chartjs') {
                    const chartCanvas = document.getElementById(chartId);
                    if (chartCanvas) {
                        const chartInstance = Chart.getChart(chartCanvas);
                        if (chartInstance) {
                            this.enterFullscreen(chartId, chartInstance, 'chartjs');
                        }
                    }
                } else if (chartId === 'apex') {
                    const chartElement = document.getElementById(chartId);
                    if (chartElement && window.apexChart) {
                        this.enterFullscreen(chartId, window.apexChart, 'apex');
                    } else {
                        console.error('ApexChart instance not found');
                    }
                }
            });
        });
    }

    enterFullscreen(chartId, chartInstance, type) {
        if (!this.overlay || !this.container) return;
        
        this.originalChartInstance = chartInstance;
        this.chartType = type;
        this.overlay.classList.add('active');
        document.body.classList.add('fullscreen-active');
        
        if (type === 'chartjs') {
            const canvas = document.createElement('canvas');
            canvas.id = 'fullscreen-chart';
            this.container.appendChild(canvas);
            const fullscreenConfig = this.createChartJSConfig(chartInstance);
            this.currentChart = new Chart(canvas, fullscreenConfig);
        } else if (type === 'apex') {
            const div = document.createElement('div');
            div.id = 'fullscreen-chart';
            this.container.appendChild(div);
            const fullscreenConfig = this.createApexConfig(chartInstance);
            this.currentChart = new ApexCharts(div, fullscreenConfig);
            this.currentChart.render();
        }
    }

    createChartJSConfig(originalChart) {
        const currentData = this.dataManager.getCurrentData();
        const currentColors = this.colorManager.getCurrentPalette();
        const themeConfig = this.themeManager.getThemeConfig();

        return {
            type: originalChart.config.type,
            data: {
                labels: currentData.labels,
                datasets: currentData.datasets.map((dataset, index) => ({
                    ...dataset,
                    borderColor: currentColors[index % currentColors.length],
                    backgroundColor: currentColors[index % currentColors.length]
                }))
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                animation: { duration: 0 },
                scales: {
                    x: {
                        grid: { color: themeConfig.colors.border },
                        ticks: { color: themeConfig.colors.text }
                    },
                    y: {
                        grid: { color: themeConfig.colors.border },
                        ticks: { color: themeConfig.colors.text }
                    }
                }
            }
        };
    }

    createApexConfig(originalChart) {
        const currentData = this.dataManager.getCurrentData();
        const currentColors = this.colorManager.getCurrentPalette();
        const themeConfig = this.themeManager.getThemeConfig();

        return {
            series: currentData.datasets.map(dataset => ({
                name: dataset.label,
                data: dataset.data
            })),
            colors: currentColors,
            chart: {
                type: 'line',
                height: '100%',
                background: 'transparent'
            },
            xaxis: {
                categories: currentData.labels,
                labels: {
                    style: { colors: themeConfig.colors.text }
                }
            },
            yaxis: {
                labels: {
                    style: { colors: themeConfig.colors.text }
                }
            },
            grid: {
                borderColor: themeConfig.colors.border
            }
        };
    }

    exitFullscreen() {
        if (!this.isActive()) return;
        
        if (this.currentChart) {
            if (this.chartType === 'chartjs') {
                this.currentChart.destroy();
            } else if (this.chartType === 'apex') {
                this.currentChart.destroy();
            }
            this.currentChart = null;
        }
        
        this.container.innerHTML = '';
        this.overlay.classList.remove('active');
        document.body.classList.remove('fullscreen-active');
    }

    isActive() {
        return this.overlay?.classList.contains('active');
    }

    updateColors() {
        if (!this.currentChart) return;
        
        const currentColors = this.colorManager.getCurrentPalette();
        
        if (this.chartType === 'chartjs') {
            this.currentChart.data.datasets.forEach((dataset, index) => {
                dataset.borderColor = currentColors[index % currentColors.length];
                dataset.backgroundColor = currentColors[index % currentColors.length];
            });
            this.currentChart.update();
        } else if (this.chartType === 'apex') {
            this.currentChart.updateOptions({
                colors: currentColors
            });
        }
    }
}

if (typeof window !== 'undefined') {
    window.FullscreenManager = FullscreenManager;
}
