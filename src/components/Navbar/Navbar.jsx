// import './Navbar.scss'
import logo from "../../assets/vite.svg";
import { Link } from "react-router-dom";

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
];

const Navbar = () => {
  return (
    <header className="bg-purpura">
      <div className="container m-auto py-6 flex justify-between items-center">
        {/* <h1 className="header__title">LOGO</h1> */}
        {/* <img src="/imgs/react.svg" alt="Logo"/> */}
        <img src={logo} alt="Logo" />

        <nav className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white hover:text-purple-400 text-lg uppercase font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* <CartWidget /> */}
      </div>
    </header>
  );
};

export default Navbar;
