import randomNum from '../utils.js';

export function gcd(num, num2) {
  if (num < num2) {
    return gcd(num2, num);
  }
  if (!num2) {
    return String(num);
  }
  return gcd(num2, num % num2);
}

export const rule = 'Find the greatest common divisor of given numbers.';
export function getQuestionAndAnswer() {
  const num = randomNum();
  const num2 = randomNum();
  const question = [num, num2].join(' ');
  const answer = gcd(num, num2);
  return [question, answer];
}
