const genMultiTable = (listOfNumbers: number[]): string => {
    let multiplicationTable: string = '0';

    listOfNumbers.forEach(number => {
        for (let i = 0; i <= 10; i++) {
            multiplicationTable = `${number} x ${i} = ${number * i}`;
            console.log(multiplicationTable);            
        }
        console.log("---------------\n");
    });
    return multiplicationTable;
};

const listOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
genMultiTable(listOfNumbers);