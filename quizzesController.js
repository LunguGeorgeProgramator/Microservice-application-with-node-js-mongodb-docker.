const MongoClient = require('mongodb').MongoClient;
const DataBaseName = 'test_db';

const QuizzesController = {
    "index" : function (res) {
        MongoClient.connect('mongodb://mongo:27017/', function (err, database) {
            if(err) {
                throw err;   
            }else{
                const myDB = database.db(DataBaseName);
                myDB.collection("quizzes").find().toArray(function(err, docs) {
                    res.render('index', { 'quizzes': docs });
                });;
            }
        });
        return res;
    }
};
module.exports = QuizzesController;