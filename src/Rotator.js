import React from 'react';
import Card from './Card';

import devgrub from './assets/images/devgrub.png';
import youtube from './assets/images/youtube.png';
import evverest from './assets/images/evverest.png';

class Rotator extends React.Component {

    constructor(props) {
        super(props);
        console.log('props: ', this.props.items);
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
            <div className="row justify-content-around">
                {this.makeItems(this.state.items)}
            </div>
        );
    }

}

export default Rotator;