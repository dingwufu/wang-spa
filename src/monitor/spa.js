let mws = []; // 中间件数组

export default {
  add: function(mw) {
    if (typeof mw === 'function') {
      mws.push(mw);
    }
  },
  dispatch: function(context) {
    let index = 0;
    function next() { // 调用下一个中间件
      let mw = mws[index];
      index++;

      if (mw) {
        // context.request url对象
        return mw(context, next);
      }
    }
    next();
  },
};
