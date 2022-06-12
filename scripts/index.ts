import { Cmd, main, RunS, ScriptEntries } from '@suzulabo/ttscripts';

const entries: ScriptEntries = [
  // hello
  ['hello', Cmd('echo hello')],

  // code checks
  ['checks', RunS(['lint', 'format', 'ts-check'])],

  ['lint', Cmd('eslint --ext .ts,.tsx scripts web')],
  ['format', Cmd('prettier --check .')],
  ['ts-check.scripts', Cmd('tsc --noEmit', 'scripts')],
  ['ts-check.web.console', Cmd('tsc --noEmit', 'web/console')],
  ['ts-check', RunS(['ts-check.scripts', 'ts-check.web.console'])],
];

const name = process.argv[2];
const args = process.argv.slice(3);

main(entries, name, args).catch((err) => {
  console.error(err);
  process.exit(1);
});
