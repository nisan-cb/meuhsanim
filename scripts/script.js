console.log("hello from script")

let array = [];
let currentSection = -1;

function init() {
    array = document.getElementsByClassName('slide')    // get all html sections
    const slidesEl = document.getElementsByClassName('box');    // get all fruits slides
    // const sliddingContent = document.getElementById('slide-contant') //
    const fruitsLi = document.getElementById('fruits-li'); // fruits li element
    const explainBox = document.getElementById("explain-box");  // get explain box element
    const sliddingWindowEl = document.getElementById("slidding-window");

    const left = document.getElementById('left')
    const right = document.getElementById('right')


    fruitsLi.addEventListener('click', () => { // event tha open slidding window
        explainBox.style.display = 'none';
        sliddingWindowEl.style.display = 'block'
    });

    for (let i = 0; i < slidesEl.length; i++) {
        slidesEl[i].addEventListener('click', (e) => {
            currentSection = i;
            updateSection();
        });
    }

    left.addEventListener('click', () => {
        currentSection = (currentSection + 1) % 4;
        updateSection();
    });
    right.addEventListener('click', () => {
        currentSection--;
        if (currentSection < 0)
            currentSection = slidesEl.length - 1;
        updateSection();
    })

    function updateSection() {
        for (let j = 0; j < slidesEl.length; j++) {
            slidesEl[j].classList.remove('clicked');
            array[j].style.display = 'none';
        }
        slidesEl[currentSection].classList.add('clicked');
        array[currentSection].style.display = 'block';
    }
}




window.addEventListener('load', () => {
    init();
})



