export default function rest(options) {
  let matchers = options.matchers || [];
  // macthers 字符串数组转化为 [keys:, matcher: , url:]
  matchers.forEach(function(it, index, list) {
    list[index] = str2matcher(it);
  });

  function str2matcher(url) {
    let ret = {
      url: url,
      keys: [],
    };
    let reg = url.replace(/:(.+?)(?=\/|$)/g, function($1, $2) {
      ret.keys.push($2);
      return '([^/]+?)';
    });

    ret.matcher = new RegExp('^' + reg + '$', 'i');
    return ret;
  }

  // 匹配成功获取key对应的值
  function getParams(path) {
    let ret = {};

    matchers.find(function(it) {
      let res = it.matcher.exec(path);
      if (res) {
        it.keys.forEach(function(key, index) {
          ret[key] = res[index + 1] || '';
        });
        return true;
      }
    });
    return ret;
  }

  return (context, next) => {
    let req = context.request; // url对象
    let hashPath = req.hash ? req.hash.substr(1) : '';
    let hash = new URL(
      hashPath,
      req.origin
    );
    hash.restParams = getParams(
      hash.pathname
    );
    hash.hash = req.hash;

    // hash作为路径
    context.request = hash;
    next();
  };
}
