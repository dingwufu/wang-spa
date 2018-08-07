import spa from '@/monitor/spa.js';
import {assert} from 'chai';

describe('monitor/spa', function() {
  let caseContext = {
    request: new URL('http://localhost:8080/#/group/china'),
  };

  it('传入中间件被调用，传入参数正常', function() {
    let testMw = (context, next) => {
      assert.equal(context, caseContext, '用例传的context值');
      assert.isFunction(next, '调用下一个函数');
    };

    spa.add(testMw);
    spa.dispatch(caseContext);
  });
});
