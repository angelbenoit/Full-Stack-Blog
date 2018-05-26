const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    author: String,
    date: Date,
    body: String,
    blogId: String //blogId will be identical to user's id
});

mongoose.model('Blog', blogSchema);