import React, { Component } from "react";
import Card from './Card'

export default class CardList extends Component {
    render() {
        let displayed_cards = [];

        this.props.setData.cards.forEach((card, card_index) => {
            if(card.current_playset_amount < 3) {
                displayed_cards.push(<Card key={card_index} card={card}/>)
            }
        })

        return this.props.setData.opus === '1' || this.props.setData.opus === '2' ? <div className='card-set'>
            {displayed_cards}
        </div> : null
    }
}