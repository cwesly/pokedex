import { useEffect, useState } from "react";

type PokemonTypeProp = {
  id: number;
};

const PokemonType = ({ id }: PokemonTypeProp) => {
  const [pokemonType, setPokemonType] = useState<string>("");

  useEffect(() => {
    const fetchPokemonType = async () => {
      const data = await fetch(`https://pokeapi.co/api/v2/type/${id}/`);
      const pokemonTypeData = await data.json();
      setPokemonType(pokemonTypeData.name);
    };
    fetchPokemonType();
  }, [id]);
  return <h2>{pokemonType}</h2>;
};

export default PokemonType;
