# NACE UNICID — Interface

Portal de solicitação de adaptação de provas do NACE (Núcleo de Acessibilidade) da UNICID.

## Estrutura

```
NACE-Interface/
├── index.html                     # Página de login (ponto de entrada)
├── pages/
│   └── solicitacao-prova.html     # Formulário de solicitação de adaptação
├── assets/
│   ├── css/
│   │   ├── login.css              # Estilos da tela de login
│   │   └── solicitacao.css        # Estilos do formulário
│   ├── js/
│   │   ├── login.js               # Validação do login e redirecionamento
│   │   ├── senha-toggle.js        # Botão mostrar/ocultar senha
│   │   └── solicitacao.js         # Validação do formulário
│   └── img/
│       ├── nace-logo.png
│       └── unicid-logo.png
└── README.md
```

## Fluxo

1. O usuário acessa `index.html`, informa RGM e senha.
2. Após a validação (`assets/js/login.js`), é redirecionado para `pages/solicitacao-prova.html`.
3. O formulário valida os campos (`assets/js/solicitacao.js`) antes do envio.

## Como executar

Abra `index.html` diretamente no navegador, ou sirva a pasta com um servidor estático:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```
