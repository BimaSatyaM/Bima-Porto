let _changing = false;

function playSong() {
    return audio.play()
        .then(() => {
            playBtn?.querySelector('i')?.classList.replace('fa-play','fa-pause');
            visualizer?.classList.add('playing');
            badgeCover?.classList.add('spinning');
        })
        .catch(e => console.log('Blocked:', e.message));
}

function pauseSong() {
    audio.pause();
    playBtn?.querySelector('i')?.classList.replace('fa-pause','fa-play');
    visualizer?.classList.remove('playing');
    badgeCover?.classList.remove('spinning');
}

function nextSong() {
    if (_changing) return;
    _changing = true;
    const n = isShuffleOn && playlist.length > 1
        ? (() => { let r; do { r=Math.floor(Math.random()*playlist.length); } while(r===currentIndex); return r; })()
        : (currentIndex + 1) % playlist.length;
    loadSong(n);
    audio.addEventListener('loadedmetadata', () => { _changing=false; playSong(); }, { once:true });
}

function prevSong() {
    if (_changing) return;
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    _changing = true;
    loadSong(currentIndex - 1);
    audio.addEventListener('loadedmetadata', () => { _changing=false; playSong(); }, { once:true });
}

function initControls() {
    audio.volume = SS.get('audioVolume', 0.7);
    if (volumeFill) volumeFill.style.width = (audio.volume * 100) + '%';

    playBtn?.addEventListener('click', () => audio.paused ? playSong() : pauseSong());
    nextBtn?.addEventListener('click', nextSong);
    prevBtn?.addEventListener('click', prevSong);

    shuffleBtn?.addEventListener('click', () => {
        isShuffleOn = !isShuffleOn;
        shuffleBtn.style.color = isShuffleOn ? '#1DB954' : '';
    });

    repeatBtn?.addEventListener('click', () => {
        isRepeatOn = !isRepeatOn;
        audio.loop = isRepeatOn;
        repeatBtn.style.color = isRepeatOn ? '#1DB954' : '';
    });

    likeBtn?.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        likeBtn.querySelector('i')?.classList.toggle('far');
        likeBtn.querySelector('i')?.classList.toggle('fas');
    });

    volumeBar?.addEventListener('click', e => {
        const r = volumeBar.getBoundingClientRect();
        const v = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        audio.volume = v;
        if (volumeFill) volumeFill.style.width = (v*100) + '%';
        SS.set('audioVolume', v);
    });

    document.addEventListener('keydown', e => {
        if (['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
        if (e.code==='Space') { e.preventDefault(); audio.paused ? playSong() : pauseSong(); }
        if (e.shiftKey && e.code==='ArrowRight') { e.preventDefault(); nextSong(); }
        if (e.shiftKey && e.code==='ArrowLeft')  { e.preventDefault(); prevSong(); }
    });
}