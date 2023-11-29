import { useState } from 'react'
import './App.css'
// import './styles/styles.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

import { Contador } from './ejemplos/Clicker'
import Contenedor from './ejemplos/Contenedor'
import Parrafos from './ejemplos/Parrafos'
import Tutores from './ejemplos/Tutores'
import Boton from './ejemplos/Boton'

function App() {
  const [mostrar, setMostrar] = useState(true)

  const handleMostrar = () => {
    setMostrar(!mostrar)
  }

  return (
    <>
      <Navbar />
      {/* <Parrafos /> */}

      <Contenedor titulo="Un título" curso="JS">
        <Boton onClick={handleMostrar}>Mostrar contador</Boton>

        {
          mostrar && <Contador />
        }
        
      </Contenedor>
    </>
  )
}

export default App
