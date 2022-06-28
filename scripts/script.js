console.log("hello from script")

let array = [];
let currentSection = -1;

let explainBox;
let sliddingWindowEl;
let slidesboxs;


window.addEventListener('load', () => {
    explainBox = document.getElementById("explain-box");  // get explain box element
    sliddingWindowEl = document.getElementById("slidding-window");
    array = document.getElementsByClassName('slide')    // get all html sections
    slidesboxs = document.getElementsByClassName('box');    // get all fruits slides

    for (let i = 0; i < slidesboxs.length; i++) {
        slidesboxs[i].addEventListener('click', (e) => {
            currentSection = i;
            updateSection();
        });
    }
});



function updateSection() {
    const slideTitle = document.getElementById('slide-title'); // update title to current section
    slideTitle.innerHTML = "";
    const span = document.createElement('span');
    const p = document.createElement('p');

    p.textContent = `אחסון ${array[currentSection].title}`;
    span.textContent = (currentSection + 1).toString() + '/' + array.length.toString();
    slideTitle.append(span, p);

    for (let j = 0; j < slidesboxs.length; j++) {
        slidesboxs[j].style.backgroundColor = 'white';
        slidesboxs[j].style.border = '1px solid black';
        array[j].style.display = 'none';
    }
    slidesboxs[currentSection].style.backgroundColor = 'red';
    slidesboxs[currentSection].style.border = '1px solid yellow';
    array[currentSection].style.display = 'block';
}



function closeSliddingWindow() {
    sliddingWindowEl.style.display = 'none';
    explainBox.style.display = 'block';
}

function openLiFruit() {
    explainBox.style.display = 'none';
    sliddingWindowEl.style.display = 'block';
}

function openFruitSlide(i) {
    openLiFruit();
    currentSection = i;
    updateSection();
}

function right() {
    currentSection--;
    if (currentSection < 0)
        currentSection = array.length - 1;
    updateSection();

}

function left() {
    // currentSection = (currentSection + 1) % 4;
    currentSection++;
    if (currentSection > array.length - 1)
        currentSection = 0
    updateSection();
}





