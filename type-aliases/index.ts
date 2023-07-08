type Address1 = {
    street: string,
    number: number,
    complement: string,
    district: string,
    city: string,
    state: string,
    country: string,
    cep: number,
};

type Usuario = {
    name: string, 
    age: number, 
    email: string, 
    cpf: string, 
    address?: Address1,
};

const userRegister = (user: Usuario) => {
    return user;
};

let user1 = {name: "Jadon", age: 30, email: "jadon.binda@gmail.com", cpf: "00011122233"};

console.log(userRegister(user1));