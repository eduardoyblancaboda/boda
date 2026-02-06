// 1. Reveal al hacer scroll
const revealElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .reveal-img').forEach(el => observer.observe(el));
};

// 2. Interacción de fotos al clic
const initPhotoInteraction = () => {
    document.querySelectorAll('.photo-frame').forEach(frame => {
        frame.addEventListener('click', function() {
            this.classList.add('click-shake');
            setTimeout(() => this.classList.remove('click-shake'), 500);
        });
    });
};

// 3. Parallax suave de flores
document.addEventListener('mousemove', (e) => {
    const flowers = document.querySelector('.floral-overlay');
    if (flowers) {
        const x = (window.innerWidth - e.pageX) / 100;
        const y = (window.innerHeight - e.pageY) / 100;
        flowers.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// 4. Control de audio
function togglePlay() {
    const audio = document.getElementById("background-music");
    const btn = document.getElementById("audioBtn");
    if (audio.paused) {
        audio.play().catch(() => {});
        btn.innerHTML = "|| PAUSAR MÚSICA";
    } else {
        audio.pause();
        btn.innerHTML = "♫ ESCUCHAR MÚSICA";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    revealElements();
    initPhotoInteraction();
});
