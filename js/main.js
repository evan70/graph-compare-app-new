class ChartManager {
    constructor() {
        this.dataManager = new DataManager();
        this.themeManager = new ThemeManager();
        
        this.chartjs = new ChartJSWrapper('chartjs', this.dataManager, this.themeManager);
        this.apex = new ApexChartsWrapper('apex', this.dataManager, this.themeManager);
        
        this.init();
    }

    init() {
        this.chartjs.init();
        this.apex.init();
        this.initControls();
    }

    initControls() {
        this.initChartTypeButtons();
        this.initColorPaletteSelect();
        this.initGradientToggle();
        this.initSmoothingToggle();
        this.initLegendToggle();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChartManager();
});
