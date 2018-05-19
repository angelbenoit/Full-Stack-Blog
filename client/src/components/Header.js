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

    componentDidMount(){
        this.getUserInfo();
    }

    getUserInfo(){
        axios.get("http://localhost:3000/api/current_user")
            .then(res => res)
            .then(({_id, username, googleId}) => {
                this.setState({
                    _id,
                    username,
                    googleId
                }, () => console.log("Finished Fetching"));
            });
    }

    render() {
        const test = this.state;
        console.log(test);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Hi {test.username}</a>
                </div>
            </nav>
        )
    }
}

export default Header;