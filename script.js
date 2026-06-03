// Smooth scroll button

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });
}


// Contact form submission

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();

});