// var, let, const
// var - escopo global
// let e const - escopo local

// var é usado para declarar variáveis, assim como o let
var nome;
// é possível declarar uma variável e atribuir o valor depois
nome = 'Jadon';
// uma peculiaridade do var é que ele permite redeclarar uma variável; já o let não
var nome = 'Samuel';
// é possível também reatribuir um valor para uma variável criada com var
nome = 'Binda';

// como o var pertence ao escopo global, não é feita nenhuma distinção se você utilizá-la dentro de uma estrutura, como uma condicional, por exemplo
if(true) {
    var nome = 'Brisa';
}

console.log(nome);