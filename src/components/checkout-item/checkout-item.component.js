import React from 'react'

import { connect } from 'react-redux'

import { clearItemFromCart, addItem, remouveItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, remouveItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => remouveItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>

            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    remouveItem: item => dispatch(remouveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
