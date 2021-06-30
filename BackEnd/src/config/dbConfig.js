const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;