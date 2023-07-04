const product: {description: string, lot: number, year: number, qty: number} = {
    description: 'CPU Dual Core 3.0GHZ',
    lot: 321,
    year: 2022,
    qty: 5,
};

const labelPrint = (product: {description: string, lot: number, year: number, qty: number}): string[] => {
    let label: string[] = [];

    for (let i: number = 1; i <= product.qty; i++) {
        if (i < 10) {
            label.push(`${product.lot}-${product.year}-00${i}`);
        } else if (i < 100) {
            label.push(`${product.lot}-${product.year}-0${i}`);
        } else {
            label.push(`${product.lot}-${product.year}-${i}`);
        }
    }

    return label;
};

console.log(labelPrint(product));