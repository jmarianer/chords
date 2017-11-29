$(() => {
  $('.chords').each((_, l) => {
    text = $(l).text();
    text = text.replace(/^\n/g, '');
    text = text.replace(/\n/g, '<br>\n');
    $(l).html(text);
  });

  $('.lyrics').each((_, l) => {
    text = $(l).text();
    text = text.replace(/^\n/g, '');
    text = text.replace(/\n/g, '<br>\n');
    text = text.replace(/{(.*?)}/g, '<span class="chord">$1</span>');
    $(l).html(text);
  });

  $('.chord').each((_,c) => {
    text = $(c).text();
    text = text.replace(/:(.*?):/g, '<sup>$1</sup>');
    $(c).html(text);

    $(c).css({position:'absolute'})
    pos = $(c).offset();
    pos.top -= 15;
    $(c).offset(pos);
  });
})
