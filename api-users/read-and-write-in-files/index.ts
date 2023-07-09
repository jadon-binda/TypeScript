const fs = require('fs');
// import {readFileSync, writeFileSync} from 'node:fs';

const readFile = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'));
}

const writeFile = (data: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(data))
}

/* const addInfo = readFile() as string[];
addInfo.push('Love');
writeFile(addInfo);
console.log(readFile()); */

export {readFile, writeFile};