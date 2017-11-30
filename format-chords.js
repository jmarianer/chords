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
      .replace(/^\n/g, '')
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
      .replace(/^\n/g, '')
      .replace(/\n/g, '<br>\n')
      .replace(/{(.*?)}/g, '<span class="chord">$1</span>')
    );
  });

  $('.chord').each(function(_, elt) {
    elt = $(elt);

    superscripts(elt);

    pos = elt.position();
    elt.css({position:'absolute'})
    pos.top -= elt.height();
    elt.offset(pos);
  });
})
