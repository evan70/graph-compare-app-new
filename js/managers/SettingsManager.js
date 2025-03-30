class SettingsManager {
    constructor() {
        this.settings = {
            chartType: 'line',
            colorPalette: 'default',
            useGradient: true,
            useSmoothing: true,
            showLegend: true
        };
        
        this.callbacks = {
            onChartTypeChange: [],
            onColorPaletteChange: [],
            onGradientChange: [],
            onSmoothingChange: [],
            onLegendChange: []
        };

        this.loadSettings();
        this.initControls();
        this.initSettingsToggle();
    }

    initControls() {
        // Chart type controls
        document.querySelectorAll('input[name="chartType"]').forEach(input => {
            if (input.value === this.settings.chartType) {
                input.checked = true;
            }
            input.addEventListener('change', (e) => {
                this.updateSetting('chartType', e.target.value);
            });
        });

        // Color palette select
        const paletteSelect = document.getElementById('color-palette');
        if (paletteSelect) {
            paletteSelect.value = this.settings.colorPalette;
            paletteSelect.addEventListener('change', (e) => {
                this.updateSetting('colorPalette', e.target.value);
            });
        }

        // Toggle controls
        this.initToggle('gradient-toggle', 'useGradient');
        this.initToggle('smooth-toggle', 'useSmoothing');
        this.initToggle('legend-toggle', 'showLegend');
    }

    initSettingsToggle() {
        const settingsToggle = document.querySelector('.settings-toggle');
        const settingsContent = document.querySelector('.settings-content');
        
        if (settingsToggle && settingsContent) {
            settingsToggle.addEventListener('click', () => {
                settingsContent.classList.toggle('hidden');
                settingsToggle.querySelector('i').classList.toggle('fa-rotate-180');
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
        
        // Notify callbacks
        const callbackKey = `on${key.charAt(0).toUpperCase() + key.slice(1)}Change`;
        if (this.callbacks[callbackKey]) {
            this.callbacks[callbackKey].forEach(callback => callback(value));
        }
    }

    subscribe(event, callback) {
        const callbackKey = `on${event}Change`;
        if (this.callbacks[callbackKey]) {
            this.callbacks[callbackKey].push(callback);
        }
    }

    getCurrentSettings() {
        return { ...this.settings };
    }

    loadSettings() {
        const savedSettings = localStorage.getItem('chartSettings');
        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);
            // Merge saved settings with defaults
            this.settings = { ...this.settings, ...parsed };
            
            // Notify all subscribers of initial values
            Object.keys(this.settings).forEach(key => {
                const callbackKey = `on${key.charAt(0).toUpperCase() + key.slice(1)}Change`;
                if (this.callbacks[callbackKey]) {
                    this.callbacks[callbackKey].forEach(callback => callback(this.settings[key]));
                }
            });
        }
    }

    saveSettings() {
        localStorage.setItem('chartSettings', JSON.stringify(this.settings));
    }

    // Gettery pre jednotlivé nastavenia
    getChartType() { return this.settings.chartType; }
    getColorPalette() { return this.settings.colorPalette; }
    getUseGradient() { return this.settings.useGradient; }
    getUseSmoothing() { return this.settings.useSmoothing; }
    getShowLegend() { return this.settings.showLegend; }
}

// Export pre prehliadač
window.SettingsManager = SettingsManager;
