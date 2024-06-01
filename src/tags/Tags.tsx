import { PokemonType } from "../types";

type TagsProp = {
  types: PokemonType[];
};

const Tags = ({ types }: TagsProp) => {
  return (
    <div>
      <ul>
        {types.map((pokemontype) => (
          <p key={pokemontype.type.name}>{pokemontype.type.name}</p>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
