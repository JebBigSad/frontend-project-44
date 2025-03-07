import getRandomInt from '../utils.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
    const number = getRandomInt(1, 100);
    const question = number;
    const answer = isEven(number) ? 'yes' : 'no';
    return { question, answer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameDescription, getQuestionAndAnswer);

export default runGame;