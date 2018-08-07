import router from '@/middleware/router.js';
import {assert} from 'chai';

import Module from '@/module/module.js';

describe('middleware/router', function () {
  it('router执行', function () {
    class TestModule extends Module {
      build (options) {
        assert.isOk(true, '测试组件被加载');
      }
      show (context) {
        assert.isOk(true, '测试组件被渲染');
      }
    }
    let options = {
      routes: {
        '/group/': TestModule,
      },
    };

    router(options)({
      request: {
        pathname: '/group/',
        restParams: {
          name: 'china',
        },
      },
    }, () => {
      assert.isOk(true, 'next函数被调用');
    });
  });
});
