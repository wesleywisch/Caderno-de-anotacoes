const express = require('express');
const routes = express.Router();
const AnnotationController =  require('./controllers/AnnotationController');



// Rota anotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);

// Rota para deletar uma anotação
routes.delete('/annotations/:id', AnnotationController.delete);


module.exports = routes;