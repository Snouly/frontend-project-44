#!/usr/bin/env node
import gameRounds from '../src/index.js';
import { getQuestionAndAnswer, rule } from '../src/games/gcd.js';
import { welcome } from '../src/cli.js';

const userName = welcome()
gameRounds(rule, getQuestionAndAnswer, userName);