for i in *.html ; do
  phantomjs render.js $i ${i/\.html/.pdf}
done
