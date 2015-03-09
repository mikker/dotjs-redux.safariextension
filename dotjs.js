(function(w, d) {
  'use strict';

  d.addEventListener('DOMContentLoaded', function() {
    var file = 'https://localhost:3131/' + w.location.host.replace('www.', '') + '.js';
    var scriptElm = document.createElement('script');
    scriptElm.src = file;
    d.body.appendChild(scriptElm);
  });
})(window, document);
