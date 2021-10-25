import { mean, median, mode } from 'simple-statistics';

import { Resolvers } from './types';
import { getPokemon, getPokemons } from './pokeapi';

export const resolvers: Resolvers = {
  Query: {
    size: async (parent, args) => {
      const pokemon = await getPokemon(args.name);
      return pokemon;
    },
    sizes: async (parent, args) => {
      const pokemons = await getPokemons(args.names || []);
      return pokemons;
    },
    heights: async (parent, args) => {
      const pokemons = await getPokemons(args.names || []);
      const heights = pokemons.map(({ height }) => height);
      return {
        mean: mean(heights),
        median: median(heights),
        mode: mode(heights),
      };
    },
    weights: async (parent, args) => {
      const pokemons = await getPokemons(args.names || []);
      const weights = pokemons.map(({ weight }) => weight);
      return {
        mean: mean(weights),
        median: median(weights),
        mode: mode(weights),
      };
    },
  },
};
