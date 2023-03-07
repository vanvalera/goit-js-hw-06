function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateDiv = document.querySelector('[data-create]');
const btnDestroyDiv = document.querySelector('[data-destroy]');
const inputValue = document.querySelector('input');
const divBox = document.querySelector('#boxes');
btnCreateDiv.addEventListener('click', createBoxes);
btnDestroyDiv.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  const amountDiv = Number(inputValue.value);
  let size = 30;
  for (let i = 0; i < amountDiv && i < 100; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size += 10;
    box.style.backgroundColor = getRandomHexColor();
    divBox.appendChild(box);
  }
}
function destroyBoxes() {
  divBox.innerHTML = '';
}
