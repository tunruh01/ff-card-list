import React, { Component } from "react";

export default class SetHeader extends Component {
    render() {
        return <div className='set-header'>{this.props.setData.opus === 'PR' ? 'Promo Exclusive' : `Opus ${this.props.setData.opus}`}</div>
    }
}