import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {profile:[]};
        axios.get('/api/current_user')
            .then((res) => {
                this.setState({ profile: res.data });
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
                    <ul>
                        <li>GoogleID:{this.state.profile.googleId}</li>
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