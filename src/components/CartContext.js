import React, { useState } from "react";

export const Context = React.createContext([]);

const CartContext = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const isInCart = (id) => {
        return cart.some(i => i.item.id === id);
    }

    const addItem = (item, quant) => {
        isInCart(item.id) ? (
            setCart(cart.map(g => g.item.id === item.id ? { ...g, quant: g.quant + quant } : g))
        ) : (
            setCart([...cart, { item: item, quant: quant }])
        );
    }

    const removeItem = (itemId) => {
        // console.log(cart)
        // console.log(cart[itemId])
        // console.log(itemId)
        // console.log()
        cart[cart.findIndex(g => g.item.id === itemId)].quant === 1 ? (
            setCart(cart.filter(i => i.item.id !== itemId))
        ) : (
            setCart(cart.map(g => g.item.id === itemId ? { ...g, quant: g.quant - 1 } : g))
        )
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <Context.Provider value={{ cart, isInCart, addItem, removeItem, clear }}>
            {children}
        </Context.Provider>
    );
}

export default CartContext;