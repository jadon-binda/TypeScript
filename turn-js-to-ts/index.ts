const owners: Array<{name: string, pets: string[]}> = [
    {
        name: "João",
        pets: ["Max"],
    },
    {
        name: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatriz",
        pets: ["Lessie"],
    },
    {
        name: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        name: "Antonio",
        pets: ["Naninha"],
    },
    {
        name: "Jadon",
        pets: ["Brisa", "Chiquinho"],
    },
];

const searchPetOwner = (list: Array<{name: string, pets: string[]}>, petName: string): string  => {
    let ownerFound;

    list.forEach(owner => {
        if(owner.pets.includes(petName)){
            ownerFound = owner.name;
        }
    });

    if(ownerFound) {
        return `The owner of ${petName} is ${ownerFound}.`;
    };
    
    return `The owner of ${petName} not found.`;
}

console.log(searchPetOwner(owners, "Brisa"));