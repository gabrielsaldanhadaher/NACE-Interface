
export async function reqProva(nome, email, rgm, telefone, curso, coordenador, turno, data, professor, algumaMarcadaCondicao, algumaMarcada, laudo, consentimento, observacoes) {

    const URLR = "http://localhost:3000/usuarios";

    const requisicao = {
        nome: nome,
        email: email,
        rgm: rgm,
        telefone: telefone,
        curso: curso,
        coordenador: coordenador,
        turno: turno,
        data: data,
        professor: professor,
        algumaMarcadaCondicao: algumaMarcadaCondicao,
        algumaMarcada: algumaMarcada,
        laudo: laudo,
        consentimento: consentimento,
        observacoes: observacoes
    };

    try {

        const resposta = await fetch(URLR, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(requisicao)

        });

        if (!resposta.ok) {
            throw new Error("Erro ao realizar a requisição.");
        }

        const dados = await resposta.json();

        alert(dados.mensagem);

    } catch (erro) {

        console.error(erro);
        alert("Erro ao cadastrar usuário.");

    }

}


export async function cadastroUsuario(nome_completo, rgm_cadastro, email_cadastro, senha) {
// const btnCadastrar = document.getElementById("btnCadastrar");
// btnCadastrar.addEventListener("click", cadastrarUsuario);

    const URLC = "https://speech-huddle-caucus.ngrok-free.dev/sign-up";

    const usuario = {
        name: nome_completo,
        email: email_cadastro,
        rgm: rgm_cadastro,
        password: senha
    };

    try {
        console.log("Enviando requisição de cadastro:", usuario);

        const resposta = await fetch(URLC, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(usuario)

        });

        if (resposta.status === 409) {
            alert("Usuário já cadastrado.");
            return false;
        }

        if (!resposta.ok) {
            throw new Error(`Erro ao cadastrar usuário. Status: ${resposta.status}`);
        }

        const dados = await resposta.json();

        alert(dados.mensagem || "Cadastro realizado com sucesso.");
        return true;

    } catch (erro) {

        console.error(erro);
        alert(erro.message || "Erro ao cadastrar usuário.");
        return false;

    }

};

export async function loginUsuario(email_login, senha_login) {
    
    const URLL = "https://speech-huddle-caucus.ngrok-free.dev/sign-in";

    const login = {
        email: email_login,
        password: senha_login
    };

    try{
        console.log("Enviando requisição de login:", login);

        const resposta = await fetch(URLL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(login)
        });

        const data = await resposta.json();

        const token = data.token;

        console.log("Token recebido:", token);

        if (!resposta.ok){
            throw new Error(`Erro ao realizar login. Status: ${resposta.status}`);
        }

        alert(data.mensagem || "Login realizado com sucesso.");
        return true;

    } catch (erro) {

        console.error(erro);
        alert(erro.message || "Erro ao realizar login.");
        return false;

    };


};
