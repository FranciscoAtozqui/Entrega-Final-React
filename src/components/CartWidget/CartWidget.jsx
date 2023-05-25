import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png";

  return (
    <div className="position-relative btn-primary">
      <img className='imgCarrito' src={imgCarrito} alt='Carrito' />
      <span className="position-absolute  spanCarrito"><span className="visually-hidden">unread messages</span>0</span>
    </div>
  )
}

export default CartWidget