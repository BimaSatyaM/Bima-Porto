// ===== WELCOME MODAL =====

function initWelcome() {
    const modal    = $('welcomeModal');
    const enterBtn = $('enterBtn');
    const skipBtn  = $('skipBtn');

    if (!modal || !enterBtn || !skipBtn) {
        console.error('Modal elements not found');
        return;
    }

    const hasEntered  = SS.get('hasEnteredPortfolio', false);
    const musicChoice = SS.get('musicChoice', 'without-music');
    const savedVol    = SS.get('audioVolume', 0.7);
    const savedIdx    = SS.get('currentSongIndex', 0);

    audio.volume = savedVol;
    if (volumeFill) volumeFill.style.width = (savedVol * 100) + '%';
    loadSong(savedIdx);

    if (hasEntered) {
        modal.style.display       = 'none';
        modal.style.visibility    = 'hidden';
        modal.style.pointerEvents = 'none';

        if (musicChoice === 'with-music') {
            audio.addEventListener('loadedmetadata', () => {
                playSong().catch(() => {
                    document.addEventListener('click', () => playSong(), { once: true });
                });
            }, { once: true });
        }
        return;
    }

    // Show modal
    modal.style.display       = 'flex';
    modal.style.visibility    = 'visible';
    modal.style.opacity       = '1';
    modal.style.pointerEvents = 'all';
    modal.style.zIndex        = '999999';

    const hide = () => {
        modal.style.opacity    = '0';
        modal.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            modal.style.display       = 'none';
            modal.style.visibility    = 'hidden';
            modal.style.pointerEvents = 'none';
        }, 500);
    };

    // Tambahkan event dengan SEMUA cara yang mungkin
    function enterWithMusic() {
        SS.set('hasEnteredPortfolio', true);
        SS.set('musicChoice', 'with-music');
        hide();
        playSong();
    }

    function enterWithoutMusic() {
        SS.set('hasEnteredPortfolio', true);
        SS.set('musicChoice', 'without-music');
        hide();
    }

    // Method 1: onclick property
    enterBtn.onclick = enterWithMusic;
    skipBtn.onclick  = enterWithoutMusic;

    // Method 2: addEventListener
    enterBtn.addEventListener('click', enterWithMusic);
    skipBtn.addEventListener('click',  enterWithoutMusic);

    // Method 3: mousedown (lebih cepat dari click)
    enterBtn.addEventListener('mousedown', enterWithMusic);
    skipBtn.addEventListener('mousedown',  enterWithoutMusic);

    // Method 4: touchstart untuk mobile
    enterBtn.addEventListener('touchstart', e => {
        e.preventDefault();
        enterWithMusic();
    }, { passive: false });

    skipBtn.addEventListener('touchstart', e => {
        e.preventDefault();
        enterWithoutMusic();
    }, { passive: false });

    console.log('✅ Welcome modal initialized');
    console.log('enterBtn:', enterBtn);
    console.log('skipBtn:', skipBtn);
}