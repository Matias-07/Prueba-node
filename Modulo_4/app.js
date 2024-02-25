// comando instalar cosas -------------> npm install dayjs  / express

const path = require('path');
const express = require('express'); 

const app = express(); 

app.listen(3000, () => console.log('esto fue exitoso'))

app.get('/', function(req, res){
    res.send('Bienbenidos al sitio')
});    

app.get('/contacto', function(req, res){
    res.send('dejanos tu contacto!')
});
app.get('/un-array', function(req, res){
    res.send([1,2,3,4,5,6])
});
app.get('/un-object', function(req, res){
    res.send({name: 'Matias'})
});
app.get('/Hola-Mundo', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html')
     //res.sendFile('./views/index.html') no!! 
    res.sendFile(htmlPath)
});  

