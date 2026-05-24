// ==========================================
// PORTFOLIO - FINAL CLEAN VERSION
// ==========================================

const fmt = s => isNaN(s)||s<0 ? '0:00' : `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
const $   = id  => document.getElementById(id);
const $$  = sel => document.querySelectorAll(sel);

// ===== DATA =====
const playlist = [
    { title:'As It Was',       artist:'Harry Styles', cover:'assets/cover1.jpg', file:'assets/song1.mp3' },
    { title:'Blinding Lights', artist:'The Weeknd',   cover:'assets/cover2.jpg', file:'assets/song2.mp3' }
];

const pages = {
    'who-i-am': {
        gradient:'linear-gradient(135deg,#1DB954,#0a4d21)',
        icon:'fas fa-code', tag:'ABOUT',
        title:'Who I Am',
        tagline:'Passionate Web Developer & Creative Problem Solver',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-user-circle"></i> Introduction</h2>
            <p>Hai! Saya <strong>Bima Satya M.</strong>, Web Developer Indonesia. 5+ tahun pengalaman membangun web menakjubkan.</p>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-heart"></i> Why I Love Web Dev</h2>
            <p>Web development bukan hanya pekerjaan, tapi seni digital. Kombinasi logika dan kreativitas yang membuat saya jatuh cinta.</p>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-star"></i> My Values</h2>
            <div class="detail-values-grid">
                <div class="detail-value-card"><i class="fas fa-lightbulb"></i><h3>Creativity</h3><p>Solusi kreatif setiap tantangan</p></div>
                <div class="detail-value-card"><i class="fas fa-cogs"></i><h3>Quality</h3><p>Clean & maintainable code</p></div>
                <div class="detail-value-card"><i class="fas fa-users"></i><h3>Collaboration</h3><p>Team player sejati</p></div>
                <div class="detail-value-card"><i class="fas fa-rocket"></i><h3>Innovation</h3><p>Update teknologi terbaru</p></div>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-coffee"></i> Fun Facts</h2>
            <ul class="detail-fun-list">
                <li>☕ Ngoding + kopi = terbaik</li>
                <li>🎵 Lo-fi music saat coding</li>
                <li>🎮 Fans game retro & pixel art</li>
                <li>🌱 Learning Next.js & TypeScript</li>
                <li>🌏 Suka traveling & fotografi</li>
            </ul>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#1DB954,#0a4d21)">
            <h2>Mari Berkolaborasi!</h2>
            <p style="color:rgba(255,255,255,0.9)">Tertarik bekerja sama?</p>
            <button class="detail-cta-btn" onclick="goTo('contact')" style="color:#1DB954">
                <i class="fas fa-paper-plane"></i> Get in Touch
            </button>
        </div>`
    },
    'what-i-do': {
        gradient:'linear-gradient(135deg,#ff6b6b,#ee5253)',
        icon:'fas fa-rocket', tag:'SERVICES',
        title:'What I Do',
        tagline:'Building Modern Web Experiences',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-list"></i> Services</h2>
            <div class="detail-services-grid">
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-desktop"></i></div><h3>Landing Page</h3><p>Website menarik untuk promosi.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-shopping-cart"></i></div><h3>E-Commerce</h3><p>Toko online + payment.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-blog"></i></div><h3>Blog CMS</h3><p>Platform blog mudah dikelola.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-chart-line"></i></div><h3>Web App</h3><p>Aplikasi real-time kompleks.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-mobile-alt"></i></div><h3>Responsive</h3><p>Sempurna di semua device.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-search"></i></div><h3>SEO</h3><p>Mudah ditemukan di Google.</p></div>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-code"></i> Tech Stack</h2>
            <div class="detail-tech-stack">
                <span class="detail-tech-badge"><i class="fab fa-html5"></i> HTML5</span>
                <span class="detail-tech-badge"><i class="fab fa-css3-alt"></i> CSS3</span>
                <span class="detail-tech-badge"><i class="fab fa-js"></i> JavaScript</span>
                <span class="detail-tech-badge"><i class="fab fa-react"></i> React.js</span>
                <span class="detail-tech-badge"><i class="fab fa-node-js"></i> Node.js</span>
                <span class="detail-tech-badge"><i class="fab fa-git-alt"></i> Git</span>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-project-diagram"></i> My Process</h2>
            <div class="detail-process-list">
                <div class="detail-process-step"><span class="detail-step-num">01</span><div><h3>Discovery</h3><p>Memahami kebutuhan Anda</p></div></div>
                <div class="detail-process-step"><span class="detail-step-num">02</span><div><h3>Design</h3><p>Merancang UI/UX menarik</p></div></div>
                <div class="detail-process-step"><span class="detail-step-num">03</span><div><h3>Development</h3><p>Clean code & best practices</p></div></div>
                <div class="detail-process-step"><span class="detail-step-num">04</span><div><h3>Testing</h3><p>QA & bug fixing</p></div></div>
                <div class="detail-process-step"><span class="detail-step-num">05</span><div><h3>Launch</h3><p>Deploy & support</p></div></div>
            </div>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#ff6b6b,#ee5253)">
            <h2>Ready to Start?</h2>
            <p style="color:rgba(255,255,255,0.9)">Let's build something great!</p>
            <button class="detail-cta-btn" onclick="goTo('contact')" style="color:#ee5253">
                <i class="fas fa-paper-plane"></i> Hire Me
            </button>
        </div>`
    },
    'my-vision': {
        gradient:'linear-gradient(135deg,#f39c12,#e67e22)',
        icon:'fas fa-lightbulb', tag:'VISION',
        title:'My Vision',
        tagline:'Creating Meaningful Digital Experiences',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-bullseye"></i> Big Picture</h2>
            <p>Menciptakan website yang <strong>indah</strong>, <strong>fungsional</strong>, dan memberikan nilai nyata.</p>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-flag"></i> Core Principles</h2>
            <div class="detail-principles-grid">
                <div class="detail-principle-card"><div class="detail-principle-num">1</div><h3>User-Centered</h3><p>Pengguna adalah prioritas.</p></div>
                <div class="detail-principle-card"><div class="detail-principle-num">2</div><h3>Performance</h3><p>Website cepat = user happy.</p></div>
                <div class="detail-principle-card"><div class="detail-principle-num">3</div><h3>Accessibility</h3><p>Bisa diakses semua orang.</p></div>
                <div class="detail-principle-card"><div class="detail-principle-num">4</div><h3>Learning</h3><p>Selalu belajar hal baru.</p></div>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-road"></i> Goals</h2>
            <div class="detail-goals-list">
                <div class="detail-goal-item"><i class="fas fa-check-circle"></i><div><h3>Full-Stack Master</h3><p>Expert frontend & backend</p></div></div>
                <div class="detail-goal-item"><i class="fas fa-check-circle"></i><div><h3>Impactful Products</h3><p>Berdampak positif</p></div></div>
                <div class="detail-goal-item"><i class="fas fa-check-circle"></i><div><h3>Share Knowledge</h3><p>Edukasi developer Indonesia</p></div></div>
                <div class="detail-goal-item"><i class="fas fa-check-circle"></i><div><h3>Open Source</h3><p>Kontribusi global</p></div></div>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-quote-left"></i> Philosophy</h2>
            <blockquote class="detail-quote">
                Code is poetry. Every line should be purposeful.
                <footer>— Bima Satya M.</footer>
            </blockquote>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#f39c12,#e67e22)">
            <h2>Join My Journey</h2>
            <p style="color:rgba(255,255,255,0.9)">Mari wujudkan visi bersama!</p>
            <button class="detail-cta-btn" onclick="goTo('contact')" style="color:#e67e22">
                <i class="fas fa-handshake"></i> Connect
            </button>
        </div>`
    }
};

// ==========================================
// INIT - SEMUA DI DALAM DOMContentLoaded
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // ===== ELEMENTS (Di dalam DOM ready) =====
    const audio    = $('audioPlayer');
    const playBtn  = $('playPauseBtn');
    const prevBtn  = $('prevBtn');
    const nextBtn  = $('nextBtn');
    const shufBtn  = $('shuffleBtn');
    const repBtn   = $('repeatBtn');
    const progBar  = $('progressBar');
    const progFill = $('progressFill');
    const curTime  = $('currentTime');
    const totTime  = $('totalTime');
    const volBar   = $('volumeBar');
    const volFill  = $('volumeFill');
    const viz      = $('visualizer');
    const likeBtn  = $('likeBtn');
    const pCover   = $('playerCover');
    const bCover   = $('badgeCover');
    const sTitle   = $('songTitle');
    const sArtist  = $('songArtist');
    const lyric    = $('lyricsText');
    const mc       = document.querySelector('.main-content');
    const dv       = $('detailView');
    const mv       = $('mainView');
    const dCont    = $('detailContent');
    const dBack    = $('detailBackBtn');
    const modal    = $('welcomeModal');
    const enterBtn = $('enterBtn');
    const skipBtn  = $('skipBtn');

    // Guard
    if (!audio) { console.error('❌ Audio element not found!'); return; }

    // ===== STATE =====
    let idx     = parseInt(sessionStorage.getItem('currentSongIndex')) || 0;
    let shuffle = false;
    let repeat  = false;
    let ready   = false;
    let seeking = false;

    // ===== LOAD SONG =====
    function loadSong(i) {
        i = ((i % playlist.length) + playlist.length) % playlist.length;
        idx = i; ready = false;
        const s = playlist[i];
        if (pCover)   pCover.src = s.cover;
        if (bCover)   bCover.src = s.cover;
        if (sTitle)   sTitle.textContent  = s.title;
        if (sArtist)  sArtist.textContent = s.artist;
        if (lyric)    lyric.textContent   = s.artist;
        if (progFill) progFill.style.width  = '0%';
        if (curTime)  curTime.textContent  = '0:00';
        if (totTime)  totTime.textContent  = '0:00';
        sessionStorage.setItem('currentSongIndex', i);
        audio.src = s.file;
        audio.load();
    }

    // ===== PLAY =====
    function play() {
        return audio.play()
            .then(() => {
                playBtn?.querySelector('i')?.classList.replace('fa-play','fa-pause');
                viz?.classList.add('playing');
                bCover?.classList.add('spinning');
            })
            .catch(e => console.log('Blocked:', e.message));
    }

    // ===== PAUSE =====
    function pause() {
        audio.pause();
        playBtn?.querySelector('i')?.classList.replace('fa-pause','fa-play');
        viz?.classList.remove('playing');
        bCover?.classList.remove('spinning');
    }

    // ===== NEXT =====
    function next() {
        const n = shuffle && playlist.length > 1
            ? (() => { let r; do { r=Math.floor(Math.random()*playlist.length); } while(r===idx); return r; })()
            : (idx+1) % playlist.length;
        loadSong(n);
        audio.addEventListener('loadedmetadata', play, { once:true });
    }

    // ===== PREV =====
    function prev() {
        if (audio.currentTime > 3) { audio.currentTime = 0; return; }
        loadSong(idx - 1);
        audio.addEventListener('loadedmetadata', play, { once:true });
    }

    // ===== SEEK =====
    function seek(clientX) {
        if (!ready || !audio.duration) return;
        const r   = progBar.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
        audio.currentTime = audio.duration * pct;
        if (progFill) progFill.style.width = (pct*100) + '%';
        if (curTime)  curTime.textContent  = fmt(audio.duration * pct);
    }

    // ===== AUDIO EVENTS =====
    audio.addEventListener('loadedmetadata', () => {
        ready = true;
        if (totTime) totTime.textContent = fmt(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        if (!ready || !audio.duration || seeking) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progFill) progFill.style.width = pct + '%';
        if (curTime)  curTime.textContent  = fmt(audio.currentTime);
    });

    audio.addEventListener('ended', () => { if (!repeat) next(); });

    // ===== INIT VOLUME =====
    audio.volume = parseFloat(sessionStorage.getItem('audioVolume')) || 0.7;
    if (volFill) volFill.style.width = (audio.volume * 100) + '%';

    // Load lagu terakhir
    loadSong(idx);

    // ===== PLAYER CONTROLS =====
    playBtn?.addEventListener('click', () => audio.paused ? play() : pause());
    nextBtn?.addEventListener('click', next);
    prevBtn?.addEventListener('click', prev);

    shufBtn?.addEventListener('click', () => {
        shuffle = !shuffle;
        shufBtn.style.color = shuffle ? '#1DB954' : '';
    });

    repBtn?.addEventListener('click', () => {
        repeat = !repeat;
        audio.loop = repeat;
        repBtn.style.color = repeat ? '#1DB954' : '';
    });

    likeBtn?.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        likeBtn.querySelector('i')?.classList.toggle('far');
        likeBtn.querySelector('i')?.classList.toggle('fas');
    });

    // Progress bar
    progBar?.addEventListener('click',     e => seek(e.clientX));
    progBar?.addEventListener('mousedown', () => seeking = true);
    document.addEventListener('mousemove', e => { if (seeking) seek(e.clientX); });
    document.addEventListener('mouseup',   e => { if (seeking) { seek(e.clientX); seeking = false; } });
    progBar?.addEventListener('touchstart', e => { seeking=true; seek(e.touches[0].clientX); }, {passive:true});
    document.addEventListener('touchmove',  e => { if(seeking) seek(e.touches[0].clientX); }, {passive:true});
    document.addEventListener('touchend',   () => seeking = false);

    // Volume bar
    volBar?.addEventListener('click', e => {
        const r = volBar.getBoundingClientRect();
        const v = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        audio.volume = v;
        if (volFill) volFill.style.width = (v*100) + '%';
        sessionStorage.setItem('audioVolume', v);
    });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
        if (e.code==='Space') { e.preventDefault(); audio.paused ? play() : pause(); }
        if (e.shiftKey && e.code==='ArrowRight') { e.preventDefault(); next(); }
        if (e.shiftKey && e.code==='ArrowLeft')  { e.preventDefault(); prev(); }
    });

    // Save on exit
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('currentSongIndex', idx);
        sessionStorage.setItem('audioVolume', audio.volume);
    });

    // ===== NAVIGATION =====
    const navItems = $$('.nav-item');
    const sections = $$('.section');

    navItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            if (dv?.style.display !== 'none') {
                if (dv) dv.style.display = 'none';
                if (mv) mv.style.display = 'block';
            }
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            const t = $(item.dataset.section);
            if (t && mc) mc.scrollTo({ top: t.offsetTop-80, behavior:'smooth' });
            if (window.innerWidth <= 768) document.querySelector('.sidebar')?.classList.remove('active');
        });
    });

    mc?.addEventListener('scroll', () => {
        if (dv?.style.display !== 'none') return;
        let cur = '';
        sections.forEach(s => { if (mc.scrollTop >= s.offsetTop-150) cur = s.id; });
        navItems.forEach(n => n.classList.toggle('active', n.dataset.section===cur));
    });

    // Mobile menu
    const tog = $('menuToggle');
    const sb  = document.querySelector('.sidebar');
    tog?.addEventListener('click', e => { e.stopPropagation(); sb?.classList.toggle('active'); });
    document.addEventListener('click', e => {
        if (window.innerWidth<=768 && sb && tog)
            if (!sb.contains(e.target) && !tog.contains(e.target))
                sb.classList.remove('active');
    });

    // Contact form
    $('contactForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const btn  = e.target.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            setTimeout(() => { btn.innerHTML = orig; e.target.reset(); }, 2000);
        }, 1200);
    });

    // Project cards
    $$('.project-card').forEach(c => {
        c.addEventListener('click', e => {
            if (!e.target.closest('.play-btn'))
                alert(`🎵 ${c.querySelector('h4').textContent}\nProject details!`);
        });
    });

    // ===== SPA =====
    function showDetail(key) {
        const p = pages[key];
        if (!p || !dCont) return;
        dCont.innerHTML = `
            <div class="detail-hero-section" style="background:${p.gradient}">
                <div class="detail-hero-icon"><i class="${p.icon}"></i></div>
                <h4>${p.tag}</h4>
                <h1>${p.title}</h1>
                <p class="tagline">${p.tagline}</p>
            </div>${p.html}`;
        if (mv) mv.style.display = 'none';
        if (dv) dv.style.display = 'block';
        mc?.scrollTo({ top:0, behavior:'smooth' });
    }

    window.goTo = window.showMainAndScroll = sec => {
        if (dv) dv.style.display = 'none';
        if (mv) mv.style.display = 'block';
        if (sec) setTimeout(() => {
            const el = $(sec);
            if (el && mc) mc.scrollTo({ top: el.offsetTop-80, behavior:'smooth' });
        }, 100);
    };

    dBack?.addEventListener('click', () => window.goTo('about'));

    $$('.about-card-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href') || '';
            if      (href.includes('who-i-am'))  showDetail('who-i-am');
            else if (href.includes('what-i-do')) showDetail('what-i-do');
            else if (href.includes('my-vision')) showDetail('my-vision');
        });
    });

    // ===== WELCOME MODAL =====
    if (!modal || !enterBtn || !skipBtn) {
        console.error('❌ Modal elements missing!');
        return;
    }

    const hasEntered  = sessionStorage.getItem('hasEnteredPortfolio') === 'true';
    const musicChoice = sessionStorage.getItem('musicChoice') || 'without-music';

    if (hasEntered) {
        // Skip modal - langsung masuk
        modal.style.display = 'none';

        if (musicChoice === 'with-music') {
            const doPlay = () => play().catch(() => {
                document.addEventListener('click', play, { once:true });
            });
            audio.readyState >= 1 ? doPlay() :
                audio.addEventListener('loadedmetadata', doPlay, { once:true });
        }

    } else {
        // Tampilkan modal
        modal.style.display       = 'flex';
        modal.style.opacity       = '1';
        modal.style.visibility    = 'visible';
        modal.style.pointerEvents = 'all';
        modal.style.zIndex        = '999999';

        // Force tombol clickable
        [enterBtn, skipBtn].forEach(b => {
            b.style.pointerEvents = 'all';
            b.style.cursor        = 'pointer';
            b.style.position      = 'relative';
            b.style.zIndex        = '1000000';
        });

        const hide = () => {
            modal.style.opacity    = '0';
            modal.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                modal.style.display    = 'none';
                modal.style.visibility = 'hidden';
            }, 500);
        };

        // Gunakan onclick (paling reliable)
        enterBtn.onclick = e => {
            e.preventDefault(); e.stopPropagation();
            sessionStorage.setItem('hasEnteredPortfolio', 'true');
            sessionStorage.setItem('musicChoice', 'with-music');
            hide();
            play();
        };

        skipBtn.onclick = e => {
            e.preventDefault(); e.stopPropagation();
            sessionStorage.setItem('hasEnteredPortfolio', 'true');
            sessionStorage.setItem('musicChoice', 'without-music');
            hide();
        };
    }

    console.log('%c🎵 Portfolio Ready!', 'color:#1DB954;font-size:18px;font-weight:bold;');
    console.log('%cSPACE=Play/Pause | SHIFT+→=Next | SHIFT+←=Prev', 'color:#b3b3b3;');

}); // END DOMContentLoaded