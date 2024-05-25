import { FaSearch } from "react-icons/fa";
type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchPokemon: () => Promise<void>;
};
const SearchBar = ({ search, setSearch, fetchPokemon }: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={() => fetchPokemon()}>
        <FaSearch />
      </button>
    </div>
  );
};
export default SearchBar;
