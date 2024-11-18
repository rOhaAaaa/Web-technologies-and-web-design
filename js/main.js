const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("nav-links");

function toggleMenu() {
if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
} else {
    navLinks.classList.add(OPEN_CLASSNAME);
}
}

window.addEventListener('scroll', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add('show');
        }
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');  
            observer.unobserve(entry.target);    
        }
    });
}, { threshold: 0.2 });  


document.querySelectorAll('.fade-in-sequence').forEach(el => {
    observer.observe(el);  
});
