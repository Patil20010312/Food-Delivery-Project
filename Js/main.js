// // ===========smooth scroll==================

// Add smooth scroll behavior to navigation links and "Explore Now" button
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navBar a");
    const exploreBtn = document.getElementById("explore-link");
    const logoLink = document.querySelector(".logo");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    exploreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });

    logoLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// // ===========smooth scroll end==================

// ================Cart=============
