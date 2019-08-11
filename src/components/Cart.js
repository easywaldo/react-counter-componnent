import React, { Component } from 'react';
import CartItem from './CartItem';


class Cart extends Component {

    static defaultProps = {
        data: []
    }

    render() {
        const { data} = this.props;

        const cartList = data.map(
            item => (<CartItem item={item} key={item.id} />)
        );
        return (
            <div>
                {cartList}
            </div>
        );
    }
}

export default Cart;