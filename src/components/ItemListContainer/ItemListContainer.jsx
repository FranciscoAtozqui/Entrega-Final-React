import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/config';



const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();


  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
    .catch(error => console.error(error))
  }, [idCategoria])

  return (
    <div className='contenedor'>
      <h2 className='titulo mt-5'> {greeting} </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer