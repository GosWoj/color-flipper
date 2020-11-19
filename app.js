const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  //which color is displaying
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //getting random number between 0-3
  return Math.floor(Math.random() * colors.length);
}
