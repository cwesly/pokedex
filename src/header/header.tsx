import PokemonID from "../pokemonID/pokemonID";
import PokemonName from "../pokemonName/pokemonName";
import SearchBar from "../searchBar/searchBar";

type HeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  pokemonName: string;
  id: number;
};

const Header = ({ search, setSearch, pokemonName, id }: HeaderProps) => {
  return (
    <header>
      <PokemonName pokemonName={pokemonName} />
      <SearchBar search={search} setSearch={setSearch} />
      <PokemonID id={id} />
    </header>
  );
};
export default Header;
