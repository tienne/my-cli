import {Command} from './command';

export interface Option {
  aliases?: string;
  name: string;
  required: boolean;
}

export function option(param: Option) {
  return (target: Command, propertyName: string) => {
    console.log(target);
    console.log(propertyName);
  };
}
