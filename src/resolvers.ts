import { Resolvers } from './types';

export const resolvers: Resolvers = {
  Query: {
    metric: (parent, args) => {
      console.log(args);
      return { name: 'test', height: 0.0, weight: 0.0 };
    },
  },
};
