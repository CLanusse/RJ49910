import { useState } from "react"


export const Contador = () => {
    const [counter, setCounter] = useState(0)
    const [saludar, setSaludar] = useState(true)
    // console.log(counter)
    console.log(saludar)

    const incrementar = () => {
        setCounter( counter + 1 )
    }

    const restar = () => {
        if (counter > 0) {
            setCounter( counter - 1 )
        }
    }

    const cambiarSaludo = () => {
        setSaludar( !saludar )
    }

    return (
        <div>
            <button onClick={incrementar}>Sumar 1</button>
            <button onClick={restar}>Restar 1</button>
            <hr/>
            <p>Clicks: {counter}</p>

            <hr/>

            <button onClick={cambiarSaludo}>Cambiar saludo</button>
            <p>{ saludar ? "Hola mundo" : "Chau a todos" }</p>


        </div>
    )
}