var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('recursos/form.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = '' //Cadena de texto vacía para ir concatenando el resultado


function webServer(req, res)
{
    if(req.method  == 'GET') // 
    {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(form) //Es lo que enviará al navegador web
    }
    
        if(req.method == 'POST')
    {
        req
            .on('data', function (data){ //Mientras haya datos, ejecutaremos la siguiente Callback
                dataString += data //Que concatenará el dato en la variable dataString
            })
            .on('end', function (){ //Cuando terminen los datos, ejecutarermos la siguiente Callback
                //Declaramos una variable de texto
                //Texto concatenado con el valor de la variable ${dataString}
                var templateString = `Los datos que enviaste por POST como string son: ${dataString}`
                console.log(templateString) //Lo mostramos en el terminal
                res.end(templateString) //Es lo que enviará al navegador web
            })
    }

}

  
http.listen(3005)
console.log('Servidor corriendo en http://localhost:3005/')
