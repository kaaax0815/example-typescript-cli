import clear from 'clear';
import ora from 'ora';

export default function Loading() {
  clear();
  const spinner = ora('Loading...').start();
  const colors: ora.Color[] = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'gray'
  ];
  let count = 0;
  // Change color every 1000ms then succeed
  const interval = setInterval(() => {
    if (count >= colors.length) {
      spinner.succeed('Done');
      clearInterval(interval);
    }
    spinner.color = colors[count];
    count += 1;
  }, 1000);
}
