class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.initThemeToggle();
    }

    initThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('change', (e) => {
                this.applyTheme(e.target.checked);
            });
        }
    }

    applyTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        return this.getThemeColors(isDark ? 'dark' : 'light');
    }

    getThemeColors(theme) {
        switch(theme) {
            case 'dark':
                return {
                    text: '#e2e5ec',
                    grid: '#2d3139',
                    background: '#1a1d24'
                };
            default:
                return {
                    text: '#666666',
                    grid: '#dddddd',
                    background: '#ffffff'
                };
        }
    }
}