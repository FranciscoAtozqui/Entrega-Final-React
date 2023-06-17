import React from 'react'
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png";

  return (
    <div className="position-relative btn-primary">
      <Link to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt='Carrito' />
        {
          cantidadTotal > 0 && <span className="position-absolute  spanCarrito"><span className="visually-hidden">unread messages</span>{cantidadTotal}</span> 
        }
      </Link>
    </div>
  )
}

export default CartWidget

