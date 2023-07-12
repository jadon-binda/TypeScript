// NonNullable<type>
// Remove tipos null e undefined de uma união de tipos qualquer

type Example1 = NonNullable<number | null | object | string | undefined | boolean>;

type Example2 = NonNullable<string | number | undefined>;

type Example3 = NonNullable<string[] | null | undefined>;