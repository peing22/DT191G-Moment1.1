"use strict";

// Funktion som körs när HTML-dokumentet har laddats in
document.addEventListener('DOMContentLoaded', function () {

    // Hämtar referenser till DOM-element
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Lägger till händelselyssnare för klick på menyn-knapp
    menuBtn.addEventListener('click', function () {

        // Anropar funktionen "hideMenu" om navigationslänkarna är synliga
        if (getComputedStyle(navLinks).display === 'flex') {
            hideMenu();

        // Om navigationslänkarna inte är synliga
        } else {

            // Visar navigeringslänkarna
            navLinks.style.display = 'flex';

            // Ändrar text och menyinkon för menyn-knapp
            menuBtn.querySelector('span').innerText = 'Stäng';
            menuBtn.querySelector('i').classList.remove('fa-bars');
            menuBtn.querySelector('i').classList.add('fa-xmark');
        }
    });

    // Lägger till händelselyssnare för ändrad fönsterstorlek
    window.addEventListener('resize', function () {

        // Om skärmbredden är större eller lika med 600px
        if (window.innerWidth >= 600) {

            // Visar navigeringslänkarna
            navLinks.style.display = 'flex';

        // Anropar funktionen "hideMenu" om skärmbredden är mindre än 600px
        } else {
            hideMenu();
        }
    });

    // Funktion för att dölja navigeringslänkar samt ändra text och menyinkon för menyn-knapp
    function hideMenu() {
        navLinks.style.display = 'none';
        menuBtn.querySelector('span').innerText = 'Meny';
        menuBtn.querySelector('i').classList.remove('fa-xmark');
        menuBtn.querySelector('i').classList.add('fa-bars');
    }
});
