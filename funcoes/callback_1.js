/* Callback
A sua idéia é passar um fn como parametro para outra fn, e dipoi essa função será 
chamada de volta. Callback está associado a um evento, que quando esse evento acontecer
uma função é chamada de volta */

function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)