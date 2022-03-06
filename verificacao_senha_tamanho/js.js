function verificar() {
    let tamanhoDaSenha = 0
    const senha = document.getElementById('senha').value
    const mensagem = document.getElementById('mensagem')


    if (!senha) {
        mensagem.innerHTML = 'Digite a sua senha'
        return
    }

    tamanhoDaSenha = senha.length

    if (tamanhoDaSenha >= 10) {
        mensagem.innerHTML = 'SENHA SEGURA'
    } else if (tamanhoDaSenha < 10) {
        mensagem.innerHTML = 'SENHA INSEGURA - Digite uma senha com 10 caracteres'
    }
}