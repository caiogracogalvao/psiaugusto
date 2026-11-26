(() => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');

    const getMenuLinks = () => nav ? Array.from(nav.querySelectorAll('a')) : [];

    const closeMenu = ({ returnFocus = false } = {}) => {
        if (!menuButton || !nav) return;
        nav.classList.remove('open');
        menuButton.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        document.body.classList.remove('menu-open');
        if (returnFocus) menuButton.focus();
    };

    const openMenu = () => {
        if (!menuButton || !nav) return;
        nav.classList.add('open');
        menuButton.classList.add('open');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'Fechar menu');
        document.body.classList.add('menu-open');

        const firstLink = getMenuLinks()[0];
        if (firstLink) requestAnimationFrame(() => firstLink.focus());
    };

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            if (nav.classList.contains('open')) closeMenu({ returnFocus: true });
            else openMenu();
        });

        nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && nav.classList.contains('open')) {
                closeMenu({ returnFocus: true });
            }
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1120) closeMenu();
        });
    }

    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    document.querySelectorAll('.faq-question').forEach(button => {
        const item = button.closest('.faq-item');
        if (!item) return;
        const answerId = button.getAttribute('aria-controls');
        const answer = answerId ? document.getElementById(answerId) : item.querySelector('.faq-answer');
        if (!answer) return;

        answer.hidden = !item.classList.contains('open');

        button.addEventListener('click', () => {
            const isOpen = !item.classList.contains('open');
            item.classList.toggle('open', isOpen);
            button.setAttribute('aria-expanded', String(isOpen));

            if (isOpen) {
                answer.hidden = false;
            } else {
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (reduceMotion) {
                    answer.hidden = true;
                } else {
                    window.setTimeout(() => {
                        if (!item.classList.contains('open')) answer.hidden = true;
                    }, 240);
                }
            }
        });
    });

    const revealElements = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && revealElements.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: .12 });
        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    const currentYear = document.getElementById('current-year');
    if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
