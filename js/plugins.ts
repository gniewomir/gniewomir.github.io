// Avoid `console` errors in browsers that lack a console.
(function() {
  let method;
  const noop = function () {
  };
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  let length = methods.length;
  // @ts-ignore
  const console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

// Add the simplest possible cache busting to PDF download, bc I do not want to deal with Parcel namer plugins atm
document.onreadystatechange = function(_e)
{
  // we do not have to wait for DOMLoaded - we need only parsed HTML
  if (document.readyState === 'complete')
  {
    const linkElement = document.getElementById('pdf-download');
    const originalHref = linkElement.getAttribute('href');
    linkElement.setAttribute('href', `${originalHref}?_=${new Date().getTime()}`);
  }
};
