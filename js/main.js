document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  const linkIcons = {
    github: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    itchio: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.31 0 2.396-1.048 2.396-2.357 0 1.31 1.07 2.357 2.38 2.357 1.31 0 2.32-1.048 2.32-2.357 0 1.31 1.092 2.357 2.402 2.357h.003c1.31 0 2.402-1.048 2.402-2.357 0 1.31 1.01 2.357 2.32 2.357 1.31 0 2.38-1.048 2.38-2.357 0 1.31 1.087 2.357 2.397 2.357C23.78 8.43 24 7.283 24 5.98v-1.03c-.02-.62-2.08-2.99-3.13-3.612C18.46-.052 14.555-.036 12 .002c-2.556-.038-6.46-.054-8.87.336zm5.715 7.464c-.503.532-1.216.86-2.004.86-.787 0-1.5-.328-2.003-.86-.376.398-.852.67-1.38.79v.16c.025 2.127.076 4.255.173 5.206.09 1.02.42 3.39.87 4.477.61 1.46 2.463 2.5 5.502 2.566 3.04-.066 4.893-1.106 5.502-2.566.45-1.088.78-3.457.87-4.477.097-.95.148-3.08.173-5.206v-.16c-.528-.12-1.004-.392-1.38-.79-.503.532-1.216.86-2.003.86-.788 0-1.5-.328-2.004-.86-.503.532-1.216.86-2.003.86-.788 0-1.502-.328-2.004-.86zm-.037 4.078c.442-.015 1.003.07 1.395.39.263.216.477.581.505 1.252.017.406-.196.756-.47 1.016-.14.133-.636.544-1.404.544-.768 0-1.263-.41-1.403-.544-.275-.26-.487-.61-.47-1.016.027-.67.24-1.036.504-1.252.393-.32.952-.405 1.342-.39zm6.467 0c.444-.015 1.005.07 1.397.39.263.216.477.581.505 1.252.017.406-.196.756-.47 1.016-.14.133-.636.544-1.404.544-.768 0-1.263-.41-1.403-.544-.275-.26-.487-.61-.47-1.016.027-.67.24-1.036.504-1.252.393-.32.95-.405 1.34-.39z"/></svg>`,
    googleplay: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.585 1.493a1 1 0 010 1.734l-2.586 1.493L15.244 12l2.453-2.693zM5.864 3.456L16.8 9.79l-2.302 2.3L5.864 3.457z"/></svg>`,
    web: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
  };

  const linkLabels = {
    github: 'GitHub',
    youtube: 'YouTube',
    itchio: 'itch.io',
    googleplay: 'Google Play',
    web: 'Web'
  };

  const linkClasses = {
    github: 'github',
    youtube: 'youtube',
    itchio: 'itch',
    googleplay: 'google-play',
    web: 'web'
  };

  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';

    let linksHTML = '';
    const linkTypes = ['github', 'youtube', 'itchio', 'googleplay', 'web'];
    linkTypes.forEach(type => {
      if (project[type] && project[type].trim() !== '') {
        linksHTML += `<a href="${project[type]}" target="_blank" class="link-btn ${linkClasses[type]}">${linkIcons[type]} ${linkLabels[type]}</a>`;
      }
    });

    card.innerHTML = `
      <div class="project-logo-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-logo">
      </div>
      <div class="project-info">
        <span class="project-tag">${project.tag}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-links">${linksHTML}</div>
      </div>
    `;

    return card;
  }

  function loadProjects() {
    const scrollContainer = document.getElementById('projectsScroll');
    if (!scrollContainer) return;

    if (typeof projectsData !== 'undefined') {
      projectsData.forEach(project => {
        const card = createProjectCard(project);
        scrollContainer.appendChild(card);
      });

      scrollContainer.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
  }

  loadProjects();

  const projectsScroll = document.getElementById('projectsScroll');
  const btnLeft = document.getElementById('projectsLeft');
  const btnRight = document.getElementById('projectsRight');

  if (btnLeft && btnRight && projectsScroll) {
    const scrollAmount = 360;

    btnLeft.addEventListener('click', () => {
      projectsScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      projectsScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  let lastScroll = 0;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.querySelector('.certificate-image').src;
      lightboxImg.src = imgSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
