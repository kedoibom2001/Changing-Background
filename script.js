const css = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");
const btn = document.querySelector(".btn");

function changeBackgroundColor() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}) `;
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);

btn.addEventListener("click", function () {
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  color1.value = `#${randomColor1}`;
  color2.value = `#${randomColor2}`;
  changeBackgroundColor();
});
