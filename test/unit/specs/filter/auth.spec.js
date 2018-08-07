import AuthFilter from '@/filter/auth.js';
import {assert} from 'chai';

describe('filter/auth', function() {
  let cases = [
    {pathname: '/group', result: false},
    {pathname: '/', result: undefined},
  ];
  
  it('auth过滤器执行正常', () => {
    for (const obj of cases) {
      let af = new AuthFilter(
        {
          request: {
            pathname: obj.pathname,
          },
        },
        () => {},
        () => {}
      );
      
      assert.equal(af.doFilter(), obj.result);
    }
  });
});
