document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const spans = this.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : 'none';
        });

        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    const sessionForm = document.getElementById('sessionForm');
    if (sessionForm) {
        sessionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            console.log('Form submitted:', Object.fromEntries(formData));
            document.getElementById('sessionForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
                document.getElementById('sessionForm').style.display = 'block';
                this.reset();
            }, 10000);
        });

        const citySelect = document.getElementById('city');
        const otherCityGroup = document.getElementById('otherCityGroup');
        if (citySelect) {
            citySelect.addEventListener('change', function() {
                if (this.value === 'other') {
                    otherCityGroup.style.display = 'block';
                    document.getElementById('otherCity').required = true;
                } else {
                    otherCityGroup.style.display = 'none';
                    document.getElementById('otherCity').required = false;
                }
            });
        }
    }

    const quickForm = document.getElementById('quickForm');
    if (quickForm) {
        quickForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = '✓ Message Sent!';
            setTimeout(() => {
                this.reset();
                btn.textContent = originalText;
            }, 2000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({top: offsetTop, behavior: 'smooth'});
            }
        });
    });

    const observerOptions = {threshold: 0.1, rootMargin: '0px 0px -50px 0px'};
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .gallery-item, .practice-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); display: flex; justify-content: center; align-items: center; z-index: 10000;';
            const image = document.createElement('img');
            image.src = this.src;
            image.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);';
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '✕';
            closeBtn.style.cssText = 'position: absolute; top: 20px; right: 30px; background: none; border: none; color: white; font-size: 2rem; cursor: pointer; font-weight: bold;';
            closeBtn.addEventListener('click', () => lightbox.remove());
            lightbox.addEventListener('click', (e) => {if (e.target === lightbox) lightbox.remove();});
            lightbox.appendChild(image);
            lightbox.appendChild(closeBtn);
            document.body.appendChild(lightbox);
            document.addEventListener('keydown', function closeOnEscape(e) {
                if (e.key === 'Escape') {
                    lightbox.remove();
                    document.removeEventListener('keydown', closeOnEscape);
                }
            });
        });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    }
});