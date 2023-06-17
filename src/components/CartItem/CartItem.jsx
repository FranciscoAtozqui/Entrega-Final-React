import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className='fw-bold'>
          <h2> {item.nombre} </h2>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: $ {item.precio} </p>
      <button className='btn btn-danger' onClick={() => eliminarProducto(item.id)}>Eliminar producto</button>
      <hr />
    </div>
  )
}

export default CartItem