export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[]
}

export interface PokemonType {
  type: PokemonTypeName ;

}

type PokemonTypeName = {
  name: string
}