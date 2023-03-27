const form = document.querySelector(".formcontato__form");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputAssunto = document.querySelector("#assunto");
const textarea = document.querySelector("#mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Tudo certo, em breve entrarei em contato, obrigado!");

  inputNome.value = "";
  inputEmail.value = "";
  inputAssunto.value = "";
  textarea.value = "";
});
