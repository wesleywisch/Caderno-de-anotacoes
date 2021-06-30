const express = require('express');
const routes = express.Router();
const AnnotationController =  require('./controllers/AnnotationController');



// Rota anotations
routes.get('/annotations', AnnotationController.create);


module.exports = routes;