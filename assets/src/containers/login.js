import React from 'react';
import axios from "axios";
import {mapDispatchToProps, mapStateToProps} from "../store/login/commands";
import { connect } from "react-redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Col, Container, Row} from "react-bootstrap";
import image from 'base.png';


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

const buttonStyle = {
    borderRadius:                    0,
    backgroundColor: `#ff7b00`,
    borderColor: `#ff7b00`,
};

const FormStyle= {
    alignItems: `center`,
};

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
        const {setUser} = this.props;
        return (
            <div style={sectionStyle}>
                <Container style={containerStyle}>
                    <Row style={containerStyle}>
                        <Col md={{ span: 5, offset: 7 }} style={{FormStyle}}>
                            <Form style={containerStyle}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Идентификационный номер</Form.Label>
                                    <Form.Control type="email" value={this.state.username} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" value={this.state.password} onChange={this.handleChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" style={buttonStyle}>
                                    Войти
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);