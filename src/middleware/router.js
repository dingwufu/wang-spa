import Module from '../module/module.js';

export default function router(options) {
  // 用户传入路由配置
  let routes = options.routes || {};
  let current = null;

  function moduleManage(module, name, context) {
    if (!(module instanceof Module)) {
      let Module = module;
      module = new Module();
      routes[name] = module;
      module.build(context);
    }
    if (module === current) {
      module.refresh(context);
    } else {
      if (current) {
        current.hide();
      }
      current = module;
      current.show(context);
    }
  }

  return function(context, next) {
    let name = context.request.pathname;
    let moduleFunc = routes[name];

    if (!moduleFunc) {
      location.href = '#/';
      return false;
    }
    if (moduleFunc.prototype && moduleFunc.prototype.build) { // 加载静态组件
      moduleManage(moduleFunc, name, context);
    } else if (typeof moduleFunc === 'function') { // 动态加载组价
      moduleFunc().then((moduleObj) => {
        let module = moduleObj.default;
        moduleManage(module, name, context);
      });
    } else { // 动态加载完成后的组件
      moduleManage(moduleFunc, name, context);
    }
    next();
  };
}
