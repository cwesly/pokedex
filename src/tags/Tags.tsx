import PokemonTypeTag from "../pokemonTypeTag/pokemonTypeTag";
import { PokemonType } from "../types";
import "./tags.css";

type TagsProp = {
  types: PokemonType[];
};

const Tags = ({ types }: TagsProp) => {
  return (
    <div className="tags">
      {types.map((pokemontype) => (
        <PokemonTypeTag name={pokemontype.type.name} />
      ))}
    </div>
  );
};

export default Tags;
