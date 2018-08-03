import spa from './monitor/spa.js';
import monitor from './monitor/monitor.js';

import rest from './middleware/rest.js';
import history from './middleware/history.js';
import rewrite from './middleware/rewrite.js';
import filter from './middleware/filter.js';
import router from './middleware/router.js';

import AuthFilter from './filter/auth.js';

let app = {
  start: function (options) {
    spa.add(rest(options));
    spa.add(history());
    spa.add(rewrite(options));
    spa.add(filter.mw);
    filter.add(AuthFilter);
    spa.add(router(options));

    monitor((event) => {
      let context = {
        request: new URL(event.newValue),
      };
      spa.dispatch(context);
    });
  },
};

export default app;
