import {useState, useEffect} from 'react'

const Categorias = () => {

    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        document.title = `Categoria: ${categoria}`
        
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria)
    }

    return (
    <div className='d-flex justify-content-center mt-5'>
          <h2>Categorias de Productos: </h2>
          <button onClick={()=> handleClick("Teclados")}>Teclados</button>
          <button onClick={()=> handleClick("Mouse")}>Mouse</button>
          <button onClick={()=> handleClick("Monitores")}>Monitores</button>
          <button onClick={()=> handleClick("Gabinetes")}>Gabinetes</button>
    </div>
  )
}

export default Categorias