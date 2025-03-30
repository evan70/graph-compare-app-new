class TableManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.table = document.getElementById('dataTable');
        this.addDatasetBtn = document.getElementById('addDatasetBtn');
        this.addColumnBtn = document.getElementById('addColumnBtn');
        
        this.init();
        this.bindEvents();
    }

    init() {
        this.renderHeaders();
        this.renderData();
        this.dataManager.addListener(() => this.renderData());
    }

    renderHeaders() {
        const headerRow = this.table.querySelector('thead tr');
        const data = this.dataManager.getCurrentData();
        
        // Vyčistíme existujúce stĺpce okrem prvých dvoch (Dataset a Color)
        while (headerRow.children.length > 2) {
            headerRow.removeChild(headerRow.lastChild);
        }

        // Pridáme labels ako stĺpce
        data.labels.forEach(label => {
            const th = document.createElement('th');
            th.textContent = label;
            th.contentEditable = true;
            th.addEventListener('blur', () => {
                const newLabels = Array.from(headerRow.children)
                    .slice(2)
                    .map(th => th.textContent);
                this.dataManager.setLabels(newLabels);
            });
            headerRow.appendChild(th);
        });
    }

    renderData() {
        const tbody = this.table.querySelector('tbody');
        tbody.innerHTML = '';
        
        const data = this.dataManager.getCurrentData();
        
        data.datasets.forEach((dataset, datasetIndex) => {
            const row = document.createElement('tr');
            
            // Dataset name
            const nameCell = document.createElement('td');
            const nameInput = document.createElement('input');
            nameInput.value = dataset.label;
            nameInput.addEventListener('change', () => {
                dataset.label = nameInput.value;
                this.dataManager.notifyListeners();
            });
            nameCell.appendChild(nameInput);
            
            // Color picker
            const colorCell = document.createElement('td');
            const colorInput = document.createElement('input');
            colorInput.type = 'color';
            colorInput.className = 'color-picker';
            colorInput.value = dataset.color;
            colorInput.addEventListener('change', () => {
                dataset.color = colorInput.value;
                this.dataManager.notifyListeners();
            });
            colorCell.appendChild(colorInput);
            
            row.appendChild(nameCell);
            row.appendChild(colorCell);
            
            // Data values
            dataset.data.forEach((value, valueIndex) => {
                const td = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'number';
                input.value = value;
                input.addEventListener('change', () => {
                    dataset.data[valueIndex] = parseFloat(input.value);
                    this.dataManager.notifyListeners();
                });
                td.appendChild(input);
                row.appendChild(td);
            });
            
            // Delete button
            const deleteCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.addEventListener('click', () => {
                this.dataManager.removeDataset(datasetIndex);
            });
            deleteCell.appendChild(deleteBtn);
            row.appendChild(deleteCell);
            
            tbody.appendChild(row);
        });
    }

    bindEvents() {
        this.addDatasetBtn.addEventListener('click', () => {
            const data = this.dataManager.getCurrentData();
            const newData = new Array(data.labels.length).fill(0);
            this.dataManager.addDataset('New Dataset', newData);
        });

        this.addColumnBtn.addEventListener('click', () => {
            const data = this.dataManager.getCurrentData();
            const newLabel = `Column ${data.labels.length + 1}`;
            const newLabels = [...data.labels, newLabel];
            
            // Pridáme nový stĺpec do každého datasetu
            data.datasets.forEach(dataset => {
                dataset.data.push(0);
            });
            
            this.dataManager.setLabels(newLabels);
        });
    }
}