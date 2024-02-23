// comando instalar cosas -------------> npm install dayjs  / express

const path = require('path');
const express = require('express'); 

const app = express(); 

app.listen(3030, () => console.log('esto fue exitoso'))
app.use(express.static('public'));


/*
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
}); */

app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html')); 
})
app.get ('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/babbage.html')); 
})
app.get ('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/berners-lee.html')); 
})
app.get ('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/clarke.html')); 
})
app.get ('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/hamilton.html')); 
})
app.get ('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/hopper.html')); 
})
app.get ('/lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/lovelace.html')); 
})
app.get ('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/turing.html')); 
})