#!/usr/bin/env node

import greetUser  from '../cli.js';
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
    const name = greetUser (); 
    console.log('Welcome to the Brain Even Game!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    while (correctAnswers < 3) {
        const number = getRandomInt(1, 100);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');

        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (answer === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); 
            console.log(`'Let's try again, ${name}!'`);
            return;
        }
    }

    console.log(`Congratulations, ${name}! You won!`); 
};

export default brainEvenGame ;