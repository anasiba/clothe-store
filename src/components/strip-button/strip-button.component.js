import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const PublishableKey = 'pk_test_51GzLjPIIlcXeAhKs1mJQsV7qNbhgwjfhEBxdGtwfMcQ1mb8xZPxHg22dbuCH28ugUWB24TOYdF5HC0i9XJ9C0Lkw00hP3FyJJU'
    
   const onToken = token =>{
        console.log(token)
        alert('Payment succesful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing LTD'
        billingAddress
        shippingAddress
        image=''
        description={`Your Total is $ ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={PublishableKey}

        />

    )
}
export default StripCheckoutButton;
