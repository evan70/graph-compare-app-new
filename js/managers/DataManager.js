class DataManager {
    constructor() {
        this.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 85, 90],
                    color: '#4e73df'
                },
                {
                    label: 'Dataset 2',
                    data: [28, 48, 40, 19, 86, 27, 90, 85, 70, 45, 35, 25],
                    color: '#1cc88a'
                }
            ]
        };
        this.listeners = [];
        this.colors = ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'];
        this.currentPalette = 'default';
    }

    getCurrentData() {
        return this.data;
    }

    getColors() {
        return this.colors;
    }

    setPalette(name) {
        const palettes = {
            default: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
            dark: ['#2c3e50', '#e74c3c', '#3498db', '#2ecc71', '#f1c40f'],
            pastel: ['#ff9999', '#99ff99', '#99ccff', '#ffcc99', '#ff99cc'],
            neon: ['#00ff00', '#ff00ff', '#00ffff', '#ffff00', '#ff0000']
        };

        if (palettes[name]) {
            this.colors = palettes[name];
            this.currentPalette = name;
            
            // Aktualizujeme farby v datasetoch
            this.data.datasets.forEach((dataset, index) => {
                dataset.color = this.colors[index % this.colors.length];
            });
            
            this.notifyListeners();
        }
    }

    getCurrentPalette() {
        return this.currentPalette;
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback(this.data));
    }

    addDataset(label, data, color) {
        const newColor = color || this.colors[this.data.datasets.length % this.colors.length];
        
        this.data.datasets.push({
            label,
            data,
            color: newColor
        });
        
        this.notifyListeners();
    }

    removeDataset(index) {
        if (index >= 0 && index < this.data.datasets.length) {
            this.data.datasets.splice(index, 1);
            this.notifyListeners();
        }
    }

    updateDataset(index, newData) {
        if (index >= 0 && index < this.data.datasets.length) {
            this.data.datasets[index].data = newData;
            this.notifyListeners();
        }
    }

    setLabels(labels) {
        this.data.labels = labels;
        this.notifyListeners();
    }
}

// Export pre Node.js aj prehliadač
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataManager;
} else {
    window.DataManager = DataManager;
}
