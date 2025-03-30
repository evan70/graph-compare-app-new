class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = 'light';
        this.themeColors = {
            light: {
                text: '#666666',
                grid: '#dddddd',
                background: '#ffffff',
                border: '#e5e5e5',
                shadow: 'rgba(0, 0, 0, 0.1)',
                hover: 'rgba(78, 115, 223, 0.1)',
                muted: '#858796'
            },
            dark: {
                text: '#e2e5ec',
                grid: '#2d3139',
                background: '#1a1d24',
                border: '#2d3139',
                shadow: 'rgba(0, 0, 0, 0.3)',
                hover: 'rgba(78, 115, 223, 0.2)',
                muted: '#858796'
            }
        };
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
        
        // Aplikujeme CSS premenné
        const colors = this.getThemeColors(this.currentTheme);
        Object.entries(colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}-color`, value);
        });
        
        localStorage.setItem('theme', this.currentTheme);
        return colors;
    }

    getThemeColors(theme) {
        return this.themeColors[theme] || this.themeColors.light;
    }
}
