import React from 'react';
import axios from "axios";
import {mapDispatchToProps, mapStateToProps} from "../store/login/commands";
import { connect } from "react-redux";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: 'admin', password: 'qweqweqweQ1'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        // axios.post('http://localhost/api/token/', {
        //     client_id: 'tgA2ww6Vtt6ztqpqoyMtijZGbNuoupwVD7lYmPiC',
        //     client_secret: 'Do4fshsPrd7Iqe4IjAoL8raZppxmW733R5scrHZtlBxxkQLdRU50nUnWcPCaksBNfRU8AqkeoZFOPI6ocabZWKYPWkthGFNzKWVpHIyxGMfVnHt9nITNK68GDVZOV5bR',
        //     grant_type: 'password', ...this.state
        // }).then(function (response){
        //     console.log('👉 New token:', response.data.access_token);
        // }).catch(function (response) {
        //     console.log("Choto ne tak");
        // });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" value={this.state.username}/>
                <input type="password" name="password" value={this.state.password}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);