import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import PokeApi from "./ejemplos/PokeApi";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}

      <PokeApi />
    </>
  );
}

export default App;
