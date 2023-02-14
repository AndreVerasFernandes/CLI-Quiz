#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';



let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function Welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Who wants to be a Millionare? \n "
    );

    

    await sleep();
    rainbowTitle.stop();

    const giltchStart = chalkAnimation.glitch(
        "Me!!! \n "
    );

    await sleep();
    giltchStart.stop();

    console.log(`
    ${chalk.bgGreen('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question ${chalk.bgRed('wrong')} I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  
    `)
}



async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name, contestant?',
      default() {
        return 'Player';
      },
    });

    playerName = answers.player_name;
}  



async function handleAnswer(isCorrect) {
    const spinner = createSpinner('And the answer is...').start();
    await sleep();
  
    if (isCorrect) {
      spinner.success({ text: `Correct! Nice job ${playerName}!` });
    } else {
      spinner.error({ text: `Wrong! 💀💀💀 Game over, you lose ${playerName}! Better luck next time!` });
      process.exit(1);
    }
  }

  async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'Which operator returns true if the two compared values are not equal?\n',
      choices: [
        '==!',
        '!==', //Answer
        '<>',
        '~',
      ],
    });
  
    return handleAnswer(answers.question_1 === '!==');
  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
      choices: ['4', '"4"', '"1111"', '69420'],
    });
    return handleAnswer(answers.question_2 === '"1111"');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `Which of the following modules is NOT a built-in module in Node?\n`,
      choices: ['http2', 'dgram', 'events', 'ftp'],
    });
  
    return handleAnswer(answers.question_3 === 'ftp');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Which of the following is NOT a primitive type?\n',
      choices: [
        'boolean',
        'number',
        'null',
        'object', // Correct
      ],
    });
    return handleAnswer(answers.question_4 === 'object');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message:
        'JS is a high-level single-threaded, garbage-collected,\n' +
        'interpreted(or just-in-time compiled), prototype-based,\n' +
        'multi-paradigm, dynamic language with a ____ event loop\n',
      choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
    });
  
    return handleAnswer(answers.question_5 === 'non-blocking');
  }
  
  async function question6() {
    const answers = await inquirer.prompt({
      name: 'question_6',
      type: 'list',
      message: 'Can you create an https web server with Node.js\n',
      choices: ['yes, with the https or http2 modules', 
      'no, there are no modules supporting it yet', 
      ' yes, through the path module', 
      ' yes, with the http module'],
    });
  
    return handleAnswer(answers.question_6 === 'yes, with the https or http2 modules');
  }

  function winner() {
    console.clear();
    figlet(`Congrats, ${playerName} !\n You have won $ 0 , 0 0 0 , 0 0 0`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      console.log(
        chalk.blue(
          `Bye Bye`
        )
      );
      process.exit(0);
    });
  }


  // Run it
console.clear();
await Welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
winner();
