import runGame from '../index.js';
import getRandomInt from '../utils.js';


const generateProgression = (length, start, step) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        const currentValue = start + i * step;
        progression.push(currentValue);
    }
    return progression;
};

const getQuestionAndAnswer = () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 5);

    const progression = generateProgression(length, start, step);
    const Index = getRandomInt(0, length - 1);
    const hiddenValue = progression[Index];

    progression[Index] = '..';
    const question = progression.join(' ');
    return {question, answer: hiddenValue.toString()}
};

const gameDescription = 'What number is missing in the progression?';

runGame(gameDescription, getQuestionAndAnswer);

export default runGame;