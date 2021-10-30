import PokeAPI, { IPokemon } from 'pokeapi-typescript';
import deepEqual from 'deep-equal';

import { getPokemon, getPokemons } from './pokeapi';
import mockPokedex from './mocks/pokemon';

const livePokedex: { [name: string]: IPokemon } = {};

beforeAll(async () => {
  Object.keys(mockPokedex).forEach(async (name) => {
    livePokedex[name] = await PokeAPI.Pokemon.resolve(name);
  });
});

describe('PokeAPI', () => {
  test('mock data and production data are equal', () => {
    const valid = Object.keys(mockPokedex).reduce((valid, name) => {
      return valid && deepEqual(mockPokedex[name], livePokedex[name]);
    }, true);
    expect(valid).toBeTruthy();
  });
});
