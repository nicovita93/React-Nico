import React from 'react';
import { createContext, useState, useContext } from "react";
import Swal from 'sweetalert2';

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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Has borrado el carrito con éxito',
            showConfirmButton: false,
            timer: 1500
          })
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
