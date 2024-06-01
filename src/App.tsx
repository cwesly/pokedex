import { useEffect, useState } from "react";
import Header from "./header/header";
import { Pokemon } from "./types";
import Tags from "./tags/Tags";

function App() {
  const [search, setSearch] = useState<string>("1");
  const [pokemon, setPokemon] = useState<Pokemon>({
    name: "",
    id: 0,
    types: [],
  });

  const fetchPokemon = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const pokemonData = await data.json();
    setPokemon(pokemonData);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Header
        id={pokemon.id}
        pokemonName={pokemon.name}
        search={search}
        setSearch={setSearch}
        fetchPokemon={fetchPokemon}
      />
      <Tags types={pokemon.types} />
    </>
  );
}

export default App;
