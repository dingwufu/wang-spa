import Module from '../module.js';
import userHbs from './user.hbs';

class User extends Module {
  build(options) {
    super.build(options);
  }

  show(context) {
    super.show(context);
    let req = context.request;
    this._doUpdate(req.restParams.id);
  }

  refresh(context) {
    super.refresh(context);
    let req = context.request;
    this._doUpdate(req.restParams.id);
  }

  _doUpdate(id) {
    let hbs = userHbs({id: id});
    super.render(hbs);
  }
}

export default User;
