import { User } from "../type-user";
import { readFile, writeFile } from "../read-and-write-in-files";

const deleteUser = (cpf: string): User => {
    const users = readFile() as User[];

    const deletedUser = users.find(user => {
        return user.cpf === cpf;
    });

    if (!deletedUser) {
        throw new Error('User not found.');
    };

    const newUsers = users.filter(user => {
        return user.cpf !== cpf;
    })

    writeFile(newUsers);

    return deletedUser;
}

console.log(deleteUser('12345678902'));