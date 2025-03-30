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
    }

    getCurrentData() {
        return this.data;
    }

    getColors() {
        return this.colors;
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback(this.data));
    }

    addDataset(label, data, color) {
        this.data.datasets.push({
            label,
            data,
            color: color || this.colors[this.data.datasets.length % this.colors.length]
        });
        this.notifyListeners();
    }
}

// Export pre Node.js aj prehliadač
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataManager;
} else {
    window.DataManager = DataManager;
}
