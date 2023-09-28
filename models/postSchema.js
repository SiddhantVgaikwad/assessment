const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    userId: String,
    id: String,
    title: String,
    body: String,
 
});

module.exports = mongoose.model('Post', postSchema);