import "./pokemonTypeTag.css";
type PokemonTypeTagProp = {
  name: string;
};

const PokemonTypeTag = ({ name }: PokemonTypeTagProp) => {
  return (
    <div className="tag-type" style={{ background: `var(--${name}-color)` }}>
      <p>{name}</p>
    </div>
  );
};

export default PokemonTypeTag;
