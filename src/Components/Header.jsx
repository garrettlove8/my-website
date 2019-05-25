import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header(props) {

    const links = props.links.map(link => {
        return (
            
            <Link to={{pathname: link.path}} key={link.title}>{link.title}</Link>
            
        );
    });

    return(
        <Router>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand href="#home">Garrett Love</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {links}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    );

}

export default Header;