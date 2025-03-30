class ThemeManager {
    constructor(settingsManager) {
        if (!settingsManager) {
            throw new Error('SettingsManager is required');
        }
        this.settingsManager = settingsManager;
        this.currentTheme = this.settingsManager.getTheme() || 'light';
        this.listeners = [];
        this.themeToggle = document.querySelector('.theme-toggle');
        
        this.initThemeToggle();
        this.applyTheme(this.currentTheme);
    }

    initThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        this.settingsManager.updateSetting('theme', theme);
        this.applyTheme(theme);
        this.notifyListeners();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    notifyListeners() {
        const themeConfig = this.getThemeConfig();
        this.listeners.forEach(callback => callback(themeConfig));
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    getThemeConfig() {
        const isDark = this.currentTheme === 'dark';
        return {
            theme: this.currentTheme,
            colors: {
                background: isDark ? '#1a1d24' : '#ffffff',
                text: isDark ? '#e2e5ec' : '#666666',
                border: isDark ? '#2d3139' : '#dddddd'
            }
        };
    }
}

if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
}
