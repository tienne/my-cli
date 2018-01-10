import {CommandOption} from './commandOption';

export abstract class Command {
  private description: string;
  private options: CommandOption[];

  /**
   * run command action
   * @param args
   * @returns {Promise<any> | any}
   */
  public abstract run(...args: any[]): Promise<any> | any;
}
