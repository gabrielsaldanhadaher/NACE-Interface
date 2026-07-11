// const btnCadastrar = document.getElementById("botao-cadastro");

// btnCadastrar.addEventListener("click", cadastroUsuario);
const URLR = "http://localhost:3000/usuarios";

export async function reqProva(nome, email, rgm, telefone, curso, coordenador, turno, data, professor, algumaMarcadaCondicao, algumaMarcada, laudo, consentimento, observacoes) {

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
            throw new Error("Erro ao cadastrar.");
        }

        const dados = await resposta.json();

        alert(dados.mensagem);

    } catch (erro) {

        console.error(erro);
        alert("Erro ao cadastrar usuário.");

    }

}

// const URLC = "https://speech-huddle-caucus.ngrok-free.dev/sign-up";

export async function cadastroUsuario(nome_completo, rgm_cadastro, email_cadastro, senha) {
// const btnCadastrar = document.getElementById("btnCadastrar");
// btnCadastrar.addEventListener("click", cadastrarUsuario);

    const URLC = "https://speech-huddle-caucus.ngrok-free.dev/sign-up"; // sign-up

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

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar.");
        }

        if (resposta.status === 409) {
            throw new Error("Usuário já cadastrado.");
            return;
        }

        const dados = await resposta.json();

        alert(dados.mensagem);

    } catch (erro) {

    console.error(erro);
    alert("Erro ao cadastrar usuário.");
    return;

    }

};
