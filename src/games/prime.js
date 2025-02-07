import randomNum from '../utils.js';

function isPrime(num) {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function getQuestionAndAnswer() {
  const num = randomNum();
  const que = num;
  const answer = isPrime(num);
  return [que, answer];
}
