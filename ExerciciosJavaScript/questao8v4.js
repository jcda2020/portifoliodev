let stringPontuacoes = "30, 40, 20, 4 , 51, 25, 42, 38, 26, 0"


function obterResultados(stringPontuacoes) {
     let pontuacoes = stringPontuacoes.split(", ")

    let maior = pontuacoes[0]
    let menor = pontuacoes[0]
    let posicaoPior = 1
    let qtdRecords = 0


    for (let i = 0; i < pontuacoes.length; i++) {

        if (pontuacoes[i] > maior) {
            maior = pontuacoes[i]

            qtdRecords++
        } else {
            if (pontuacoes[i] < menor) {

                 menor = pontuacoes[i]

                    posicaoPior = i
            }

        }



    }

        return [qtdRecords, posicaoPior]

}

console.log(obterResultados(stringPontuacoes))