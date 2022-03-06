function verificar() {
    const valores = document.getElementById('valores').value
    const numeros = valores.split(',')
    let mensagem = document.getElementById('mensagem')
    let tamanhoArray = numeros.length
    let resto = numeros.length % 2

    numeros.sort((a, b) => a - b);

    if (resto == 0) {

        mensagem.innerHTML = 'Lista de números com número par de elementos';
    } else (resto != 0); {
        let mediana = (numeros.length / 2) + 0.5
        mensagem.innerHTML = numeros[mediana - 1];

    }

}