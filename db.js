const MongoClient = require('mongodb').MongoClient;
const DataBaseName = 'test_db'; 
var listCollecttions = ['quizzes']; // set default collection to create
// const DataBaseHost = 'mongodb://localhost:27017/'; 
const DataBaseHost = 'mongodb://mongo:27017/';

class dbController {
    constructor (){
        MongoClient.connect(DataBaseHost, function (err, database) {
            if(err) {
                throw err;   
            }else{
                const myDB = database.db(DataBaseName); // if no db make one
                myDB.listCollections().toArray(function(err, collInfos) {
                    collInfos.forEach(colection => {
                        delete listCollecttions[listCollecttions.indexOf(colection.name)];
                    });
                    listCollecttions.forEach(colectionName => {
                        myDB.createCollection(colectionName); // if not collection make one
                    })
                });
            }
        });
    }
}

module.exports = dbController;
