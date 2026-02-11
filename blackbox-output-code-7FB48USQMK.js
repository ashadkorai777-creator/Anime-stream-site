// script.js - Main JavaScript for the Anime Streaming Website

document.addEventListener('DOMContentLoaded', () => {
    // Show loading spinner initially
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.display = 'none';
        }, 1000);
    }

    // Apply theme from localStorage
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', theme === 'light');

    // Apply adult content blur from localStorage
    const blurAdult = localStorage.getItem('blurAdult') !== 'false';
    applyBlurToAdultContent(blurAdult);

    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Home Page: Hero Slider
    if (document.querySelector('.hero')) {
        const trending = getTrendingAnime();
        let currentSlide = 0;
        const hero = document.querySelector('.hero');
        const dots = document.querySelectorAll('.slider-dot');

        function updateHero() {
            hero.style.backgroundImage = `url(${trending[currentSlide].poster})`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        updateHero();
        setInterval(() => {
            currentSlide = (currentSlide + 1) % trending.length;
            updateHero();
        }, 5000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateHero();
            });
        });
    }

    // Home Page: Populate Sections
    if (document.querySelector('#top-anime')) {
        const top