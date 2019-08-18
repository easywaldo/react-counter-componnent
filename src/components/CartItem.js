import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {

    static propTypes = {
        item: PropTypes.object
    }

    render() {
        const { id, productName, count } = this.props.item;

        return (
            <div>
                <p>
                상품아이디 : {id} 상품명 : {productName} 주문수량 : {count}
                </p>
            </div>
        );
    }
}

export default CartItem;