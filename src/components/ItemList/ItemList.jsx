
import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {
  const { categoryId } = useParams()

  return (
    <section className="container m-auto mt-8">
      {/* <CategoryNavbar /> */}

      <h2 className="text-4xl font-bold">
        {!categoryId ? "Todos los productos" : categoryId.toUpperCase()}
      </h2>
      <hr />

        <div className="flex flex-wrap justify-start gap-10 items-stretch">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;
