// comando instalar cosas -------------> npm install dayjs  / express

const express = require('express'); 

const app = express(); 

app.listen(3000, () => console.log('esto fue exitoso'))

app.get('/', function(req, res){
    res.send('Bienbenidos al sitio')
});   