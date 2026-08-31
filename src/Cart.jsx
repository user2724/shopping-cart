import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
const [cart, setCart] = useState([])

function AddToCart(item){
    setCart(prevCart => { //prevCart represents the existing array that we are updating
      const existing = prevCart.find(cartItem => cartItem.id === item.id)
      if (existing) {
        return prevCart.map(cartItem => cartItem.id == item.id ? 
          { ...cartItem, numOfItems: 1} : cartItem 
        )
      }
      return [...prevCart, { ...item, numOfItems: 1}]
    })
}

function UpdateQuantity(id, increment) {
   // if the item is in the cart, then increment or decrement.
   setCart(prevCart => {
    return prevCart.map(cartItem => cartItem.id == id ? 
      { ...cartItem, numOfItems: cartItem.numOfItems + increment} : cartItem
    )
    .filter(cartItem => cartItem.numOfItems > 0)
   })
}

function RemoveFromCart(id) {
// if numOfItems < 1, remove from cart
setCart(prevCart => {
  return prevCart.filter(cartItem => cartItem.id !== id)
})
}

function ClearCart() {
  setCart([])
}

return (
    <CartContext.Provider value={{cart, AddToCart, UpdateQuantity, RemoveFromCart, ClearCart}}> {children} </CartContext.Provider>
)

}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
   throw new Error("UseCart must be used within a CartProvider")
  }

  return context
};