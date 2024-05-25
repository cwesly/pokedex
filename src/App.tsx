import { useEffect, useState } from "react"
import Header from "./header/header"
import { Pokemon } from "./types"

function App() {
  const [search, setSearch] = useState<string>("")
  const [pokemon, setPokemon] = useState<Pokemon>({ name: "", id: 0 })
  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/25")
      const pokemonData = await data.json()
      setPokemon(pokemonData)
    }
    fetchPokemon()
  }, [])
  return (
    <>
      <Header
        id={pokemon.id}
        pokemonName={pokemon.name}
        search={search}
        setSearch={setSearch}
      />
    </>
  )
}

export default App
