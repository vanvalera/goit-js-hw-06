const btnChangeColor = document.querySelector('.change-color');
const curentColorValue = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  curentColorValue.textContent = randomColor;
});
