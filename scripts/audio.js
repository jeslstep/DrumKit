


function addKeydownEventListener(){
    window.addEventListener('keydown', function (e) {
        // console.log(e); intial test select audio element to get key identifier
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        // console.log(e.keyCode); test of e.keyCode displays number ex.A 65
        if (!audio) return; // stop function, when pressing unsupported key
        audio.currentTime = 0; // rewind
        audio.play();
        key.classList.add('playing');
    const keys = document.querySelectorAll('.key');
    // console.log(keys); expecting to see NodeList(9)
    keys.forEach(key => key.addEventListener('transitionend', removeTransistion));
    });
}

function removeTransistion (e){
        if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    console.log(this);
    this.classList.remove('playing');
}

addKeydownEventListener();
