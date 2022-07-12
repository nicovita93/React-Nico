import { createContext, useState, useContext } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        isInCart(item.id) ? console.log ({...item, quantity:item.quantity + quantity})
        :
        setCartList([...cartList, item])
    }

    const clearCart = () => {
        setCartList([])
    }

    const isInCart = itemId => {
        return cartList.find(item => item.id === itemId); 
      };

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
