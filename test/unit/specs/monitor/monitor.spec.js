import monitor from '@/monitor/monitor.js';
import {assert} from 'chai';

describe('monitor/monitor', function () {
  it('获取当前/上一页地址url', function () {
    let url = window.location.href;
    monitor(({newValue, oldValue}) => {
      assert.equal(newValue, url, '当前地址为' + url);
      assert.equal(oldValue !== newValue, true, '地址改变了');
    });
  });
});
