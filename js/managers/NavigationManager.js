class NavigationManager {
    constructor() {
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-links a');
        
        this.initEventListeners();
    }

    initEventListeners() {
        // Toggle mobile menu
        this.mobileMenuBtn.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container') && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', 
            this.navMenu.classList.contains('active'));
        
        // Toggle icon
        const icon = this.mobileMenuBtn.querySelector('i');
        if (this.navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = this.mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Export pre Node.js aj prehliadač
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationManager;
} else {
    window.NavigationManager = NavigationManager;
}
