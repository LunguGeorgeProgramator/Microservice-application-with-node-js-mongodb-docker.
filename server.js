const express = require('express'); // include pakage express
const bodyParser = require('body-parser');
const routesScripts = require('./routes/web');
// const parsedDataJSON = require('./dataJson'); // call test data json

const app = express() // initialate/call the main fundtion of the pakage
const DBController = require("./db");
new DBController(); // create colections if not pressent

app.use(express.static('public')); // set a public director where css files can be load and so on
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs') /// set the views engine

routesScripts.views(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})