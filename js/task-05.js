const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
  output.textContent = event.currentTarget.value || 'Anonymous';
}
