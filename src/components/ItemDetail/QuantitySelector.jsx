import Boton from "../../ejemplos/Boton";

const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handleRestar}
        className={`${cantidad === 1 ? 'bg-red-300' : 'bg-blue-600'} rounded py-2 px-4 text-white font-semibold`}
        disabled={cantidad === 1}
      >
        -
      </button>

      <span>{cantidad}</span>
      <button
        onClick={handleSumar}
        className={cantidad === stock 
          ? `bg-red-300 rounded py-2 px-4 text-white font-semibold`
          : `bg-blue-600 rounded py-2 px-4 text-white font-semibold`
        }
        disabled={cantidad === stock}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
