import rewrite from '@/middleware/rewrite.js';
import {assert} from 'chai';

describe('middleware/rewrite', function() {
  let context = {
    request: {
      pathname: '/group/china',
    },
  };
  let options = {
    rules: [
      {
        matcher: /^\/group\/(\w)+/i,
        target: '/group/',
      },
    ],
  };

  it('rewrite执行', function() {
    let targetUrl = options.rules[0].target;
    rewrite(options)(context, () => {});
    assert.equal(context.request.pathname, targetUrl, 'url的pathname重写成功');
  });
});
