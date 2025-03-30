class ChartManager {
    constructor() {
        this.chartjs = null;
        this.apex = null;
        this.data = {
            labels: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
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

        this.initChartJS();
        this.initApexCharts();
    }

    initChartJS() {
        const ctx = document.getElementById('chartjs').getContext('2d');
        this.chartjs = new Chart(ctx, {
            type: 'line',
            data: this.data,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    initApexCharts() {
        const options = {
            chart: {
                type: 'line',
                height: '100%'
            },
            series: this.data.datasets,
            xaxis: {
                categories: this.data.labels
            }
        };

        this.apex = new ApexCharts(document.getElementById('apex'), options);
        this.apex.render();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChartManager();
});