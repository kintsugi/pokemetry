import PokeAPI, { IPokemon } from 'pokeapi-typescript';

import { getPokemonSize, getPokemonSizes } from './pokemon-size';
import mockPokemon from './__mocks__/pokemon';
import {
  getMockPokemonSize,
  getMockPokemonSizes,
} from './__mocks__/pokemon-size';

describe('pokemon-size', () => {
  // Contains live PokeAPI pokemon data
  const pokeAPIPokemon: { [name: string]: IPokemon } = {};

  beforeAll(async () => {
    // Get the live data for all mocked pokemon for mock data validation
    await Promise.all(
      Object.keys(mockPokemon).map(async (name) => {
        pokeAPIPokemon[name] = await PokeAPI.Pokemon.resolve(name);
      }),
    );
  });

  test('mock data matches live data from PokeAPI', () => {
    Object.keys(mockPokemon).forEach((name) => {
      expect(mockPokemon[name]).toEqual(pokeAPIPokemon[name]);
    }, true);
  });

  describe('getPokemonSize', () => {
    it("should return a Pokemon's size", async () => {
      const name = 'charizard';
      const mockSize = await getMockPokemonSize(name);
      const size = await getPokemonSize(name);
      expect(size).toEqual(mockSize);
    });

    it("should return the same Pokemon's size with any capitalization", async () => {
      const lower = 'charizard';
      const upper = 'Charizard';

      const mockSize = await getMockPokemonSize(lower);
      const lowerSize = await getPokemonSize(lower);
      const upperSize = await getPokemonSize(upper);

      expect(lowerSize).toEqual(mockSize);
      expect(upperSize).toEqual(mockSize);
      expect(lowerSize).toEqual(upperSize);
    });
    it('should throw an exception when the name is an empty string', async () => {
      const name = '';
      await expect(getPokemonSize(name)).rejects.toThrow();
    });
    it('should throw an exception when the name is not a name of a Pokemon', async () => {
      const name = 'invalid name';
      await expect(getPokemonSize(name)).rejects.toThrow();
    });
  });

  describe('getPokemonSizes', () => {
    it('should return multiple Pokemon sizes', async () => {
      const names = ['charizard', 'pikachu', 'ditto'];
      const sizes = await getPokemonSizes(names);
      const mockSizes = await getMockPokemonSizes(names);
      expect(sizes).toEqual(mockSizes);
    });
  });
});
