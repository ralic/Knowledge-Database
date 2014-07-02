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



//////////// The End
////////////
////////////
////////////



/**
 * An example of adding a new style named rainbow
 */
MTcanvas.addStyle('rainbow', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        helpers = MTcanvas.helpers,
        size = MTcanvas.getSize();

    ctx.scale(size, size);

    ctx.fillStyle = helpers.getRandomHexColor();
    ctx.fillRect(0, 0, 15, 15);

    return ctx.canvas;
});

MTcanvas.Start();