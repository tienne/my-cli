import {Command} from './command';

export class Cli {

  private commands: Command[];
  private name: string;

  public constructor(name: string, prgv: string[]) {
    this.name = name;
    this.parse();
  }

  public run(): Promise<any> | any {

  }

  private parse() {

  }
}
