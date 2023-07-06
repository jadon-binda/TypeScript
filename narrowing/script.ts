function isString(value: string | number | Date | null): value is string {
    return typeof value === "string";
}
// abstração da validação do tipo de dado

function date (param: string | number | Date | null) {
    if (param === null) {
        console.log(`${param} is null`);        
    }

    if (isString(param)) {
        console.log(`${param} is string`);        
    }

    if (typeof param === "number") {
        console.log(`${param} is number`);        
    }

    if (param instanceof Date) {
        console.log(`${param} is a Date`);        
    }

    console.log(param);
    // aqui o paramêtro pode ser todos os tipos, pois nao foi feito o narrowing (estreitamento)
}

type Person = {
    name: string,
    age?: number,
    // a propriedade 'age' é opcional, portanto ela pode ser informada ou não
}

const hello = (person: Person) => {
    if ('age' in person) {
        // verifica se existe a propriedade 'age' dentro do objeto person
        if (person.age) {
            // verifica se um valor válido foi informado para a propriedade 'age'
            console.log(person.age);
            // como a propriedade 'age' existe e possui um valor, agora posso manipulá-la
        }
    }
}