import { User } from '../register-and-list-users';
import { readFile, writeFile } from '../read-and-write-in-files';

const detailUser = (cpf: string): User => {

    const users = readFile() as User[];

    const foundUser = users.find(user => {
        return user.cpf === cpf;
    });   
    
    if (!foundUser) {
        throw new Error('User not found.');
    }

    return foundUser;
}

/* const updateUser = (cpf: string): User => {

} */

console.log(detailUser('12345678900'));