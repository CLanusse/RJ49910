import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const ItemCard = ({item}) => {

  return (
    <article className="w-80">
      <img src={item.img} alt={item.name} />
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <hr />
      <p>{item.description}</p>
      <p className="text-xl font-bold">Precio: ${item.price}</p>

      <Boton>
        <Link to={`/item/${item.id}`}>Ver más</Link>
      </Boton>
    </article>
  );
};

export default ItemCard;
