const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formElemnts = event.currentTarget.elements;
  const mail = formElemnts.email;
  const password = formElemnts.password;
  if (mail.value === '' || password.value === '') {
    alert('Будь ласка, заповніть всі поля форми.');
    return;
  }
  const formData = {
    email: mail.value,
    password: password.value,
  };
  console.log(formData);
  form.reset();
}
