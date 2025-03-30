class SettingsManager {
    constructor() {
        this.settings = {
            chartType: 'line',
            colorPalette: 'default',
            useGradient: true,
            useSmoothing: true,
            showLegend: true,
            theme: 'light'
        };
        
        this.callbacks = {
            onChartTypeChange: [],
            onColorPaletteChange: [],
            onGradientChange: [],
            onSmoothingChange: [],
            onLegendChange: [],
            onThemeChange: []
        };

        this.loadSettings();
        this.initControls();
        this.initSettingsToggle();
    }

    // Pridáme getter pre tému
    getTheme() {
        return this.settings.theme;
    }

    initControls() {
        // Chart type controls
        document.querySelectorAll('input[name="chartType"]').forEach(input => {
            input.checked = input.value === this.settings.chartType;
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.updateSetting('chartType', e.target.value);
                }
            });
        });

        // Color palette selection
        const paletteOptions = document.querySelectorAll('.palette-option');
        paletteOptions.forEach(option => {
            if (option.dataset.value === this.settings.colorPalette) {
                option.classList.add('active');
            }
            
            option.addEventListener('click', () => {
                paletteOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                this.updateSetting('colorPalette', option.dataset.value);
            });
        });

        // Toggle controls
        this.initToggle('gradient-toggle', 'useGradient');
        this.initToggle('smooth-toggle', 'useSmoothing');
        this.initToggle('legend-toggle', 'showLegend');
    }

    initSettingsToggle() {
        const settingsToggle = document.querySelector('.settings-toggle');
        const settingsContent = document.querySelector('.settings-content');
        const icon = settingsToggle?.querySelector('i');
        
        if (settingsToggle && settingsContent) {
            settingsToggle.addEventListener('click', () => {
                settingsContent.classList.toggle('hidden');
                icon?.classList.toggle('fa-rotate-180');
            });
        }
    }

    initToggle(elementId, settingKey) {
        const toggle = document.getElementById(elementId);
        if (toggle) {
            toggle.checked = this.settings[settingKey];
            toggle.addEventListener('change', (e) => {
                this.updateSetting(settingKey, e.target.checked);
            });
        }
    }

    updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        
        const callbackKey = `on${key.charAt(0).toUpperCase() + key.slice(1)}Change`;
        if (this.callbacks[callbackKey]) {
            this.callbacks[callbackKey].forEach(callback => callback(value));
        }
    }

    loadSettings() {
        const savedSettings = localStorage.getItem('chartSettings');
        if (savedSettings) {
            this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
        }
    }

    saveSettings() {
        localStorage.setItem('chartSettings', JSON.stringify(this.settings));
    }

    subscribe(setting, callback) {
        const callbackKey = `on${setting.charAt(0).toUpperCase() + setting.slice(1)}Change`;
        if (this.callbacks[callbackKey]) {
            this.callbacks[callbackKey].push(callback);
        }
    }
}

// Export pre prehliadač
window.SettingsManager = SettingsManager;
