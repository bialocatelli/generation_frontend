let linkedin = document.querySelector('#linkedin')
let github = document.querySelector('#github')
let emailImg = document.querySelector('#emailImg')
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '31%'
email.style.width = '31%'

function lZoom() {
    linkedin.style.width = '45px'
    linkedin.style.height = '45px'
}

function lNormal() {
    linkedin.style.width = '40px'
    linkedin.style.height = '40px'
}

function gZoom() {
    github.style.width = '45px'
    github.style.height = '45px'
}

function gNormal() {
    github.style.width = '40px'
    github.style.height = '40px'
}

function eZoom () {
    emailImg.style.width = '45px'
    emailImg.style.height = '45px'
}

function eNormal () {
    emailImg.style.width = '40px'
    emailImg.style.height = '40px'
}

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = "#FF0000"
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = "#008000"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = "#FF0000"
    } else {
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = "#008000"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres!'
        txtAssunto.style.color = "#FF0000"
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Todos os campos devem ser preenchidos!')
    }
}