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

$(() => {
  $('.chords').each((_, elt) => {
    elt = $(elt);
    elt.html(
      elt.text()
      .replace(/^\n/g, '')
      .replace(/\n/g, '<br>\n')
      .replace(/:(.*?):/g, '<sup>$1</sup>')
    );

  });

  $('.justlyrics').each((_, elt) => {
    lineBreaks($(elt));
  });

  $('.lyrics').each((_, elt) => {
    elt = $(elt);

    elt.html(
      elt.text()
      .replace(/^\n/g, '')
      .replace(/\n/g, '<br>\n')
      .replace(/{(.*?)}/g, '<span class="chord">$1</span>')
    );
  });

  $('.chord').each((_, elt) => {
    elt = $(elt);

    superscripts(elt);

    pos = elt.position();
    elt.css({position:'absolute'})
    pos.top -= elt.height();
    elt.offset(pos);
  });
})
