#!/usr/bin/env node
import {Cli} from './core';

const cli = new Cli();

console.log(process.argv);
cli.help();
