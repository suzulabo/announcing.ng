/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: 'miniflare',
  preset: 'ts-jest/presets/js-with-ts',

  rootDir: 'src',
  testRegex: '.+\\.test\\.tsx?$',
};

export default config;
