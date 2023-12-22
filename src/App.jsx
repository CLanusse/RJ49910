import "./App.css";
import CartView from "./components/CartView/CartView";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { Contador } from "./ejemplos/Clicker";
import PokeApi from "./ejemplos/PokeApi";
import Posts from "./ejemplos/Posts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Contador />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />

            <Route path="/pokeapi" element={<PokeApi />} />
            <Route path="/posts" element={<Posts />} />

            <Route path="/not-found" element={<h2>Not found</h2>} />
            <Route path="*" element={<Navigate to={"/not-found"} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
