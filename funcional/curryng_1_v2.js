function textoComTamanhoEntre(min) {
    return function(max) {
        return function(erro) {
            return function (texto) {
                const tamanho = (texto || '').trim().length
                if (tamanho < min || tamanho > max)  throw erro
            }
        }
    }
}

// Versoes Intermediarias da Funcao
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome Produto Inválido!')

const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
forcarNomeProdutoValido(p1.nome)