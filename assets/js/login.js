const formLogin = document.querySelector(".formulario-login");

formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const rgm = document.getElementById("rgm").value.trim();
    const senhaLogin = document.getElementById("senha").value.trim();

    if (!rgm || rgm.length !== 8) {
        alert("Preencha o campo RGM com 8 dígitos.");
        document.getElementById("rgm").focus();
        return;
    }

    if (!senhaLogin) {
        alert("Preencha o campo Senha.");
        document.getElementById("senha").focus();
        return;
    }

    if (senhaLogin.length < 8 || senhaLogin.length > 16) {
      alert("A senha deve ter entre 8 e 16 caracteres.");
      document.getElementById("senha").focus();
      return;
    }

  if (!/[A-Z]/.test(senhaLogin)) {
    alert("A senha deve conter pelo menos uma letra maiúscula.");
    document.getElementById("senha").focus();
    return;
  }

  if (!/[a-z]/.test(senhaLogin)) {
    alert("A senha deve conter pelo menos uma letra minúscula.");
    document.getElementById("senha").focus();
    return;
  }

  if (!/[0-9]/.test(senhaLogin)) {
    alert("A senha deve conter pelo menos um número.");
    document.getElementById("senha").focus();
    return;
  }

  if (!/[^a-zA-Z0-9]/.test(senhaLogin)) {
    alert("A senha deve conter pelo menos um caractere especial. Ex: @, #, !, $");
    document.getElementById("senha").focus();
    return;
  }

  // tudo ok
  alert("Login realizado com sucesso!");
  formLogin.submit();
  window.location.href = "pages/solicitacao-prova.html";
});