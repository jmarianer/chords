function lineBreaks(elt) {
  elt.html(
    elt.text()
    .replace(/^\n/g, '')
    .replace(/\n/g, '<br>\n')
  );
}

function superscripts(elt) {
  elt.html(
    elt.text()
    .replace(/:(.*?):/g, '<sup>$1</sup>')
  );
}

$(function() {
  $('.chords').each(function(_, elt) {
    elt = $(elt);
    elt.html(
      elt.text()
      .replace(/^\n/, '')
      .replace(/\n/g, '<br>\n')
      .replace(/,,,/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
      .replace(/:(.*?):/g, '<sup>$1</sup>')
    );

  });

  $('.justlyrics').each(function(_, elt) {
    elt = $(elt);
    elt.html(
      elt.text()
      .replace(/^\n/, '')
      .replace(/\n/g, '<br>\n')
      .replace(/,,,/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
    );
  });

  $('.lyrics').each(function(_, elt) {
    elt = $(elt);
    elt.html(
      elt.text()
      .replace(/^\n/, '')
      .replace(/\n/g, '<br>\n')
      .replace(/,,,/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
      .replace(/{(.*?)}/g, '<span class="chord-holder"><span class="chord">$1</span></span>')
    );
  });

  $('.tabs').each(function(_, elt) {
    elt = $(elt);
    elt.html(
      elt.text()
      .replace(/^\n/, '')
      .replace(/\n/g, '<br>\n')
      .replace(/,/g, '&nbsp;')
      .replace(/{(.*?)}/g, '&nbsp;<span class="tabschord">$1</span>&nbsp;')
      .replace(/:(.*?):/g, '<sup>$1</sup>')
    );
  });

  $('.chord').each(function(_, elt) {
    elt = $(elt);
    superscripts(elt);
  });
})
