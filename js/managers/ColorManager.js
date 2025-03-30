class ColorManager {
    constructor(settingsManager) {
        this.settingsManager = settingsManager;
        this.colorPalettes = {
            default: [
                '#4e73df', '#e74a3b', '#1cc88a', '#f6c23e', '#36b9cc',
                '#858796', '#5a5c69', '#476072', '#675D50', '#ABC4AA'
            ],
            pastel: [
                '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFB3F7',
                '#B3FFEC', '#B3B3FF', '#FFE4B3', '#B3FFB3', '#FFB3B3'
            ],
            dark: [
                '#1a1d24', '#2d3139', '#3c4048', '#4a4f57', '#595f68',
                '#676e78', '#767d88', '#848b97', '#939aa6', '#a2a9b5'
            ],
            neon: [
                '#FF1E1E', '#1EFF1E', '#1E1EFF', '#FFFF1E', '#FF1EFF',
                '#1EFFFF', '#FF8B1E', '#1EFF8B', '#8B1EFF', '#FF1E8B'
            ]
        };
        
        this.currentPalette = this.settingsManager.settings.colorPalette || 'default';
        this.listeners = [];

        this.settingsManager.subscribe('colorPalette', (palette) => {
            if (palette !== this.currentPalette) {
                this.currentPalette = palette;
                this.notifyListeners(this.getCurrentPalette());
            }
        });
    }

    getCurrentPalette() {
        return this.colorPalettes[this.currentPalette];
    }

    getCurrentPaletteName() {
        return this.currentPalette;
    }

    setPalette(name) {
        if (this.colorPalettes[name] && name !== this.currentPalette) {
            this.currentPalette = name;
            this.settingsManager.updateSetting('colorPalette', name, true);
            this.notifyListeners(this.getCurrentPalette());
            return true;
        }
        return false;
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners(colors) {
        this.listeners.forEach(callback => callback(colors));
    }
}

if (typeof window !== 'undefined') {
    window.ColorManager = ColorManager;
}
