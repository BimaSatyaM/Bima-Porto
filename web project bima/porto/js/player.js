// ===== MUSIC PLAYER =====

let currentIndex = SS.get('currentSongIndex', 0);
let isShuffleOn  = false;
let isRepeatOn   = false;
let isReady      = false;
let isSeeking    = false; // ← Track drag state

// Elements
const audio         = $('audioPlayer');
const playBtn       = $('playPauseBtn');
const prevBtn       = $('prevBtn');
const nextBtn       = $('nextBtn');
const shuffleBtn    = $('shuffleBtn');
const repeatBtn     = $('repeatBtn');
const progressBar   = $('progressBar');
const progressFill  = $('progressFill');
const currentTimeEl = $('currentTime');
const totalTimeEl   = $('totalTime');
const volumeBar     = $('volumeBar');
const volumeFill    = $('volumeFill');
const visualizer    = $('visualizer');
const likeBtn       = $('likeBtn');
const playerCover   = $('playerCover');
const badgeCover    = $('badgeCover');
const songTitle     = $('songTitle');
const songArtist    = $('songArtist');
const lyricsText    = $('lyricsText');

// ===== LOAD SONG =====
function loadSong(index) {
    index = ((index % playlist.length) + playlist.length) % playlist.length;
    currentIndex = index;
    isReady  = false;
    isSeeking = false;

    const s = playlist[index];

    // Update UI
    if (playerCover) playerCover.src = s.cover;
    if (badgeCover)  badgeCover.src  = s.cover;
    if (songTitle)   songTitle.textContent  = s.title;
    if (songArtist)  songArtist.textContent = s.artist;
    if (lyricsText)  lyricsText.textContent = s.artist;
    if (progressFill)  progressFill.style.width  = '0%';
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    if (totalTimeEl)   totalTimeEl.textContent   = '0:00';

    // RESET sessionStorage time saat ganti lagu
    SS.set('audioCurrentTime', 0);
    SS.set('currentSongIndex', index);

    // Load audio
    audio.src = s.file;
    audio.load();

    audio.addEventListener('loadedmetadata', () => {
        isReady = true;
        if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
    }, { once: true });
}

// ===== PLAY =====
function playSong() {
    return audio.play()
        .then(() => {
            playBtn?.querySelector('i')?.classList.replace('fa-play', 'fa-pause');
            visualizer?.classList.add('playing');
            badgeCover?.classList.add('spinning');
            SS.set('audioPlaying', true);
        })
        .catch(err => console.log('Autoplay blocked:', err));
}

// ===== PAUSE =====
function pauseSong() {
    audio.pause();
    playBtn?.querySelector('i')?.classList.replace('fa-pause', 'fa-play');
    visualizer?.classList.remove('playing');
    badgeCover?.classList.remove('spinning');
    SS.set('audioPlaying', false);
}

// ===== NEXT =====
function nextSong() {
    const next = isShuffleOn && playlist.length > 1
        ? (() => { let n; do { n = Math.floor(Math.random() * playlist.length); } while (n === currentIndex); return n; })()
        : (currentIndex + 1) % playlist.length;
    loadSong(next);
    audio.addEventListener('canplay', () => playSong(), { once: true });
}

// ===== PREV =====
function prevSong() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    loadSong(currentIndex - 1);
    audio.addEventListener('canplay', () => playSong(), { once: true });
}

// ===== SEEK =====
function handleSeek(e) {
    if (!isReady || !audio.duration || isNaN(audio.duration)) return;

    const rect = progressBar.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const time = audio.duration * pct;

    if (isNaN(time)) return;

    audio.currentTime = time;
    // Update sessionStorage dengan nilai BARU (bukan nilai lama)
    SS.set('audioCurrentTime', time);

    if (progressFill)  progressFill.style.width  = (pct * 100) + '%';
    if (currentTimeEl) currentTimeEl.textContent = formatTime(time);
}

// ===== SAVE STATE =====
function saveAudioState() {
    if (!isReady) return; // Jangan save jika lagu belum ready
    SS.set('audioCurrentTime', audio.currentTime);
    SS.set('audioPlaying', !audio.paused);
    SS.set('audioVolume', audio.volume);
    SS.set('currentSongIndex', currentIndex);
}

// ===== INIT =====
function initPlayer() {
    // Volume
    audio.volume = SS.get('audioVolume', 0.7);
    if (volumeFill) volumeFill.style.width = (audio.volume * 100) + '%';

    // Buttons
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
        const i = likeBtn.querySelector('i');
        i?.classList.toggle('far');
        i?.classList.toggle('fas');
    });

    // Audio events
    audio.addEventListener('timeupdate', () => {
        if (!isReady || !audio.duration || isSeeking) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressFill)  progressFill.style.width  = pct + '%';
        if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);

        // Throttle SS write (setiap 2 detik saja)
        if (Math.floor(audio.currentTime) % 2 === 0) {
            SS.set('audioCurrentTime', audio.currentTime);
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        isReady = true;
        if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
        if (!isRepeatOn) nextSong();
    });

    audio.addEventListener('play',  () => SS.set('audioPlaying', true));
    audio.addEventListener('pause', () => SS.set('audioPlaying', false));

    // Progress bar - mousedown/mouseup untuk drag yang mulus
    progressBar?.addEventListener('mousedown', e => {
        isSeeking = true;
        handleSeek(e);
    });

    progressBar?.addEventListener('mousemove', e => {
        if (!isSeeking) return;
        handleSeek(e);
    });

    progressBar?.addEventListener('mouseup', e => {
        handleSeek(e);
        isSeeking = false;
    });

    progressBar?.addEventListener('click', handleSeek);

    // Touch support
    progressBar?.addEventListener('touchstart', e => {
        isSeeking = true;
        handleSeek(e.touches[0]);
    }, { passive: true });

    progressBar?.addEventListener('touchmove', e => {
        if (!isSeeking) return;
        handleSeek(e.touches[0]);
    }, { passive: true });

    progressBar?.addEventListener('touchend', e => {
        isSeeking = false;
    });

    document.addEventListener('mouseup', () => {
        isSeeking = false;
    });

    // Volume
    volumeBar?.addEventListener('click', e => {
        const rect = volumeBar.getBoundingClientRect();
        const vol  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        audio.volume = vol;
        if (volumeFill) volumeFill.style.width = (vol * 100) + '%';
        SS.set('audioVolume', vol);
    });

    // Save state
    window.addEventListener('beforeunload', saveAudioState);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) saveAudioState();
    });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
        if (e.code === 'Space') {
            e.preventDefault();
            audio.paused ? playSong() : pauseSong();
        }
        if (e.shiftKey && e.code === 'ArrowRight') { e.preventDefault(); nextSong(); }
        if (e.shiftKey && e.code === 'ArrowLeft')  { e.preventDefault(); prevSong(); }
    });
}