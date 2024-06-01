import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchPokemon: (id?: number) => Promise<void>;
  placeholder: string
};
const SearchBar = ({ search, setSearch, fetchPokemon, placeholder }: SearchBarProps) => {
  return (
    <div className="container-search">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={placeholder}
      />
      <button onClick={() => fetchPokemon()}>
        <FaSearch />
      </button>
    </div>
  );
};
export default SearchBar;
