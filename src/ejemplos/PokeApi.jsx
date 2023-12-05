import { useEffect } from "react";
import { useState } from "react";
import Boton from "./Boton";

const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1)

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });

  }, [id]);

  const handleAnterior = () => {
    id > 1 && setId(id - 1)
  }

  const handleSiguiente = () => {
    setId(id + 1)
    // ? id++ ==> ASIGNACION a la variable id
  }

  return (
    <div className="container m-auto mt-8">
      <h2 className="text-4xl font-semibold">Pokeapi</h2>
      <hr />

        {
            pokemon &&
            <>
                <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </>
        }

        <div className="flex gap-5">
            <Boton onClick={handleAnterior}>Anterior</Boton>
            <Boton onClick={handleSiguiente}>Siguiente</Boton>
        </div>
    </div>
  );
};

export default PokeApi;

// * URL =>  https://www.coderhouse.com/alumnos
// ? VERBO:   GET | POST | DELETE | PUT | PATCH
// ? id: number
// ? active: boolean

// ? query params
// !            protocolo |      dominio     | endpoints | params?
// * URL => GET => https://www.coderhouse.com/alumnos?id=15680
// * URL => GET => https://www.coderhouse.com/cursos?id=49910&active=true

// ? url/segment params
// * URL => GET => https://www.coderhouse.com/alumnos/{id}

// * URL => GET => https://www.coderhouse.com/alumnos/15680
// * URL => GET => https://www.coderhouse.com/alumnos/46890
// * URL => GET => https://www.coderhouse.com/alumnos/13778

// ? www.mipagina.com/productos/{categoria}

// ? www.mipagina.com/productos/televisores
// ? www.mipagina.com/productos/hornos
// ? www.mipagina.com/productos/muebles
// ? www.mipagina.com/productos/jardin
