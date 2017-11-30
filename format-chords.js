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
      .replace(/:(.*?):/g, '<sup>$1</sup>')
    );

  });

  $('.justlyrics').each(function(_, elt) {
    lineBreaks($(elt));
  });

  $('.lyrics').each(function(_, elt) {
    elt = $(elt);

    elt.html(
      elt.text()
      .replace(/^\n/, '')
      .replace(/\n/g, '<br>\n')
      .replace(/{(.*?)}/g, '<span class="chord-holder"><span class="chord">$1</span></span>')
    );
  });

  $('.chord').each(function(_, elt) {
    elt = $(elt);
    superscripts(elt);
  });
})
