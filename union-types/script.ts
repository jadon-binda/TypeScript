let anything: number | string | boolean;

anything = true;


// use case
const usersRegister = (users: {name: string} | {name: string}[]) => {
    return users;
};

const user = {
    name: "Jadon",
};

const users = [
    {
        name: "Antonio",
    },
    {
        name: "Mariangela",
    },
] 

console.log(usersRegister(users));