const btn = document.querySelector(".button");
const imgContainer = document.querySelector(".imgContainer");

const images = [
    { id: 1, img: "images/img-1.jpg" },
    { id: 2, img: "images/img-2.jpg" },
    { id: 3, img: "images/img-3.jpg" },
    { id: 4, img: "images/img-4.jpg" },
    { id: 5, img: "images/img-5.jpg" },
    { id: 6, img: "images/img-6.jpg" },
    { id: 7, img: "images/img-3.jpg" },
];
let content = images
    .map(function (image) {
        return `<div class="slider">
<img src=${image.img} class="" alt="" />
<span>${image.id}</span>
</div>`;
    })
    .join("");
imgContainer.innerHTML = content;

const sliders = document.querySelectorAll(".slider");
const buttons = document.querySelector(".buttons");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

sliders.forEach(function (slider, index) {
    slider.style.cssText = `left: ${100 * index}%
    `;
});

let x = 0;

buttons.addEventListener("click", function (button) {
    if (button.target.className === "next") {
        x -= 100;
    } else {
        x += 100;
    }
    sliders.forEach(function (slider) {
        if (x <= 0 && x >= -(sliders.length - 1) * 100) {
            console.log(x);
            const styles = {
                transform: `translate(${x}%,0%)`,
            };
            Object.assign(slider.style, styles);

            prevBtn.classList.remove("hide");
        } else if (x > 0) {
            const styles = {
                transform: `translate(0%,0%)`,
            };
            Object.assign(slider.style, styles);
            x = 0;
        } else {
            const styles = {
                transform: `translate(${-(sliders.length - 1) * 100}%,0%)`,
            };
            Object.assign(slider.style, styles);
            x = -(sliders.length - 1) * 100;
        }

        if (x === 0) {
            prevBtn.classList.add("hide");
        }

        if (x === -(sliders.length - 1) * 100) {
            nextBtn.classList.add("hide");
        } else {
            nextBtn.classList.remove("hide");
        }
    });
});
