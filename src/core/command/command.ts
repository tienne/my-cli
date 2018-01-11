import {Option} from './commandOption';

export interface CommandMetaOption {
  /**
   * command description use in help method
   */
  description?: string;
  name?: string;
  alias?: string;
}

export abstract class Command {
  public static decorator = false;
  public static description: string | undefined;
  public static commandName: string | undefined;
  public static alias: string | undefined;
  public static params: any[] = [];
  public static options: Option[] = [];

  /**
   * run command action
   * @param args
   * @returns {Promise<any> | any}
   */
  public abstract run(...args: any[]): Promise<any> | any;
}

/**
 * command decorator
 * @param {CommandMetaOption} option
 * @returns {(target: Command) => any}
 */
export function command(option?: CommandMetaOption) {
  return (target: typeof Command) => {
    const meta = option || {};

    target.description = meta!.description;
    target.alias = meta!.alias;
    target.commandName = meta!.name;

    target.decorator = true;
  };
}
