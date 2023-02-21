const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const database = require('../Database/connection');
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
//render static files
app.use(express.static('public'));
//render ejs files in the views folder
app.set('view engine', 'ejs');


//create the server listening on port 3000
server.listen(port, () => {
    console.log(`Server on port ${port} is up and running...`);
})