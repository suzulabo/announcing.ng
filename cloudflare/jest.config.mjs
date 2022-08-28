/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: 'miniflare',

  rootDir: 'test',
  testRegex: '.+\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': ['esbuild-jest', { sourcemap: true }],
  },
};

export default config;
