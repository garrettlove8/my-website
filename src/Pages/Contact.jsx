import React from "react";
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import Jumbo from '../Components/Jumbo';
import Content from '../Components/Content';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        
        event.preventDefault();

        this.setState({
            disabled: true
        });

        axios.post('/api/email', this.state)
            .then(res => {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            });

    }

    render () {
        return(
            <div>
                <Jumbo title={this.props.title} />
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label className="" htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control className="" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="" htmlFor="email">Email</Form.Label>
                            <Form.Control className="" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="" htmlFor="message">Message</Form.Label>
                            <Form.Control className="" as="textarea" rows="3" id="message" name="message" value={this.state.message} onChange={this.handleChange}></Form.Control>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email not sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default Contact;