class DataManager {
    constructor() {
        this.data = {
            labels: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 
                    'Júl', 'August', 'September', 'Október', 'November', 'December'],
            datasets: [{
                label: 'Predaje 2023',
                data: [65, 59, 80, 81, 56, 55, 72, 68, 85, 91, 75, 62],
                borderColor: '#4e73df',
                fill: false
            }, {
                label: 'Predaje 2024',
                data: [28, 48, 40, 19, 86, 27, 45, 52, 58, 62, 35, 41],
                borderColor: '#e74a3b',
                fill: false
            }]
        };

        this.colors = {
            default: [
                '#4e73df', '#e74a3b', '#1cc88a', '#f6c23e', '#36b9cc',
                '#858796', '#5a5c69', '#e83e8c', '#fd7e14', '#6f42c1'
            ],
            cool: [
                '#4ECDC4', '#45B7D1', '#96CEB4', '#88D8B0', '#7FDBDA',
                '#6DC5C9', '#5FB0B7', '#519AA6', '#438594', '#357082'
            ],
            warm: [
                '#FF6B6B', '#FFB347', '#FFEEAD', '#FFD93D', '#FF8C42',
                '#FF6B6B', '#FF4757', '#FF3E41', '#FF2E2E', '#FF1F1F'
            ]
        };

        this.currentPalette = 'default';
    }

    getCurrentData() {
        return this.data;
    }

    getColors() {
        return this.colors[this.currentPalette];
    }

    setPalette(name) {
        if (this.colors[name]) {
            this.currentPalette = name;
        }
    }

    getCurrentPalette() {
        return this.currentPalette;
    }

    addCustomPalette(name, colors) {
        this.colors[name] = colors;
    }

    updateData(newData) {
        this.data = newData;
    }

    addDataset(label, data, color) {
        this.data.datasets.push({
            label: label,
            data: data,
            borderColor: color,
            fill: false
        });
    }

    removeDataset(index) {
        this.data.datasets.splice(index, 1);
    }

    updateDataset(index, newData) {
        if (this.data.datasets[index]) {
            this.data.datasets[index] = { ...this.data.datasets[index], ...newData };
        }
    }
}
