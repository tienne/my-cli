import {Command} from './command';

export function param(option: {}) {
  return (target: Command, methodName: string, paramIndex: number) => {
    // console.log(target);
    // console.log(methodName);
    // console.log(paramIndex);
  };
}
