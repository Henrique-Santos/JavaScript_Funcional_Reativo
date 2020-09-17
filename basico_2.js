function bomDia() {
    console.log('Bom Dia!!')
}

const boaTarde = function() {
    console.log('Bom Dia!!')
}

// Passar uma função como param pra outra função
function executarQualquerCoisa(fn) {
    if(typeof fn == 'function') {
        fn()
    }
}

executarQualquerCoisa(5)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função a partir de uma outra função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

// A primeira parte "potencia(2)" retorna uma função, e a segunda parte já passa o valor
// para a função retornada. "potencia(8)"
const potencia28 = potencia(2)(8)
