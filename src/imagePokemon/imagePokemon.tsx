import "./imagePokemon.css";

type ImagePokemonProps = {
  id: number;
};

function ImagePokemon({ id }: ImagePokemonProps) {
  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <img
      className="image-pokemon"
      src={imagePokemon}
      alt="Image of selected Pokémon"
    />
  );
}

export default ImagePokemon;
