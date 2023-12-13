import Boton from "../../ejemplos/Boton";


const ItemDetail = ({ item }) => {

  return (
    <div className="container m-auto mt-8">
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <hr />
      <div className="flex gap-8 pt-4">
        <img src={item.img} alt={item.name} />

        <div>
          <p>{item.description}</p>
          <p className="text-xl font-bold">Precio: ${item.price}</p>
        </div>
      </div>

      <Boton className="bg-green-400">Agregar al carrito</Boton>
    </div>
  );
};

export default ItemDetail;
