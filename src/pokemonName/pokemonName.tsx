import "./pokemonName.css";

type PokemonNameProp = {
  pokemonName: string;
};

const PokemonName = ({ pokemonName }: PokemonNameProp) => {
  return <h1 className="pokemon-title">{pokemonName}</h1>;
};
export default PokemonName;
