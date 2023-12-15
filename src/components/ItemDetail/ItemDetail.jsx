import { useState } from "react";
import Boton from "../../ejemplos/Boton";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";


const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1)
  // const [color, setColor] = useState("")

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad, // => cantidad: cantidad
      color // => color: color
    }

    console.log(itemToCart)
  }

  return (
    <div className="container m-auto mt-8">
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <hr />
      <div className="flex gap-8 pt-4">
        <img src={item.img} alt={item.name} />

        <div>
          <p>{item.description}</p>
          <p className="text-xl font-bold">Precio: ${item.price}</p>

          <QuantitySelector 
            cantidad={cantidad}
            stock={item.stock}
            setCantidad={ setCantidad }
          />          

          <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
        </div>
      </div>

    </div>
  );
};

export default ItemDetail;
