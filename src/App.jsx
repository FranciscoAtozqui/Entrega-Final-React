import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount'
import { CarritoProvider } from './context/CarritoContext'
import Checkout from './components/Checkout/Checkout'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/Item/:idItem' element={<ItemDetailContainer />} />
          <Route path='*' element={<h2>Sitio en Construccion</h2>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
