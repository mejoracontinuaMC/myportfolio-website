// Hamburger Menu

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });

});

// Form Validation

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    message.textContent =
        "Thank you! Your message has been sent.";

    form.reset();
});