var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://mongo:27017/test_db')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

var QuizzSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('quizzes', QuizzSchema)