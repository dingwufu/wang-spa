import history from '@/middleware/history.js';
import {assert} from 'chai';

describe('middleware/history', function() {
  let context = {
    request: new URL('http://localhost:8080/#/group/china'),
  };
  
  it('history执行', function() {
    history()(context, () => {});
    let historyLocker = window.historyLocker;

    for (let key in historyLocker) {
      if (historyLocker.hasOwnProperty(key)) {
        assert.isFalse(historyLocker[key], 'history存入记录');
      }
    }
  });
});
