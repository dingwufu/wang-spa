export default function rewrite (options) {
  let rules = options.rules || [];

  rules.forEach(function (it) { // matcher|target 转匹配函数
    let target = it.target;
    if (typeof target !== 'function') {
      it.target = (ctx) => target;
    }

    let matcher = it.matcher;
    if (typeof matcher === 'function') {
      return false;
    }
    if (typeof matcher === 'string') {
      it.matcher = (ctx) => ctx.request.pathname === matcher;
      return false;
    }
    if (matcher instanceof RegExp) {
      it.matcher = (ctx) => matcher.test(ctx.request.pathname);
      return false;
    }
  });

  return function (context, next) {
    let ret = rules.find((it) => it.matcher(context)); // 找到符合规则的rules
    if (ret) {
      let target = ret.target(context);
      context.request.pathname = target;
    }
    next();
  };
}
