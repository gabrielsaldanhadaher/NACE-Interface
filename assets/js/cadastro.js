import { cadastroUsuario } from './APIs-POST.js';
import { validateName, validateRGM, validateEmail, validatePassword, validatePasswordConfirmation } from './verify.js';

const formCadastro = document.getElementById('formulario-cadastro');
const btnCadastro = document.getElementById("botao-cadastro");

if (formCadastro) {
    formCadastro.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const rgm = document.getElementById('rgm').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmar-senha').value.trim();

        if (!validateName(nome)) {
            alert('Preencha o campo Nome.');
            document.getElementById('nome').focus();
            return;
        }

        if (!validateRGM(rgm)) {
            alert('Preencha o campo RGM com 8 dígitos.');
            document.getElementById('rgm').focus();
            return;
        }

        if (!validateEmail(email)) {
            alert('Preencha o campo E-mail com um endereço válido.');
            document.getElementById('email').focus();
            return;
        }

        if (!validatePassword(senha)) {
            document.getElementById('senha').focus();
            return;
        }

        if (!validatePasswordConfirmation(senha, confirmarSenha)) {
            alert('As senhas não coincidem.');
            document.getElementById('confirmar-senha').focus();
            return;
        }

        const cadastroOk = await cadastroUsuario(nome, rgm, email, senha);

        if (cadastroOk) {
            window.location.href = '../index.html';
        }
    });
}
