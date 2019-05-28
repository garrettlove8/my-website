import React from 'react';
import CardInfo from './CardInfo';

class Card extends React.Component {

	constructor(props) {
		super(props);

		this.handleCardClick = this.handleCardClick.bind(this);
	}


	handleCardClick(card) {
		this.props.onClick(card);
	}


	render() {
		return(
			<div className="d-inline-block g-card" onClick={(e) => this.handleCardClick(this.props.item)}>
				<img className="g-card-image" src={this.props.item.imgSrc} alt={this.props.item.image} />
				{ this.props.selected && <CardInfo title={this.props.item.title} subTitle={this.props.item.subTitle} link={this.props.item.link}  /> }
			</div>
		);
	}

}

export default Card;