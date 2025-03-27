function playSound(e) {
    const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audioEl) return; // stop the function from running alltogether.
    audioEl.currentTime =0; // rewind to start;
    audioEl.play();
    keyEl.classList.add('playing');
};

function removeTransition(e) {
    if(e.propertyName !=='transform') return; // skip it if it is not a transform.
    this.classList.remove('playing');
    
}

const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
