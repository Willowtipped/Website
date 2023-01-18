// JavaScript code to toggle the visibility of the menu when the menu icon is clicked
var menuIcon = document.getElementById("menu-icon");
var navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
