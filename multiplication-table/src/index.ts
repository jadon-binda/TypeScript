const genMultiTable = (listOfNumbers: number[]): string[] => {
    let multiplicationTable: string[] = [];

    listOfNumbers.forEach(number => {
        for (let i = 0; i <= 10; i++) {
            multiplicationTable.push(`${number} x ${i} = ${number * i}`);
        }
        multiplicationTable.push("---------------");
    });

    return multiplicationTable;
};

const listOfNumbers: number[] = [1, 5, 2, 4];
console.log(genMultiTable(listOfNumbers));