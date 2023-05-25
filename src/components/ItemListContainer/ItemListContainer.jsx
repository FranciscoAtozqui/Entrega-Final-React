import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.error(error));

  }, [idCategoria])


  return (
    <div className='contenedor'>
      <h2 className='titulo mt-5'> {greeting} </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer