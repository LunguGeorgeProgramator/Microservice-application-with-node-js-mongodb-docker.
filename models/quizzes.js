var mongoose = require('mongoose')
var Schema = mongoose.Schema

var QuizzSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Quizzes', QuizzSchema)