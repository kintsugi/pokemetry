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
