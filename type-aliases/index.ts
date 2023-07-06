type Address = {
    street: string,
    number: number,
    complement: string,
    district: string,
    city: string,
    state: string,
    country: string,
    cep: number,
};

type User = {
    name: string, 
    age: number, 
    email: string, 
    cpf: string, 
    address?: Address,
};

const userRegister = (user: User) => {
    return user;
};

let user = {name: "Jadon", age: 30, email: "jadon.binda@gmail.com", cpf: "00011122233"};

console.log(userRegister(user));