/*var fs = require('fs'),
    readStream = fs.createReadStream('nombres.txt'),
    writeStream = fs.createWriteStream('nombres_copia.txt')


// Con el método pipe podremos comenzar a leer/escribir ficheros
// Es como vimos en SI con el stdin/stdout, en redirecciones y tuberías
readStream.pipe(writeStream) // Abrirá un canal en el cual se escribirá un nuevo objeto

*/
/*
var fs = require('fs'),
    readStream = fs.createReadStream('nombres.txt'),
    writeStream = fs.createWriteStream('nombres_copia.txt')
// Con el método pipe podremos comenzar a leer/escribir ficheros
readStream.pipe(writeStream)
readStream.on('data', function (chunk){ 
//.on quiere decir que, mientras haya datos, haremos lo indicado en esa función anónima
    console.log( //Imprimir por consola lo siguiente
        'He leído: ',
        chunk.length,
        'caracteres.'
    )
})
    
readStream.on('end',function(){
    console.log("Termine,amigo")
})
*/
var fs = require('fs'),
    readStream = fs.createReadStream('nombres.txt'),
    writeStream = fs.createWriteStream('nombres_copia.txt')
// Con el método pipe podremos comenzar a leer/escribir ficheros
readStream.pipe(writeStream)
readStream

.on('data', function (chunk){ 
//.on quiere decir que, mientras haya datos, haremos lo indicado en esa función anónima
    console.log( //Imprimir por consola lo siguiente
        'He leído: ',
        chunk.length,
        'caracteres.'
    )
})
    
.on('end',function(){
    console.log("TermineEEEE,amigo")
})
