import React, { Component } from "react";

export default class WantTradeHeader extends Component {
    headerItemClicked = (mode) => {
        if (mode === this.props.displayMode) {
            window.scroll({top: 0, left: 0, behavior: 'smooth' })
        }
        else {
            this.props.changeDisplay(mode)
        }
    }
    render() {
        return <div className='want-trade-header'>
            <div className={`header-option ${this.props.displayMode === 'want' ? 'selected-header' : ''}`} onClick={() => this.headerItemClicked('want')}>Want</div>
            <div className={`header-option ${this.props.displayMode === 'trade' ? 'selected-header' : ''}`} onClick={() => this.headerItemClicked('trade')}>Trade</div>
            <div className={`header-option ${this.props.displayMode === 'trade-down' ? 'selected-header' : ''}`} onClick={() => this.headerItemClicked('trade-down')}>Trade Down</div>
        </div>
    }
}