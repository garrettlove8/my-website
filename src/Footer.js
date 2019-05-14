import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {

    return(
        <footer className="mt-5">
            <Row className="border-top justify-content-between p-3">
                <Col md="3">
                    Garrett Love
                </Col>
                <Col md="4">
                    Copyright &copy; 2019 - Garrett Love. All Rights Reserved.
                </Col>
            </Row>
        </footer>
    );

}

export default Footer;