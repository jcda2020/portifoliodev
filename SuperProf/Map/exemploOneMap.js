const valores = [2, 4, 6, 8, 10]

const result = valores.map(r => 3 * r )

console.log(result)

const val = r => 4 * r
const modifica = valores.map(val)

console.log(modifica)


const objeto = json => JSON.parse(json)
const resultado = produto => produto.nome


const res = array.map(objeto).map(resultado)


const data = json => JSON.parse(json)
const resultado = pedidos => pedidos.vendedor


const res = array.map(data).map(resultado)