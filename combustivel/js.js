function verificar() {
    const precoAlcool = 4.90
    const precoGasolina = 5.50
    const litros = document.getElementById('litros').value
    const combustivel = document.getElementById('combustivel').value
    const mensagem = document.getElementById('mensagem')
    let porcentagemDesconto = 7 / 100
    let valor = 0
    let valorDoDesconto = 0
    let valorComDesconto = 0


    if (!litros || !combustivel) {
        mensagem.innerHTML = 'Preencha todos os campos'
        return
    }

    console.log("Combustivel: ", combustivel)


    if (combustivel === "gasolina") {
        let valor = litros * precoGasolina

        if (litros <= 20) {
            valorDoDesconto = valor * porcentagemDesconto
            valorComDesconto = valor - valorDoDesconto
            console.log("porcentagemDesconto: ", porcentagemDesconto)

        } else {
            porcentagemDesconto = 8 / 100
            valorDoDesconto = valor * porcentagemDesconto
            valorComDesconto = valor - valorDoDesconto
            console.log("porcentagemDesconto: ", porcentagemDesconto)
        }

        mensagem.innerHTML = valorComDesconto.toFixed(2)
        console.log("valorComDesconto: ", valorComDesconto)

    } else {
        let valor = litros * precoAlcool
        if (litros <= 20) {
            porcentagemDesconto = 6 / 100
            valorDoDesconto = valor * porcentagemDesconto
            valorComDesconto = valor - valorDoDesconto
            console.log("porcentagemDesconto: ", porcentagemDesconto)

        } else {
            valorDoDesconto = valor * porcentagemDesconto
            valorComDesconto = valor - valorDoDesconto
            console.log("porcentagemDesconto: ", porcentagemDesconto)
        }

        mensagem.innerHTML = valorComDesconto.toFixed(2)
        console.log("valorComDesconto: ", valorComDesconto)
    }
}