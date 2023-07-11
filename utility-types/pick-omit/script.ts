type People = {
    name: string,
    age: number,
    email: string,
    address: string,
};

const manolo: Pick<People, 'name' | 'email'> = {
    name: 'Manolo',
    email: 'manolito@email.com'
};

const antonio: Omit<People, 'address' | 'age'> = {
    name: 'Antonio',
    email: 'tonin@email.com'
};

type Keys = 'age' | 'email' | 'address';

const mario: Omit<People, Keys> = {
    name: 'Mario'
};

type Keys2 = 'name' | 'age';

const luigi: Pick<People, Keys2> = {
    name: 'Luigi',
    age: 50
};