import { IPokemon } from 'pokeapi-typescript';

import mockPokeAPIPokemon from './pokemon';
import { PokemonSize } from '../typeDefs';

type MockSizes = { [name: string]: PokemonSize };
const mockSizes: MockSizes = Object.values(mockPokeAPIPokemon).reduce(
  (acc: MockSizes, pokemon: IPokemon) => {
    const { name, weight, height } = pokemon;
    acc[name] = { name, weight, height };
    return acc;
  },
  {} as MockSizes,
);

export const getMockPokemonSize = async (
  query: string,
): Promise<PokemonSize> => {
  const size = mockSizes[query];
  return size;
};

export const getMockPokemonSizes = async (
  queries: string[],
): Promise<PokemonSize[]> => {
  const results = queries.map((query) => mockSizes[query]);
  return results;
};

export default mockSizes;
