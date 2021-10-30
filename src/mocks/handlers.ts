import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { IPokemon } from 'pokeapi-typescript';

import mockPokedex from './pokemon';

const mockServer = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/:name', (req, res, ctx) => {
    const name = req.params.name as string;
    // checking for undefined is foregoed here as correctly written tests must
    // use one of the mock pokemon
    return res(ctx.json(mockPokedex[name]));
  }),
);

export const handlers = [];
