type User = {
    name: string,
    age?: number,
    email: string
};

// FUNCTION WITHOUT USING UTILITY TYPE
/* const registerUser = (user: User) => {
    return user;
}; */

// USING REQUIRED
/* const registerUser = (user: Required<User>) => {
    return user;
}; */

// USING PARTIAL
const registerUser = (user: Partial<User>) => {
    return user;
};

const person = {
    name: 'Zezinho',
    // email: 'zezin@email.com',
    // age: 25
};

console.log(registerUser(person));


type Car = {
    brand: string,
    model: string,
    year: number
};

const car = {
    brand: "Honda",
    model: "Civic",
    year: 2000
};

// USING READONLY
const registerCar = (car: Readonly<Car>) => {
    // car.brand = "Toyota";
    return car;
};

console.log(registerCar(car));