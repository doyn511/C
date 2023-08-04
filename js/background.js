const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg",];

const chosenImage = images[Math.floor(Math.random() *images.length)];

//js에서 html에 새롭게 요소를 추가하고자 할 때 createElement 사용
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";

//body에 img 태그를 추가하기 위해 appendChild() 사용
document.body.appendChild(bgImage);