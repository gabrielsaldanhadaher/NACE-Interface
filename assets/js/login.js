import { validateRGM, validatePassword } from './verify.js';

const formLogin = document.querySelector(".formulario-login");

formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const rgm = document.getElementById("rgm").value.trim();
    const senhaLogin = document.getElementById("senha").value.trim();

    if (!validateRGM(rgm)) {
        alert("Preencha o campo RGM com 8 dígitos.");
        document.getElementById("rgm").focus();
        return;
    }

    if (!validatePassword(senhaLogin)) {
        alert("Preencha o campo Senha.");
        document.getElementById("senha").focus();
        return;
    }


  // tudo ok
  alert("Login realizado com sucesso!");
  formLogin.submit();
  window.location.href = "pages/solicitacao-prova.html";
});