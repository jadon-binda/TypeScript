// string[] - Lista de strings
let names: string[] = ["Jadon", "Kátia", "Brisa", "Tia Cris", "Mariângela", "Antonio", "Rebeca", "Matt","Brenda", "Deco"];
// É válido atribuir uma lista vazia à names, pois apesar de não possuir nenhum dado, não deixar de ser um array
//names = [];
// Porém não é válido atribuir diretamente uma valor à names, mesmo que seja uma string, pois é esperado uma lista de strings
//names = "Binda";
console.log(names);

// number[] - Lista de números
let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Não é válido atribuir diretamente um número à uma lista ou array de números
//numbers = 10;
// Deve-se envolvê-lo em colchetes para se ter um array
//numbers = [10];
console.log(numbers);

// boolean[] - Lista de booleanos
let logicalValues: boolean[] = [true, true, false, true, false];
console.log(logicalValues);

// any[] - Lista de quaisquer tipos de dados
let anything: any[] = [123, "Galo", true];
console.log(anything);