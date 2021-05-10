import React, { Component } from "react";
import Set from './Set'

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.documentElement.scrollTop = this.props.initialScrollPos;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        this.props.setScrollPos(event.target.scrollingElement.scrollTop);
    }

    sortedAndFilteredCardData = () => {
        const sortAlphaNum = (a, b) => a.opus.localeCompare(b.opus, 'en', { numeric: true })
        const sorted_card_data = this.props.cardData.sort(sortAlphaNum)
        for(let i = 0; i < sorted_card_data.length; i++)
        {
            sorted_card_data[i].cards = sorted_card_data[i].cards.filter((card) => {
                switch(this.props.displayMode) {
                    case 'want':
                        return card.current_playset_amount < 3;
                    case 'trade':
                        return card.current_playset_amount >= 3 && card.total_amount > card.current_playset_amount;
                    case 'trade-down':
                        return card.current_playset_amount > card.current_non_foil_playset_amount;
                    default:
                        return false;
                }
            })
        }

        return sorted_card_data;
    }

    render() {
        return <div className={`results-view ${this.props.displayed ? 'top-result' : ''}`}>
            {this.sortedAndFilteredCardData().map((set, index) => <Set setData={set} key={index}/>)}
        </div>
    }
}