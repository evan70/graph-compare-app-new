class FullscreenManager {
    constructor(themeManager) {
        this.themeManager = themeManager;
        this.fullscreenOverlay = document.querySelector('.fullscreen-overlay');
        this.fullscreenContainer = document.querySelector('.fullscreen-graf-container');
        this.closeFullscreenBtn = document.querySelector('.fullscreen-close-btn');
        this.fullscreenChart = null;
        
        this.initEventListeners();
    }

    initEventListeners() {
        // Inicializácia tlačidiel pre fullscreen
        document.querySelectorAll('.fullscreen-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const grafType = e.currentTarget.dataset.graf;
                this.openFullscreen(grafType);
            });
        });

        // Close button handler
        this.closeFullscreenBtn.addEventListener('click', () => {
            this.closeFullscreen();
        });

        // ESC key handler
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isFullscreenActive()) {
                this.closeFullscreen();
            }
        });
    }

    openFullscreen(grafType) {
        if (grafType === 'chartjs') {
            this.openChartJSFullscreen();
        } else if (grafType === 'apex') {
            this.openApexFullscreen();
        }
    }

    openChartJSFullscreen() {
        // Vyčistíme container
        this.fullscreenContainer.innerHTML = '';
        
        // Vytvoríme canvas
        const canvas = document.createElement('canvas');
        canvas.id = 'fullscreen-chartjs';
        this.fullscreenContainer.appendChild(canvas);
        
        // Aktivujeme fullscreen
        this.activateFullscreen();

        // Vytvoríme nový graf
        const ctx = canvas.getContext('2d');
        const isDarkTheme = this.themeManager.getCurrentTheme() === 'dark';
        const textColor = isDarkTheme ? '#e2e5ec' : '#666';
        const gridColor = isDarkTheme ? '#2d3139' : '#ddd';

        // Tu môžete pridať konfiguráciu pre ChartJS
        const chartConfig = this.getChartJSConfig(textColor, gridColor);
        this.fullscreenChart = new Chart(ctx, chartConfig);
    }

    openApexFullscreen() {
        const sourceChart = document.getElementById('apex');
        const chartBox = sourceChart.closest('.chart-box');
        const chartHeader = chartBox.querySelector('.chart-header').cloneNode(true);
        
        // Odstránime fullscreen tlačidlo z klonovaného headeru
        const fullscreenBtn = chartHeader.querySelector('.fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.remove();
        }
        
        // Vyčistíme container
        this.fullscreenContainer.innerHTML = '';
        
        // Pridáme header a vytvoríme nový container pre graf
        this.fullscreenContainer.appendChild(chartHeader);
        const newChartContainer = document.createElement('div');
        newChartContainer.id = 'fullscreen-apex';
        newChartContainer.style.width = '100%';
        newChartContainer.style.height = 'calc(100% - 50px)';
        this.fullscreenContainer.appendChild(newChartContainer);

        // Aktivujeme fullscreen
        this.activateFullscreen();

        // Vytvoríme a renderujeme nový ApexChart
        const apexConfig = this.getApexConfig();
        this.fullscreenChart = new ApexCharts(
            document.getElementById('fullscreen-apex'),
            apexConfig
        );
        
        this.fullscreenChart.render();
    }

    closeFullscreen() {
        if (this.fullscreenChart) {
            this.fullscreenChart.destroy();
            this.fullscreenChart = null;
        }
        this.fullscreenOverlay.classList.remove('active');
        document.body.classList.remove('fullscreen-active');
        this.fullscreenContainer.innerHTML = '';
    }

    activateFullscreen() {
        this.fullscreenOverlay.classList.add('active');
        document.body.classList.add('fullscreen-active');
    }

    isFullscreenActive() {
        return this.fullscreenOverlay.classList.contains('active');
    }

    getChartJSConfig(textColor, gridColor) {
        // Konfigurácia pre ChartJS
        return {
            type: 'line', // alebo iný typ podľa potreby
            data: {
                // dáta grafu
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: textColor }
                    }
                },
                scales: {
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    }
                }
            }
        };
    }

    getApexConfig() {
        // Konfigurácia pre ApexCharts
        return {
            // Základná konfigurácia
            chart: {
                type: 'line',
                height: '100%',
                width: '100%',
                animations: {
                    enabled: true
                },
                toolbar: {
                    show: true
                }
            },
            // Ďalšie nastavenia...
        };
    }
}