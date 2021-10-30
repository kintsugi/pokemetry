import { PokemonSize, Stats } from '../typeDefs';

export interface MockResult {
  heights: Stats;
  weights: Stats;
  sizes: PokemonSize[];
  size: PokemonSize;
}

export interface MockVariables {
  name?: string;
  names?: string[];
}

export const mockResult: MockResult = {
  heights: {
    mean: 8,
    median: 4,
    mode: 3,
  },
  weights: {
    mean: 335,
    median: 60,
    mode: 40,
  },
  sizes: [
    {
      name: 'pikachu',
      height: 4,
      weight: 60,
    },
    {
      name: 'ditto',
      height: 3,
      weight: 40,
    },
    {
      name: 'charizard',
      height: 17,
      weight: 905,
    },
  ],
  size: {
    name: 'charizard',
    height: 17,
    weight: 905,
  },
};

export const mockVariables = {
  name: 'charizard',
  names: ['pikachu', 'ditto', 'charizard'],
};
