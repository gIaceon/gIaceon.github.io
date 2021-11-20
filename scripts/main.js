var buttn = document.getElementById('top');
var meowsound = new Audio('assets/sounds/meow.mp3');

window.onscroll = function() {scroll()};

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
    meowsound.play();
}