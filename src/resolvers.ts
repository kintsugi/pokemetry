import { mean, median, mode } from 'simple-statistics';

import { Resolvers } from './typeDefs';
import { getPokemonSize, getPokemonSizes } from './pokemon-size';

const calcStats = (values: number[]) => {
  return {
    mean: mean(values),
    median: median(values),
    mode: mode(values),
  };
};

// Note: pokemon-size is not used as an apollo datasource because
// pokeapi-typescript caches results internally
export const resolvers: Resolvers = {
  Query: {
    size: async (_, { name }) => {
      const size = await getPokemonSize(name);
      return size;
    },
    sizes: async (_, { names }) => {
      const sizes = await getPokemonSizes(names);
      return sizes;
    },
    heights: async (_, { names }) => {
      const sizes = await getPokemonSizes(names);
      // form a distribution from each pokemon's height
      const heights = sizes.map(({ height }) => height);
      return calcStats(heights);
    },
    weights: async (_, { names }) => {
      const sizes = await getPokemonSizes(names);
      // form a distribution from each pokemon's weight
      const weights = sizes.map(({ weight }) => weight);
      return calcStats(weights);
    },
  },
};
