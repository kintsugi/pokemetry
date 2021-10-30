import { mean, median, mode } from 'simple-statistics';

import { Resolvers } from './typeDefs';
import { getPokemon, getPokemons } from './pokeapi';

export const resolvers: Resolvers = {
  Query: {
    size: async (_, { name }) => {
      const pokemon = await getPokemon(name);
      return pokemon;
    },
    sizes: async (_, { names }) => {
      const pokemons = await getPokemons(names || []);
      return pokemons;
    },
    heights: async (_, { names }) => {
      const pokemons = await getPokemons(names || []);
      const heights = pokemons.map(({ height }) => height);
      return {
        mean: mean(heights),
        median: median(heights),
        mode: mode(heights),
      };
    },
    weights: async (_, { names }) => {
      const pokemons = await getPokemons(names || []);
      const weights = pokemons.map(({ weight }) => weight);
      return {
        mean: mean(weights),
        median: median(weights),
        mode: mode(weights),
      };
    },
  },
};
