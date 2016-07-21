var actualCode = [
  'window.canRun = true',
  '$("body").css("overflow", "auto !important")'
].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
