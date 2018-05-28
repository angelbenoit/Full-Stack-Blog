import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profile:[],
            blogs: []
        };
        axios.get('/api/current_user')
            .then((res) => {
                this.setState({ profile: res.data });
                let blogList = res.data.blogPosts.map(blog => <li>{blog.title}</li>);
                this.setState({ blogs: blogList }, () => console.log("updating list"));
                console.log(this.state.profile);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    render() { 
        if(this.state.profile.googleId){
        return ( 
            <div className="profile-page">
                <div className="profile-text">
                    <h2>Hello <em>{this.state.profile.username}</em></h2>
                    <p>Blog posts by user:</p>
                    <ul>
                        {this.state.blogs}
                    </ul>
                </div>
            </div>
         )
        }
        else{
            return (
                <div>
                    <p>Empty</p>
                </div>
            )  
        }
    }
}
 
export default Profile;