import React, { Component } from 'react';
import axios from 'axios';
import '../Style/index.css';

class BlogInformation extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: "",
            author: "",
            authorizedUser: false
        };

        this.getBlog = this.getBlog.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    componentWillMount(){
        this.getBlog();
        this.getUserInfo();
    }

    getBlog(){
        axios(`/api/blog/${this.props.match.params.id}`)
            .then(res => {
                const { title, body, author, blogId } = res.data;
                this.setState({ title: title, body: body, author: author, blogId: blogId}, () => console.log(this.state));
            });
    }

    getUserInfo(){ //this function will get the id from the user and then use it
                   //to compare the id information from the blog to see if user can
                   //edit/delete it
        axios('/api/current_user')
            .then(res => {
                if(res.data._id === this.state.blogId){
                    this.setState({authorizedUser: true}, () => console.log("Finished Checking"));
                }
            })

    }

    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <h4>By: {this.state.author}</h4>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default BlogInformation;