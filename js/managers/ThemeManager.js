class ThemeManager {
    constructor() {
        this.currentTheme = 'light';
        this.listeners = [];
        this.themeToggle = document.querySelector('.theme-toggle');
        
        this.initThemeToggle();
    }

    initThemeToggle() {
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
            document.documentElement.setAttribute('data-theme', this.currentTheme);
        });
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

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.notifyListeners();
    }
}

if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
}
