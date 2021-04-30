import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import config from './config';

export default function About() {
  clear();
  const kaaaxcreators = figlet.textSync('kaaaxcreators');
  console.log(chalk.bgBlue.black(kaaaxcreators));
  console.log(`--- ${config.name}:${config.version} ---`);
  console.log('Author: Bernd Storath <bernd@kaaaxcreators.de>');
}
