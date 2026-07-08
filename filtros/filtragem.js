const dados = {
  "Prof. Coordenador João Silva": {
    cursos: {
      "ADMINISTRAÇÃO": {
        professores: ["Prof. Ana Lima", "Prof. Carlos Souza"],
        disciplinas: ["Gestão de Pessoas", "Marketing", "Finanças"]
      },
      "CIÊNCIAS CONTÁBEIS": {
        professores: ["Prof. Maria Oliveira", "Prof. Pedro Costa"],
        disciplinas: ["Contabilidade Geral", "Auditoria", "Direito Tributário"]
      }
    }
  },
  "Prof. Coordenadora Ana Souza": {
    cursos: {
      "ENGENHARIA CIVIL": {
        professores: ["Prof. Roberto Alves", "Prof. Fernanda Dias"],
        disciplinas: ["Cálculo I", "Resistência dos Materiais", "Estruturas de Concreto"]
      },
      "ENGENHARIA DE PRODUÇÃO": {
        professores: ["Prof. Lucas Ferreira", "Prof. Juliana Ramos"],
        disciplinas: ["Pesquisa Operacional", "Gestão da Qualidade", "Logística"]
      }
    }
  }
} // isso é exemplo de dados, você pode substituir pelos dados reais do seu sistema

function inicializarFiltros() {
  const selectCoordenador = document.getElementById('coordenador')
  const selectCurso       = document.getElementById('curso')
  const selectProfessor   = document.getElementById('professor')
  const selectDisciplina  = document.getElementById('disciplina')

  function limpar(select, placeholder) {
    select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`
    select.disabled = true
  }

  function popular(select, itens) {
    itens.forEach(item => {
      const option = document.createElement('option')
      option.value = item
      option.textContent = item
      select.appendChild(option)
    })
    select.disabled = false
  }

  // estado inicial
  limpar(selectCurso, 'Selecione o coordenador primeiro')
  limpar(selectProfessor, 'Selecione o curso primeiro')
  limpar(selectDisciplina, 'Selecione o curso primeiro')

  // popula coordenadores
  Object.keys(dados).forEach(nome => {
    const option = document.createElement('option')
    option.value = nome
    option.textContent = nome
    selectCoordenador.appendChild(option)
  })

  // ao mudar coordenador → filtra cursos e reseta o resto
  selectCoordenador.addEventListener('change', function () {
    const coordenadorSelecionado = dados[this.value]

    limpar(selectCurso, 'Selecione')
    limpar(selectProfessor, 'Selecione o curso primeiro')
    limpar(selectDisciplina, 'Selecione o curso primeiro')

    popular(selectCurso, Object.keys(coordenadorSelecionado.cursos))
  })

  // ao mudar curso → filtra professores e disciplinas
  selectCurso.addEventListener('change', function () {
    const cursoSelecionado = dados[selectCoordenador.value].cursos[this.value]

    limpar(selectProfessor, 'Selecione')
    limpar(selectDisciplina, 'Selecione')

    popular(selectProfessor, cursoSelecionado.professores)
    popular(selectDisciplina, cursoSelecionado.disciplinas)
  })
}

document.addEventListener('DOMContentLoaded', inicializarFiltros)