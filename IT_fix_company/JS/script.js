// main.js

document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';

    window.addEventListener('load', function() {
        loading.style.display = 'none';
    });

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        setTimeout(() => {
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
        }, index * 500);
    });

    // Handle mobile-specific interactions
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    const lanMobile = document.getElementById('lan-mobile');
    const lanButtons = lanMobile.querySelectorAll('button');
    lanButtons.forEach(button => {
        button.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
});