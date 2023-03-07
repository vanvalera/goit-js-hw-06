let counterValue = 0;
const valueSpan = document.getElementById('value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});
