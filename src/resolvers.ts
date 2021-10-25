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
      const mean =
        pokemons.reduce((sum, pokemon) => sum + pokemon.height, 0) /
        pokemons.length;
    },
  },
};
