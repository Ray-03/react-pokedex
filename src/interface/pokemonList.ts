export interface IPokeapiResponse {
  count: number;
  next: string;
  previous: any;
  results: IPokemonListItem[];
}

export interface IPokemonListItem {
  name: string;
  url: string;
}
