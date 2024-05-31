type PokemonIDProp = {
  id: number;
};
const PokemonID = ({ id }: PokemonIDProp) => {
  return <p>#{id}</p>;
};
export default PokemonID;
