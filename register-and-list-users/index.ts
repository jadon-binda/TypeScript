import {readFile, writeFile} from '../read-and-write-in-files';

type Address = {
    cep: string,
    street: string,
    complement?: string,
    district: string,
    city: string,
}

type User = {
    name: string,
    email: string,
    cpf: string,
    job?: string,
    address: Address | null,
}

const registerUser = (user: User): User => {
    const addUser = readFile() as User[];
    addUser.push(user);
    writeFile(addUser);
    return user;
};

const listUsers = (): User[] => {
    return readFile() as User[];
};

const newUser = registerUser({
    name: 'Kátia',
    email: 'katia@email.com',
    cpf: '12345678901',
    job: 'Lawyer',
    address: {
        cep: '0123456',
        street: 'Rua Imaginaria',
        complement: '1',
        district: 'qualquer',
        city: 'BH'
    }
});

console.log(newUser, listUsers());

export {User};