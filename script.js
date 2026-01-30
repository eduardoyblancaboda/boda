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
    // Agregamos un pequeñísimo retraso para que el navegador renderice la imagen antes de animar
    setTimeout(() => {
        lightbox.classList.add("active");
    }, 10);
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-img');
    images.forEach(image => {
        image.addEventListener('click', () => openLightbox(image.src));
    });
});
// Asignar eventos de clic a las imágenes de la galería al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-img');
    
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            openLightbox(e.target.src);
        });
    });
});
