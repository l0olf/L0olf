const message = 'Oi, Iago! Conheci a L0olf pelo site e quero conversar sobre o tráfego da minha empresa.';
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = `https://wa.me/5514999051272?text=${encodeURIComponent(message)}`; });
const menu = document.querySelector('.menu');
const navigation = document.getElementById('mobile-nav');
function closeMenu() { if (!menu) return; menu.setAttribute('aria-expanded', 'false'); navigation.hidden = true; }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.hidden = !open; });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);

// Native touch scrolling stays native. Lenis smooths wheel input without a fixed body.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
let smoothScroll;
function configureMotion() {
  smoothScroll?.destroy();
  smoothScroll = undefined;
  if (!motionPreference.matches && window.Lenis) {
    smoothScroll = new Lenis({ autoRaf: true, lerp: 0.085, smoothWheel: true, syncTouch: false });
  }
  scheduleScene();
}

document.querySelectorAll('a[href^="#"]:not(.skip)').forEach(link => {
  link.addEventListener('click', event => {
    const hash = link.getAttribute('href');
    const target = document.getElementById(hash.slice(1));
    if (!target || !smoothScroll || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    closeMenu();
    history.pushState(null, '', hash);
    smoothScroll.scrollTo(target, { offset: -100, duration: 1.1, onComplete: () => {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    } });
  });
});

const scene = document.querySelector('.scene');
const layers = [...document.querySelectorAll('[data-depth]')];
let sceneFrame = 0;
function drawScene() {
  sceneFrame = 0;
  if (!scene) return;
  const rect = scene.getBoundingClientRect();
  const distance = Math.min(Math.max(-rect.top, 0), rect.height);
  const intensity = innerWidth <= 700 ? 0.45 : 1;
  layers.forEach(layer => {
    const y = motionPreference.matches ? 0 : distance * Number(layer.dataset.depth) * intensity;
    layer.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  });
}
function scheduleScene() {
  if (!sceneFrame) sceneFrame = requestAnimationFrame(drawScene);
}
addEventListener('scroll', scheduleScene, { passive: true });
addEventListener('resize', scheduleScene, { passive: true });
motionPreference.addEventListener('change', configureMotion);
configureMotion();

// Loop while the tab is visible, respecting the visitor's motion preference.
const changingWord = document.querySelector('.changing-word');
if (changingWord) {
  const words = ['estratégia.', 'contexto.', 'direção.'];
  let index = 0;
  let animation;
  let timer;
  function stopTitle() { clearTimeout(timer); animation?.cancel(); }
  function nextWord() {
    if (motionPreference.matches || document.hidden) return;
    changingWord.textContent = words[index];
    index = (index + 1) % words.length;
    animation = changingWord.animate([{opacity:0,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:300,easing:'ease-out'});
    timer = setTimeout(nextWord, 1300);
  }
  function syncTitle() {
    stopTitle();
    if (!motionPreference.matches && !document.hidden) timer = setTimeout(nextWord, 1300);
  }
  motionPreference.addEventListener('change', syncTitle);
  document.addEventListener('visibilitychange', syncTitle);
  syncTitle();
}

// Rectangular glass header: show on upward intent, keep keyboard/menu access visible.
const siteHeader = document.querySelector('.v2 .header');
if (siteHeader) {
  let lastScroll = Math.max(0, scrollY);
  let direction = 0;
  let travel = 0;
  addEventListener('scroll', () => {
    const current = Math.max(0, scrollY);
    const delta = current - lastScroll;
    lastScroll = current;
    if (!delta) return;
    const nextDirection = Math.sign(delta);
    travel = nextDirection === direction ? travel + Math.abs(delta) : Math.abs(delta);
    direction = nextDirection;
    if (current < 120 || menu?.getAttribute('aria-expanded') === 'true' || siteHeader.contains(document.activeElement)) {
      siteHeader.classList.remove('header-away');
    } else if (travel > 12) {
      siteHeader.classList.toggle('header-away', direction > 0);
    }
  }, {passive:true});
  siteHeader.addEventListener('focusin', () => siteHeader.classList.remove('header-away'));
}

// Reveal once, only when entering the viewport; content stays visible without JS.
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.work-panel, .journey-step, .about > div:last-child').forEach(element => {
    if (element.getBoundingClientRect().top > innerHeight) element.classList.add('reveal-ready');
    observer.observe(element);
  });
}
