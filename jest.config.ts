/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@functions/(.*)$': '<rootDir>/src/functions/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@exceptions/(.*)$': '<rootDir>/src/exceptions/$1',
  },
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
};

export default config;
