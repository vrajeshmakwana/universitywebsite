// =========================== NavList ==================
const menuBtn = document.querySelector('.ri-menu-line');
const NavList = document.querySelector('.nav-list');

menuBtn.onclick = function(){
    menuBtn.classList.toggle('ri-arrow-up-double-line');
    NavList.classList.toggle('active');
}

// =========================== Scroll Reavael ==================
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,
});

sr.reveal(".home-container .left",{origin: "left", delay:500})
sr.reveal(".home-container .right",{origin: "right",delay:1000})
sr.reveal(".home-container .search-form",{origin: "bottom",delay:1000})
sr.reveal(".features-container .left .content" ,{origin: "right"})
sr.reveal(".features-container .right" ,{origin: "left"})
sr.reveal(".courses-container" ,{origin: "bottom"})
sr.reveal(".experts-container" ,{origin: "left"})
sr.reveal(".testimonial-container" ,{origin: "bottom"})
sr.reveal(".blog-container" ,{origin: "left"})
sr.reveal(".contact-container .left" ,{origin: "right"})
sr.reveal(".contact-container .right" ,{origin: "left"})
sr.reveal(".footer-container" ,{origin: "bottom"})
