import Module from '../module.js';
import groupHbs from './group.hbs';

class Group extends Module {
  build(options) {
    super.build(options);
    this.data = {
      name: 'group',
    };
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
    super.innerHTML(this.render());
  }
  render(props) {
    return groupHbs({...this.data, ...props});
  }
}

export default Group;
