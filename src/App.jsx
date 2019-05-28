import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Container from 'react-bootstrap/Container';
import Footer from './Components/Footer';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Garrett Love',
			headerLinks: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' }
			],
			home: {
				title: 'Be Relentless',
				subTitle: 'Projects that make a difference.',
				text: 'Checkout my projects below'
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
			<Router>
				<Container className="p-0" fluid={true}>

					<Navbar className="border-bottom" bg="transparent" expand="lg">
						<Navbar.Brand href="/">Garrett Love</Navbar.Brand>
						<Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								<Link className="nav-link" to="/">Home</Link>
								<Link className="nav-link" to="/about">About</Link>
								<Link className="nav-link" to="/contact">Contact</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
					<Route path="/about" render={() => <About title={this.state.about.title} />} />
					<Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
					<Footer />
				</Container>
			</Router>
		);
	}

}

export default App;