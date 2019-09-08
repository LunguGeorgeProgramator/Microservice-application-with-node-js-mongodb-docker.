const express = require('express'); // include pakage express
const bodyParser = require('body-parser');

const QuizzesController = require('./quizzesController');
const parsedDataJSON = require('./dataJson'); // call test data json

const app = express() // initialate/call the main fundtion of the pakage
const DBController = require("./db");
new DBController(); // create colections if not pressent

app.use(express.static('public')); // set a public director where css files can be load and so on
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs') /// set the views engine

app.get('/', function (req, res) { 
    return QuizzesController.index(res);
   // return res.render('index', {'quizzes', dataJson});
})

app.post('/', function (req, res) { // set post request for action link host+ '/'
  // const quizzName = req.body.city;
  // var instObj = { name: "Food quizz", description: "General food about cars." };
  return QuizzesController.index(res);
  // res.render('index');  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})