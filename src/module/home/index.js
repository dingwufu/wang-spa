import Module from '../module.js';
import homeHbs from './home.hbs';

class Home extends Module {
  build(options) {
    super.build(options);
    this.data = {};
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
    return homeHbs({...this.data, ...props});
  }
}

export default Home;
