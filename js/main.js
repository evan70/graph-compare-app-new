// Hlavná aplikácia
const ChartManager = (function() {
    function ChartManager() {
        // Inicializácia manažérov
        this.dataManager = new window.DataManager();
        this.themeManager = new window.ThemeManager();
        this.navigationManager = new window.NavigationManager();
        this.settingsManager = new window.SettingsManager(); // Pridaný SettingsManager
        this.fullscreenManager = new window.FullscreenManager(
            this.themeManager,
            this.dataManager
        );
        
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

        // Pridané listeners pre settings
        this.initSettingsListeners();
    }

    ChartManager.prototype.initSettingsListeners = function() {
        // Listener pre zmenu typu grafu
        this.settingsManager.subscribe('chartType', (type) => {
            this.chartjs.setChartType(type);
            this.apex.setChartType(type);
        });

        // Listener pre zmenu farebnej palety
        this.settingsManager.subscribe('colorPalette', (palette) => {
            this.chartjs.updateColors(palette);
            this.apex.updateColors(palette);
        });

        // Listener pre gradient
        this.settingsManager.subscribe('useGradient', (enabled) => {
            this.chartjs.toggleGradient(enabled);
            this.apex.toggleGradient(enabled);
        });

        // Listener pre vyhladzovanie
        this.settingsManager.subscribe('useSmoothing', (enabled) => {
            this.chartjs.toggleSmoothing(enabled);
            this.apex.toggleSmoothing(enabled);
        });

        // Listener pre legendu
        this.settingsManager.subscribe('showLegend', (visible) => {
            this.chartjs.toggleLegend(visible);
            this.apex.toggleLegend(visible);
        });
    };

    return ChartManager;
})();

// Inicializácia aplikácie po načítaní DOM
document.addEventListener('DOMContentLoaded', () => {
    window.chartManager = new ChartManager();
});
