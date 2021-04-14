// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
let menuLinks = document.querySelectorAll(".menu-link");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
        document.body.style.overflow = "hidden";
    } else {
        mainMenu.classList.remove("active-menu");
        document.body.style.overflow = "auto";
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        mainMenu.classList.remove("active-menu");
        mobileMenu.classList.remove("active-menu");
        document.body.style.overflow = "auto";

    })
})