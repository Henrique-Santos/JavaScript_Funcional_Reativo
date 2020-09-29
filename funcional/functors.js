// Essa funçao vai construir um objeto
function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) return TipoSeguro(null)
            const novoValor = fn(this.valor)
            return TipoSeguro(novoValor)
        }
    }
}

const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .map(t => t.split('').join(' '))

console.log(original, alterado.valor)