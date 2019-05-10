import React from 'react';
import Gbar from './Gbar';
import Container from 'react-bootstrap/Container'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Garrett Love',
			headerLinks: [
				{ title: 'Home' },
				{ title: 'Work' },
				{ title: 'About' },
				{ title: 'Contact' }
			]
		}
	}

	render() {
		return(
			<Container className="p-0" fluid={true}>
				<Gbar links={this.state.headerLinks} />
			</Container>
		);
	}

}

export default App;