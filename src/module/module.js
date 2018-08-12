class Module {
  constructor(config) {
    this._parent = (config && config.parent) || document.getElementById('app');
  }
  build() {}
  show() {
    this._body = document.createElement('div');
    this._parent.appendChild(this._body);
  }
  refresh() {}
  render(html) {
    if (this._body) {
      this._body.innerHTML = html;
    }
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
