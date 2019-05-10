import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Gbar(props) {

    const links = props.links.map(link => {
        return <Nav.Link key={link.title}>{link.title}</Nav.Link>;
    });

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Garrett Love</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {links}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default Gbar;