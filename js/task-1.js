

const number = document.body.querySelectorAll(".item")
console.log(`Number of categories:  ${number.length}`)


const categ = document.body.querySelectorAll("#categories > li.item")

categ.forEach((e) => {

  const title = e.querySelector("h2");
  const elem = e.querySelectorAll("h2 + ul > li");

  console.log(`Category:  ${title.textContent}`)
  console.log(`Elements:  ${elem.length}`)

});






