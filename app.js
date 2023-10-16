const express = require('express');
const path = require('path');
const app = express();

const PORT = 3002;

const berandaRoutes = require('./router/beranda');
const petaRoutes = require('./router/peta');

app.set('view engine', 'ejs');


app.set('views',[
    path.join(__dirname, '/views'),
]);


app.use(express.json());
app.use(express.static(__dirname + '/public'));
// inisialisasi routes. 
app.use('/', berandaRoutes, petaRoutes);
// app.use('/', petaRoutes);
    

app.listen(PORT,()=>{
    console.log("Server start on port :" + PORT);
});

