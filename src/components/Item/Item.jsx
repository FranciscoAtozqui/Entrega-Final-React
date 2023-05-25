import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className="card cardProducto text-center" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top imgProducto" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title fw-bold"> {nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <p className='card-text'>ID: {id}</p>
                <Link to={`/Item/${id}`}>Ver Detalles</Link>
            </div>
        </div>
    )
}

export default Item

//<button className="btn btnProducto">Ver Detalles</button>