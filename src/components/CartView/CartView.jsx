import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../../ejemplos/Boton";
import trashIcon from "../../assets/trash.svg";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import EmtpyCart from "./EmtpyCart";

const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
  const { user } = useContext(UserContext);


  if (!user.email) return <h2>No hay usuario registrado</h2>
  if (cart.length === 0) return <EmtpyCart />

    // ! return cart.length === 0 && <EmtpyCart /> esto no funciona

  return (
    <section className="container m-auto mt-8">
      <p>Bienvenido: {user.email}</p>
      <h2 className="text-4xl font-semibold">Tu Compra</h2>
      <hr />

      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex gap-3 border-b my-4">
            <img src={item.img} alt="Cart img" className="w-32" />
            <div>
              <h3 className="text-2xl">{item.name}</h3>
              <p className="text-2xl font-bold">
                $ {item.price * item.cantidad}
              </p>
              <p>Cantidad: {item.cantidad}</p>

              <Boton onClick={() => removeItem(item.id)}>
                <img src={trashIcon} className="w-4" alt="trash icon" />
              </Boton>
            </div>
          </li>
        ))}
      </ul>

      <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
      <Boton onClick={clearCart}>Vaciar carrito</Boton>
    </section>
  );
};

export default CartView;
