import { randomNum } from '../utils.js';

export const rule = 'What number is missing in the progression?'

export function getQuestionAndAnswer () {
    const start = randomNum()
    const step = randomNum()
    const que = [start]

    for (let i = 1; i <= 9; i += 1) {
        que[i] = que[i - 1] + step
    }
  
    const index = randomNum()
    const answer = String(que[index])
    const p = [...que]
    p[index] = '..';
    return [p.join(' '), answer]
}