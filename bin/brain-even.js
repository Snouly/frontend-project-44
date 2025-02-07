#!/usr/bin/env node
import gameRounds from '../src/index.js';
import { getQuestionAndAnswer, rule } from '../src/games/even.js';

gameRounds(rule, getQuestionAndAnswer);
