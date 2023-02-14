# clean old
rm -rf static/ \
    *manifest.json \
    favicon.ico \
    index.html \
    logo*.png \
    robots.txt


# new build
npm install
npm run build
cp -r build/* .
rm -rf build/
