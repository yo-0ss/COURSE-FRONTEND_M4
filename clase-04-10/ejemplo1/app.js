const fileSystem = require('fs')

fileSystem.readFile('devf.txt','utf-8', (error, data) => {
    if (error) {
        console.error('Lamentablemente no pudimos leer tu archivo', error);
        return
    }
    console.log(`El contenido de tu archivo es: \n`, data);
})