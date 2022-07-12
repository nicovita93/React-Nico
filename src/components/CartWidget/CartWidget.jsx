import React from 'react'
import { Link } from 'react-router-dom'
import cart from './cart-icon.png'
import './CartWidget.css'

function CartWidget() {
  return (
     <Link to='/cart'>
        <img src={cart} className="cart-icono" alt="carrito de compras" />
     </Link>
  )
}

export default CartWidget