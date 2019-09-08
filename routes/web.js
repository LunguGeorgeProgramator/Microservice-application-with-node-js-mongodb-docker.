const QuizzesController = require('../controllers/quizzesController');

function views(app){
    
    app.get('/', function (req, res) { 
        return QuizzesController.index(res);
    })

    app.post('/', function (req, res) { // set post request for action link host+ '/'
        return QuizzesController.store(res, req);
    })

    app.get('/remove', function (req, res) {
        return QuizzesController.remove(res, req);
    })

    app.get('/show/:id', function (req, res) { 
        return QuizzesController.show(res, req);
    })

    return app;
}

module.exports = {views};