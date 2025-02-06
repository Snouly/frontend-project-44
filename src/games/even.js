import { randomNum } from '../utils.js';

const isEvenNum = (num) => num % 2 === 0
export const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
export function getQuestionAndAnswer () {
  const question = randomNum()
  const answer = isEvenNum(num) ? 'yes' : 'no'
  return [question, answer]
}