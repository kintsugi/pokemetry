/*
 * Prompt:
 * As a user I'd like to be able to pull the following data via a REST or GraphQL endpoint:
 *   - The height and weight for a single Pokémon (i.e. Pikachu).
 *   - The height and weight for a list of Pokémon.
 *   - The mean, median, and mode of the heights for a list of Pokémon.
 *   - The mean, median, and mode of the weight for a list of Pokémon."
 */

// The application is composed of four GraphQL operations in the form of Apollo
// resolvers adress each requirement in order: `size`, `sizes`, `heights`, and
// `weights`, which all depend on the `pokemon-size` module as a data source.

import fs from 'fs';
import path from 'path';

import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers';

const typeDefs = fs
  .readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
  .toString();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
