function verificar() {
    const frase = document.getElementById('frase').value
    let mensagem = document.getElementById('mensagem')
    const fraseSemEspaco = frase.replaceAll(' ', '')
    let tamanho = fraseSemEspaco.length
    let raiz = Math.sqrt(tamanho)
    let raizAproximado = Math.round(raiz)
    let indice = 0
    let respostas = ''

    while (indice < fraseSemEspaco.length) {
        respostas += fraseSemEspaco.substr(indice, raizAproximado) + '<br/>'
        indice += raizAproximado
    }

    mensagem.innerHTML = respostas;

}