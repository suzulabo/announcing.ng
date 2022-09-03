/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: 'miniflare',

  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },

  rootDir: 'src',
  testRegex: '.+\\.test\\.tsx?$',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

export default config;
