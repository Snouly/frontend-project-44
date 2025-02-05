import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';


console.log('Find the greatest common divisor of given numbers.')


function getQueAndAnswer () {
    const num = Math.floor(Math.random() * 100)
    const num2 = Math.floor(Math.random() * 100)
    const que = [num, num2]
    const answer = nod(num, num2)
    return [que, answer]
}

function nod (num, num2){ 
    if (num < num2){
        return nod(num2, num)
    }
    else if (!num2) {
        return num
    }
    else{
        return nod(num2, num % num2)
    }  
}

function calc () {
    for (let i=0; i<3; i++){
        const [que, answer] = getQueAndAnswer();
        console.log(`Question: ${que[0]} ${que[1]}`)
        const userAnswer = readlineSync.question('Your answer: ')
        if (+userAnswer === answer){
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