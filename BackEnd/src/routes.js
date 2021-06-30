const express = require('express');
const routes = express.Router();
const AnnotationController =  require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');



// Rota Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

// Rota priority
routes.get('/priorities', PriorityController.priority);
routes.post('/priorities/:id', PriorityController.update);


module.exports = routes;