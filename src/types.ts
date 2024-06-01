export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[]
};

export enum TypeButton {
  Next = "next",
  Back = "back",
}

export interface PokemonType {
  type: PokemonTypeName ;

}

type PokemonTypeName = {
  name: string
}