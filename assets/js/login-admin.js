import { validateEmail, validatePassword } from './verify.js';

const formLogin = document.querySelector(".formulario-login");

    function loginAdmin() {

        const email = document.getElementById("email-admin").value.trim();
        const senhaLogin = document.getElementById("senha-admin").value.trim();

        if (!validateEmail(email)) {
            alert("Preencha o campo E-mail com um endereço válido.");
            document.getElementById("email-admin").focus();
            return;
        }

        if (!validatePassword(senhaLogin)) {
            alert("Preencha o campo Senha.");
            document.getElementById("senha-admin").focus();
            return;
        };
        
    }

export function loginUsuarioAdmin() {
    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();
        loginAdmin();
    });
}
