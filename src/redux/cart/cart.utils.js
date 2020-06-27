export const addItemToCart = (cartItems, cartIemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartIemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartIemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartIemToAdd, quantity: 1  }]
}