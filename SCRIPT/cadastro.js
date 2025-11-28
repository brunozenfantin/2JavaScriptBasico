let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome: Insira um nome válido!!'
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome:'
        validNome = true
    }
})

usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario: Insira um usuario válido!!'
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario:'
        validUsuario = true
    }
})



senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 8) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Insira uma senha com 8 ou mais caracteres'      
    } else if (!/[A-Z]/.test(senha.value)) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha: A senha deve ter pelo menos uma letra maiúscula'
    } else if (!/[\W_]/.test(senha.value)) {
        labelSenha.innerHTML = 'Senha: A senha deve ter pelo menos um caractere especial'
        validSenha = true
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha Valida'
        validSenha = true
    }
    
    })


confirmSenha.addEventListener('keyup', ()=> {
    if(senha.value !== confirmSenha.value) {
       labelConfirmSenha.setAttribute('style', 'color: red' )
       labelConfirmSenha.innerHTML = 'Senha: As senhas não conferem'
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validConfirmSenha = true
    }
})

 function cadastrar() {
    if(validNome && validConfirmSenha && validSenha && validUsuario) {
        let listaUsuario = JSON.parse(localStorage.get.getItem('listaUsuario') || '[]')
    
        let senhaCriptografada = CriptoJS.SHA512(senha.value).toString()

        listaUsuario.push(
            {
                nomeCadastrado: nome.value,
                usuarioCadastrado: usuario.value,
                senhaCadastrada: nome.value
                
            }
        )

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))

    }
 }




