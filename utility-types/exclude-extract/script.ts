// Exclude<Type, ExcludedUnionTypes>
// Cria um novo Type excluindo os tipos que você selecionar dentro de uma Uniao de Tipos
type Cars = 'Civic' | 'Gol' | 'Ferrari' | 'Palio' | 'Porsche Cayenne' | 'Fusca';

type LowCars = Exclude<Cars, 'Gol' | 'Palio' | 'Fusca'>;

type T01 = Exclude<string | number | boolean | null | undefined, number | undefined>;

// Extract<Type, ExtractedUnionTypes
// Cria um novo Type extraindo apenas os tipos que você selecionar dentro de uma Uniao de Tipos
type UsedCars = Extract<Cars, 'Ferrari' | 'Porsche Cayenne'>;

type T02 = Extract<(() => number) | boolean | string | (() => void), Function>;

type T03 = Extract<number | string | number[] | boolean | string[] | object, number[]>;