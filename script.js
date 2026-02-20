function togglePlay() {
    const audio = document.getElementById("background-music");
    const btn = document.getElementById("audioBtn");
    
    if (audio.paused) {
        audio.play().catch((error) => {
            console.log("La reproducción automática fue bloqueada por el navegador.");
        });
        btn.innerHTML = "|| PAUSAR MÚSICA";
    } else {
        audio.pause();
        btn.innerHTML = "♫ ESCUCHAR MÚSICA";
    }
}
