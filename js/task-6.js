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

  let width = 30;
  let height = 30;
  let markup = '';


  for (let i = 0; i < amount; i++) {

      const color = getRandomHexColor();
      markup +=`
      <div style="width: ${width}px; height: ${height}px; background-color: ${color};" class="newDiv"></div>
    `;

      width += 10;
      height += 10;
  }


  boxes.innerHTML = markup;
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



