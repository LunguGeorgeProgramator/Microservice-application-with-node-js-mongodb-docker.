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



const dbObject = {
    'selectResults' :   function (name){
                            MongoClient.connect('mongodb://mongo:27017/', function (err, database) {
                                if(err) {
                                    throw err;
                                }else{
                                    const myDB = database.db('test_db');
                                    const cursor = myDB.collection(name).find();
                                    if (cursor === null) {
                                        dbo.createCollection(name, function(err, res) {
                                            if (err) 
                                                throw err;
                                            else
                                                console.log("Collection "+name+" created!");
                                        });
                                    }else{ 
                                        cursor.each(function(err, doc) {
                                            if(err)
                                                throw err;
                                            else
                                                return console.log(doc);
                                        });
                                    }
                                }            
                            });
                        },
    'insertResults': function(instObj, name){
                        MongoClient.connect('mongodb://mongo:27017/', function (err, database) {
                            if(err) {
                                throw err;
                            }else{
                                const myDB = database.db('test_db');
                                if (myDB.collection(name).find() === null) {
                                    dbo.createCollection(name, function(err, res) {
                                        if (err) 
                                            throw err;
                                        else
                                            console.log("Collection "+name+" created!");
                                    });
                                }
                                myDB.collection(name).insertOne(instObj, function(err, res) { 
                                    if (err)  throw err; 
                                });
                                database.close();
                            }
                        });    
    },
}
