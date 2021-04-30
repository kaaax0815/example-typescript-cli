import program from 'commander';

import About from './about';
import config from './config';
import Loading from './loading';
import Prompt from './prompt';

program
  .version(config.version)
  .description('An example CLI for fun')
  .option('-A, --about', 'About')
  .option('-L, --loading', 'Show cool Spinner')
  .option('-P, --prompt', 'Small Prompt')
  .parse(process.argv);

const options: Options = program.opts();

if (options.about) About();

if (options.loading) Loading();

if (options.prompt) Prompt();

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

interface Options extends program.OptionValues {
  about?: boolean;
  loading?: boolean;
  prompt?: boolean;
}
