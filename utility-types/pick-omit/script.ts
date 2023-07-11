type People = {
    name: string,
    age: number,
    email: string,
    address: string,
};

// Pick<Type, Keys>
const manolo: Pick<People, 'name' | 'email'> = {
    name: 'Manolo',
    email: 'manolito@email.com'
};

type Keys = 'name' | 'age';
const luigi: Pick<People, Keys> = {
    name: 'Luigi',
    age: 50
};

// Omit<Type, Keys>
const antonio: Omit<People, 'address' | 'age'> = {
    name: 'Antonio',
    email: 'tonin@email.com'
};

type Keys2 = 'age' | 'email' | 'address';
const mario: Omit<People, Keys2> = {
    name: 'Mario'
};