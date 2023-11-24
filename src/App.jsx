import './App.css'
// import './styles/styles.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="hola mundo"/>
    </>
  )
}

export default App
