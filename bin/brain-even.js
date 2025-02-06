#!/usr/bin/env node
import playGame from '../src/index.js';
import { getQuestionAndAnswer, rule } from '../src/games/even.js';
import { welcome } from '../src/cli.js';

const userName = welcome()
playGame(rule, getQuestionAndAnswer, userName);