
function executar(fn) {
    return function(...params) {
        return function(texto) {
            return `${texto} ${fn(...params)}!`
        }
    }
}

function somar(a, b, c) {
    return a + b + c
}

const resultado = executar(somar)(3, 4, 5)('O resultado é:')

console.log(resultado)