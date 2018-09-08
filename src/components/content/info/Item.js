import React, { Component } from 'react';

class Item extends Component {
    render() {
        const title = this.props.title;
        const icon = this.props.icon;

        return (
            <a className="contactinfo__single" target="_blank">
                <i className={icon+' contactinfo__icon'}></i>
                <span className="contactinfo__title">{title}</span>
            </a>
        )
    }
}

export default Item;