function verificar() {

    const quantidade = Number(document.getElementById("quantidade").value)
    let resultado = ""
    console.log(quantidade)

    for (let linha = 1; linha < quantidade + 1; linha++) {
        for (let vazio = 0; vazio < quantidade - linha; vazio++) {
            resultado += "&nbsp;"
        }
        for (let asterisco = 0; asterisco < linha; asterisco++) {
            resultado += "*"
        }
        resultado += "<br />"
        document.getElementById("resultado").innerHTML = resultado
        // console.log("resultado", resultado)
    }
}