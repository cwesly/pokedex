import PokemonTypeTag from "../pokemonTypeTag/pokemonTypeTag";
import { PokemonType } from "../types";

type TagsProp = {
  types: PokemonType[];
};

const Tags = ({ types }: TagsProp) => {
  return (
    <div>
      {types.map((pokemontype) => (
        <PokemonTypeTag name={pokemontype.type.name} />
      ))}
    </div>
  );
};

export default Tags;
