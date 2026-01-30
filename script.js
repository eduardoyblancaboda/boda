/**
 * Control del Audio de fondo
 */
function togglePlay() {
    const audio = document.getElementById("background-music");
    const btn = document.getElementById("audioBtn");

    if (audio.paused) {
        audio.play();
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
    lightbox.classList.add("active");
    // Bloquea el scroll del fondo
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    // Restablece el scroll
    document.body.style.overflow = "auto";
}

// Asignar eventos de clic a las imágenes de la galería al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-img');
    
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            openLightbox(e.target.src);
        });
    });
});
