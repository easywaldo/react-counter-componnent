import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const { id, name, count } = this.props.item;

        return (
            <div>
                <div>{id}</div>
                <div>{name}</div>
                <div>{count}</div>
            </div>
        );
    }
}

export default CartItem;