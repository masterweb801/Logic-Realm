// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("open");
    });
});
