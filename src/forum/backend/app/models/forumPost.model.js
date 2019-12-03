const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
});

module.exports = mongoose.model('Post', Post);