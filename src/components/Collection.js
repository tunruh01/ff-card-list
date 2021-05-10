import React, { Component } from "react";
import { readRemoteFile } from 'react-papaparse'
//import FFDecksData from '../test_data/ffdecks';
import ClipLoader from "react-spinners/ClipLoader";
import Results from './Results'
import WantTradeHeader from './WantTradeHeader'

export default class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promo_card_data: null,
            ffdecks_data: null,
            collection_data: null,
            card_set_data: null,
            display_mode: 'want',
            scroll_pos: {},
            filters: {
                'want': { sets: ['All'], rarities: ['All'] },
                'trade':  { sets: ['All'], designs: ['All'], rarities: ['L', 'H', 'PR Only'] },
                'trade-down':  { sets: ['All'], designs: ['All'], rarities: ['L', 'H'] }
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if((prevState.promo_card_data === null ||
            prevState.ffdecks_data === null ||
            prevState.collection_data === null) &&
            this.state.promo_card_data !== null &&
            this.state.ffdecks_data !== null &&
            this.state.collection_data !== null)
        {
            let merged_data = [];
            this.state.ffdecks_data.cards.forEach(card => {
                let merged_card = {};
                merged_card.name = card.name;
                merged_card.image = card.image;
                merged_card.serial = card.serial_number;
                merged_card.serial += card.rarity !== 'Promo' ? card.rarity[0] : '';
                merged_card.quantities = [];
                merged_card.quantities.push({design_type: 'Regular', quantity: 0, playset_important: true})
                merged_card.current_playset_amount = 0;
                merged_card.current_non_foil_playset_amount = 0;
                merged_card.opus = card.serial_number[1] === '-' ? card.serial_number[0] : card.serial_number.substring(0,2);
                merged_data.push(merged_card);
            })

            this.state.collection_data.forEach((row, index) => {
                if(index > 0)
                {
                    let look_serial = row[1] + (row[2] !== 'Promo' ? row[2][0] : '');
                    let existing_index = merged_data.findIndex(item => item.serial === look_serial)
                    if(existing_index >= 0)
                    {
                        merged_data[existing_index].quantities[0].quantity = parseInt(row[3]);
                        merged_data[existing_index].current_non_foil_playset_amount = Math.min(parseInt(row[3]), 3);

                        merged_data[existing_index].quantities.push({design_type: 'Foil', quantity: parseInt(row[4]), playset_important: false})
                    }
                    else {
                        console.log('missing serial from collection' + look_serial)
                    }
                }
            })

            this.state.promo_card_data.forEach((row, index) => {
                if(index > 0)
                {
                    let look_serial = row[0];
                    let existing_index = merged_data.findIndex(item => item.serial === look_serial)
                    if(existing_index >= 0)
                    {
                        merged_data[existing_index].quantities.push({design_type: row[3].replace('Full Art', 'FA').replace('Prerelease', 'PreR').replace('Promo', 'PR').replace('Alternate', 'Alt') , quantity: parseInt(row[1]), playset_important: false})
                    }
                    else {
                        console.log('missing serial from promos' + look_serial)
                        let merged_card = {};
                        merged_card.name = row[2];
                        merged_card.serial = row[0];
                        merged_card.quantities = [];
                        merged_card.quantities.push({design_type: 'Regular', quantity: 0, playset_important: true})
                        merged_card.quantities.push({design_type: row[3].replace('Full Art', 'FA').replace('Prerelease', 'PreR').replace('Promo', 'PR').replace('Alternate', 'Alt'), quantity: parseInt(row[1]), playset_important: false})
                        merged_card.current_playset_amount = 0;
                        merged_card.current_non_foil_playset_amount = 0;
                        merged_card.opus = merged_card.serial[1] === '-' ? merged_card.serial[0] : merged_card.serial.substring(0,2);
                        merged_data.push(merged_card);
                    }
                }
            })

            for(let i = 0; i < merged_data.length; i++)
            {
                merged_data[i].total_amount = merged_data[i].quantities.reduce((total, quantity) => total + quantity.quantity, 0)
                merged_data[i].current_playset_amount = Math.min(3, merged_data[i].total_amount)
            }

            let card_set_data = []

            merged_data.forEach(card => {
                let existing_index = card_set_data.findIndex(item => item.opus === card.opus)

                if(existing_index < 0)
                {
                    card_set_data.push({opus: card.opus, cards:[]})
                    existing_index = card_set_data.length - 1;
                }

                card_set_data[existing_index].cards.push(card)
            })

            this.setState({card_set_data})
        }
    }

    componentDidMount() {
        readRemoteFile(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNKDBLs5ncNghesIYn2C4JlnJ5TZBNUmPZRsjAk9tyVxqoAcTs69QijdIo0Ys3_svdyCXwDlf814J5/pub?gid=0&single=true&output=csv",
            {
                complete: (results) => {
                    this.setState({promo_card_data: results.data})
                }
            }
        )
        readRemoteFile(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyqsRmAvUeC9CXLXgZCyFTQBtGt6g6qq94q7USpcS8PeP7Z0o9iA3j5DoYqkFG6YGYMpv6_VqNtALC/pub?gid=1646712877&single=true&output=csv",
            {
                complete: (results) => {
                    this.setState({collection_data: results.data})
                }
            }
        )
        fetch("https://ffdecks.com/api/cards/basic")
            .then(res => res.json())
            .then(res => {
                    this.setState({ffdecks_data: res})
                    console.log('ffdecks_data_fetched')
                }
            )
    }

    setDisplayMode = (mode) => {
        this.setState({display_mode: mode})
    }

    setScrollPos = (pos) => {
        let scroll_data = {...this.state.scroll_pos};
        scroll_data[this.state.display_mode] = pos;
        this.setState({scroll_pos: scroll_data})
    }

    updateFilter = (filter_type, filter) => {
        let filter_data = {...this.state.filters};

        if(filter === 'All' || filter_type === 'sets' || filter_data[this.state.display_mode][filter_type].includes('All'))
        {
            filter_data[this.state.display_mode][filter_type] = [];
            filter_data[this.state.display_mode][filter_type].push(filter);
        }
        else if(filter_data[this.state.display_mode][filter_type].includes(filter)) {
            const index = filter_data[this.state.display_mode][filter_type].indexOf(filter);
            if (index > -1) {
                filter_data[this.state.display_mode][filter_type].splice(index, 1);
            }
        }
        else {
            filter_data[this.state.display_mode][filter_type].push(filter);
        }

        this.setState({filters: filter_data})
    }

    render() {
        if(!!this.state.card_set_data) {
            return <div style={{height:'100%'}}>
                <WantTradeHeader changeDisplay={this.setDisplayMode} displayMode={this.state.display_mode}/>
                {this.state.display_mode === 'want' && <Results filters={this.state.filters['want']} updateFilter={this.updateFilter} setScrollPos={this.setScrollPos} initialScrollPos={this.state.scroll_pos['want']} cardData={this.state.card_set_data} displayMode={this.state.display_mode}/>}
                {this.state.display_mode === 'trade' && <Results filters={this.state.filters['trade']} updateFilter={this.updateFilter} setScrollPos={this.setScrollPos} initialScrollPos={this.state.scroll_pos['trade']} cardData={this.state.card_set_data} displayMode={this.state.display_mode}/>}
                {this.state.display_mode === 'trade-down' && <Results filters={this.state.filters['trade-down']} updateFilter={this.updateFilter} setScrollPos={this.setScrollPos} initialScrollPos={this.state.scroll_pos['trade-down']} cardData={this.state.card_set_data.filter(set => set.opus !== 'PR')} displayMode={this.state.display_mode}/>}
            </div>
        }
        else {
            return <ClipLoader color={"black"} loading={true} size={150} />
        }
    }
}