// Общая логика
import readlineSync from 'readline-sync';


export function gameRounds (rules, getQuestionsAndAnswer, userName) {

  console.log(rules);
  let correctAnswersCount = 0;


  const rounds = 3
  while (correctAnswersCount < rounds) { 
    const [question, correctAnswer] = getQuestionsAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer === userAnswer) {
      console.log('Correct!')
      correctAnswersCount += 1
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
};

export default gameRounds