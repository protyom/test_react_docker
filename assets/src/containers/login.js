import React from 'react';
import axios from "axios";
import {mapDispatchToProps, mapStateToProps} from "../store/login/commands";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col, Container, Image, Row} from "react-bootstrap";
import image from 'base.png';
import logo from 'logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.sass';


const sectionStyle = {
    position: `absolute`,
    backgroundImage: `url(${image})`,
    width: `100%`,
    height: `100%`,
    backgroundSize: `cover`,
};

const containerStyle = {
    height: `100%`,
    minHeight: `100%`,
};

// const buttonStyle = {
//     borderRadius:                    0,
//     backgroundColor: `#ff7b00`,
//     borderColor: `#ff7b00`,
// };

const VerticalStyle= {
    minHeight: `100vh`,

    display: 'flex',


    alignItems : `center`,
    width: `100%`,
};

const FormStyle = {
    width: `100%`,
};

const logoStyle = {
    paddingBottom: `72px`,
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: 'admin', password: 'qweqweqweQ1', enabled: true};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        this.setState({enabled: this.state.password.length > 0 && this.state.username.length > 0})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {setUser} = this.props;
        setUser(this.state.username, this.state.password);
    }

    render() {

        return (
            <div style={sectionStyle}>
                <Container style={containerStyle}>
                    <Row style={containerStyle}>
                        <Col md={{ span: 5, offset: 7 }} style={containerStyle}>
                            <div style={VerticalStyle}>
                                <Form style={FormStyle}>
                                    <img src={logo} style={logoStyle}/>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Идентификационный номер</Form.Label>
                                        <Form.Control value={this.state.username} name="username" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Пароль</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Button variant={this.state.enabled ? "primary" : "secondary"} type="submit" onClick={this.handleSubmit} disabled={!this.state.enabled}>
                                        Войти
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);