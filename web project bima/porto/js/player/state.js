let currentIndex  = SS.get('currentSongIndex', 0);
let isShuffleOn   = false;
let isRepeatOn    = false;
let isReady       = false;
let isSeeking     = false;

function loadSong(index) {
    index = ((index % playlist.length) + playlist.length) % playlist.length;
    currentIndex = index;
    isReady   = false;
    isSeeking = false;

    const s = playlist[index];
    if (playerCover)   playerCover.src  = s.cover;
    if (badgeCover)    badgeCover.src   = s.cover;
    if (songTitle)     songTitle.textContent  = s.title;
    if (songArtist)    songArtist.textContent = s.artist;
    if (lyricsText)    lyricsText.textContent = s.artist;
    if (progressFill)  progressFill.style.width  = '0%';
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    if (totalTimeEl)   totalTimeEl.textContent   = '0:00';

    SS.set('currentSongIndex', index);
    SS.remove('audioCurrentTime'); // ← HAPUS, jangan set ke 0

    audio.src = s.file;
    audio.load();

    audio.addEventListener('loadedmetadata', () => {
        isReady = true;
        if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
    }, { once: true });
}

function saveAudioState() {
    SS.set('currentSongIndex', currentIndex);
    SS.set('audioVolume', audio.volume);
    // ← TIDAK simpan audioCurrentTime sama sekali
}