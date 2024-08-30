function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector("#controls")
const amount = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes")




function createBoxes(amount) {


  const divToDelete = document.querySelectorAll(".newDiv");

  divToDelete.forEach(div => {
    div.remove();
  });

  
let width = 20
let height = 20

for (let i = 0; i < amount; i++) {

  width += 10;
  height += 10;


  const div = document.createElement("div");
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  div.classList.add("newDiv")
  div.style.backgroundColor = getRandomHexColor();
  boxes.append(div)
}
}



createButton.addEventListener("click", () => {

  if (amount.value > 0 && amount.value <= 100) {
    createBoxes(amount.value)
  }

  amount.value = "";

})


destroyButton.addEventListener("click", () => {

  const divToDelete = document.querySelectorAll(".newDiv");


  divToDelete.forEach(div => {
    div.remove();
  });

})






