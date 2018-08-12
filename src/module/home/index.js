import Module from '../module.js';
import homeHbs from './home.hbs';

class Home extends Module {
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
    let hbs = homeHbs({name: name});
    super.render(hbs);
  }
}

export default Home;
