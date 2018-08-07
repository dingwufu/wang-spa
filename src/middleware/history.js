export default function history() {
  var iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.visibility = 'hidden';
  document.body.appendChild(iframe);
  iframe.src = 'about:blank';

  window.historyLocker = {};
  var lockKey = 'lock:' + (+new Date());
  function doPushHistory(hash) {
    if (!hash || window.historyLocker[lockKey]) {
      window.historyLocker[lockKey] = !1;
      return;
    }
    try {
      var doc = iframe.contentWindow.document;
      doc.write('<head><title>');
      doc.write(document.title);
      doc.write('</title>');
      doc.write(
        '<script>' +
        'parent.historyLocker["' + lockKey + '"]=!0;' +
        'parent.location.hash=decodeURIComponent("' + encodeURIComponent(hash) + '");' +
        '</script>'
      );
      doc.write('</head><body></body>');
      doc.close();
      window.historyLocker[lockKey] = !1;
    } catch (ex) {
    }
  }

  return function(context, next) {
    doPushHistory(
      context.request.hash
    );
    next();
  };
}
