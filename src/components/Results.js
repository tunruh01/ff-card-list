import React, { Component } from "react";
import Set from './Set'

export default class Results extends Component {
    render() {
        const sortAlphaNum = (a, b) => a.opus.localeCompare(b.opus, 'en', { numeric: true })
        const sorted_card_data = this.props.card_data.sort(sortAlphaNum)
        return <div>{sorted_card_data.map((set, index) => <Set setData={set} key={index}/>)}</div>
    }
}