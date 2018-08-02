class Filter {
  constructor (context, next, chain) {
    this._context = context;
    this._chain = chain;
    this._next = next;
  }

  chain () { // 执行下一个过滤器
    if (this._chain) {
      this._chain();
    }
  }
  next () { // 执行下一个过滤器中间件
    if (this._next) {
      this._next();
    }
  }

  doFilter () {

  }
}

export default Filter;
