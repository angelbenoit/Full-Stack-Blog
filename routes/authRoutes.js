const passport = require('passport');
const mongoose = require('mongoose');
require('../models/Blog');
const Blog = mongoose.model('Blog');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        res.redirect('/profile');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {//use this url to fetch current user in react
        res.send(req.user);
    });

    app.get('/api/blog_list', (req, res) => { //use this url to fetch blogs in react
        Blog.find({}, (err, blog) => {
            if(err)
                res.send("ERROR");

            res.send(blog); //send json of all the blogs in the database
        });

    });

    app.post('/api/newBlog', (req, res) => {
        const dataToBePosted = {
            title: req.body.title,
            body: req.body.body,
            author: req.user.username
        };

        console.log(dataToBePosted);
        const blogPost = new Blog(dataToBePosted);
        blogPost.save(); //save the object to database
        res.redirect("/")
    });
};