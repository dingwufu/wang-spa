import Module from './module.js';

class GroupName extends Module {
  build(options) {
    super.build(options);
    this._body = document.createElement('div');
    this._unode = document.createElement('p');
    this._body.appendChild(this._unode);
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
    this._unode.innerHTML = '<p>组件group/' + name + '</p>';
  }
}

export default GroupName;
