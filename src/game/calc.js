#!/usr/bin/env node

import runGame from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operation = operations[getRandomInt(0, operations.length - 1)];

    const question = `${num1} ${operation} ${num2}`;

    const calculate = (operation, n1, n2) => {
        if (operation === '+') return n1 + n2;
        if (operation === '-') return n1 - n2;
        if (operation === '*') return n1 * n2;
    };

    const answer = calculate(operation, num1, num2).toString();

    return { question, answer };
};

const gameDescription = 'What is the result of the expression?';

runGame(gameDescription, getQuestionAndAnswer);

export { runGame };