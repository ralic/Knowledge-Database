Masking-Tape-Canvas - Beta 0.1 (Fuzzy Beta)
===================

Design your Masking Tape in Canvas [DEMO](http://huei90.github.io/Knowledge-Database/some-example/Masking-Tape-Canvas/index.html)

Masking Tape Designer
=====================

Design your masking tape style, and drop it to me through `issue`


Code Lover
==========

Clone
```
git clone https://github.com/huei90/Masking-Tape-Canvas.git
```

Install development
```
npm install -g grunt-cli
npm install
```

Create a style
```javascript
/**
* This is the template of adding new style
* for example MTcanvas.style.template.js
* This js should include after MTcanvas.js
*/
MTcanvas.addStyle('template', function () {

/**
* canvas configuration
* canvas,ctx start your canvas element
* helpers, MTcanvas helper
* size, scale size
*/
var canvas = document.createElement("canvas"),
ctx = canvas.getContext("2d"),
helpers = MTcanvas.helpers,
size = MTcanvas.getSize();

/**
* Remember to include this command
* It allow us to scale the canvas size, through
* MTcanvas.setSize()
*/
ctx.scale(size, size);

// draw your canvas here
// example
// ctx.fillStyle = helpers.getRandomHexColor();
// ctx.fillRect(0, 0, 15, 15);
// .........
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 15, 15);

/**
* And last,
* return your canvas
*/
return ctx.canvas;

});

/**
* After adding your awesome style
* Remember to Start MTcanvas again
* MTcanvas.Start() reset anything and adding your style in MTcanvas
*/
MTcanvas.Start();
```
web structure
```html
<html>
<head>
    ...
</head>

<body>

...
<canvas class="Masking Tape Style"></canvas>
...

<!-- Remember to include MTcanvas.js and your js -->
<script src="MTcanvas.js"></script>
<script src="MTcanvas.your.style.js"></script>

</body>

</html>
```

Helpers  `MTcanvas.helpers`

1. getRandomHexColor()
