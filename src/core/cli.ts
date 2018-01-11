import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';
import {Command} from './command';
import {removeFilename} from './utils/fs';

export class Cli {

  private commands: Command[] = [];
  private rootCommand: Command;
  private name: string;
  private commandPath: string;
  private argv: string[] = [];

  public getCommandPath() {
    return path.join(this.commandPath);
  }

  public getArguments() {
    return this.argv.splice(2);
  }

  public constructor(name: string, commandPath: string) {
    this.name = name;
    this.commandPath = path.resolve(commandPath);
    this.argv = process.argv;
    this.parse();
  }

  public run(): Promise<any> | any {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  }

  private parse() {
    const files = glob.sync(path.join(this.getCommandPath(), '**/index.js'));

    files.map((file) => {
      const module = require(file);

      if (module) {
        const targetCommand = module.default;

        if (targetCommand && targetCommand.prototype instanceof Command) {
          if (!targetCommand.decorator) {
            throw TypeError(`Command class in '${file}' not use '@command()' decorator`);
          }

          const command = new targetCommand();

          if (this.isRootPath(file)) {
            this.rootCommand = command;
          } else {
            this.commands.push(command);
          }
        }
      }
    });
  }

  private isRootPath(str: string) {
    const rootPath = path.join(this.getCommandPath());
    str = path.join(removeFilename(str));

    return (rootPath === str) || (rootPath + path.sep === str);
  }

  private runCommand(command: Command) {

  }
}
