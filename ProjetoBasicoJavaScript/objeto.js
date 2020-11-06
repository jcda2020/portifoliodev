const prod1 = {}

prod1.nome = 'smartphone A20'
prod1.preco = 1999.90

console.log(prod1)

//abaixo forma não recomendada (atributos com espaço)
prod1['Oferta do dia'] = 0.30
console.log(prod1)

prod2 = {
    nome: 'Camisa UV',
    preco: '45.90',

    objeto: {
        atributo1: 1,
        atributo2: 3,
        obj: {
            blusa: 'polo'

        }
                        }
}

console.log(prod2)





