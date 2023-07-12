// ReturnType<Type>
// Cria um novo tipo contendo o tipo de retorno de uma função

type Function01 = () => number;
type Example01 = ReturnType<Function01>;

type Example02 = ReturnType<() => string>;

type Example03 = ReturnType<() => {name: string}>;

type Example04 = ReturnType<(a: string) => void>;

type Example05 = ReturnType<<T>() => T>;

declare function functionExample(num:number): {a: number; b: string};
type Example06 = ReturnType<typeof functionExample>;

function functionExample1(num:number): number {
    return num;
};
type Example07 = ReturnType<typeof functionExample1>;