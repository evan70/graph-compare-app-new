// Hlavná aplikácia
const ChartManager = (function() {
    function ChartManager() {
        // Inicializácia manažérov v správnom poradí
        this.settingsManager = new SettingsManager();
        this.colorManager = new ColorManager(this.settingsManager);
        this.dataManager = new DataManager();
        this.themeManager = new ThemeManager(this.settingsManager);
        this.fullscreenManager = new FullscreenManager(
            this.themeManager, 
            this.dataManager,
            this.colorManager
        );
        
        // Pridanie listenera na zmeny palety
        this.colorManager.addListener(() => {
            if (this.fullscreenManager.isActive()) {
                this.fullscreenManager.updateColors();
            }
        });

        // Inicializácia wrapperov
        this.chartjs = new ChartJSWrapper('chartjs', this.dataManager, this.themeManager, this.colorManager);
        this.apex = new ApexChartsWrapper('apex', this.dataManager, this.themeManager, this.colorManager);

        // Inicializácia grafov
        this.chartjs.init();
        this.apex.init();

        // Nastavenie event listenera pre select palety
        const paletteSelect = document.getElementById('color-palette');
        if (paletteSelect) {
            paletteSelect.value = this.colorManager.getCurrentPalette();
            paletteSelect.addEventListener('change', (e) => {
                this.colorManager.setPalette(e.target.value);
            });
        }

        // Po inicializácii ostatných manažérov
        const tableManager = new TableManager(this.dataManager);
    }

    return ChartManager;
})();

// Inicializácia aplikácie po načítaní DOM
document.addEventListener('DOMContentLoaded', () => {
    window.chartManager = new ChartManager();
});
