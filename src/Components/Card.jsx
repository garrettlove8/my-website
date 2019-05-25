import React from 'react';

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
				<div className="g-card-info">
					{ this.props.selected && <p className="g-card-title">{this.props.item.title}</p> }
					{ this.props.selected && <p className="g-card-sub-title">{this.props.item.subTitle}</p> }
					{ this.props.selected && <a className="btn btn-primary" href={this.props.item.link} target="_blank" rel="noopener noreferrer">View</a> }
				</div>
			</div>
		);
	}

}

export default Card;