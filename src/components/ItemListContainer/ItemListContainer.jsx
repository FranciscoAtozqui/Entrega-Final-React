import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <h2 className='titulo mt-3'> {greeting} </h2>
  )
}

export default ItemListContainer