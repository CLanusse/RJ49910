import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JS 49910</h1>
      <h2>Coderhouse</h2>
      <div className="card">
        <p>
          Profesor: Conrado Lanusse (the best)
        </p>
      </div>
      <p className="read-the-docs">
        Bienvenidos
      </p>
    </>
  )
}

export default App
