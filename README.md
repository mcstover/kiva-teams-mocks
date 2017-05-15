## Kiva Teams Landing Page
Simple Layout for Teams Landing Page featuring headline text content, a list of teams and a single leaderboard.

### Compiled CSS
Compiled versions of the files are located in the /dist folder. Running that page from a local server or the webpack dev server will result in a working layout which uses styes extracted from our styleguide.

### Re-compiling or Editing SCSS
If you'd like to alter those style significantly, you can "npm install" and then "npm run wpk-dev" to have a local server running with some basic webpack development processes in place.

The server address is http://localhost:8080

The dev server looks at files in the app directory and recompiles on changes to them. If you edit the css or html and save the styles.css (our full styleguide export) and the index.scss files will be recompiled and the page will refresh. Webpack plugins are in place that strip out all unused css from the main styles.css file so that we end up with only declarations in use in the html code.

### Re-Building your dist folder
Turn off the dev server and run "npm run wpk-build" to rebuild the /dist folder.