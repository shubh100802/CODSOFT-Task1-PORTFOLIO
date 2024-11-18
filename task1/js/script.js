// navbar for small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

// About Me
const text = "About Me"; 
let index = 0;
const typingElement = document.getElementById("typingEffect");

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
    }
}

// Start typing effect with interval 
setInterval(typeText, 150); 

// Scroll effect for revealing projects
function revealOnScroll() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Reveal the item if it's within the viewport
        if (itemTop < windowHeight - 50) {
            item.classList.add('reveal');
        } else {
            item.classList.remove('reveal');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Trigger initial check in case elements are already in view
revealOnScroll();


