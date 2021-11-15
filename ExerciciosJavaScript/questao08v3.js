const pontuacao = [5, 10, 3, 15, 20, 10, 8, 30]


function obterResultados(pontuacao) {

    let maior = pontuacao[0]
    let menor = pontuacao[0]
    let posicaoPior = 1
    let qtdRecords = 0


    for (let i = 0; i < pontuacao.length; i++) {

        if (pontuacao[i] > maior) {
            maior = pontuacao[i]

            qtdRecords++
        } else {
            if (pontuacao[i] < menor) {

                 menor = pontuacao[i]

                    posicaoPior = i
            }

        }



    }

        return [qtdRecords, posicaoPior]

}

console.log(obterResultados(pontuacao))