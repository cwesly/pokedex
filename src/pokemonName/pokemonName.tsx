type PokemonNameProp = {
    pokemonName: string
}

const PokemonName = ({pokemonName}: PokemonNameProp) =>{
    return(<h1>{pokemonName}</h1>)
}
export default PokemonName