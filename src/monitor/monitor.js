/**
 * 监听地址hash变化
 * @param {Function} callback - hashchange触发回调
 */
function monitor(callback) {
  let last = null;

  function checkUrl() {
    let url = window.location.href;
    let event = {
      newValue: url,
      oldValue: last,
    };
    if (url !== last) {
      last = url;
      callback(event);
    }
  }

  window.addEventListener('hashchange', checkUrl, false);
  checkUrl();
}

export default monitor;
