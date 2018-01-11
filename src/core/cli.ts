import * as path from 'path';
import * as glob from 'glob';
import {Command} from './command';
import {removeFilename} from './utils/fs';

export class Cli {

  private commands: typeof Command[] = [];
  private rootCommand: typeof Command;
  private name: string;
  private commandPath: string;
  private srcArgv: string[] = [];
  private argv: string[] = [];

  public getCommandPath() {
    return path.join(this.commandPath);
  }

  public getArguments() {
    return this.argv;
  }

  public constructor(name: string, commandPath: string) {
    this.name = name;
    this.commandPath = path.resolve(commandPath);

    this.srcArgv = process.argv;
    this.argv.splice(2);

    this.parse();
  }

  public run(): Promise<any> | any {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  }

  /**
   * 커맨드들을 불러와서 실행할 명령어를 찾습니다.
   */
  private parse() {
    const files = glob.sync(path.join(this.getCommandPath(), '**/index.js'));
    files.map((file) => {
      const CommandConstructor = this.getCommandConstructor(file);

      //
    });

    this.findRunCommand();
  }

  /**
   * 해당경로의 커맨드를 저장합니다.
   * @param {string} file 커맨드파일 위치
   */
  private getCommandConstructor(file: string) {
    const module = require(file);
    let CommandConstructor: typeof Command = module.default;

    if (module) {

      CommandConstructor = module.default;

      if (CommandConstructor && CommandConstructor.prototype instanceof Command) {
        if (!CommandConstructor.decorator) {
          throw TypeError(`Command class in '${file}' not use '@command()' decorator`);
        }
      } else {
        return '';
      }
    }

    return CommandConstructor;
  }

  private isRootPath(str: string) {
    const rootPath = path.join(this.getCommandPath());
    str = path.join(removeFilename(str));

    return (rootPath === str) || (rootPath + path.sep === str);
  }

  private findRunCommand() {
    console.log(this.argv);
  }

  private runCommand(command: Command) {

  }
}
