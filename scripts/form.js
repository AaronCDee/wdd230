const form     = document.getElementById("user-form");
const formErr  = document.getElementById("form-error");
const pr       = document.getElementById("page-rating");
const prOutput = document.getElementById("page-rating-output");
const pwd      = document.getElementById("password");
const pwdConf  = document.getElementById("password-confirmation");

pr.addEventListener("input", (e) => {
  prOutput.innerText = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formErr.classList.contains("hidden")) {
    formErr.classList.add("hidden");
  }

  if(pwd.value != pwdConf.value) {
    pwdConf.value = "";
    pwdConf.focus();
    formErr.innerText = "Password and password confirmation do not match!"
    formErr.classList.remove("hidden");

    return;
  }

  e.target.submit();
})