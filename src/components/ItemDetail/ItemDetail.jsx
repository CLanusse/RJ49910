import { useContext, useState } from "react";
import Boton from "../../ejemplos/Boton";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
  const navigate = useNavigate()
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad, // => cantidad: cantidad
    }

    addToCart(itemToCart)
  }

  const handleVolver = () => {
    navigate(-1)
  }

  return (
    <div className="container m-auto mt-8">
      <Boton onClick={handleVolver}>Volver</Boton>
      <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
      <hr />


      <div className="flex gap-8 pt-4">
        <img src={item.img} alt={item.name} />

        <div>
          <p>{item.description}</p>
          <p className="text-xl font-bold">Precio: ${item.price}</p>

          {
            isInCart( item.id )
              ? <Boton><Link to="/cart">Terminar mi compra</Link></Boton>
              : <>
                  <QuantitySelector 
                    cantidad={cantidad}
                    stock={item.stock}
                    setCantidad={ setCantidad }
                  />          
                  <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
                </>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
