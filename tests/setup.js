// Mock Canvas API
HTMLCanvasElement.prototype.getContext = () => {
    return {
        clearRect: () => {},
        beginPath: () => {},
        moveTo: () => {},
        lineTo: () => {},
        stroke: () => {},
        fill: () => {},
        arc: () => {},
        measureText: () => ({ width: 0 })
    };
};

// Mock Chart.js
global.Chart = class {
    constructor() {
        this.data = {};
        this.options = {};
    }
    update() {}
    destroy() {}
};

// Mock ApexCharts
global.ApexCharts = class {
    constructor() {}
    render() { return Promise.resolve(); }
    updateOptions() {}
    updateSeries() {}
    destroy() {}
};

// Mock pre window
global.window = {
    matchMedia: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
};

// Mock pre document
document.body.innerHTML = `
    <div id="chartjs"></div>
    <div id="apex"></div>
    <div id="theme-toggle"></div>
`;
