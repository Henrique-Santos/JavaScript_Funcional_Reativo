const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'Sao Paulo'
}

// Passagem por Referencia
function alteraPessoa(novaPessoa) {
    novaPessoa.nome = 'Luan'
    novaPessoa.cidade = 'Joinville'
}

// Atribuiçao por Referencia
const novaPessoa = pessoa // novaPessoa está referenciando o mesmo objeto na memoria

novaPessoa.altura = 2.0

pessoa.nome = 'Joao'
pessoa.cidade = 'Fortaleza'

console.log(pessoa)

alteraPessoa(pessoa)

console.log(pessoa)

let a = 3
// Atribuiçao por Valor
let b = a // Automaticamente ha uma separaçao de memória

a++
b--
// O idel é que trate as variaveis de forma idependente
console.log(a, b)