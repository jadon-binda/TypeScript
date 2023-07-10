type User = {
    name: string,
    age?: number,
    email: string
};

/* const registerUser = (user: User) => {
    return user;
}; */

const registerUser = (user: Required<User>) => {
    return user;
};

const person = {
    name: 'Zezinho',
    email: 'zezin@email.com',
    age: 25
};

console.log(registerUser(person));