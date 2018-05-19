import React from 'react';
import axios from 'axios';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
                _id: "",
                username: "",
                googleId: ""
        };
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    componentWillMount(){
        this.getUserInfo();
    }

    getUserInfo(){
        axios.get('/api/current_user')
            .then(response => {
                //response returns data object, in addition to others
                //that will contain the user info
                const data = response.data;
                this.setState({
                    _id: data._id,
                    username: data.username,
                    googleId: data.googleId
                });
            })
    }

    renderNavbar(){
        if(this.state.username){ //if user exists, return logout option
            return (
                    <nav className="teal">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo center">Blog</a>
                            <ul id="nav-mobile" className="left hide-on-small-and-down">
                                <li><a href="/profile">
                                    Profile
                                </a></li>
                                <li><a href="/api/logout">
                                    Logout
                                </a></li>
                            </ul>
                        </div>
                    </nav>

            )
        }
        else{   //otherwise return option to login
            return (
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo col s2">Blog</a>
                        <a href="/auth/google" className="left col s1">Login</a>
                       </div>
                </nav>
            )
        }
    }

    render() {
        return (
                this.renderNavbar()
        )
    }
}

export default Header;