(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)');
  const hero = document.querySelector('.scene');
  const note = document.querySelector('.mouse-note');
  const copy = note.querySelector('.mouse-note-copy');
  const counter = note.querySelector('.mouse-note-index');
  const phrases = ['Além do clique.', 'Menos achismo.', 'Mais direção.'];
  let phrase = 0, timer, frame, visible = false;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let textAnimation;
  const allowed = () => pointer.matches && !reduced.matches && !document.hidden;
  function hideNote() {
    visible = false;
    note.classList.remove('is-visible');
    clearInterval(timer);
    cancelAnimationFrame(frame);
    textAnimation?.cancel();
    frame = 0;
  }
  function drawNote() {
    frame = 0;
    if (!visible) return;
    const dx = targetX - x;
    x += dx * .18;
    y += (targetY - y) * .18;
    note.style.transform = `translate3d(${x}px,${y}px,0) rotate(${Math.max(-6,Math.min(6,dx*.07))}deg)`;
    if (Math.abs(dx) + Math.abs(targetY-y) > .15) frame = requestAnimationFrame(drawNote);
  }
  hero.addEventListener('pointermove', event => {
    if (!allowed() || event.pointerType !== 'mouse' || event.target.closest('a,button')) { hideNote(); return; }
    // Place beside the cursor, flipping at viewport edges; never replace the cursor.
    const width = note.offsetWidth, height = note.offsetHeight;
    targetX = Math.max(12,Math.min(innerWidth-width-18,event.clientX+width+42 < innerWidth ? event.clientX+26 : event.clientX-width-26));
    targetY = Math.max(110,Math.min(innerHeight-height-18,event.clientY+25));
    const actions = hero.querySelector('.hero-actions').getBoundingClientRect();
    if (targetX < actions.right+8 && targetX+width > actions.left-8 && targetY < actions.bottom+8 && targetY+height > actions.top-8) {
      hideNote();
      return;
    }
    if (!visible) {
      x = targetX; y = targetY;
      visible = true;
      note.classList.add('is-visible');
      timer = setInterval(() => {
        phrase = (phrase + 1) % phrases.length;
        copy.textContent = phrases[phrase];
        counter.textContent = `L0 / 0${phrase+1}`;
        textAnimation?.cancel();
        textAnimation = copy.animate([{opacity:0,transform:'translateY(8px) rotate(3deg)'},{opacity:1,transform:'translateY(0) rotate(0)'}],{duration:430,easing:'cubic-bezier(.16,1,.3,1)'});
      },2400);
    }
    if (!frame) frame = requestAnimationFrame(drawNote);
  },{passive:true});
  hero.addEventListener('pointerleave',hideNote);
  addEventListener('scroll',hideNote,{passive:true});
  addEventListener('resize',hideNote,{passive:true});
  document.addEventListener('visibilitychange',hideNote);
  pointer.addEventListener('change',hideNote);
  reduced.addEventListener('change',hideNote);

  const journey = document.querySelector('.journey-steps');
  const steps = [...document.querySelectorAll('.journey-step')];
  const number = document.querySelector('.journey-current');
  let journeyFrame = 0;
  function updateJourney() {
    journeyFrame = 0;
    const rect = journey.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > innerHeight) return;
    const readingLine = innerHeight * .48;
    const progress = Math.max(0,Math.min(1,(readingLine-rect.top)/rect.height));
    journey.style.setProperty('--journey-progress',progress.toFixed(4));
    let active = 0;
    steps.forEach((step,index) => { if (step.getBoundingClientRect().top < readingLine) active = index; });
    steps.forEach((step,index) => step.classList.toggle('is-current',index===active));
    number.textContent = String(active+1).padStart(2,'0');
  }
  function scheduleJourney() { if (!journeyFrame) journeyFrame = requestAnimationFrame(updateJourney); }
  addEventListener('scroll',scheduleJourney,{passive:true});
  addEventListener('resize',scheduleJourney,{passive:true});
  scheduleJourney();

  const panels = [...document.querySelectorAll('.work-panel')];
  const panelObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !reduced.matches && !document.hidden) {
        entry.target.classList.add('scene-play');
        panelObserver.unobserve(entry.target);
      }
    });
  },{threshold:.35});
  panels.forEach(panel => panelObserver.observe(panel));
  document.querySelectorAll('.work-meta,.work-google').forEach(panel => {
    const art = panel.querySelector('.panel-art');
    art.addEventListener('pointermove',event => {
      if (!allowed() || event.pointerType !== 'mouse') return;
      const r = art.getBoundingClientRect();
      art.style.setProperty('--look-x',`${((event.clientX-r.left)/r.width-.5)*22}px`);
      art.style.setProperty('--look-y',`${((event.clientY-r.top)/r.height-.5)*16}px`);
    },{passive:true});
    const reset = () => { art.style.removeProperty('--look-x'); art.style.removeProperty('--look-y'); };
    art.addEventListener('pointerleave',reset);
    pointer.addEventListener('change',reset);
    reduced.addEventListener('change',reset);
  });
})();
