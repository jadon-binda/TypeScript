type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

// Cria o novo tipo endereco
type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

// Ao usar o operador de interseção (&), estende-se as referências de um tipo para outro tipo
/* Cria um novo tipo Carrinho, exclui a propriedade 'tipoTransacao' incorreta através do tipo utilitário Omit e 
inclui as novas propriedades 'endereco' e 'tipoTransacao' corrigida através do tipo utilitário Lowercase */
type CarrinhoCorreto = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}

const venda: CarrinhoCorreto = {
    item: {
        nome:'Computador',
        descricao: 'Super Computador de última geração',
        valor: 4000
    },
    qtd: 18,
    desconto: 0.2,
    frete: 10,
    tipoTransacao: 'debito',
    cartao: {
        numero: 7894,
        validade: '12/08/2025',
        nome: 'Juan Caballero',
        cvv: 123
    },
    endereco: {
        cep: '12345-789',
        rua: 'Alameda',
        bairro: 'Culiacán',
        cidade: 'Medellín',
        estado: 'CO'
    }
}