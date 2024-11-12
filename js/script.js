// script.js

// Scroll to Top Button
const scrollToTopButton = document.querySelector('.floating-action-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const currentYear = new Date().getFullYear();


document.getElementById('year').textContent = currentYear;