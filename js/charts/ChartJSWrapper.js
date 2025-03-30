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

    getInitialConfig() {
        const data = this.dataManager.getCurrentData();
        const colors = this.dataManager.getColors();
        
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
                    tension: this.options.useSmoothing ? 0.4 : 0
                }))
            },
            options: this.getChartOptions('line')
        };
    }

    getChartOptions(type) {
        // Implementácia špecifických nastavení pre typ grafu
    }
}