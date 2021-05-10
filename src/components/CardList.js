import React, { Component } from "react";
import Card from './Card'

export default class CardList extends Component {
    render() {
        let displayed_cards = [];

        this.props.setData.cards.forEach((card, card_index) => {
            //if(card.current_playset_amount < 3) {
                displayed_cards.push(<Card displayMode={this.props.displayMode} key={card_index} card={card}/>)
            //}
        })

        return <div className='card-set'>
            {displayed_cards.length > 0 && displayed_cards}
            {displayed_cards.length <= 0 && <div>No Results for Set.</div>}
        </div>
    }
}