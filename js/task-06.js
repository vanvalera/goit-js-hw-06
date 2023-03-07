const input = document.getElementById('validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  const length = event.target.getAttribute('data-length');
  const value = event.target.value;
  if (value.length === Number(length)) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
}
