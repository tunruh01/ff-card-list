import React, { Component } from "react";

export default class Card extends Component {
    render() {
        let {card} = this.props;
        console.log(card)
        return <div className='card'>
            <img src={card.image} alt=''
             className='card-img'/>
            <div className='card-data'>
                <div className='card-name'>{card.name}</div>
                <div className='card-code'>{card.serial}</div>
                <div className='card-quantity'>NEED {3 - card.current_playset_amount}</div>
            </div>
        </div>
    }
}