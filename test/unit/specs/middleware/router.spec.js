import router from '@/middleware/router.js';
import {assert} from 'chai';

import Module from '@/module/module.js';

describe('middleware/router', function() {
  let cases = [
    {
      type: 'static',
      routes: '/group/',
      pathname: '/group/',
      result: {
        isBuild: true,
        isShow: true,
        isNextIgnored: true,
      },
    },
    {
      type: 'static',
      routes: '/group/',
      pathname: '/grou',
      result: {
        isBuild: false,
        isShow: false,
        isNextIgnored: undefined,
      },
    },
  ];

  it('router执行', function() {
    for (const obj of cases) {
      class TestModule extends Module {
        build(context) {
          context.params.isBuild = true;
        }
        show(context) {
          context.params.isShow = true;
        }
      }
      let options = {
        routes: {
          [obj.routes]: TestModule,
        },
      };
      let context = {
        request: {
          pathname: obj.pathname,
        },
        params: {
          isBuild: false,
          isShow: false,
        },
      };
      let isNextIgnored;
      router(options)(context, () => {
        isNextIgnored = true;
      });

      assert.equal(context.params.isBuild, obj.result.isBuild, 'build函数被调用');
      assert.equal(context.params.isShow, obj.result.isShow, 'show函数被调用');
      assert.equal(isNextIgnored, obj.result.isNextIgnored, 'next函数被调用');
    }
  });
});
