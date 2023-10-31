const loginFormElem = document.querySelector("form.login-form");

loginFormElem.addEventListener("submit", onloginFormElemSubmit);

function onloginFormElemSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  const result = { email, password };

  if (email && password) {
    console.log(result);
  } else {
    alert("Всі поля повинні бути заповнені");
  }

  event.target.reset();
}
