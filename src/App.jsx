import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import PokeApi from "./ejemplos/PokeApi";
import Posts from "./ejemplos/Posts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* <Routes>
        <Route path="/not-found" element={null}/>
        <Route path="*" element={ <Navbar /> }/>
      </Routes> */}
      
      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />

        <Route path="/pokeapi" element={ <PokeApi /> }/>
        <Route path="/posts" element={ <Posts /> }/>

        <Route path="/not-found" element={ <h2>Not found</h2> }/>
        <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
