import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: "",
        phone: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
          name: '',
          phone: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="please enter your name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name} />
                <input
                    placeholder="plese enter your phone number"
                    name="phone"
                    onChange={this.handleChange}
                    value={this.state.phone} />
                <div>

                <button type="submit">등록</button>
                {/* <div>{this.state.name} {this.state.phone}</div> */}
                </div>
                </form>
            </div>
        );
    }
}

export default PhoneForm;