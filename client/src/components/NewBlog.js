import React from 'react';
class NewBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="col s12 row">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            value={this.state.value}
                            type="text"
                            className="validate"
                            onChange={this.handleChange} />
                        <label className="active">Title</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            value={this.state.value}
                            type="text"
                            className="validate"
                            onChange={this.handleChange} />
                        <label className="active">Title</label>
                    </div>
                </div>
            </form>

        )
    }
}

export default NewBlog;