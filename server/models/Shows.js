const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
});

module.exports = mongoose.model('Shows', showSchema);