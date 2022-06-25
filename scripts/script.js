console.log("hello from script")

let array = [];
let currentSection = -1;

let explainBox;
let sliddingWindowEl;


window.addEventListener('load', () => {
    init();
    explainBox = document.getElementById("explain-box");  // get explain box element
    sliddingWindowEl = document.getElementById("slidding-window");

})

function init() {
    array = document.getElementsByClassName('slide')    // get all html sections
    const slidesboxs = document.getElementsByClassName('box');    // get all fruits slides
    // const sliddingContent = document.getElementById('slide-contant') //
    const fruitsLi = document.getElementById('fruits-li'); // fruits li element
    // const closeSliddingWindow = document.getElementById("close");

    const left = document.getElementById('left')
    const right = document.getElementById('right')


    fruitsLi.addEventListener('click', () => { // event tha open slidding window
        explainBox.style.display = 'none';
        sliddingWindowEl.style.display = 'block';


    })

    for (let i = 0; i < slidesboxs.length; i++) {
        slidesboxs [i].addEventListener('click', (e) => {
            slidesboxs [i].style.color='red';
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
            currentSection = slidesboxs.length - 1;
        updateSection();
    })

    function updateSection() {
        const slideTitle = document.getElementById('slide-title');
        slideTitle.innerHTML = "";
        const span = document.createElement('span');
        const p = document.createElement('p');

        p.textContent = `אחסון ${array[currentSection].title}`;
        span.textContent = (currentSection + 1).toString() + '/' + array.length.toString();
        slideTitle.append(span, p);
        console.log(array[currentSection]);


        for (let j = 0; j <slidesboxs .length; j++) {
            slidesboxs [j].classList.remove('clicked');
            array[j].style.display = 'none';
        }
        slidesboxs[currentSection].classList.add('clicked');
        array[currentSection].style.display = 'block';
    }



}



function closeSliddingWindow() {
    sliddingWindowEl.style.display = 'none';
    explainBox.style.display = 'block';
}



