import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'






const ItemDetail = ({ id, nombre, precio, img, stock, description }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className="card mb-3 contenedorItem fw-bold mx-auto" style={{ maxWidth: '60rem' }}>
      <div className="row g-0">
        <div className="col-md-4 imgContainer">
          <img src={img} className="img-fluid rounded-start imgDetail" alt={nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{nombre}</h2>
            <p className="card-text prize">Precio: $ {precio}</p>
            <p className="card-text">ID: {id}</p>
            <p className="card-text">Descripción: {description}</p>
            {
              agregarCantidad > 0 ? (<Link to="/cart"><button className='btn btnCheckout'>Terminar Compra</button></Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

