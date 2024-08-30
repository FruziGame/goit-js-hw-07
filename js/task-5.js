function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")
const bodyColor = document.querySelector("body")


buttonColor.addEventListener('click', () => {

  const newColor = getRandomHexColor();

  bodyColor.style.backgroundColor = newColor;
  spanColor.textContent = newColor

})




