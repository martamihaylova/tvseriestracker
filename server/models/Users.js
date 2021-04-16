const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        minlength: [3, 'Username must be at least 3 characters.'],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    shows: [],
});

module.exports = mongoose.model('Users', userSchema);