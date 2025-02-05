import { welcome } from '../src/cli.js';
import readlineSync from 'readline-sync';



function getCount (randomNum, operator, randomNum2) {
    switch (operator) {
        case '+':
            return randomNum + randomNum2
        case '*':
            return randomNum * randomNum2
        case '-':
            return randomNum - randomNum2
            default: console.log('Error')
    }
}

function getQueAndAnsw () {
    const point = [`+`, `-`, `*`]
    const randomPoint = Math.floor(Math.random()* 3)
    const num = Math.floor(Math.random() * 100)
    const num2 = Math.floor(Math.random() * 100)
    const randomOperator = point[randomPoint]
    const que = num + randomOperator + num2
    const answ = getCount(num, randomOperator, num2)
    return [que, answ];
}

console.log('What is the result of the expression?')

function parity (userAnswer, answer) { 
    if (userAnswer == answer){
        return true
    }
    else{
        return false
    }
}

function calc () {
    for (let i=0; i<3; i++){
        const [que, answer] = getQueAndAnsw()
        console.log('Question: ' + que)
        const userAnswer = readlineSync.question('Your answer: ')

        if (parity(userAnswer, answer)){
            console.log('Correct!')
        }

        else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer} Let's try again, ${name}!`)
            return
        }
    }
    console.log(`Congratulations, ${name}!`)
}


const name = welcome()
calc(name)