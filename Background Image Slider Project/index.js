const left = document.getElementById('left');
const right = document.getElementById('right');

let imageCont = document.getElementById('image-container');
let counter = 0;

const pictures = [
    `url('./img/containerImage-0.jpeg')`,
    `url('./img/containerImage-1.jpeg')`,
    `url('./img/containerImage-2.jpeg')`,
    `url('./img/containerImage-3.jpeg')`,
    `url('./img/containerImage-4.jpeg')`
];

left.addEventListener('click', () => {
    counter++;

    if (counter > pictures.length -1) {
        counter = 0;
    }

    document.body.style.backgroundImage = pictures[counter];
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = '100%';
});

right.addEventListener('click', () => {
    counter--;

    if (counter < 0) {
        counter = pictures.length -1;
    }

    document.body.style.backgroundImage = pictures[counter];
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = '100%';
});

window.addEventListener('DOMContentLoaded', (event) => left.click());