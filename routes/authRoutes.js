const passport = require('passport');
const mongoose = require('mongoose');
require('../models/Blog');
const Blog = mongoose.model('Blog');
const User = mongoose.model('user');

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

    app.get('/api/blog/:id', (req, res) => {
        const blogId = req.params.id; //gets the parameter, which is the id for the blog
        Blog.findById(blogId, (err, blog) => {
            if(err){
                res.send("ERROR");
            }
            else{
                res.send(blog);
            }
        })
    });

    app.post('/api/newBlog', (req, res) => {
        const dataToBePosted = {
            title: req.body.title,
            body: req.body.body,
            author: req.user.username,
            blogId: req.user.id //blog will hold an id which is identical to user's id
        };

        /*
        This updates the data that the user holds.
        Each user holds an array of blogs, which are objects
        When you go to '/api/current_user', the array will be
        updated and a new blog post object will be added
        */
        User.findById(req.user._id, function (err, blog) {
            blog.blogPosts.push(dataToBePosted);//push the new blog object to the array
            blog.save();
        });

        //console.log(dataToBePosted);
        const blogPost = new Blog(dataToBePosted);
        blogPost.save(); //save the object to database
        res.redirect("/")
    });
};