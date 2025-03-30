// Hlavná aplikácia
const ChartManager = (function() {
    function ChartManager() {
        this.dataManager = new window.DataManager();
        this.themeManager = new window.ThemeManager();
        
        this.chartjs = new window.ChartJSWrapper('chartjs', this.dataManager, this.themeManager);
        this.apex = new window.ApexChartsWrapper('apex', this.dataManager, this.themeManager);

        // Inicializácia grafov
        this.chartjs.init();
        this.apex.init();

        // Register listeners
        this.dataManager.addListener((data) => {
            this.chartjs.updateData(data);
            this.apex.updateData(data);
        });

        this.themeManager.addListener((themeConfig) => {
            this.chartjs.updateOptions(themeConfig);
            this.apex.updateOptions(themeConfig);
        });
    }

    return ChartManager;
})();

// Inicializácia po načítaní stránky
document.addEventListener('DOMContentLoaded', () => {
    window.chartManager = new ChartManager();
});
