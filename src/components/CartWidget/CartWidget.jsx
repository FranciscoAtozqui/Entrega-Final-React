import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "https://www.pngitem.com/pimgs/m/471-4710790_carrito-de-compras-png-transparent-png.png";
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
      <strong> 10 </strong>
      
    </div>
  )
}

export default CartWidget