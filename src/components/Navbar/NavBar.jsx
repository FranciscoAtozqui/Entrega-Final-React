import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
      <header className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <img src="https://compragamer.net/assets/img/logo-fix.png" alt="LogoTienda" />
              <h1 className=''>CompraYa!</h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
              </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item">
                            Características
                        </li>
                        <li className="nav-item">
                            Productos
                        </li>
                        <li className="nav-item">
                            Contacto
                        </li>
                  </ul>
                </nav>
                <CartWidget />
          </div>
      </header>

  )
}

export default NavBar