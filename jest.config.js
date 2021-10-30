/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).{ts,js}'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/?*.{ts,js}', '!src/**/*.d.ts', '!src/index.ts'],
};
