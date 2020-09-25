
const nums = [4, 8, 3, 2, 9, 1, 9, 3] 

// Recursividade, a Funçao para ser recursiva precisa chamar a si mesmo, e ter uma condiçao de parada. É Imutavel
function somarArray(array, total = 0) {
    if (array.length === 0) return total
    return somarArray(array.slice(1), total + array[0])
}
const resultadoDaSoma = somarArray(nums)
console.log(resultadoDaSoma)

// Maneira Funcional que segue o padrao de Imutabilidade
const somar = (a, b) => a + b
const resultado = nums.reduce(somar)
console.log(resultado)

// Maneira Imperativa, que nao segue o padrao de Imutabilidade
let total = 0
for (let i = 0; i < nums.length; i ++) {
    total += nums[i]
}
console.log(total)