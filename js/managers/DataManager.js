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
    }

    getCurrentData() {
        return this.data;
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
