import BaseFilter from './base.js';

class AuthFilter extends BaseFilter {
  doFilter () {
    let session = localStorage.getItem('session');
    let {pathname} = this._context.request;

    if (!session && pathname !== '/') {
      location.href = '#/';
      return;
    }
    super.chain();
  }
}

export default AuthFilter;
