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
// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', e => {
//   e.preventDefault(); // перевірка форми без перезавантаження сторінки

//   const emailInput = loginForm.elements.email;
//   const passwordInput = loginForm.elements.password;

//   if (emailInput.value === '' || passwordInput.value === '') {
//     alert('Будь ласка, заповніть всі поля форми.');
//     return;
//   }

//   const formData = {
//     email: emailInput.value,
//     password: passwordInput.value,
//   };

//   console.log(formData);

//   loginForm.reset(); // очищення форми
// });
