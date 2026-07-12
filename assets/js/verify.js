
export function validateName(name){
    if (!name) {
        return false;
    }
    return true;
}

export function validateRGM(rgm){
    if (!rgm || rgm.length !== 8) {
        return false;
    }
    return true;
}


export function validateEmail(email){
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // o test() verifica se o email está no formato correto
        return false;
    }
    return true;
}

export function validatePhone(telefone){
    if (telefone !== '' && telefone.length !== 11) {
    return false;
    }
    return true;
}

export function validateCourse(curso){
    if (!curso) {
        return false;
    }
    return true;
}

export function validateCoordinator(coordenador){
    if (!coordenador) {
        return false;
    }
    return true;
}

export function validateShift(turno){
    if (!turno) {
        return false;
    }
    return true;
}

export function validateDate(data){
    if (!data) {
        return false;
    }
    return true;
}

export function validateProfessor(professor){
    if (!professor) {
        return false;
    }
    return true;
}

export function validateHealthCondition(algumaMarcadaCondicao){
    if (!algumaMarcadaCondicao) {
        return false;
    }
    return true;
}

export function validateAccessibility(necessidade){
    if (!necessidade) {
        return false;
    }
    return true;
}

export function validateLaudo(laudo){
    if (!laudo) {
        return false;
    }
    return true;
}

export function validateConsent(consentimento){
    if (!consentimento) {
        return false;
    }
    return true;
}

export function validatePassword(senha, confirmarSenha){
    if (!senha) {
        alert('Preencha o campo Senha.')
        return false;
    } else if (senha.length < 8 || senha.length > 16) {
        alert('A senha deve ter entre 8 e 16 caracteres.')
        return false;
    } else if (!/[A-Z]/.test(senha)) {
        alert('A senha deve conter pelo menos uma letra maiúscula.')
        return false;
    } else if (!/[a-z]/.test(senha)) {
        alert('A senha deve conter pelo menos uma letra minúscula.')
        return false;
    } else if (!/[0-9]/.test(senha)) {
        alert('A senha deve conter pelo menos um número.')
        return false;
    } else if (!/[^a-zA-Z0-9]/.test(senha)) {
        alert('A senha deve conter pelo menos um caractere especial. Ex: @, #, !, $')
        return false;
    }
    return true;
}

export function validatePasswordConfirmation(senha, confirmarSenha){
    if (senha !== confirmarSenha) {
        return false;
    }
    return true;
}