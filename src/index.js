import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (gameDescription, getQuestionAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameDescription);

    for (let i = 0; i < roundsCount; i += 1) {
        const { question, answer } = getQuestionAndAnswer();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default runGame;