import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Esta es mi Tienda Online!"} />
    </>
  )
}

export default App
