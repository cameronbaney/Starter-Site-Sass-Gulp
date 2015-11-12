# Responsive Starter Site with Sass, Gulp and Sourcemaps

Starter skeleton with responsive breakpoints, using a modified Twitter Bootstrap grid and Gulp for optimization

## Dependences
+ Node.js

## Install using NPM

```bash
$ npm install
```

## Process javascript, sass and any gulp tasks

```bash
$ gulp
```

## Watch javascript, sass and any gulp tasks

```bash
$ gulp watch
```

## Add SVG to spritemap

Drop any svg into the `/src/svg` folder. The name of the svg will become the id of the svg. Make any changes such as `fill="currentColor"` to the svg inside of the `/src/svg` folder and Gulp will process.

```bash
$ gulp watch
```

## JavaScript
### File structure
* `/src/lib` -> `/js/lib` -- Any standalone JavaScript file. Usually for polyfills that only need to be loaded in IE.
* `/src/plugins` -> `/js/plugins.js` -- All files get concat, and minified into one plugins.js
* `/src/scripts.js` -> `/js/scripts.js` -- Minified

## Changelog

### Version 4.0

+ Completely restructed build process
    + All site files live inside `/public`
    + One `src` directory that holds all `sass` and `javascript`
    + `src` will compile out to `/public/css` or relative directory
+ Added empty `_assets` directory with subdirectories for all project files
+ Reworked and simplified gulpfile.js
    + gulp-autoprefixer
    + gulp-concat
    + gulp-sass
    + gulp-sourcemaps
    + gulp-svg-sprite
+ Sourcemaps are being used

### Version 3.1

+ Added base styles
    + centerVert
    + centerVertLarge
    + centerVertAll
    + .resp-break
+ Added @trans(prop) mixin
+ Reworked Gulp process

### Version 3.0

+ Removed Bourbon mixin library
+ Added Gulp
+ Added Gulp Plugins
    + Sass
    + UnCSS
    + Autoprefixer
    + Imagemin
    + Clean
    + Notify
    + Rename
    + Concat
    + Uglify
    + Cache
    + Minify CSS
    + HTML Min

### Version 2.1

+ Modify responsive breakpoints to offer mobile first and standard breakpoints
+ Adjust base typography
+ Add transition variables and use of bourbon for base transitions
+ Add textToImg placeholder for image heading backgrounds

### Version 2.0

+ Updated to the Bootstrap 3 grid. Read the [documentation](http://getbootstrap.com/css/#grid) for grid classes.

## Breakpoint variables

There are two sets or breakpoints to use based on need

### Mobile First

+ breakFirst(medium)
+ breakFirst(large)
+ breakFirst(wide)
+ breakFirst(xxx) - Uses min-width to the custom pixel size

### Set breakpoints, with desktop first

+ break(small)
+ break(medium)
+ break(mediumLand)
+ break(mediumPort)
+ break(wide)
+ break(xxx) - Uses min-width to the custom pixel size
