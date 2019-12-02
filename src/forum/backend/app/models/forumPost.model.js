const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ForumPost = new Schema({
    post_title: {
        type: String
    },
    post_description: {
        type: String
    }
});

module.exports = mongoose.model('Post', ForumPost);