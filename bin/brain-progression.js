#!/usr/bin/env node
import gameRounds from '../src/index.js';
import { getQuestionAndAnswer, rule } from '../src/games/progression.js';

gameRounds(rule, getQuestionAndAnswer);
