import Module from '../module.js';
import groupNameHbs from './group_name.hbs';

class GroupName extends Module {
  build(options) {
    super.build(options);
  }

  show(context) {
    super.show(context);
    let req = context.request;
    this._doUpdate(req.restParams.name);
  }

  refresh(context) {
    super.refresh(context);
    let req = context.request;
    this._doUpdate(req.restParams.name);
  }

  _doUpdate(name) {
    let hbs = groupNameHbs({name: name});
    super.render(hbs);
  }
}

export default GroupName;
