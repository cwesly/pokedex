type PokemonIDProp = {
  id: number;
};
const PokemonID = ({ id }: PokemonIDProp) => {
  return <p>#0{id}</p>;
};
export default PokemonID;
