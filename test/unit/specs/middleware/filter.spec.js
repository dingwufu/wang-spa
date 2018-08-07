import filter from '@/middleware/filter.js';
import {assert} from 'chai';
import BaseFilter from '@/filter/base.js';

describe('middleware/filter', function() {
  let cases = [
    {filterType: 'array', result: true},
    {filterType: 'object', result: undefined},
  ];

  it('filter执行', function() {
    for (const obj of cases) {
      class TestFilter extends BaseFilter {
        doFilter() {
          assert.isOk(true, 'doFilter函数被调用');
        }
      }
      let filters = obj.filterType === 'array' ? [TestFilter] : TestFilter;

      assert.equal(filter.add(filters), obj.result);
      filter.mw(context, () => {
        assert.isOk(true, 'next函数被调用');
      });
    }
  });
});
