const detailView    = $('detailView');
const mainView      = $('mainView');
const detailContent = $('detailContent');
const detailBackBtn = $('detailBackBtn');

function showDetailView(key) {
    const p = detailPages[key];
    if (!p || !detailContent) return;
    detailContent.innerHTML = `
        <div class="detail-hero-section" style="background:${p.gradient}">
            <div class="detail-hero-icon"><i class="${p.icon}"></i></div>
            <h4>${p.tag}</h4><h1>${p.title}</h1>
            <p class="tagline">${p.tagline}</p>
        </div>${p.html}`;
    if (mainView)    mainView.style.display   = 'none';
    if (detailView)  detailView.style.display = 'block';
    if (mainContent) mainContent.scrollTo({ top:0, behavior:'smooth' });
}

function showMainAndScroll(section) {
    if (detailView) detailView.style.display = 'none';
    if (mainView)   mainView.style.display   = 'block';
    if (section) setTimeout(() => {
        const el = $(section);
        if (el && mainContent) mainContent.scrollTo({ top: el.offsetTop-80, behavior:'smooth' });
    }, 100);
}

function initSPA() {
    detailBackBtn?.addEventListener('click', () => showMainAndScroll('about'));
    $$('.about-card-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href') || '';
            if      (href.includes('who-i-am'))  showDetailView('who-i-am');
            else if (href.includes('what-i-do')) showDetailView('what-i-do');
            else if (href.includes('my-vision')) showDetailView('my-vision');
        });
    });
    window.showMainAndScroll = showMainAndScroll;
}