type Address = {
    cep: string,
    street: string,
    complement?: string,
    district: string,
    city: string,
};

type User = {
    name: string,
    email: string,
    cpf: string,
    job?: string,
    address: Address | null,
};

export {User};