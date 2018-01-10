#!/usr/bin/env node
import {Cli} from './core';

const minda = new Cli('minda', process.argv);

minda.run()
  .then(() => {
    //
  });
