
document.addEventListener('DOMContentLoaded', function() {
    // Random Project detail popup
    const randomDetailBtn = document.querySelector('.random-detail-btn');
    const randomDetailPopup = document.getElementById('project-detail-popup-random');
    const randomDetailPopupClose = randomDetailPopup ? randomDetailPopup.querySelector('.random-popup-close') : null;
    if (randomDetailBtn && randomDetailPopup && randomDetailPopupClose) {
        randomDetailBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            randomDetailPopup.classList.add('active');
        });
        randomDetailPopupClose.addEventListener('click', function() {
            randomDetailPopup.classList.remove('active');
        });
        randomDetailPopup.addEventListener('click', function(e) {
            if (e.target === randomDetailPopup) {
                randomDetailPopup.classList.remove('active');
            }
        });
    }
    // Quiz Project detail popup
    const quizDetailBtn = document.querySelector('.quiz-detail-btn');
    const quizDetailPopup = document.getElementById('project-detail-popup-quiz');
    const quizDetailPopupClose = quizDetailPopup ? quizDetailPopup.querySelector('.quiz-popup-close') : null;
    if (quizDetailBtn && quizDetailPopup && quizDetailPopupClose) {
        quizDetailBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            quizDetailPopup.classList.add('active');
        });
        quizDetailPopupClose.addEventListener('click', function() {
            quizDetailPopup.classList.remove('active');
        });
        quizDetailPopup.addEventListener('click', function(e) {
            if (e.target === quizDetailPopup) {
                quizDetailPopup.classList.remove('active');
            }
        });
    }
    // Project detail popup
    const projectDetailBtn = document.querySelector('.project-detail-btn');
    const projectDetailPopup = document.getElementById('project-detail-popup');
    const projectDetailPopupClose = projectDetailPopup ? projectDetailPopup.querySelector('.project-detail-popup-close') : null;
    if (projectDetailBtn && projectDetailPopup && projectDetailPopupClose) {
        projectDetailBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            projectDetailPopup.classList.add('active');
        });
        projectDetailPopupClose.addEventListener('click', function() {
            projectDetailPopup.classList.remove('active');
        });
        projectDetailPopup.addEventListener('click', function(e) {
            if (e.target === projectDetailPopup) {
                projectDetailPopup.classList.remove('active');
            }
        });
    }
    // Lightbox for project image
    const projectImg = document.querySelector('.project-lightbox-trigger');
    const projectLightbox = document.getElementById('project-lightbox');
    const projectLightboxClose = projectLightbox ? projectLightbox.querySelector('.lightbox-close') : null;
    if (projectImg && projectLightbox && projectLightboxClose) {
        projectImg.addEventListener('click', function() {
            projectLightbox.classList.add('active');
        });
        projectLightboxClose.addEventListener('click', function() {
            projectLightbox.classList.remove('active');
        });
        projectLightbox.addEventListener('click', function(e) {
            if (e.target === projectLightbox) {
                projectLightbox.classList.remove('active');
            }
        });
    }
        // Tic Tac Toe detail popup
        const tttDetailBtn = document.querySelector('.ttt-detail-btn');
        const tttDetailPopup = document.getElementById('project-detail-popup-ttt');
        const tttDetailPopupClose = tttDetailPopup ? tttDetailPopup.querySelector('.ttt-popup-close') : null;
        if (tttDetailBtn && tttDetailPopup && tttDetailPopupClose) {
            tttDetailBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                tttDetailPopup.classList.add('active');
            });
            tttDetailPopupClose.addEventListener('click', function() {
                tttDetailPopup.classList.remove('active');
            });
            tttDetailPopup.addEventListener('click', function(e) {
                if (e.target === tttDetailPopup) {
                    tttDetailPopup.classList.remove('active');
                }
            });
        }
        // Weather App detail popup
        const weatherDetailBtn = document.querySelector('.weather-detail-btn');
        const weatherDetailPopup = document.getElementById('project-detail-popup-weather');
        const weatherDetailPopupClose = weatherDetailPopup ? weatherDetailPopup.querySelector('.weather-popup-close') : null;
        if (weatherDetailBtn && weatherDetailPopup && weatherDetailPopupClose) {
            weatherDetailBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                weatherDetailPopup.classList.add('active');
            });
            weatherDetailPopupClose.addEventListener('click', function() {
                weatherDetailPopup.classList.remove('active');
            });
            weatherDetailPopup.addEventListener('click', function(e) {
                if (e.target === weatherDetailPopup) {
                    weatherDetailPopup.classList.remove('active');
                }
            });
        }
        // Healthy Project detail popup
        const healthyDetailBtn = document.querySelector('.healthy-detail-btn');
        const healthyDetailPopup = document.getElementById('project-detail-popup-healthy');
        const healthyDetailPopupClose = healthyDetailPopup ? healthyDetailPopup.querySelector('.healthy-popup-close') : null;
        if (healthyDetailBtn && healthyDetailPopup && healthyDetailPopupClose) {
            healthyDetailBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                healthyDetailPopup.classList.add('active');
            });
            healthyDetailPopupClose.addEventListener('click', function() {
                healthyDetailPopup.classList.remove('active');
            });
            healthyDetailPopup.addEventListener('click', function(e) {
                if (e.target === healthyDetailPopup) {
                    healthyDetailPopup.classList.remove('active');
                }
            });
        }
    // Auto scroll to next section on wheel
    const sectionsAll = Array.from(document.querySelectorAll('section'));
    let isAutoScrolling = false;
    let lastScrollTime = 0;
    sectionsAll.forEach((section, idx) => {
        section.addEventListener('wheel', function(e) {
            if (isAutoScrolling) return;
            const now = Date.now();
            if (now - lastScrollTime < 700) return; // debounce
            if (e.deltaY > 0 && idx < sectionsAll.length - 1) {
                isAutoScrolling = true;
                sectionsAll[idx + 1].scrollIntoView({ behavior: 'smooth' });
                lastScrollTime = now;
                setTimeout(() => { isAutoScrolling = false; }, 700);
            } else if (e.deltaY < 0 && idx > 0) {
                isAutoScrolling = true;
                sectionsAll[idx - 1].scrollIntoView({ behavior: 'smooth' });
                lastScrollTime = now;
                setTimeout(() => { isAutoScrolling = false; }, 700);
            }
        }, { passive: false });
    });
    // Lightbox for certificate images
    const certImages = document.querySelectorAll('.cert-gallery img');
    const certLightbox = document.getElementById('cert-lightbox');
    const certLightboxImg = document.querySelector('.cert-lightbox-img');
    const certLightboxClose = document.querySelector('.cert-lightbox-close');

    certImages.forEach(img => {
        img.addEventListener('click', function() {
            certLightbox.classList.add('active');
            certLightboxImg.src = this.src;
            certLightboxImg.alt = this.alt;
        });
    });
    certLightboxClose.addEventListener('click', function() {
        certLightbox.classList.remove('active');
        certLightboxImg.src = '';
    });
    certLightbox.addEventListener('click', function(e) {
        if (e.target === certLightbox) {
            certLightbox.classList.remove('active');
            certLightboxImg.src = '';
        }
    });
    const navLinks = document.querySelectorAll('nav a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

   
    navLinks.forEach((link, idx) => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    
    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop;
        sections.forEach((section, idx) => {
            if (!section) return;
            const offsetTop = section.offsetTop - 80; 
            const offsetBottom = offsetTop + section.offsetHeight;
            if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                navLinks[idx].classList.add('active');
            }
        });
    });
});
