const initReveal = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 }); // Activación más temprana para secciones largas

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

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

document.addEventListener("DOMContentLoaded", initReveal);
