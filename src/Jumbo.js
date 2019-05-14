import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Jombo(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Row className="justify-content-center p-5">
                <Col md="8">
                    { props.title && <h1 className="text-huge font-weight-bolder">{props.title}</h1> }
                    { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                </Col>
            </Row>
        </Jumbotron> 
    );

}

export default Jombo;