import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchPokemon: (id?: number) => Promise<void>;
};
const SearchBar = ({ search, setSearch, fetchPokemon }: SearchBarProps) => {
  return (
    <div className="container-search">
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
