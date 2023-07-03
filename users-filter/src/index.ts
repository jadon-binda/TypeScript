const users: Array<{name: string, age: number, status: boolean}> = [
    {
        name: "Guido",
        age: 32,
        status: true,
    },
    {
        name: "Dani",
        age: 30,
        status: true,
    },
    {
        name: "João",
        age: 40,
        status: false,
    },
    {
        name: "Guilherme",
        age: 29,
        status: true,
    },
    {
        name: "Ana",
        age: 18,
        status: false,
    },
    {
        name: "José",
        age: 28,
        status: false,
    },
    {
        name: "Jadon",
        age: 30,
        status: true,
    },
    {
        name: "Abraão",
        age: 42,
        status: true,
    },
    {
        name: "Mané",
        age: 50,
        status: true,
    },
];

const usersFilter = (list: Array<{name: string, age: number, status: boolean}>, name: string): Array<object> => {
    
    let usersFound: Array<object> = list.filter(element => {
        return element.name.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().includes(name.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase());
    });
    
    return usersFound;
}

console.log(usersFilter(users, "ao"));