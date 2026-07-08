const form = document.querySelector('.formulario-nace')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  // campos de texto obrigatórios
  const nome = document.getElementById('nome-completo').value.trim()
  const rgm = document.getElementById('ra-matricula').value.trim()
  const email = document.getElementById('email-aluno').value.trim()
  const telefone = document.getElementById('telefone-aluno').value.trim()
  const curso = document.getElementById('curso').value
  const coordenador = document.getElementById('coordenador-curso').value.trim()
  const professor = document.getElementById('professor').value.trim()
  const turno = document.getElementById('turno').value
  const laudo = document.getElementById('laudo').value
  const data = document.getElementById('data-prova').value
  const consentimento = document.getElementById('consentimento-lgpd').checked

  // pelo menos um checkbox de necessidade marcado
  const checkboxes = document.querySelectorAll('.campo-checkbox[type="checkbox"]:not(#consentimento-lgpd)')
  const algumaMarcada = Array.from(checkboxes).some(cb => cb.checked)

const checkboxesCondicao = document.querySelectorAll('input[name="condicao"]')
const algumaMarcadaCondicao = Array.from(checkboxesCondicao).some(cb => cb.checked)

    //validações
  if (!nome) {
    alert('Preencha o campo Nome completo.')
    document.getElementById('nome-completo').focus()
    return
  }

  if (!rgm) {
    alert('Preencha o campo RGM.')
    document.getElementById('ra-matricula').focus()
    return
  }

  if (!email) {
    alert('Preencha o campo E-mail.')
    document.getElementById('email-aluno').focus()
    return
  }

  if (!telefone) {
    alert('Preencha o campo Telefone.')
    document.getElementById('telefone-aluno').focus()
    return
  }

  if (!curso) {
    alert('Selecione o seu Curso.')
    document.getElementById('curso').focus()
    return
  }

    if (!coordenador) {
    alert('Preencha o campo Coordenador do curso.')
    document.getElementById('coordenador-curso').focus()
    return
  }

  if (!turno) {
    alert('Selecione o seu Turno.')
    document.getElementById('turno').focus()
    return
  }

  if (!data) {
    alert('Preencha o campo Data da prova.')
    document.getElementById('data-prova').focus()
    return
  }

    if (!professor) {
    alert('Preencha o campo Professor.')
    document.getElementById('professor').focus()
    return
  }

  if (!algumaMarcadaCondicao) {
    alert('Selecione pelo menos uma condição de saúde.')
    return
  }

  if (!algumaMarcada) {
    alert('Selecione pelo menos uma necessidade de acessibilidade.')
    return
  }



  if (!laudo) {
    alert('Selecione se possui Laudo.')
    document.getElementById('laudo').focus()
    return
  }

  if (!consentimento) {
    alert('Você precisa aceitar o termo de consentimento da LGPD para enviar.')
    document.getElementById('consentimento-lgpd').focus()
    return
  }

  // tudo ok — aqui você envia o form
  alert('Solicitação enviada com sucesso!')
  form.submit()
})