function calcular() {
    let resultado = 0
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const mensagem = document.getElementById('mensagem')


    if (!peso || !altura) {
        mensagem.innerHTML = 'Preencha todos os campos'
        return
    }

    resultado = peso / (altura * altura)

    console.log("IMC", resultado)
    if (resultado < 20) {
        mensagem.innerHTML = 'ABAIXO DO PESO'
    } else if (resultado > 20 && resultado < 25) {
        mensagem.innerHTML = 'PESO NORMAL'
    } else if (resultado > 25 && resultado < 30) {
        mensagem.innerHTML = 'SOBREPESO'
    } else if (resultado > 30 && resultado < 40) {
        mensagem.innerHTML = 'OBESO'
    } else {
        mensagem.innerHTML = 'OBESO MORBIDO'
    }
}