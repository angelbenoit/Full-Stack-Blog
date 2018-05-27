import React from 'react';
import axios from 'axios';

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            blogs: [],
            currentUser: ""
        }
    }

    componentWillMount(){
        this.getCurrentUser();
        this.fetchBlogs();
    }

    fetchBlogs(){
        axios('/api/blog_list')
            .then(res => {
                /*this list will hold an array of divs that contain a
                  title and a paragraph. For every blog found in the api,
                  a div holding the info will be added to the array
                  eg: [<div>...</div>, <div>...</div>, ...]
                  After, set the state to this array
                */
                const list = res.data.map(blog => {
                    return (
                        <div key={blog._id} className="col s12 m12">
                            <div className="card blue-grey">
                                <div className="card-content white-text">
                                    <h4 className="card-title blog-title">{blog.title}</h4>
                                    <h5 className="card-title blog-author">Created By: <em>{blog.author}</em></h5>
                                    <p className="blog-preview">{blog.body}</p>
                                    {/*link to more info for specific blog is /blog/:id*/}
                                    <a href={`/blog/${blog._id}`} className="read-more">Click here to read more</a>
                                </div>
                            </div>
                        </div>
                    )
                });
                console.log(list);
                this.setState({ blogs: list }, () => console.log("Updating Array"));
            });
    }

    getCurrentUser(){
        axios('/api/current_user')
            .then(res => {
                this.setState({ currentUser: res.data._id }, () => console.log(this.state.currentUser));
            })
    }

    render() {
        return (
            <div className="row">
                <h1 className="home-title">Welcome to BlogApp</h1>
                {this.state.blogs}
            </div>
        )
    }
}

export default Homepage;