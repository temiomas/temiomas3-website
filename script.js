const wrapper = document.querySelector(".wrapper");
const question = document. querySelector(".question");
const images = document. querySelector(".images");
const yesBtn = document. querySelector(".yes-btn");
const noBtn = document . querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question.innerHTML ="i would be your duck, period!!!";
images.src ="images/IMG_8843.jpg" 
}
);
noBtn.addEventListener("mouseover",() => {
    question.innerHTML = "ooops!! wrong answer sikeeeee, you thought you had choice lol ^-^"
const noBtnReact =noBtn.getBoundingclientReact();
const maxX = Window.innerwidth - noBtnReact.innerwidth;
const maxY = Window.innerheight - noBtnReact.innerheight;




const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random()* maxY);


noBtn.computedStyleMap.left =randomX + "px";
yesBtn.computedStyleMap.top =randomY + "px";
}
);

