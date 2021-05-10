import React, { Component } from "react";
import Set from './Set'
import FilterControls from "./FilterControls";

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
        let card_data = [...this.props.cardData]
        const sortAlphaNum = (a, b) => a.opus.localeCompare(b.opus, 'en', { numeric: true })
        let sorted_card_data = card_data.sort(sortAlphaNum)

        sorted_card_data = sorted_card_data.map(set => {return {...set}})

        if(this.props.filters['sets']  && !this.props.filters['sets'].includes('All')) {
            sorted_card_data = sorted_card_data.filter(set => {
                return this.props.filters['sets'].includes('All') || this.props.filters['sets'].includes(set.opus)
            })
        }

        for(let i = 0; i < sorted_card_data.length; i++)
        {
            if(this.props.filters['rarities'] && !this.props.filters['rarities'].includes('All')) {
                sorted_card_data[i].cards = sorted_card_data[i].cards.filter(card => {
                    let rarity = card.serial.startsWith('PR') ? 'PR Only' : card.serial[card.serial.length - 1];

                    return this.props.filters['rarities'].includes(rarity)
                })
            }

            if(this.props.filters['designs'] && !this.props.filters['designs'].includes('All')) {
                sorted_card_data[i].cards = sorted_card_data[i].cards.filter(card => {
                    let designs = card.quantities.map(quantity =>
                        ((quantity.design_type !== 'Regular' && quantity.quantity > 0)
                            || (quantity.design_type === 'Regular' && quantity.quantity > 3)) ? quantity.design_type : null)
                    return designs.some(item => this.props.filters['designs'].includes(item))
                })
            }

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
        return <div>
            <FilterControls filters={this.props.filters} updateFilter={this.props.updateFilter} displayMode={this.props.displayMode} cardData={this.props.cardData}/>
            {this.sortedAndFilteredCardData().map((set, index) => set.cards.length > 0 ? <Set displayMode={this.props.displayMode} setData={set} key={index}/> : null)}
        </div>
    }
}