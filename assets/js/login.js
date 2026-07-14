import { validateEmail, validatePassword } from './verify.js';
import { loginUsuario } from './APIs-POST.js'

const formLogin = document.querySelector(".formulario-login");

formLogin.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email-aluno").value.trim();
    const senhaLogin = document.getElementById("senha").value.trim();

    if (!validateEmail(email)) {
        alert("Preencha o campo E-mail com um endereço válido.");
        document.getElementById("email-aluno").focus();
        return;
    }

    if (!validatePassword(senhaLogin)) {
        alert("Preencha o campo Senha.");
        document.getElementById("senha").focus();
        return;
    };
    
    const loginOk = await loginUsuario(email, senhaLogin);

    if (loginOk) {
        loginOk;
        window.location.href = "pages/solicitacao-prova.html";
    }
});