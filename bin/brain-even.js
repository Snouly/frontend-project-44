import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';



export function isEven(name) {
    let counter = 0
    console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".')
    while (counter <3){
        // if (counter = 2){
        //     console.log(`Congratulations, ${name}!`)
        // }
        // console.log('Answer \"yes\" if the number is even, otherwise answer \"no\".')
        let num = Math.floor(Math.random() * 100);
        
        let correctAnswer = ''
        if (num%2 === 0){
            correctAnswer = 'yes'
        }
        else{
            correctAnswer = 'no'
        }

        console.log('Question: '+num)
        const answer = readlineSync.question('Your answer: ');

        if (answer === correctAnswer){
            counter+=1
            console.log('Correct!')
            
        }
        else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            break
        }
    }
    if (counter >= 3){
        console.log(`Congratulations, ${name}!`)
    }
}

const name = welcome()
isEven(name)