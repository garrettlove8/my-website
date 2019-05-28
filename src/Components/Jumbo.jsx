import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Jumbo(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid="true">
                <Row className="justify-content-center p-5">
                    <Col md="8">
                    { props.title && <h1 className="jumbo-title text-huge font-weight-bolder">{props.title}</h1> }
                    { props.subTitle && <h3 className="ml-3 display-4 font-weight-light">{props.subTitle}</h3> }
                    { props.text && <h3 className="ml-3 lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default Jumbo;