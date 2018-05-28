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
                        <div className="row card-block" key={blog._id}>
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{blog.title}</span>
                                        <p>Created by: <em>{blog.author}</em></p>
                                        <p>{blog.body.substring(0,5)}...</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={`/blog/${blog._id}`}>Click Here to read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                });
                console.log(list);
                this.setState({ blogs: list }, () => console.log(this.state.blogs));
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
            <div>
                <h1 className="home-title">Welcome to BlogApp</h1>
                {this.state.blogs}
            </div>
        )
    }
}

export default Homepage;