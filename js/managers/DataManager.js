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

        this.rowColors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', 
            '#FFB347', '#A8E6CF', '#DCEDC1', '#FFD93D', '#FF8C42',
            '#6C5B7B', '#C06C84'
        ];
    }

    generateTestData() {
        // Implementácia generovania testovacích dát
    }

    getCurrentData() {
        return this.data;
    }

    getColors() {
        return this.rowColors;
    }
}