// string
let username: string = "Jadon";
console.log(typeof username);

// number
let idade: number = 30;
console.log(typeof idade);

// boolean
let eBrasileiro: boolean = true;
console.log(typeof eBrasileiro);

// any
// deve-se tomar muito cuidado ao usar o any, pois ele pode deixar o código inconsistente, conforme abaixo
let sobrenome: any;
sobrenome = "Binda";
sobrenome = 20;
console.log(typeof sobrenome);