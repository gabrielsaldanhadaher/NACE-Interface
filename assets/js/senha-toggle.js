(function () {
      var botao = document.querySelector('.botao-ver-senha');
      var campo = document.getElementById('senha');
      if (botao && campo) {
        botao.addEventListener('click', function () {
          var visivel = campo.type === 'text';
          campo.type = visivel ? 'password' : 'text';
          botao.textContent = visivel ? 'Mostrar' : 'Ocultar';
          botao.setAttribute('aria-pressed', String(!visivel));
          botao.setAttribute('aria-label', visivel ? 'Mostrar senha' : 'Ocultar senha');
        });
      }
    })();