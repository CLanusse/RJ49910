import { Link } from "react-router-dom"
import Boton from "../../ejemplos/Boton"


const EmtpyCart = () => {

    return (
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
        <hr />
        <p>Agrega algún producto a tu carrito</p>
        <Boton>
          <Link to={"/"}>Volver</Link>
        </Boton>
      </section>
    )
}

export default EmtpyCart