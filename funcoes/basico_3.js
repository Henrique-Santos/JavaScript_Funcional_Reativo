// Arrow Function

const felizNatal = () => console.log('Feliz Natal')
felizNatal()

const saudacao = nome => `Fala ${nome} blz?!`
console.log(saudacao('Henrique'))

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}
console.log(somar(1, 2, 3))