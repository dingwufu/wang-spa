// 监听地址变化触发 onChange
function Monitor(opt) {
  opt = opt || {};
  let last = null;

  function checkUrl() {
    let url = window.location.href;
    let event = {
      newValue: url,
      oldValue: last
    }
    if (url !== last) {
      last = url;
      if (typeof opt.onChange === 'function') {
        opt.onChange(event);
      }
    }
  }

  window.addEventListener("hashchange", checkUrl, false);
  checkUrl();
}

export default Monitor;