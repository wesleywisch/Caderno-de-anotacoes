const Annotations = require('../models/AnnotationData');


module.exports = {

    async update(req, res){
        const { id } = req.params;
        const { title, notes } = req.body;

        const annotation = await Annotations.findOne({ _id: id });

        if(notes || title){
            annotation.notes = notes;
            annotation.title = title;

            await annotation.save();
        }

        return res.json(annotation);
    }

}