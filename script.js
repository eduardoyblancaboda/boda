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
