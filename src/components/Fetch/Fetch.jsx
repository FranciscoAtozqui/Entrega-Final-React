import {useState, useEffect} from 'react'

const Fetch = () => {

  const [usuarios, setUsuarios] = useState([])
  
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respuesta => respuesta.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error(error))
  }, [])


  return (
    <div>
      <h2>Usuarios de Json Placeholder</h2>
      {
        usuarios.map(usuario => {
          return (
            <div key={usuario.id}>
                <p>Nombre: {usuario.name}</p>
                <p>Email: {usuario.email}</p>
                <hr />
            </div>
            )
          })
      }
    </div>
  )
}

export default Fetch