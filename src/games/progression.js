import randomNum from '../utils.js';

export const rule = 'What number is missing in the progression?';

export function getQuestionAndAnswer() {
  const start = randomNum();
  const step = randomNum();
  const que = [start];

  const progressionLength = 9
  for (let i = 1; i <= progressionLength; i += 1) {
    que[i] = que[i - 1] + step;
  }

  const index = randomNum();
  const answer = String(que[index]);
  const progressionWithGap = [...que];
  progressionWithGap[index] = '..';
  return [progressionWithGap.join(' '), answer];
}
