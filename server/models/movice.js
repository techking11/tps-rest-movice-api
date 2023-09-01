const mongoose = require('mongoose');

const moviceScheme = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
});

moviceScheme.index({"$**" : 'text'});

module.exports = mongoose.model('Movice', moviceScheme);