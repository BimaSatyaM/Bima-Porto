const playlist = [
    { title:'As It Was',       artist:'Harry Styles', cover:'assets/cover1.jpg', file:'assets/song1.mp3' },
    { title:'Blinding Lights', artist:'The Weeknd',   cover:'assets/cover2.jpg', file:'assets/song2.mp3' }
];

const detailPages = {
    'who-i-am': {
        gradient:'linear-gradient(135deg,#1DB954,#0a4d21)',
        icon:'fas fa-code', tag:'ABOUT',
        title:'Who I Am', tagline:'Passionate Web Developer & Creative Problem Solver',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-user-circle"></i> Introduction</h2>
            <p>Hai! Saya <strong>Bima Satya M.</strong>, Web Developer Indonesia. 5+ tahun pengalaman.</p>
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
            </ul>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#1DB954,#0a4d21)">
            <h2>Mari Berkolaborasi!</h2>
            <p style="color:rgba(255,255,255,0.9)">Tertarik bekerja sama?</p>
            <button class="detail-cta-btn" onclick="showMainAndScroll('contact')" style="color:#1DB954">
                <i class="fas fa-paper-plane"></i> Get in Touch
            </button>
        </div>`
    },
    'what-i-do': {
        gradient:'linear-gradient(135deg,#ff6b6b,#ee5253)',
        icon:'fas fa-rocket', tag:'SERVICES',
        title:'What I Do', tagline:'Building Modern Web Experiences',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-list"></i> Services</h2>
            <div class="detail-services-grid">
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-desktop"></i></div><h3>Landing Page</h3><p>Website menarik untuk promosi.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-shopping-cart"></i></div><h3>E-Commerce</h3><p>Toko online + payment.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-chart-line"></i></div><h3>Web App</h3><p>Aplikasi real-time kompleks.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-mobile-alt"></i></div><h3>Responsive</h3><p>Sempurna di semua device.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-search"></i></div><h3>SEO</h3><p>Mudah ditemukan Google.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-blog"></i></div><h3>Blog CMS</h3><p>Platform blog mudah.</p></div>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-code"></i> Tech Stack</h2>
            <div class="detail-tech-stack">
                <span class="detail-tech-badge"><i class="fab fa-html5"></i> HTML5</span>
                <span class="detail-tech-badge"><i class="fab fa-css3-alt"></i> CSS3</span>
                <span class="detail-tech-badge"><i class="fab fa-js"></i> JavaScript</span>
                <span class="detail-tech-badge"><i class="fab fa-react"></i> React</span>
                <span class="detail-tech-badge"><i class="fab fa-node-js"></i> Node.js</span>
                <span class="detail-tech-badge"><i class="fab fa-git-alt"></i> Git</span>
            </div>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#ff6b6b,#ee5253)">
            <h2>Ready to Start?</h2>
            <p style="color:rgba(255,255,255,0.9)">Let's build something great!</p>
            <button class="detail-cta-btn" onclick="showMainAndScroll('contact')" style="color:#ee5253">
                <i class="fas fa-paper-plane"></i> Hire Me
            </button>
        </div>`
    },
    'my-vision': {
        gradient:'linear-gradient(135deg,#f39c12,#e67e22)',
        icon:'fas fa-lightbulb', tag:'VISION',
        title:'My Vision', tagline:'Creating Meaningful Digital Experiences',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-bullseye"></i> Big Picture</h2>
            <p>Menciptakan website yang <strong>indah</strong>, <strong>fungsional</strong>, dan memberikan nilai nyata.</p>
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
            <button class="detail-cta-btn" onclick="showMainAndScroll('contact')" style="color:#e67e22">
                <i class="fas fa-handshake"></i> Connect
            </button>
        </div>`
    }
};const playlist = [
    { title:'As It Was',       artist:'Harry Styles', cover:'assets/cover1.jpg', file:'assets/song1.mp3' },
    { title:'Blinding Lights', artist:'The Weeknd',   cover:'assets/cover2.jpg', file:'assets/song2.mp3' }
];

const detailPages = {
    'who-i-am': {
        gradient:'linear-gradient(135deg,#1DB954,#0a4d21)',
        icon:'fas fa-code', tag:'ABOUT',
        title:'Who I Am', tagline:'Passionate Web Developer & Creative Problem Solver',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-user-circle"></i> Introduction</h2>
            <p>Hai! Saya <strong>Bima Satya M.</strong>, Web Developer Indonesia. 5+ tahun pengalaman.</p>
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
            </ul>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#1DB954,#0a4d21)">
            <h2>Mari Berkolaborasi!</h2>
            <p style="color:rgba(255,255,255,0.9)">Tertarik bekerja sama?</p>
            <button class="detail-cta-btn" onclick="showMainAndScroll('contact')" style="color:#1DB954">
                <i class="fas fa-paper-plane"></i> Get in Touch
            </button>
        </div>`
    },
    'what-i-do': {
        gradient:'linear-gradient(135deg,#ff6b6b,#ee5253)',
        icon:'fas fa-rocket', tag:'SERVICES',
        title:'What I Do', tagline:'Building Modern Web Experiences',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-list"></i> Services</h2>
            <div class="detail-services-grid">
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-desktop"></i></div><h3>Landing Page</h3><p>Website menarik untuk promosi.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-shopping-cart"></i></div><h3>E-Commerce</h3><p>Toko online + payment.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-chart-line"></i></div><h3>Web App</h3><p>Aplikasi real-time kompleks.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-mobile-alt"></i></div><h3>Responsive</h3><p>Sempurna di semua device.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-search"></i></div><h3>SEO</h3><p>Mudah ditemukan Google.</p></div>
                <div class="detail-service-card"><div class="detail-service-icon"><i class="fas fa-blog"></i></div><h3>Blog CMS</h3><p>Platform blog mudah.</p></div>
            </div>
        </div>
        <div class="detail-section-item">
            <h2><i class="fas fa-code"></i> Tech Stack</h2>
            <div class="detail-tech-stack">
                <span class="detail-tech-badge"><i class="fab fa-html5"></i> HTML5</span>
                <span class="detail-tech-badge"><i class="fab fa-css3-alt"></i> CSS3</span>
                <span class="detail-tech-badge"><i class="fab fa-js"></i> JavaScript</span>
                <span class="detail-tech-badge"><i class="fab fa-react"></i> React</span>
                <span class="detail-tech-badge"><i class="fab fa-node-js"></i> Node.js</span>
                <span class="detail-tech-badge"><i class="fab fa-git-alt"></i> Git</span>
            </div>
        </div>
        <div class="detail-cta" style="background:linear-gradient(135deg,#ff6b6b,#ee5253)">
            <h2>Ready to Start?</h2>
            <p style="color:rgba(255,255,255,0.9)">Let's build something great!</p>
            <button class="detail-cta-btn" onclick="showMainAndScroll('contact')" style="color:#ee5253">
                <i class="fas fa-paper-plane"></i> Hire Me
            </button>
        </div>`
    },
    'my-vision': {
        gradient:'linear-gradient(135deg,#f39c12,#e67e22)',
        icon:'fas fa-lightbulb', tag:'VISION',
        title:'My Vision', tagline:'Creating Meaningful Digital Experiences',
        html:`
        <div class="detail-section-item">
            <h2><i class="fas fa-bullseye"></i> Big Picture</h2>
            <p>Menciptakan website yang <strong>indah</strong>, <strong>fungsional</strong>, dan memberikan nilai nyata.</p>
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
            <button class="detail-cta-btn" onclick="showMainAndScroll('contact')" style="color:#e67e22">
                <i class="fas fa-handshake"></i> Connect
            </button>
        </div>`
    }
};