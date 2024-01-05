// import './Navbar.scss'
import logo from "../../assets/vite.svg";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Boton from "../../ejemplos/Boton";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "TVs",
    href: "/productos/tvs",
  },
  {
    label: "Hornos",
    href: "/productos/hornos",
  },
  {
    label: "Aires",
    href: "/productos/aires",
  },
  {
    label: "Heladeras",
    href: "/productos/heladeras",
  },
  {
    label: "Muebles",
    href: "/productos/muebles",
  },
  {
    label: "Pokeapi",
    href: "/pokeapi",
  },
  {
    label: "Posts",
    href: "/posts",
  },
];

const Navbar = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <header className="bg-purpura">
      <div className="container m-auto py-6 flex justify-between items-center">
        {/* <h1 className="header__title">LOGO</h1> */}
        {/* <img src="/imgs/react.svg" alt="Logo"/> */}
        <img src={logo} alt="Logo" />

        <nav className="flex gap-4">
          {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-white"}`
              )}
            >
              {link.label}
            </NavLink>

          ))}

          <CartWidget />
        </nav>

        {/* <CartWidget /> */}
      </div>

      {user.logged && <div className="flex gap-4 items-center container m-auto">
        <p className="text-white">{user.email}</p>
        <Boton onClick={logout}>Cerrar sesión</Boton>
      </div>}
    </header>
  );
};

export default Navbar;

// <NavLink
// key={link.href}
// to={link.href}
// className={({ isActive }) => 
//   isActive 
//     ? "text-purple-400 text-lg uppercase font-bold"
//     : "text-white text-lg uppercase font-semibold"
// }
// >
// {link.label}
// </NavLink>
