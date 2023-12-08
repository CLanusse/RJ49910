import ItemList from "../ItemList/ItemList";
import useProductos from "../../hooks/useProductos";
// import withProductsData from "../../ejemplos/hoc/withProductsData";
// import ProductsData from "../../ejemplos/renderprops/ProductsData";

const ItemListContainer = () => {
  const { productos, loading } = useProductos()

  return (
        <>
          {loading ? (
            <h2 className="text-center text-4xl mt-8">Cargando...</h2>
          ) : (
            <ItemList productos={productos} />
          )}
        </>
  );
};

export default ItemListContainer;

// * HOC
// const ItemListContainer = ({productos, loading}) => {

//     return (
//        <>
//             {
//                 loading
//                     ? <h2 className="text-center text-4xl mt-8">Cargando...</h2>
//                     : <ItemList productos={productos}/>
//             }
//        </>
//     )
// }
// export default withProductsData( ItemListContainer )

// * Render Props
// const ItemListContainer = () => {
    
//       return (
//         <ProductsData>
//           {(productos, loading) => (
//             <>
//               {loading ? (
//                 <h2 className="text-center text-4xl mt-8">Cargando...</h2>
//               ) : (
//                 <ItemList productos={productos} />
//               )}
//             </>
//           )}
//         </ProductsData>
//       );
//     };
