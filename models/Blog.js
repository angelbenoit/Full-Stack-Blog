const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    author: String,
    date: Date,
    body: String
});

mongoose.model('blog-post', blogSchema);