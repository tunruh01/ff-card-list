import React, { Component } from "react";
import SetHeader from './SetHeader'
import CardList from './CardList'

export default class Set extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let displayed_cards = [];

        this.props.setData.cards.forEach((card, card_index) => {
            if(card.current_playset_amount < 3) {
                // card.quantities.forEach((quantity_data, quantity_index) => {
                //     displayed_cards.push(<div key={`${set_index}-${quantity_index}`}>
                //         {`${card.name} - ${card.serial} - ${quantity_data.design_type} - ${quantity_data.quantity}`}
                //     </div>)
                // })
                displayed_cards.push(<div key={card_index}>
                    {`${card.name} - ${card.serial} - need: ${3 - card.current_playset_amount}`}
                </div>)
            }
        })

        return <div>
            <SetHeader setData={this.props.setData}/>
            <CardList setData={this.props.setData}/>
        </div>
    }
}