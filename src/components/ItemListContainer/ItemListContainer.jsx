// import './ItemListContainer.scss'


const ItemListContainer = ({greeting}) => {

    return (
        <section className="list-container">
            {/* catálogo de productos */}
            <h2 className="list-title">Productos</h2>
            <hr/>
            <p>{greeting}</p>
        </section>
    )
}

export default ItemListContainer