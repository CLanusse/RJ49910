import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Parrafos from "./ejemplos/Parrafos";
import PokeApi from "./ejemplos/PokeApi";
import Posts from "./ejemplos/Posts";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    {/* <Parrafos /> */}
      {/* <Posts /> */}
      {/* <PokeApi /> */}
    </>
  );
}

export default App;
