import { User } from '../type-user';
import { readFile, writeFile } from '../read-and-write-in-files';

const detailUser = (cpf: string): User => {
    const users = readFile() as User[];

    const userFound = users.find(user => {
        return user.cpf === cpf;
    });   
    
    if (!userFound) {
        throw new Error('User not found.');
    }

    return userFound;
}

const updateUser = (cpf: string, data: User): User => {
    const users = readFile() as User[];

    const userFound = users.find(user => {
        return user.cpf === cpf;
    });

    if (!userFound) {
        throw new Error('User not found.');
    };

    const updatedUser = Object.assign(userFound, data);

    writeFile(users);

    return updatedUser;
}

console.log(detailUser('12345678900'));

const updateUserData = {
    name: 'Jadon',
    email: 'jadon@email.com',
    cpf: '12345678900',
    job: 'FullStack Developer',
    address: {
        cep: '01234-567',
        street: 'Rua Imaginaria',
        complement: '1',
        district: 'Lourdes',
        city: 'BH'
    }
}
console.log(updateUser('12345678900', updateUserData));