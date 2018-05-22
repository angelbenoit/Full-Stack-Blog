import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class NewBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }

    handleSubmit() {
        axios.post('/api/newBlog', this.state)
            .then(res => () => {
                console.log("testing router");
            });
        this.props.history.push("/");
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit} className="col s12 row">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            value={this.state.title}
                            type="text"
                            className="validate"
                            onChange={this.handleTitleChange} />
                        <label className="active">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <textarea
                            id="textarea1"
                            value={this.state.body}
                            className="materialize-textarea"
                            onChange={this.handleBodyChange} />
                        <label className="active">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>

        )
    }
}

export default withRouter(NewBlog);