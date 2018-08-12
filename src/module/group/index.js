import Module from '../module.js';
import groupHbs from './group.hbs';

class Group extends Module {
  build(options) {
    super.build(options);
  }

  show() {
    super.show();
    this._doUpdate();
  }

  refresh() {
    super.refresh();
    this._doUpdate();
  }

  _doUpdate() {
    let hbs = groupHbs({name: 'group'});
    super.render(hbs);
  }
}

export default Group;
