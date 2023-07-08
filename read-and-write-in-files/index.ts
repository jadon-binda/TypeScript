const fs = require('fs');

const readFile = (): unknown => {
    return JSON.parse(fs.readFileSync('bd.json'));
}

const writeFile = (data: unknown): void => {
    fs.writeFileSync('bd.json', JSON.stringify(data))
}

const info = readFile() as string[];

info.push('Love');
writeFile(info);
console.log(readFile());