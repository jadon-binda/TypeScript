let nome = "Jadon";
nome;

const pet = "Brisa";
pet;

let hi: "hello" = "hello";
hi = "hello";
// OK

// hi = "howdy";
// Não funciona, pois o tipo da variável é "hello", portanto ela só pode receber este valor

// more usable cases
type Transaction = {
    number?: number,
    validity?: string,
    cvv?: number,
    name: string,
    operation: "Credit" | "Debit",
}

const transaction = (transaction: Transaction) => {
    return transaction;
}
console.log(transaction({name: "Jadon", operation: "Debit"}));

type User2 = {
    name: string,
    email?: string,
    status: true | false,
}

const verifyStatusUser = (user: User2) => {
    return user.status;
}
console.log(verifyStatusUser({name: "Brisa", status: true}));