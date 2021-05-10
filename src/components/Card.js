import React, { Component } from "react";

export default class Card extends Component {
    render() {
        let {card} = this.props;
        let quantity_rows = [];

        switch(this.props.displayMode)
        {
            case 'want':
                quantity_rows.push(<div key='want' className='card-quantity'>{`Need: ${3 - card.current_playset_amount}`}</div>)
                break;
            case 'trade':
                if (card.current_non_foil_playset_amount < 3)
                {
                    quantity_rows.push(<div key='trade' className='card-quantity'>{`Trade Amt: ${card.total_amount - card.current_playset_amount}`}</div>)
                }
                quantity_rows.push(<div key='have' className='card-quantity underline'>{`Have`}</div>)
                card.quantities.forEach((quantity, index) => {
                    if(quantity.design_type !== 'Regular')
                    {
                        if(quantity.quantity > 0) {
                            quantity_rows.push(<div key={index}
                                                    className='card-quantity'>{`${quantity.design_type}: ${quantity.quantity}`}</div>)
                        }
                    }
                    else if (quantity.quantity > 3) {
                        quantity_rows.push(<div key={index} className='card-quantity'>{`${quantity.design_type}: ${quantity.quantity - 3}`}</div>)
                    }
                })
                break;
            case 'trade-down':
                quantity_rows.push(<div key='trade' className='card-quantity'><span className='underline'>Need</span>: {`${3 - card.current_non_foil_playset_amount}`}</div>)
                quantity_rows.push(<div key='have' className='card-quantity underline'>{`Have`}</div>)
                card.quantities.forEach((quantity, index) => {
                    if(quantity.design_type !== 'Regular')
                    {
                        if(quantity.quantity > 0) {
                            quantity_rows.push(<div key={index}
                                                    className='card-quantity'>{`${quantity.design_type}: ${quantity.quantity}`}</div>)
                        }
                    }
                })
                break;
            default:
                break;
        }

        return <div className='card'>
            <img src={card.image ? card.image : 'https://upload.wikimedia.org/wikipedia/en/b/b4/Final_Fantasy_CCG.jpg'} alt=''
             className='card-img'/>
            <div className='card-data'>
                <div className='card-name'>{card.name}</div>
                <div className='card-code'>{card.serial}</div>
                {/*<div className='card-code'>{`current_playset_amount: ${card.current_playset_amount}`}</div>*/}
                {/*<div className='card-code'>{`current_non_foil_playset_amount: ${card.current_non_foil_playset_amount}`}</div>*/}
                {/*<div className='card-code'>{`total_amount: ${card.total_amount}`}</div>*/}
                {quantity_rows}
            </div>
        </div>
    }
}