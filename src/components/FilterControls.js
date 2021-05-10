import React, { Component } from "react";

export default class FilterControls extends Component {
    render() {
        let sets = [];
        let designs = ['All'];
        this.props.cardData.forEach(set => {
            sets.push(set.opus);
            set.cards.forEach(card => {
                card.quantities.forEach(quantity => {
                    if(this.props.displayMode !== 'trade-down'
                        || (this.props.displayMode === 'trade-down'
                            && quantity.design_type !== 'Regular')) {
                            if (!designs.includes(quantity.design_type)) {
                                designs.push(quantity.design_type)
                            }
                    }
                })
            })
        })

        const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true })
        sets = sets.sort(sortAlphaNum)
        sets.unshift('All');

        let rarities =  ['All', 'L', 'H', 'R', 'C'];

        if(this.props.displayMode !== 'trade-down')
        {
            rarities.push('PR Only');
        }

        return <div className='filter-options'>
                <div className='filter-option-desc'>Set:</div>
                <ul className='filter-option-collection'>
                    {sets.map(set_name =>
                        <li onClick={() => this.props.updateFilter('sets', set_name)} className={`filter-option-item ${this.props.filters['sets'].includes(set_name) ? 'selected' : ''}`}  key={set_name}>{set_name}</li>)}
                </ul>
                <div className='filter-option-desc'>Rarity</div>
                <ul className='filter-option-collection'>
                    {rarities.map(rarity =>
                        <li onClick={() => this.props.updateFilter('rarities', rarity)} className={`filter-option-item ${this.props.filters['rarities'].includes(rarity) ? 'selected' : ''}`}
                            key={rarity}>{rarity}</li>)}
                </ul>
                {this.props.displayMode !== 'want' && <div className='filter-option-desc'>Design:</div>}
                {this.props.displayMode !== 'want' &&
                    <ul className='filter-option-collection'>
                        {designs.map(design =>
                            <li onClick={() => this.props.updateFilter('designs', design)} className={`filter-option-item ${this.props.filters['designs'].includes(design) ? 'selected' : ''}`}
                                key={design}>{design}</li>)}
                    </ul>}
            </div>
    }
}