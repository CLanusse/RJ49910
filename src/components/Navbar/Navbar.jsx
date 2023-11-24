// import './Navbar.scss'
import logo from '../../assets/vite.svg'
import NavLink from './NavLink'

const Navbar = () => {

    return (
        <header className="bg-purpura">
            <div className="container m-auto py-6 flex justify-between items-center">
                {/* <h1 className="header__title">LOGO</h1> */}
                {/* <img src="/imgs/react.svg" alt="Logo"/> */}
                <img src={logo} alt="Logo"/>

                <nav className="flex gap-4">
                    <NavLink href={"#"} text={"Enlace 1"}/>
                    <NavLink href={"#"} text={"Enlace 2"}/>
                    <NavLink href={"#"} text={"Enlace 3"}/>
                    <NavLink href={"#"} text={"Enlace 4"}/>
                    <NavLink href={"#"} text={"Enlace 5"}/>
                </nav>

                {/* <CartWidget /> */}
            </div>
        </header>
    )
}

export default Navbar