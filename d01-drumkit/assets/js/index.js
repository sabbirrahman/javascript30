const keys = Array.from(document.querySelectorAll('.key'));
  
function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return;
  ev.target.classList.remove('playing');
}

function playSound(ev) {
  const keyCode = ev.type === 'keydown' ? ev.keyCode : ev.currentTarget.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));