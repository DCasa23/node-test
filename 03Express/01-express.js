const express = require('express')
const app = express()
const port = 3005
//Motor de Plantillas
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//Middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:
app.use('/',require('./router/rutas.js'));
app.use('/pokemon',require('./router/pokemon.js'));
app.use((req,res) => {
    
   res.status(404).render("404",
    {
        cabecera:"Error 404",
        tituloError:"ERROR DEL 404",
        descripcion:"Page Not Found, Chiquillo. Ares dejame descansar"
   })
   })
   
   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
