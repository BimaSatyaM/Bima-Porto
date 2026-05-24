function doSeek(clientX) {
    if (!isReady || !audio.duration || isNaN(audio.duration)) return;
    const r   = progressBar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    const t   = audio.duration * pct;
    if (isNaN(t)) return;
    audio.currentTime = t;
    if (progressFill)  progressFill.style.width  = (pct*100) + '%';
    if (currentTimeEl) currentTimeEl.textContent = formatTime(t);
}

function initProgress() {
    if (!progressBar) return;
    progressBar.addEventListener('click',     e => doSeek(e.clientX));
    progressBar.addEventListener('mousedown', () => isSeeking = true);
    document.addEventListener('mousemove',    e => { if (isSeeking) doSeek(e.clientX); });
    document.addEventListener('mouseup',      e => { if (isSeeking) { doSeek(e.clientX); isSeeking = false; } });
    progressBar.addEventListener('touchstart', e => { isSeeking=true; doSeek(e.touches[0].clientX); }, {passive:true});
    document.addEventListener('touchmove',     e => { if(isSeeking) doSeek(e.touches[0].clientX); }, {passive:true});
    document.addEventListener('touchend',      () => isSeeking = false);
}