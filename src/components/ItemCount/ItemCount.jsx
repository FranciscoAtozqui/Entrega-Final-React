import React from 'react'
import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const ItemCount = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (

        <>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <button className='btnCount' onClick={incrementar}> + </button>
                    <p className='contador m-2 fw-bold'> {contador} </p>
                    <button className='btnCount' onClick={decrementar}> - </button>
                </div>
                <div className='d-flex justify-content-center mt-2'>
                    <button className='btnProducto btn m-2' onClick={() => funcionAgregar(contador)}><span className="material-symbols-outlined cart">
                        shopping_cart
                    </span></button>
                    <Link to='/'><button className='btnCheckout btn m-2'>Seguir Comprando</button></Link>
                </div>
            </div>
        </>
    )
}

export default ItemCount