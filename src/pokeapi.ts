import PokeAPI from 'pokeapi-typescript';

import { Pokemon } from './types';

export const getPokemon = async (query: string): Promise<Pokemon> => {
  const { name, height, weight } = await PokeAPI.Pokemon.resolve(query);
  return { name, height, weight };
};

export const getPokemons = async (queries: string[]): Promise<Pokemon[]> => {
  const results = await Promise.all(queries.map((query) => getPokemon(query)));

  const sizes = results.map((pokemon) => {
    const { name, height, weight } = pokemon;
    return { name, height, weight };
  });
  return sizes;
};
