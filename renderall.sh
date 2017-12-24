#!/bin/bash
for i in *.html ; do
  # Google Chrome on MacOS
  /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --print-to-pdf $i
  mv output.pdf ${i/\.html/.pdf}
done
