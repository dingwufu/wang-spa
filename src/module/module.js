class Module {
  constructor(config) {
    this._parent = (config && config.parent) || document.getElementById('app') || document.body;
  }
  build() {
    // 子类生成this._body
  }
  show() {
    if (this._body) {
      this._parent.appendChild(this._body);
    }
  }
  refresh() {

  }
  hide() {
    if (this._body) {
      document.getElementById('hide').appendChild(this._body);
    }
  }
  destroy() {
    let body = this._body;
    if (body) {
      body.parentNode.removeChild(body);
    }
  }
}

export default Module;
