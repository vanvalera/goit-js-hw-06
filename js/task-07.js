const input = document.getElementById('font-size-control');
const text = document.getElementById('text');
input.addEventListener('input', onInputTextSize);
function onInputTextSize(event) {
  const fontSize = event.target.value + 'px';
  text.style.fontSize = fontSize;
}
