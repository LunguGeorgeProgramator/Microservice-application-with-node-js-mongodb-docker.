let QuizzModel = require('../models/quizzes')

const QuizzesController = {
    "index" : function (res) {
        QuizzModel.find({}, function(err, quizzes) { // get result from db colection quizzes
            if(err) throw err;  
            // console.log(quizzes); 
            res.render('index', { 'quizzes': quizzes });
        });
        return res;
    },
    "store": function (res, req) {
        let quizz = new QuizzModel({
            name:  req.body.name,
            description: req.body.description
        })
        quizz.save(); // insert in db
        res.redirect('/');
        // QuizzesController.index(res); // render index ejs page
        return res;
    },
    "remove": function (res, req) {
        QuizzModel.remove({_id : req.query.id }).exec(); // remove from db
        // QuizzesController.index(res);
        res.redirect('/');
        return res;
    },
    "show": function (res, req) {
        QuizzModel.findOne({_id: req.params.id}, function(err, quizz) { 
            res.render('show', { 'quizz': quizz });
        });
        return res;
    }
};

module.exports = QuizzesController;