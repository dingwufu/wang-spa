import rest from '@/middleware/rest.js';
import {assert} from 'chai';

describe('middleware/rest', function () {
  let context = {
    request: new URL('http://localhost:8080/#/group/china'),
  };
  let options = {
    matchers: [
      '/group/:name',
    ],
  };
  
  describe('rest执行', function () {
    rest(options)(context, () => {});
    
    it('url解析正常', function () {
      let contextRequest = context.request;
      assert.include(contextRequest.restParams, {
        name: 'china',
      }, '参数解析正常');
    });
  });
});
