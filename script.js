// Hämta de HTML-element vi behöver
const hamburgerIcon = document.querySelector(".ham-menu");
const navigationMenu = document.querySelector(".nav-menu");

// Lägg till en event-lyssnare som reagerar på klick
hamburgerIcon.addEventListener("click", () => {
    // När man klickar, lägg till/ta bort 'active'-klassen på båda elementen
    hamburgerIcon.classList.toggle("active");
    navigationMenu.classList.toggle("active");
});