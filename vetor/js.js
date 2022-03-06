function verificar() {
    const valores = document.getElementById('valores').value
    const numeros = valores.split(',').sort((a, b) => b - a)
    const inteiro = document.getElementById('inteiro').value
    const mensagem = document.getElementById('mensagem')
    const numerosDuplicados = numeros.map(x => x)
    let resultadoArray = 0
    let numeroDePares = 0


    for (let indexNumeros = 0; indexNumeros < numeros.length; indexNumeros++) {

        for (let indexNumerosDuplicados = indexNumeros + 1; indexNumerosDuplicados < numeros.length; indexNumerosDuplicados++) {
            resultadoArray = numeros[indexNumeros] - numerosDuplicados[indexNumerosDuplicados]
            if (resultadoArray == inteiro) {
                numeroDePares++
            }
        }
    }

    mensagem.innerHTML = numeroDePares
}