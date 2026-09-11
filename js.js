    /* ===============================
    MOBILE NAVIGATION
    =============================== */

    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    mobileMenu.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


    /* Close mobile navigation */

    document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


    /* ===============================
    SCROLL TOP
    =============================== */

    const scrollTop = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

    scrollTop.classList.add("show");

} else {

    scrollTop.classList.remove("show");

}

});


    scrollTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


    /* ===============================
    ACTIVE NAVIGATION
    =============================== */

    const sections = document.querySelectorAll("section[id], header[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {

    current = section.getAttribute("id");

}

});


    navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

    link.style.color = "#2563eb";

} else {

    link.style.color = "";

}

});

});


    /* ===============================
    KEYBOARD SHORTCUT
    =============================== */

    document.addEventListener("keydown", function(event) {

    if ((event.ctrlKey || event.metaKey) && event.key === "p") {

    event.preventDefault();

    window.print();

}

});
