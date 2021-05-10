import React, { Component } from "react";

export default class Card extends Component {
    render() {
        let {card} = this.props;
        return <div className='card'>
            <img src={card.image} alt=''
             className='card-img'/>
            <div className='card-data'>
                <div className='card-name'>{card.name}</div>
                <div className='card-code'>{card.serial}</div>
                {
                    card.quantities.map((quantity, index) => <div key={index} className='card-quantity'>{`${quantity.design_type}: ${quantity.quantity}`}</div>)
                }
                {/*<div className='card-code'>{`current_playset_amount: ${card.current_playset_amount}`}</div>*/}
                {/*<div className='card-code'>{`current_non_foil_playset_amount: ${card.current_non_foil_playset_amount}`}</div>*/}
                {/*<div className='card-code'>{`total_amount: ${card.total_amount}`}</div>*/}
            </div>
        </div>
    }
}