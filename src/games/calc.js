import randomNum from '../utils.js';

function getCount(num, operator, num2) {
  switch (operator) {
    case '+':
      return num + num2;
    case '*':
      return num * num2;
    case '-':
      return num - num2;
    default: return 'Error';
  }
}
export const rule = 'What is the result of the expression?';
export const getQuestionAndAnswer = () => {
  const point = ['+', '-', '*'];
  const randomPoint = Math.floor(Math.random() * 3);
  const randomOperator = point[randomPoint];

  const num = randomNum();
  const num2 = randomNum();

  const question = `${num} ${randomOperator} ${num2}`;
  const answer = String(getCount(num, randomOperator, num2));
  return [question, answer];
};
