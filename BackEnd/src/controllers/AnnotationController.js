const Annotations = require('../models/AnnotationData');



module.exports = {

    create(req, res){
        const {title, notes, priority} = req.body;

        console.log(title, notes, priority);
    }
}