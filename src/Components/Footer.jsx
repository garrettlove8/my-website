import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer(props) {

    return(
        <footer className="mt-5">
            <Container fluid="true">
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md="3">
                        Garrett Love
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md="4">
                        Copyright &copy; 2019 - Garrett Love. All Rights Reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;