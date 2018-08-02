class Module {
  constructor(config) {
    this._parent = (config && config.parent) || document.getElementById('app') || document.body;
  }
  build(options){
    // 子类生成this._body
  }
  show(context) {
    if (this._body) {
      this._parent.appendChild(this._body);
    }
  }
  refresh(){

  }
  hide() {
    if(this._body) {
      document.getElementById('hide').appendChild(this._body);
    }
  }
  destroy() {
    let body = this._body;
    if(body) {
      body.parentNode.removeChild(body);
    }
  }
}

export default Module