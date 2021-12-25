var buttn = document.getElementById('top');

window.onscroll = function() {scroll()};

function PlaySound(Path) {
    var Sound = new Audio(Path);
    Sound.play();
}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttn.style.opacity = 1;
        buttn.style.cursor = 'pointer';
    } else {
        buttn.style.opacity = 0;
        buttn.style.cursor = 'unset';
    }
};

function toTop() {
    window.scrollTo(0, 0);
}

function meow() {
    PlaySound('assets/sounds/meow.mp3');
}