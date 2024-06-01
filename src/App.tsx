import { useEffect, useState } from "react";
import Header from "./header/header";
import PassButton from "./passButton/passButton";
import ImagePokemon from "./imagePokemon/imagePokemon";
import { Pokemon, TypeButton } from "./types";
import "./App.css";
import Tags from "./tags/tags";

function App() {
  const [search, setSearch] = useState<string>("1");
  const [pokemon, setPokemon] = useState<Pokemon>({
    name: "",
    id: 0,
    types: [],
  });

  const fetchPokemon = async (id?: number) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id ? id : search}`
    );
    const pokemonData = await data.json();
    setPokemon(pokemonData);
    setSearch("");
    return;
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fistType = pokemon.types[0]?.type.name;

  document.body.style.backgroundColor = `var(--${fistType}-color)`;

  return (
    <main>
      <Header
        id={pokemon.id}
        pokemonName={pokemon.name}
        search={search}
        setSearch={setSearch}
        fetchPokemon={fetchPokemon}
      />
      <section className="pokemon-view">
        <PassButton
          fetchPokemon={fetchPokemon}
          id={pokemon.id}
          type={TypeButton.Back}
        />
        <ImagePokemon id={pokemon.id} />
        <PassButton
          fetchPokemon={fetchPokemon}
          id={pokemon.id}
          type={TypeButton.Next}
        />
      </section>
      <Tags types={pokemon.types} />
    </main>
  );
}

export default App;
