import React from 'react';
import Gbar from './Gbar';
import Container from 'react-bootstrap/Container'
import Jombo from './Jumbo';
import Footer from './Footer';
import Rotator from './Rotator';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Garrett Love',
			headerLinks: [
				{ title: 'Home' },
				{ title: 'About' },
				{ title: 'Contact' }
			],
			home: {
				title: 'Be Relentless',
				subTitle: 'Projects that make a difference.'
			},
			about: {
				title: 'About Me',
			},
			contact: {
				title: 'Let\'s Talk',
			}
		}
	}

	render() {
		return(
			<Container className="p-0" fluid={true}>
				<Gbar links={this.state.headerLinks} />
				<Jombo title={this.state.home.title} subTitle={this.state.home.subTitle} />
				<Rotator items={this.state.home.items} />
				<Footer />
			</Container>
		);
	}

}

export default App;