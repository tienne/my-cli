#!/usr/bin/env node
import {Cli} from './core/index';

const minda = new Cli('minda', './commands');

minda.run()
  .then(() => {
    //
  });
