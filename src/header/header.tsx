import PokemonID from "../pokemonID/pokemonID";
import PokemonName from "../pokemonName/pokemonName";
import SearchBar from "../searchBar/searchBar";
import "./header.css";

type HeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  pokemonName: string;
  id: number;
  fetchPokemon: () => Promise<void>;
};

const Header = ({
  search,
  setSearch,
  pokemonName,
  id,
  fetchPokemon,
}: HeaderProps) => {
  return (
    <header className="pokemon-header">
      <PokemonName pokemonName={pokemonName} />
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchPokemon={fetchPokemon}
        placeholder="Name or Id"
      />
      <PokemonID id={id} />
    </header>
  );
};
export default Header;
