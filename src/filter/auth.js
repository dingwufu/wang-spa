import Filter from './index.js';

class AuthFilter extends Filter {
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
