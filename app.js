const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res)=>{ //Seteamos la ruta de la pagina (default).
    res.render('profesores');
})

app.get('/home', (req, res)=>{ //Seteamos la ruta de la pagina
    res.render('index');
})
app.get('/', (req, res)=>{ //Seteamos la ruta de la pagina
    res.render('img');
})

app.use('/', require('./router'));



app.use('/resources', express.static('css'));
app.use('/resources', express.static(__dirname + '/public'));

app.listen(7902, ()=>{
    console.log("servidor corriendo en http://localhost:7902");


});