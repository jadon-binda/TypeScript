const product: {description: string, lot: number, year: number, qty: number} = {
    description: 'CPU Dual Core 3.0GHZ',
    lot: 321,
    year: 2022,
    qty: 5,
};

const labelPrint = (product: {description: string, lot: number, year: number, qty: number}): string[] => {
    let label: string[] = [];

    for (let i: number = 1; i <= product.qty; i++) {
        label.push(`${product.lot}-${product.year}-00${i}`);
    }

    return label;
};

console.log(labelPrint(product));