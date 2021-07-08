//Variáveis

const nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validaNome = false

const nome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validaSobrenome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validaEmail = false

let renda = document.querySelector('#renda')
let labelRenda = document.querySelector('#labelRenda')
let validaRenda = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validaTelefone = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validaEndereco = false

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validaNumero = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validaCidade = false

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validaEstado = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validaCep = false

let btnSalvar = document.querySelector('#salvar')

let mensagemSucesso = document.querySelector('#mensagemSucesso')

let usuario = document.querySelector('#usuario')

//Saudação
usuario.setAttribute('style', 'color:white')
usuario.innerHTML = '<p>Olá ${nomeCadastrado}!</p>'


//Validação de Cadastro
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    nome.setAttribute('style', 'border-color: red')
    validaNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    nome.setAttribute('style', 'border-color: var(--efeito-active)')
    validaNome = true
  }
})

email.addEventListener('keyup', () => {
  if (document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 || document.forms[0].email.value.indexOf('.') == -1) {
    email.setAttribute('style', 'border-color: red')
    validaEmail = false
  } else {
    email.setAttribute('style', 'border-color: var(--efeito-active)')
    validaEmail = true
  }
})

btnSalvar.addEventListener('click', (e) => {
  e.preventDefault();

  if (validaNome == true && validaEmail == true) {
    mensagemErro.setAttribute('style', 'display: none')
    mensagemErro.innerHTML = ''
    mensagemSucesso.setAttribute('style', 'display: block')
    mensagemSucesso.innerHTML = 'Dados salvos com sucesso'

    let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

    listaUsuario.push(
      {
        nomeCadastrado: nome.value,
        emailCadastrado: email.value,
      }
    )

    localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))

    setTimeout(() => {
      window.location.href = 'login.html'
    }, 2000)

  } else {
    mensagemSucesso.setAttribute('style', 'display: none')
    mensagemSucesso.innerHTML = ''
    mensagemErro.setAttribute('style', 'display: block')
    mensagemErro.innerHTML = 'Preencha os campos corretamente'
  }
})