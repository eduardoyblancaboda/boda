// 1. Reveal optimizado (Threshold bajo para evitar bugs en móvil)
const revealElements = () => {
    const observerOptions = {
        threshold: 0.05, 
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-img').forEach(el => observer.observe(el));
};

// 2. Interacción de fotos
const initPhotoInteraction = () => {
    document.querySelectorAll('.photo-frame').forEach(frame => {
        frame.addEventListener('click', function() {
            this.classList.add('click-shake');
            setTimeout(() => this.classList.remove('click-shake'), 450);
        });
    });
};

// 3. Parallax solo para Desktop (Evita lag en móviles)
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const flowers = document.querySelector('.floral-overlay');
        if (flowers) {
            const x = (window.innerWidth - e.pageX) / 120;
            const y = (window.innerHeight - e.pageY) / 120;
            flowers.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
});

// 4. Audio
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
