import {readFile, writeFile} from '../read-and-write-in-files';
import { User } from '../type-user';

const registerUser = (user: User): User => {
    const addUser = readFile() as User[];
    addUser.push(user);
    writeFile(addUser);
    return user;
};

const listUsers = (): User[] => {
    return readFile() as User[];
};

const addUser = registerUser({
    name: 'Brisa',
    email: 'brisa@email.com',
    cpf: '12345678902',
    job: 'Web Developer',
    address: {
        cep: '01234-568',
        street: 'Rua Imaginaria',
        complement: '2',
        district: 'Lourdes',
        city: 'BH'
    }
});

console.log(addUser, listUsers());