import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos() // <= Promise
            .then((data) => {
                setProdutos( data )
                setLoading( false )
            })
    }, [])

    return (
       <>
            {
                loading
                    ? <h2 className="text-center text-4xl mt-8">Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
       </>
    )
}

export default ItemListContainer