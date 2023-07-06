let nome: "Jadon";
nome = "Jadon";

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

type User = {
    name: string,
    email?: string,
    status: true | false,
}

const verifyStatusUser = (user: User) => {
    return user.status;
}
console.log(verifyStatusUser({name: "Brisa", status: true}));