class ChartManager {
    constructor() {
        this.dataManager = new DataManager();
        this.themeManager = new ThemeManager();
        this.settingsManager = new SettingsManager();
        
        this.chartjs = new ChartJSWrapper('chartjs', this.dataManager, this.themeManager);
        this.apex = new ApexChartsWrapper('apex', this.dataManager, this.themeManager);
        
        this.init();
    }

    init() {
        this.initCharts();
        this.initSettingsSubscriptions();
    }

    initCharts() {
        const settings = this.settingsManager.getCurrentSettings();
        
        this.chartjs.init(settings);
        this.apex.init(settings);
    }

    initSettingsSubscriptions() {
        // Subscribe to settings changes
        this.settingsManager.subscribe('chartType', (type) => {
            this.chartjs.updateChartType(type);
            this.apex.updateChartType(type);
        });

        this.settingsManager.subscribe('colorPalette', (palette) => {
            this.chartjs.updateColors(palette);
            this.apex.updateColors(palette);
        });

        this.settingsManager.subscribe('gradient', (useGradient) => {
            this.chartjs.updateGradient(useGradient);
            this.apex.updateGradient(useGradient);
        });

        this.settingsManager.subscribe('smoothing', (useSmoothing) => {
            this.chartjs.updateSmoothing(useSmoothing);
            this.apex.updateSmoothing(useSmoothing);
        });

        this.settingsManager.subscribe('legend', (showLegend) => {
            this.chartjs.updateLegend(showLegend);
            this.apex.updateLegend(showLegend);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChartManager();
});
