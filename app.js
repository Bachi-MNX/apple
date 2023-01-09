const nextEl = document.querySelector(".next")
const prevEl = document.querySelector(".prev")
const imgsEl = document.querySelectorAll(".img1")
const imageContainerEl = document.querySelector(".card1")

let currentImg = 1;
 
let timeout;

// nextEl.addEventListener('click', () => {
//     currentImg++;
//     clearTimeout(timeout);
//     updateImg();
// })

// prevEl.addEventListener('click', () => {
//     currentImg--;
//     clearTimeout(timeout);
//     updateImg();
// })

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }else if (currentImg < 1) {
        currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 680}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}


/* detail product */
/*let count = 0;

const value = document.querySelector("#one");
const btnsEl = document.querySelectorAll(".btn");

btnsEl.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && count > 1) {   //or  if (styles.contains("decrease") && count > 0)
        count--;
        }else  if (styles.contains("increase")) {
            count++;
        } else  {
            count = 1;
        }
        value.textContent = count;
    });
}); */

