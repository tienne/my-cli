import {Command} from './command';

export interface Option {
  aliases?: string;
  name: string;
  required: boolean;
}

/**
 * option decorator
 * @param {Option} param
 * @returns {(target: Command, propertyName: string) => void}
 */
export function option(param: Option) {
  return (target: Command, propertyName: string) => {
    //
  };
}
