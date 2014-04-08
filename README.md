# Responsive Starter Site with Sass

Starter skeleton with responsive breakpoints, using a modified Twitter Bootstrap grid and Gulp for optimization

## Changelog

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