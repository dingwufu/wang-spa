import AuthFilter from '@/filter/auth.js';
import {assert} from 'chai';

describe('filter/auth', function () {
  let pathname = '/group';
  localStorage.setItem('session', true);
  
  describe('auth过滤器执行正常', () => {
    let af = new AuthFilter(
      {
        request: {
          pathname: pathname,
        },
      },
      () => {},
      () => {
        it('chain: 被调用执行下一个过滤器', function () {
          assert.isOk(true);
        });
      }
    );
    
    af.doFilter();
  });
});
