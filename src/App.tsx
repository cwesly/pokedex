import { useEffect, useState } from "react";
import Header from "./header/header";
import { Pokemon } from "./types";
import NextButton from "./nextButton/nextButton";
import BackButton from "./backButton/backButton";

function App() {
  const [search, setSearch] = useState<string>("1");
  const [pokemon, setPokemon] = useState<Pokemon>({ name: "", id: 0 });

  const fetchPokemon = async (id?: number) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id ? id : search}`
    );
    const pokemonData = await data.json();
    setPokemon(pokemonData);
    return;
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
      <BackButton fetchPokemon={fetchPokemon} id={pokemon.id} />
      <NextButton fetchPokemon={fetchPokemon} id={pokemon.id} />
    </>
  );
}

export default App;
