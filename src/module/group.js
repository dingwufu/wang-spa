import Module from './module.js';

class Group extends Module {
  build(options) {
    super.build(options);
    this._body = document.createElement('div');
    this._unode = document.createElement('p');
    this._body.appendChild(this._unode);
  }

  show(context){
    super.show(context);
    this._doUpdate();
  }

  refresh(context) {
    super.refresh(context);
    this._doUpdate();
  }

  _doUpdate(name) {
    this._unode.innerHTML = '<p>组件group</p>';
  }
}

export default Group