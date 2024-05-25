import { FaSearch } from "react-icons/fa"
type SearchBarProps = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar = ({search, setSearch}: SearchBarProps) => {
    return (
        <div>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
            <button><FaSearch /></button>
        </div>
    )
}
export default SearchBar