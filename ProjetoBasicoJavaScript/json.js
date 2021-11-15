const primos = {x:1, y:3, w:5, p:"primos", 
soma(){return x + y + w}}

console.log(JSON.stringify(primos))                

console.log(JSON.parse('{"x":1,"y":3,"w":5,"p":"primos"}'))
