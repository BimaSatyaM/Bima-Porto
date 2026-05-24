const mainContent = document.querySelector('.main-content');
const navItems    = $$('.nav-item');
const sections    = $$('.section');

function initNavigation() {
    if (!mainContent) return;

    navItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const dv = $('detailView'), mv = $('mainView');
            if (dv?.style.display !== 'none') {
                if (dv) dv.style.display = 'none';
                if (mv) mv.style.display = 'block';
            }
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            const t = $(item.dataset.section);
            if (t) mainContent.scrollTo({ top: t.offsetTop-80, behavior:'smooth' });
            if (window.innerWidth <= 768) document.querySelector('.sidebar')?.classList.remove('active');
        });
    });

    mainContent.addEventListener('scroll', () => {
        const dv = $('detailView');
        if (dv?.style.display !== 'none') return;
        let cur = '';
        sections.forEach(s => { if (mainContent.scrollTop >= s.offsetTop-150) cur = s.id; });
        navItems.forEach(n => n.classList.toggle('active', n.dataset.section===cur));
    });

    const tog = $('menuToggle');
    const sb  = document.querySelector('.sidebar');
    tog?.addEventListener('click', e => { e.stopPropagation(); sb?.classList.toggle('active'); });
    document.addEventListener('click', e => {
        if (window.innerWidth<=768 && sb && tog)
            if (!sb.contains(e.target) && !tog.contains(e.target))
                sb.classList.remove('active');
    });

    $('contactForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            setTimeout(() => { btn.innerHTML = orig; e.target.reset(); }, 2000);
        }, 1200);
    });

    $$('.project-card').forEach(c => {
        c.addEventListener('click', e => {
            if (!e.target.closest('.play-btn'))
                alert(`🎵 ${c.querySelector('h4').textContent}\nProject details!`);
        });
    });
}