import React from 'react'
import './Checkout.css'
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';


const Checkout = () => {

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos!");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.error("Error al crear la orden.", error);
                setError("Se produjo un error al crear la orden, vuelva pronto.");
            })
    }

    return (
        <div>
            <h2 className='text-center checkout-title fw-bold mt-2'>Checkout</h2>
            <form className='formulario' onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div className='fw-bold' key={producto.item.id}>
                        <h3>
                            {producto.item.nombre} x {producto.cantidad}
                        </h3>
                        <p>Precio: $ {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <strong>Total de la compra: $ {total}</strong>
                <hr />

                <div className='form-group'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="">Email Confirmación</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}
                <button className='btnCheckout btn' type='submit'>Finalizar Compra</button>
            </form>
            {
                ordenId && (
                    <strong className='orderId fs-6'>Gracias por tu compra! Tu número de orden es: <span className='id-orden'>{ordenId}</span> </strong>
                )
            }
        </div>
    )
}

export default Checkout