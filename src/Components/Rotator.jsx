import React from 'react';
import Card from './Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';

class Rotator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: evverest,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        };

        this.makeItems = this.makeItems.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
    }


    handleCardClick(id, card) {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState((preState, props) => ({
            items
        }));
        
    }

    
    makeItems(items) {
        return items.map(item => {
            return <Card item={item} selected={item.selected} onClick={(e) => this.handleCardClick(item.id, e)} key={item.title} />;
        });
    }


    render() {
        return(
            <Container fluid="true">
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Rotator;