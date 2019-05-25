/* eslint-disable no-unused-vars */
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Content(props) {

	return (
		<Row className="justify-content-center">
			<Col md="8">
				{props.children}
			</Col>
		</Row>
	);

}

export default Content;