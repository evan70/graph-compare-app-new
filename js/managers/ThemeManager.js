class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = 'light';
        this.initTheme();
        this.initThemeToggle();
    }

    initTheme() {
        // Check system preference or stored preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        this.currentTheme = isDark ? 'dark' : 'light';
        this.applyTheme(isDark);
    }

    initThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.checked = this.currentTheme === 'dark';
            this.themeToggle.addEventListener('change', (e) => {
                this.applyTheme(e.target.checked);
            });
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    setTheme(theme) {
        const isDark = theme === 'dark';
        this.currentTheme = theme;
        this.applyTheme(isDark);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    applyTheme(isDark) {
        this.currentTheme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        return this.getThemeColors(this.currentTheme);
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
