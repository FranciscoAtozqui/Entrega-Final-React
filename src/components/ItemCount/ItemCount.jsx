import React from 'react'
import { useState, useEffect } from 'react'
import './ItemCount.css'

const ItemCount = () => {


    const [contador, setContador] = useState(1);
    const [color, setColor] = useState("black");
    const maximoCompra = 10;

    useEffect(() => {
        
        if (contador > 5) {
            setColor('red');
        } else {
            setColor('black');
        }
        
    }, [contador])

    const agregarAlCarrito = () => {
        console.log(`Agregamos ${contador} Items`);
    }

    const sumarProducto = () => {
        if (contador < maximoCompra) {
            setContador(contador + 1);
        }
    }

    const restarProducto = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

  return (
      <>
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button  className='btnCount' onClick={sumarProducto}> + </button>
                <p className='contador m-2 fw-bold'> {contador} </p>
                  <button className='btnCount' onClick={restarProducto}> - </button>
                  <button className='btnCount'  onClick={agregarAlCarrito} style={{color:color}}>Agregar al Carrito</button>
            </div>
        </div>
      </>
  )
}

export default ItemCount