import fs from 'fs-extra';
import path from 'path';

import { IPokemon } from 'pokeapi-typescript';

export const charizard = fs.readJSONSync(
  path.join(__dirname, 'charizard.json'),
) as IPokemon;
export const pikachu = fs.readJSONSync(
  path.join(__dirname, 'pikachu.json'),
) as IPokemon;
export const ditto = fs.readJSONSync(
  path.join(__dirname, 'ditto.json'),
) as IPokemon;

const mockPokeAPIPokemon: { [name: string]: IPokemon } = {
  charizard,
  pikachu,
  ditto,
};
export default mockPokeAPIPokemon;
