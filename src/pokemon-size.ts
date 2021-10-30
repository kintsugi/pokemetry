import PokeAPI from 'pokeapi-typescript';

import { PokemonSize } from './typeDefs';

export const getPokemonSize = async (query: string): Promise<PokemonSize> => {
  // querying the /pokemon/:name endpoint with an empty parameter returns an list
  // of all pokemon names instead of a pokemon's data
  if (query === '') {
    throw new Error('Invalid pokemon name');
  }
  // Converting to lower case is not required as PokeAPI accepts any capitalization
  const { name, height, weight } = await PokeAPI.Pokemon.resolve(query);
  return { name, height, weight };
};

export const getPokemonSizes = async (
  queries: string[],
): Promise<PokemonSize[]> => {
  const results = await Promise.all(
    queries.map((query) => getPokemonSize(query)),
  );
  return results;
};
