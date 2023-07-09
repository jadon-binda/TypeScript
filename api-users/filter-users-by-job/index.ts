import { User } from "../type-user";
import { readFile, writeFile } from "../read-and-write-in-files";

const filterUsersByJob = (job: string): User[] => {
    const users = readFile() as User[];
    
    const filterUsers = users.filter(user => {
        return user.job === job;
    });

    if (filterUsers.length === 0) {
        throw new Error('No user found with the given job.')
    };

    return filterUsers;
};

console.log(filterUsersByJob('Web Developer'));