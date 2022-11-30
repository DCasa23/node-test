var myreloj = require('./clock')//No es necesaria la extensión .js/.jsovar reloj


var reloj = new myreloj();

myreloj.on("aviso", ()=>{
    reloj.theTime();
});
