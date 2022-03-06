function verificar() {

    const senha = document.getElementById('senha').value
    const mensagem = document.getElementById('mensagem')
    console.log("senha", senha)

    if (!senha) {
        mensagem.innerHTML = 'Digite a sua senha'
        return
    }

    const tamanhoDaSenha = senha.length
    const regexSeguro = new RegExp(/(?=[a-z0-9!-A-Z]{6})/).test(senha)
    console.log('tamanhoDaSenha', tamanhoDaSenha)
    console.log('regexSeguro', regexSeguro)

    if (tamanhoDaSenha >= 6 && regexSeguro === true) {
        mensagem.innerHTML = 'SENHA SEGURA'
    } else if (tamanhoDaSenha >= 6 && regexSeguro === false) {
        mensagem.innerHTML = 'SENHA FRACA -  A sua senha deve conter pelo menos 1 caracter Especial, 1 Maiusculo, 1 Minusculo e 1 número '
    } else if (tamanhoDaSenha < 6 && regexSeguro === false) {
        mensagem.innerHTML = `SENHA INSEGURA - Faltam ${6 - tamanhoDaSenha} caracteres para sua senha ser uma senha segura`
    }
}