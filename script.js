/**
 * Control del Audio de fondo
 */
function togglePlay() {
    const audio = document.getElementById("background-music");
    const btn = document.getElementById("audioBtn");

    if (audio.paused) {
        audio.play().catch(e => console.log("El navegador bloqueó el inicio automático."));
        btn.innerHTML = "|| PAUSAR MÚSICA";
    } else {
        audio.pause();
        btn.innerHTML = "♫ ESCUCHAR MÚSICA";
    }
}

/**
 * Control del Lightbox (Galería de fotos)
 */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
    lightboxImg.src = src;
    // Pequeño retraso para asegurar que la transición CSS se note
    setTimeout(() => {
        lightbox.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
}

/**
 * Inicialización de eventos
 */
document.addEventListener("DOMContentLoaded", () => {
    // Configurar clics en galería
    const images = document.querySelectorAll('.gallery-img');
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            openLightbox(e.target.src);
        });
    });

    // Cerrar lightbox con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
    });
});
