const dataJSON = JSON.parse('{ "name": "Jadon Samuel Binda" }') as /* type assertion */ unknown /* tipo unknown = desconhecido */;
// recebi na aplicação um JSON de uma API qualquer, ou seja, um dado que tem origem em uma fonte externa e eu não sei exatamente qual é o seu tipo

if (
    // type narrowing
    dataJSON !== null &&
    typeof dataJSON === "object" &&
    "name" in dataJSON && 
    typeof dataJSON.name === "string"
) {
    console.log(`${dataJSON.name} is a string.`);
} else {
    console.log("Invalid JSON.");                
}

// capturando erros de uma chamada assíncrona de um controlador
try {
    
} catch (error) {
    // o typescript já infere o tipo 'unknown' para o objeto error
    if (
        // type narrowing
        error !== null &&
        typeof error === 'object' &&
        'message' in error &&
        typeof error.message === 'string'
    ) {
        console.log(error.message);
    }
}