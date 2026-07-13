import { reqProva } from './APIs-POST.js'

import {
  validateName,
  validateRGM,
  validateEmail,
  validatePhone,
  validateCourse,
  validateCoordinator,
  validateShift,
  validateDate,
  validateProfessor,
  validateHealthCondition,
  validateAccessibility,
  validateLaudo,
  validateConsent
} from './verify.js'

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
  const observacoes = document.getElementById('observacoes').value.trim()

  const checkboxesNecessidade = document.querySelectorAll('input[type="checkbox"][name^="necessidade-"]')
  const algumaMarcada = Array.from(checkboxesNecessidade).some(cb => cb.checked)

  const checkboxesCondicao = document.querySelectorAll('input[name="condicao"]')
  const algumaMarcadaCondicao = Array.from(checkboxesCondicao).some(cb => cb.checked)

  if (!validateName(nome)) {
    alert('Preencha o campo Nome completo.')
    document.getElementById('nome-completo').focus()
    return
  }

  if (!validateRGM(rgm)) {
    alert('Preencha o campo RGM com 8 dígitos.')
    document.getElementById('ra-matricula').focus()
    return
  }

  if (!validateEmail(email)) {
    alert('Preencha o campo E-mail com um endereço válido.')
    document.getElementById('email-aluno').focus()
    return
  }

  if (!validatePhone(telefone)) {
    alert('Preencha o campo Telefone com 11 dígitos.')
    document.getElementById('telefone-aluno').focus()
    return
  }

  if (!validateCourse(curso)) {
    alert('Selecione o seu Curso.')
    document.getElementById('curso').focus()
    return
  }

  if (!validateCoordinator(coordenador)) {
    alert('Preencha o campo Coordenador do curso.')
    document.getElementById('coordenador-curso').focus()
    return
  }

  if (!validateShift(turno)) {
    alert('Selecione o seu Turno.')
    document.getElementById('turno').focus()
    return
  }

  if (!validateDate(data)) {
    alert('Preencha o campo Data da prova.')
    document.getElementById('data-prova').focus()
    return
  }

  if (!validateProfessor(professor)) {
    alert('Preencha o campo Professor.')
    document.getElementById('professor').focus()
    return
  }

  if (!validateHealthCondition(algumaMarcadaCondicao)) {
    alert('Selecione pelo menos uma condição de saúde.')
    return
  }

  if (!validateAccessibility(algumaMarcada)) {
    alert('Selecione pelo menos uma necessidade de acessibilidade.')
    return
  }

  if (!validateLaudo(laudo)) {
    alert('Selecione se possui Laudo.')
    document.getElementById('laudo').focus()
    return
  }

  if (!validateConsent(consentimento)) {
    alert('Você precisa aceitar o termo de consentimento da LGPD para enviar.')
    document.getElementById('consentimento-lgpd').focus()
    return
  }

  // tudo ok — aqui você envia o form
  alert('Solicitação enviada com sucesso!');
  
  const reqProvaOk = await reqProva(nome, email, rgm, telefone, curso, coordenador, turno, data, professor, algumaMarcadaCondicao, algumaMarcada, laudo, consentimento, observacoes);

  if (reqProvaOk) {
    form.submit();
  }
})
