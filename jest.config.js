/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */

module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!src/main.ts'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: [],
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts',
  transform: { '.*\\.(t|j)s.$': 'ts-jest' },
};
