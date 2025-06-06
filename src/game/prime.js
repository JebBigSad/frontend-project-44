import runGame from '../index.js'
import getRandomInt from '../utils.js'

const Prime = number => {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100)
  const answer = Prime(number) ? 'yes' : 'no'
  return { question: number.toString(), answer }
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export default () => {
  runGame(gameDescription, getQuestionAndAnswer)
}
