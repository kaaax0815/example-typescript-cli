import clear from 'clear';
import inquirer from 'inquirer';

export default function Prompt() {
  clear();
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'dumbness',
        message: 'How dumb are you?',
        choices: ['Very much', 'A little bit', 'Not at all']
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
        default: true
      }
    ])
    .then((answers: Answers) => {
      if (!answers.confirm) {
        // Try again
        clear();
        Prompt();
      }
      switch (answers.dumbness) {
        case 'Very much':
          console.log('You are very dumb! Go learn! At least you are honest');
          break;
        case 'A little bit':
          console.log('You are the average. Nobody is not dumb at all');
          break;
        case 'Not at all':
          console.log('"The more I know, the more I realize I know nothing." ~ Socrates');
          console.log("You can't be not dumb at all");
          break;
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Couldn't print prompt");
      } else {
        console.log(`An Error occurred: ${error.message}`);
      }
    });
}

// Possible answers
interface Answers {
  dumbness: 'Very much' | 'A little bit' | 'Not at all';
  confirm: boolean;
}
