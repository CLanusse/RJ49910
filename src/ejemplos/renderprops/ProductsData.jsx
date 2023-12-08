import { useEffect, useState } from "react"
import { pedirDatos } from "../../utils/utils"

    // ! children !== JSX; children === Function
const ProductsData = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                setProductos(data)
            })
            .finally(() => [
                setLoading(false)
            ])
    }, [])

    return ( children(productos, loading) )
}

export default ProductsData