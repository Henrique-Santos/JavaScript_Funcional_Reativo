// somar(a)(b)(c)
function somar(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3
        }
    }
}

const soma = somar(5)(10)(20)
console.log(soma)

// fn -> a * b
// calcular (a)(b)(fn)
function calcular(n1) {
   return function(n2) {
       return function(fn) {
           return fn(n1, n2)
       }
   }
}

function multiplicar(n1, n2) {
    return n1 * n2
}

const calculo = calcular(30)(10)(multiplicar)
console.log(calculo)