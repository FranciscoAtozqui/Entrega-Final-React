import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
      <div className='contenedorItem'>
          <h2>Nombre: {nombre}</h2>
          <h3>Precio: {precio}</h3>
          <h3>ID: {id}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda excepturi nam odio voluptas quibusdam laborum illum suscipit. Eveniet cum quasi optio, sunt sapiente, voluptas saepe voluptate ex dolores, obcaecati voluptatibus.</p>
          <img src={img} className='imgDetail'  alt={nombre} />
    </div>
  )
}

export default ItemDetail