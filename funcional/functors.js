// Essa funçao vai construir um objeto
function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) return TipoSguro(null)
            const novoValor = fn(this.valor)
            return TipoSeguro(novoValor)
        },
        flatMap(fn) {
            return this.map(fn).valor
        }
    }
}

const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))

console.log(original, alterado)