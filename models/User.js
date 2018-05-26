const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    username: String,
    blogPosts: []
});

mongoose.model('user', userSchema);