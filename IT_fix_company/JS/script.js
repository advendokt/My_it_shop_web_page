// main.js

document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});



// Add this to your JavaScript file
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
});