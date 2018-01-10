import {Command} from '../core';
import {option} from '../core/command/commandOption';

export default class Init extends Command {

  @option({
    name: '',
    required: true,
  })
  public test: string;

  public command() {
    return 'init';
  }

  public description() {
    return 'Minda Cli 초기 설정을 합니다.';
  }

  public run() {

  }
}
