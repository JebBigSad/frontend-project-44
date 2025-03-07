import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getQuestionAndAnswer = () => {
    const operations = ['+', '-', '*'];
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operation = operations[getRandomInt(0, operations.length - 1)];

    const question = `${num1} ${operation} ${num2}`;
    const answer = calculate(num1, num2, operation).toString();

    return { question, answer };
};

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
    }
};

const gameDescription = 'What is the result of the expression?';

export default () => {
    runGame(gameDescription, getQuestionAndAnswer);
};