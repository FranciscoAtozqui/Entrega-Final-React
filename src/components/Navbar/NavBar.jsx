import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="https://compragamer.net/assets/img/logo-fix.png" alt="LogoTienda" />
                <Link to={"/"}>
                    <h1 className='d-none d-sm-block fw-bold'>CompraYa!</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <NavLink to={`/categoria/3`}>
                            <li className="nav-item">
                                Componentes
                            </li>
                            </NavLink>
                        
                        <NavLink to={`/categoria/2`}>
                            <li className="nav-item">
                                Perifericos
                            </li>
                            </NavLink>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>

    )
}

export default NavBar