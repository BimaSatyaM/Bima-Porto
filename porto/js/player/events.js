function initAudioEvents() {
    audio.addEventListener('timeupdate', () => {
        if (!audio.duration || isNaN(audio.duration)) return;
        if (isSeeking) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressFill)  progressFill.style.width  = pct + '%';
        if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
        // ← TIDAK ADA SS.set SAMA SEKALI DI SINI
    });

    audio.addEventListener('loadedmetadata', () => {
        isReady = true;
        if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
        if (!isRepeatOn) nextSong();
    });

    window.addEventListener('beforeunload', saveAudioState);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) saveAudioState();
    });
}