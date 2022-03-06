function calcular() {
    let saldoatual = 0
    const saldo = document.getElementById('saldo').value
    const debito = document.getElementById('debito').value
    const credito = document.getElementById('credito').value
    const mensagem = document.getElementById('mensagem')


    if (!saldo || !debito || !credito) {
        mensagem.innerHTML = 'Preencha todos os campos'
        return
    }

    saldoatual = Number(saldo) - Number(debito) + Number(credito)

    console.log(saldo)
    console.log(debito)
    console.log(credito)
    console.log(debito + credito)

    if (saldoatual > 0) {
        mensagem.innerHTML = 'CLIENTE ADIMPLENTE - seu saldo é R$' + saldoatual
    } else if (saldoatual < 0) {
        mensagem.innerHTML = 'CLIENTE INADIMPLENTE - seu saldo é R$' + saldoatual
        mensagem.innerHTML = `CLIENTE INADIMPLENTE - seu saldo é R$ ${saldoatual} `
        // duas formas de apresentar a mesma informação com o uso das aspas  
    }
}