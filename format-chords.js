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

function tabline(s) {
  s = s.slice(2, -2);
  var contents = '';
  for (var x = 0; x < s.length; x++) {
    var c = s.charAt(x);
    if (c != '-') {
      contents += '<span style="left: ' + x + 'em" class="tabcharholder"><span class="tabchar">' + c + '</span></span>';
    }
  }
  return '<span style="width: ' + s.length + 'em" class="tabline">' + contents + '</span>&nbsp;';
}

function chordline(s) {
  s = s.slice(2);
  var contents = '';
  chords = s.split(/(\*+)/).slice(1);
  var left = 0;
  while (chords.length > 1) {
    left += chords.shift().length;
    chord = chords.shift();
    contents += '<span style="left: ' + left + 'em" class="tabchordholder"><span class="tabchord">' + chord + '</span></span>';
    left += chord.length;
  }
  return '<span style="width: ' + s.length + 'em" class="tabchordline">' + contents + '</span>&nbsp;<br>';
}

$(function() {
  $('.markup').each(function(_, elt) {
    elt = $(elt);
    elt.html(
      elt.text()
      .replace(/alb\[/g, '<div class="album">')
      .replace(/title\[/g, '<div class="title">')
      .replace(/st\[/g, '<div class="sectiontitle">')
      .replace(/tabs\[/g, '<div class="tabs">')
      .replace(/jlyr\[/g, '<div class="justlyrics">')
      .replace(/lyr\[/g, '<div class="lyrics">')
      .replace(/ch\[/g, '<div class="chords">')
      .replace(/pgbr\[/g, '<div class="pagebreak"></div>')
      .replace(/\]/g, '</div>')
    );
  });
  
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
      .replace(/\*.*\n/g, chordline)
      .replace(/\|\|.*?\|\|/g, tabline)
    );
  });

  $('.chord, .tabchord').each(function(_, elt) {
    elt = $(elt);
    superscripts(elt);
  });
})
