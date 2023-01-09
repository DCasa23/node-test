const express = require('express')
const app = express()
const port = 3005
//Motor de Plantillas
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//Middleware
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    //Primero indicamos la vista y despues un objeto
  res.render("index",{titulo:"mi titulo dinamico"})
})

app.get('/contacto', (req, res) => {
     //Primero indicamos la vista y despues un objeto
  res.render("contacto",{titulocontacto:"mi titulo dinamico de CONTACTOOOOOO"})
})

app.use((req,res) => {
    /*
    res.status(404).sendFile(__dirname + "/public/404.html")
    */
   res.status(404).render("404",
    {
        tituloError:"ERROR DEL 404",
        descripcion:"Page Not Found, Chiquillo. Ares dejame descansar"
   })
   })
   
   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
