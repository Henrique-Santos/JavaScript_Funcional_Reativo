const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobro))

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
console.log(carrinho.map(getTotal))

// Implementando um MAP
Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i ++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

console.log(carrinho.meuMap(getNome))