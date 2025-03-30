// Mock pre jest.fn()
global.jest = {
    fn: () => ({
        mockImplementation: (fn) => fn || (() => {})
    })
};

const DataManager = require('../js/managers/DataManager.js');
const ThemeManager = require('../js/managers/ThemeManager.js');
const { ChartManager } = require('../js/main.js');

// Mock pre wrapper triedy
global.ChartJSWrapper = jest.fn().mockImplementation(() => ({
    init: jest.fn(),
    updateData: jest.fn(),
    updateOptions: jest.fn(),
    destroy: jest.fn()
}));

global.ApexChartsWrapper = jest.fn().mockImplementation(() => ({
    init: jest.fn(),
    updateData: jest.fn(),
    updateOptions: jest.fn(),
    destroy: jest.fn()
}));

// Mock pre document
document.body.innerHTML = `
    <div id="chartjs"></div>
    <div id="apex"></div>
    <div id="theme-toggle"></div>
`;

describe('Charts Tests', () => {
    let chartManager;
    let dataManager;
    let themeManager;

    beforeEach(() => {
        jest.clearAllMocks();
        chartManager = new ChartManager();
        dataManager = chartManager.dataManager;
        themeManager = chartManager.themeManager;
    });

    describe('DataManager Tests', () => {
        test('should initialize with default datasets', () => {
            const data = dataManager.getCurrentData();
            expect(data.datasets).toHaveLength(2);
            expect(data.labels).toHaveLength(12);
        });

        test('should add new dataset correctly', () => {
            const newData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            dataManager.addDataset('Test Data', newData, '#FF0000');
            const data = dataManager.getCurrentData();
            expect(data.datasets).toHaveLength(3);
            expect(data.datasets[2].label).toBe('Test Data');
        });
    });

    describe('ThemeManager Tests', () => {
        test('should initialize with default theme', () => {
            const theme = themeManager.getCurrentTheme();
            expect(theme).toBe('light');
        });

        test('should toggle theme correctly', () => {
            const initialTheme = themeManager.getCurrentTheme();
            themeManager.toggleTheme();
            const newTheme = themeManager.getCurrentTheme();
            expect(newTheme).not.toBe(initialTheme);
        });
    });

    describe('Chart Integration Tests', () => {
        test('should update both charts when data changes', () => {
            const newData = [1,2,3,4,5,6,7,8,9,10,11,12];
            dataManager.addDataset('New Data', newData, '#00FF00');
            
            expect(chartManager.chartjs.updateData).toHaveBeenCalled();
            expect(chartManager.apex.updateData).toHaveBeenCalled();
        });

        test('should apply theme changes to both charts', () => {
            themeManager.toggleTheme();
            
            expect(chartManager.chartjs.updateOptions).toHaveBeenCalled();
            expect(chartManager.apex.updateOptions).toHaveBeenCalled();
        });
    });
});
