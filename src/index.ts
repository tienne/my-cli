#!/usr/bin/env node
import {Cli} from './core';

const minda = new Cli('minda', './commands');

minda.run()
  .then(() => {
    //
  });
