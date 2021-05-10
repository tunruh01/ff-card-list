import React, { Component } from "react";
import SetHeader from './SetHeader'
import CardList from './CardList'

export default class Set extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <SetHeader setData={this.props.setData}/>
            <CardList displayMode={this.props.displayMode} setData={this.props.setData}/>
        </div>
    }
}