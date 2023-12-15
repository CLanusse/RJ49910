



const ColorSelector = ({setColor}) => {

    const handleSelect = (event) => {
        setColor(event.target.value)
    }

    return (
        <select onChange={handleSelect} className="border p-2">
            <option value="negro">Negro</option>
            <option value="gris">Gris</option>
            <option value="blanco">Blanco</option>
        </select>
    )
}

export default ColorSelector