import React from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className='text-center mt-5'>
                <h2 className='fw-bold'>No hay productos en el carrito</h2>
                <Link to='/'><button className='btn btnCheckout'>Ver productos</button></Link>
            </div>
        )
    }
    return (
        <div className='m-3'>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h4 className='fw-bold'>Total: $ {total} </h4>
            <h4 className='fw-bold'>Cantidad Total: {cantidadTotal} </h4>
            <button className='btn btnCheckout m-2' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to='/'><button className='btn btnCheckout m-2'>Seguir comprando</button></Link>
            <Link to='/checkout'><button className='btn btnCheckout'>Finalizar Compra</button></Link>
        </div>
    )
}

export default Cart