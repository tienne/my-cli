import {Option} from './commandOption';

export abstract class Command {
  private descriptionMessage: string;
  private options: Option[];
  private commandName: string;

  /**
   * run command action
   * @param args
   * @returns {Promise<any> | any}
   */
  public abstract run(...args: any[]): Promise<any> | any;

  /**
   * 명령어의 설명을 입력합니다.
   * @returns {string}
   */
  public abstract description(): string;

  public abstract command(): string;

  public getDescription(): string {
    return this.descriptionMessage;
  }

  public getCommand(): string {
    return this.commandName;
  }
}
