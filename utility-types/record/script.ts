type Auto = {
    year: number,
    color: string,
};

type Models = 'Civic' | 'Gol' | 'Fusca';

// Example of Record<Keys, Type>
const Cars: Record<Models, Auto> = {
    Civic: {
        year: 2023,
        color: 'red',
    },
    Gol: {
        year: 2020,
        color: 'white',
    },
    Fusca: {
        year: 1967,
        color: 'yellow',
    },
};

console.log(Cars);