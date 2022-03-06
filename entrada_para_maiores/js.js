function verificar() {
    const idade = document.getElementById('idade').value
    const mensagem = document.getElementById('mensagem')


    if (!idade) {
        mensagem.innerHTML = 'Preencha todos os campos'
        return
    }

    if (idade < 18) {
        mensagem.innerHTML = 'ACESSO NEGADO'
    } else if (idade > 18) {
        mensagem.innerHTML = 'PODE ENTRAR'
    }
}