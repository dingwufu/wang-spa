import filter from '@/middleware/filter.js';
import {assert} from 'chai';
import BaseFilter from '@/filter/base.js';

describe('middleware/filter', function () {
  let context = {
    request: {
      pathname: '/group/',
    },
  };

  describe('filter执行', function () {
    class TestFilter extends BaseFilter {
      doFilter () {
        it('执行doFilter', () => {
          assert.equal(context, this._context);
        });
      }
    }

    filter.add(TestFilter);
    filter.mw(context, () => {
      it('next函数被调用', function () {
        assert.isOk(true);
      });
    });
  });
});
