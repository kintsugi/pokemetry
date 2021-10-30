import fs from 'fs';
import path from 'path';

import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers';
import { mockResult, mockVariables } from './__mocks__/resolvers';

const typeDefs = fs
  .readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
  .toString();

const server = new ApolloServer({ resolvers, typeDefs });

const sizeQuery = `
query Query($name: String!) {
  size(name: $name) {
    name
    height
    weight
  }
}`;

const sizesQuery = `
query Query($names: [String!]!) {
  sizes(names: $names) {
    name
    height
    weight
  }
}`;

const heightsQuery = `
query Query($names: [String!]!) {
  heights(names: $names) {
    mean
    median
    mode
  }
}`;

const weightsQuery = `
query Query($names: [String!]!) {
  weights(names: $names) {
    mean
    median
    mode
  }
}`;

describe('resolvers', () => {
  describe('size query ', () => {
    it('should match the size query mock', async () => {
      const result = await server.executeOperation({
        query: sizeQuery,
        variables: mockVariables,
      });
      expect(result.data).not.toBeUndefined();
      if (!result.data) {
        return;
      }
      expect(result.data.size).toEqual(mockResult.size);
    });
  });

  describe('sizes query ', () => {
    it('should match the sizes query mock', async () => {
      const result = await server.executeOperation({
        query: sizesQuery,
        variables: mockVariables,
      });
      expect(result.data).not.toBeUndefined();
      if (!result.data) {
        return;
      }
      expect(result.data.sizes).toEqual(mockResult.sizes);
    });
  });

  describe('heights query ', () => {
    it('should match the heights query mock', async () => {
      const result = await server.executeOperation({
        query: heightsQuery,
        variables: mockVariables,
      });
      expect(result.data).not.toBeUndefined();
      if (!result.data) {
        return;
      }
      expect(result.data.heights).toEqual(mockResult.heights);
    });
  });

  describe('weights query ', () => {
    it('should match the weights query mock', async () => {
      const result = await server.executeOperation({
        query: weightsQuery,
        variables: mockVariables,
      });
      expect(result.data).not.toBeUndefined();
      if (!result.data) {
        return;
      }
      expect(result.data.weights).toEqual(mockResult.weights);
    });
  });
});
