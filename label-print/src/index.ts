const productsList: Array<{description: string, lot: number, year: number, qty: number}> = 
[
    {
        description: 'CPU Dual Core 3.0GHZ',
        lot: 321,
        year: 2022,
        qty: 5,
    },
    {
        description: 'RAM Memory',
        lot: 201,
        year: 2020,
        qty: 15,
    },
    {
        description: 'Video Card',
        lot: 999,
        year: 2023,
        qty: 2,
    },
];

const labelPrinting = (products: Array<{description: string, lot: number, year: number, qty: number}>): string[] => {
    let productLabel: string[] = [];

    products.forEach(product => {        
        for (let i: number = 1; i <= product.qty; i++) {
            if (i < 10) {
                productLabel.push(`${product.lot}-${product.year}-00${i}`);
            } else if (i < 100) {
                productLabel.push(`${product.lot}-${product.year}-0${i}`);
            } else {
                productLabel.push(`${product.lot}-${product.year}-${i}`);
            }
        }
    });

    return productLabel;
};

console.log(labelPrinting(productsList));