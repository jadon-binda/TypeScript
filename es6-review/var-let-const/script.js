// var, let, const
// var - escopo global
// let e const - escopo local

// var é usado para declarar variáveis
var nome;

// com var, é possível declarar uma variável e atribuir o valor depois
nome = 'Jadon';

// uma peculiaridade do var é que ele permite redeclarar uma variável, pois pertence ao escopo global
var nome = 'Samuel';

// é possível reatribuir um valor para uma variável criada com var
nome = 'Binda';

// como o var pertence ao escopo global, não é feita nenhuma distinção se você utilizá-lo dentro de uma estrutura, como uma condicional, por exemplo
if(true) {
    var nome = 'Brisa';
}

// console.log(nome);

// *****************************************************************************************************************************************************************************

// let também é usado para declarar variáveis
let nome1;

// com let, também é possível declarar uma variável e atribuir o valor depois
nome1 = 'Antonio';

// porém o let não permite redeclarar uma variável dentro do mesmo contexto, por ele pertencer ao escopo local
// let nome1 = 'Braz';

// também é possível reatribuir um valor para uma variável criada com let
nome1 = 'Binda';

//console.log(nome1);

// como let pertence ao escopo local, existe diferença em relação a qual contexto em que você o está utilizando
// no exemplo abaixo, a variável nome1 nunca será lida, pois foi usada dentro de uma estrutura condicional e pertence somente a esse escopo
if(true) {
    let nome2 = 'Babua';
}

// para você manipular a variável criada com let, deve-se criá-la no escopo global ou manipulá-la dentro do próprio contexto onde está sendo usada 
let nome3;
if(true) {
    nome3 = 'Julito';
}
console.log(nome3);