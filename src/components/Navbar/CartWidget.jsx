import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)

    // if ( itemsInCart() === 0 ) return null

    return (
        // <Link to="/cart" className={`${itemsInCart() === 0 ? 'invisible opacity-0' : 'visible opacity-100'} transition-all flex items-center gap-1 cursor-pointer`}>
        <Link to="/cart" className={`flex items-center gap-1 cursor-pointer`}>
            <img src={cartIcon} alt='Cart icon' className='w-8'/>
            <span className='text-white text-2xl'>{ itemsInCart() }</span>
        </Link>
    )
}

export default CartWidget