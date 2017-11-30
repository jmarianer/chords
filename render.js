"use strict";
var page = require('webpage').create(), system = require('system'), input, output;

if (system.args.length !== 3) {
  console.log('Usage: render.js URL filename');
  phantom.exit(1);
}

input = system.args[1];
output = system.args[2];

page.paperSize = { format: "Letter", orientation: 'portrait', margin: '1cm' };

page.open(input, function (status) {
  if (status !== 'success') {
    console.log('Unable to load the input file!');
    phantom.exit(1);
  }

  page.evaluate(function() {
    document.body.style.zoom = 0.75;  // https://github.com/ariya/phantomjs/issues/12685#issuecomment-90912119
  });
  page.render(output);
  phantom.exit();
});
