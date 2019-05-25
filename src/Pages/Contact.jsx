import React from "react";

import Form from 'react-bootstrap/Form';

import Jumbo from '../Components/Jumbo';
import Content from '../Components/Content';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange (event) {
        console.log('event: ', event.target.name);
        
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render () {
        return(
            <div>
                <Jumbo title={this.props.title} />
                <Content>
                    <Form>
                        <Form.Group>
                            <Form.Label className="" htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control className="" id="full-name" name="name" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="" htmlFor="email">Email</Form.Label>
                            <Form.Control className="" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="" htmlFor="message">Message</Form.Label>
                            <Form.Control className="" as="textarea" rows="3" id="message" name="message" value={this.state.message} onChange={this.handleChange}></Form.Control>
                        </Form.Group>
                    </Form>
                </Content>
            </div>
        );
    }

}

export default Contact;