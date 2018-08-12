import Module from '../module.js';
import groupNameHbs from './group_name.hbs';

class GroupName extends Module {
  build(options) {
    super.build(options);
    this.data = {
      name: '',
    };
  }

  show(context) {
    super.show(context);
    let req = context.request;
    this.data.name = req.restParams.name;
    this._doUpdate();
  }

  refresh(context) {
    super.refresh(context);
    let req = context.request;
    this.data.name = req.restParams.name;
    this._doUpdate();
  }
  _doUpdate() {
    super.innerHTML(this.render());
  }
  render(props) {
    return groupNameHbs({...this.data, ...props});
  }
}

export default GroupName;
