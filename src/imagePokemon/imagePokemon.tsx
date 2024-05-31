type ImagePokemonProps = {
  id: number;
};

function ImagePokemon({ id }: ImagePokemonProps) {
  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return <img src={imagePokemon} alt="Image of selected Pokémon"></img>;
}

export default ImagePokemon;
