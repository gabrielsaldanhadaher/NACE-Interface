const formCadastro = document.querySelector('.formulario-login');

if (formCadastro) {
    formCadastro.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const rgm = document.getElementById('rgm').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmarSenha = document.getElementById('confirmar-senha').value.trim();

        if (!nome) {
            alert('Preencha o campo Nome.');
            document.getElementById('nome').focus();
            return;
        }

        if (!rgm || rgm.length !== 8) {
            alert('Preencha o campo RGM com 8 dígitos.');
            document.getElementById('rgm').focus();
            return;
        }

        if (!email || !/[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)) {
            alert('Preencha o campo E-mail com um endereço válido.');
            document.getElementById('email').focus();
            return;
        }

        if (!senha) {
            alert('Preencha o campo Senha.');
            document.getElementById('senha').focus();
            return;
        }

        if (senha.length < 8 || senha.length > 16) {
            alert('A senha deve ter entre 8 e 16 caracteres.');
            document.getElementById('senha').focus();
            return;
        }

        if (!/[A-Z]/.test(senha)) {
            alert('A senha deve conter pelo menos uma letra maiúscula.');
            document.getElementById('senha').focus();
            return;
        }

        if (!/[a-z]/.test(senha)) {
            alert('A senha deve conter pelo menos uma letra minúscula.');
            document.getElementById('senha').focus();
            return;
        }

        if (!/[0-9]/.test(senha)) {
            alert('A senha deve conter pelo menos um número.');
            document.getElementById('senha').focus();
            return;
        }

        if (!/[^a-zA-Z0-9]/.test(senha)) {
            alert('A senha deve conter pelo menos um caractere especial. Ex: @, #, !, $');
            document.getElementById('senha').focus();
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            document.getElementById('confirmar-senha').focus();
            return;
        }

        alert('Cadastro realizado com sucesso!');
        window.location.href = '../index.html';
    });
}