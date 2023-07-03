function printName(name: string): string {
    return `Hello, ${name}!`;
}

const checkLegalAge = (age: number): boolean => {
    if (age < 18){
        return false;
    }
    return true;
}

const printUser = (user: {name: string, age: number}): string => {
    return `Hello, ${user.name}! You have ${user.age} years old.`;
}
console.log(printUser({name:"Jadon", age:20}));

function printArray(array: string[]): string {
    return array[0];
}
console.log(printArray(["Terra", "123", "true"]));

const somar = (a: number, b: number): number => {
    return a + b;
}
console.log(somar(1, 2));