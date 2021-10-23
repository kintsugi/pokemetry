import PokeAPI from 'pokeapi-typescript';

import { Resolvers } from './types';

export const resolvers: Resolvers = {
  Query: {
    size: async (parent, args) => {
      const { name, height, weight } = await PokeAPI.Pokemon.resolve(args.name);

      return { name, height, weight };
    },
    sizes: async (parent, args) => {
      const { names = [] } = args;
      const results = await Promise.all(
        names.map((name) => PokeAPI.Pokemon.resolve(name)),
      );
      const metrics = results.map((pokemon) => {
        const { name, height, weight } = pokemon;
        return { name, height, weight };
      });

      return metrics;
    },
  },
};
