import runGame from '../index.js';
import getRandomInt from '../utils.js';



const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);

    const question = `${num1} ${num2}`;
    const answer = gcd(num1, num2).toString();

    return { question, answer };
};



const gameDescription = 'Find the greatest common divisor of given numbers.';
runGame(gameDescription, getQuestionAndAnswer);

export default runGame;