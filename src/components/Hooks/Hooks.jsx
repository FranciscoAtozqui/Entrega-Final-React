import { useContador } from "./useContador"

const Hooks = () => {

    const { contador, incrementar, decrementar } = useContador(1, 10);
  return (
    <div>
          <h2>Contador</h2>
          <button onClick={decrementar}> restar </button>
          <strong> {contador} </strong>
          <button onClick={incrementar}> sumar </button>
    </div>
  )
}

export default Hooks