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