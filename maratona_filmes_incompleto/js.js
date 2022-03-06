function acharMinimoDeDias(duracoes) {
    console.log(duracoes)
    let nDiasMaratona = 0
    let tempoMaxDeFilmesDia = 3

    for (let x = 0; x < duracoes.length - 1; x++) {
        console.log(duracoes)
        const somatorio = []
        nDiasMaratona++
        for (let y = x + 1; y < duracoes.length; y++) {
            somatorio.push({
                indices: [x, y],
                soma: duracoes[x] + duracoes[y]
            })
            if (y === duracoes.length - 1) {
                menorQueTres = somatorio.map(item => item.soma <= 3 && item.soma)
                maiorMenorQueTres = Math.max(...menorQueTres)
                console.log('maiorMenorQueTres', maiorMenorQueTres)

                selecionado = somatorio.filter(item => item.soma === maiorMenorQueTres)

                console.log('selecionado', selecionado)
                duracoes.splice(selecionado[0].indices[1], 1)
                duracoes.splice(selecionado[0].indices[0], 1)
            }
        }
    }

    console.log('nDiasMaratona', nDiasMaratona)
}
duracoes = [1.90, 1.04, 1.25, 2.5, 1.75]
// duracoes = [1.01, 1.01, 1.01, 1.4, 2.4]
// duracoes = [1.01, 1.991, 1.32, 1.4]

acharMinimoDeDias(duracoes)