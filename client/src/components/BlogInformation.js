import React, { Component } from 'react';
import axios from 'axios';

class BlogInformation extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: "",
            author: ""
        };

        this.getBlog = this.getBlog.bind(this);
    }

    componentWillMount(){
        this.getBlog();
    }

    getBlog(){
        axios(`/api/blog/${this.props.match.params.id}`)
            .then(res => {
                const { title, body, author } = res.data;
                this.setState({ title: title, body: body, author: author}, () => console.log(this.state));
            });
    }

    render(){
        return(
            <div>
                <h2>{this.state.title}</h2>
                <h4>By: {this.state.author}</h4>
            </div>
        )
    }
}

export default BlogInformation;