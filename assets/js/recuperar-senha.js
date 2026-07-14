import { validateEmail, validateRGM } from './verify.js';

const formRecuperarSenha = document.querySelector(".formulario-recuperar-senha");


export function recuperarSenha(email, rgm) {

        if (!validateEmail(email)) {
            alert("Preencha o campo E-mail com um endereço válido.");
            document.getElementById("email-recuperar").focus();
            return;
        }

        if (!validateRGM(rgm)) {
            alert("Preencha o campo RGM com um valor válido.");
            document.getElementById("rgm-recuperar").focus();
            return;
        }
    
    return true;
}