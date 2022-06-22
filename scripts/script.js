console.log("hello from script")

let array = [];

function init() {
    array = document.getElementsByClassName('slide')
    const slidesEl = document.getElementsByClassName('box');
    const sliddingContent = document.getElementById('slide-contant')
    const fruitsLi = document.getElementById('fruits-li');
    const explainBox = document.getElementById("explain-box");
    const sliddingWindowEl = document.getElementById("slidding-window");
    fruitsLi.addEventListener('click', () => {
        explainBox.innerHTML = '';
        sliddingWindowEl.style.display = 'block'
        explainBox.append(sliddingWindowEl);
    });

    for (let i = 0; i < slidesEl.length; i++) {
        console.log(slidesEl[i]);
        slidesEl[i].addEventListener('click', (e) => {
            for (let j = 0; j < slidesEl.length; j++) {
                slidesEl[j].classList.remove('clicked');
                array[j].style.display = 'none';
            }
            e.target.classList.add('clicked');
            console.log(array[i])
            array[i].style.display = "block";
        });
    }

}


window.addEventListener('load', () => {
    init();
})



