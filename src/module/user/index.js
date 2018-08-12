import Module from '../module.js';
import userHbs from './user.hbs';

class User extends Module {
  build(options) {
    super.build(options);
    this.data = {
      id: 0,
    };
  }

  show(context) {
    super.show(context);
    let req = context.request;
    this.data.id = req.restParams.id;
    this._doUpdate();
  }

  refresh(context) {
    super.refresh(context);
    let req = context.request;
    this.data.id = req.restParams.id;
    this._doUpdate();
  }

  _doUpdate() {
    super.innerHTML(this.render());
  }
  render(props) {
    return userHbs({...this.data, ...props});
  }
}

export default User;
