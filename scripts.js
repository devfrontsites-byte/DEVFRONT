// SELEÇÃO DOS ELEMENTOS DO MODAL
const modal = document.getElementById("form-contato");
const mascaraModal = document.getElementById("mascara-modal");

// ABRE / FECHA MODAL DE CONTATO (Animação Fluida via CSS Classes)
function toggleContato(show) {
    if (show) {
        modal.classList.add("active");
        mascaraModal.classList.add("active");
    } else {
        modal.classList.remove("active");
        mascaraModal.classList.remove("active");
    }
}

// MENU MOBILE (Toggle)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha menu mobile ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// ANIMAÇÃO DE APARECIMENTO SUTIL (Intersection Observer)
const revealElements = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Deixa de observar depois de animar
        }
    });
}, {
    threshold: 0.15 // Dispara a animação quando 15% do elemento estiver visível
});

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});