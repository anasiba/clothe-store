export const addItemToCart = (cartItems, cartIemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartIemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartIemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartIemToAdd, quantity: 1 }]
}

export const remouveItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}