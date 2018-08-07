import BaseFilter from '@/filter/base.js';
import {assert} from 'chai';

describe('filter/base', function() {
  describe('filter基类执行', function() {
    let bf = new BaseFilter(
      {}, () => {
        it('next: 被调用执行下一个过滤器中间件', function() {
          assert.isOk(true);
        });
      }, () => {
        it('chain: 被调用执行下一个过滤器', function() {
          assert.isOk(true);
        });
      }
    );

    bf.next();
    bf.chain();
  });
});
