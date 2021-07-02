const Annotations = require('../models/AnnotationData');


module.exports = {

    async update(req, res){
        const { id } = req.params;
        const { notes } = req.body;

        const annotation = await Annotations.findOne({ _id: id });

        if(notes || title){
            annotation.notes = notes;

            await annotation.save();
        }

        return res.json(annotation);
    }

}