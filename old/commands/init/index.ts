import {Command, command, option} from '../../core/index';
import {param} from '../../core/command/index';

@command({
  description: 'Minda Cli 초기 설정을 합니다.',
  name: 'init'
})
export default class Init extends Command {

  @option({
    name: 'test',
    required: true,
  })
  public test: string;

  public run(
    @param({
      //
    })test: string,

    @param({
      //
    })aaa: string
  ) {
    console.log('========Init run ===========');
    console.log(test);
    console.log(aaa);
  }
}
