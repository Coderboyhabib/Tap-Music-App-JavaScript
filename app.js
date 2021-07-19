window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const color = ['#d36060', '#c060d3', '#c060d3', '#d3d160', ' #d36060', '#a823f5'];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            bulles(index);
        });
    });

    const bulles = (index) => {
        const bulbe = document.createElement('div');
        visual.appendChild(bulbe);
        bulbe.style.backgroundColor = color[index];
        bulbe.style.animation = `jump 1s ease`;

        bulbe.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    };

});