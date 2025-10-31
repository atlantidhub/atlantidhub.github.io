const nowEl = document.getElementById('now');
const updateTime = () => {
  const d = new Date();
  nowEl.textContent = d.toISOString().replace('T',' ').split('.')[0] + 'Z';
};
updateTime();
setInterval(updateTime, 1000);

const blocks = [...document.querySelectorAll('[data-typing]')];
let t = 0;
blocks.forEach(el => {
  const delay = Number(el.getAttribute('data-delay') || 0);
  t += delay;
  setTimeout(() => el.classList.add('show'), t);
});

function randomGlitch(){
  const candidates = document.querySelectorAll('.viewport .log, .viewport .sys, .viewport .alert');
  if(!candidates.length) return;
  const el = candidates[Math.floor(Math.random()*candidates.length)];
  el.classList.add('glitch');
  setTimeout(() => el.classList.remove('glitch'), 260 + Math.random()*240);
}
setInterval(() => {
  if (Math.random() < 0.5) randomGlitch();
}, 2200);
