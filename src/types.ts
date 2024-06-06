export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  stats: PokemonStat[]
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

export type PokemonStat = {
  base_stat: number,
  stat: Stat
}

type Stat = {
  name: string
}