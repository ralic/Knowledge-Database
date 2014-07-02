/**
 *
 * MTcanvas.style.js
 *
 * Default style for DEMO page
 *
 */

MTcanvas.addStyle('frameshop', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        size = MTcanvas.getSize();

    ctx.scale(size, size);
    // first rect
    ctx.beginPath();
    ctx.strokeStyle = "#FF4136";
    ctx.lineWidth = 1;
    var scaleSize = 0.8 + (Math.random() * 0.3);
    ctx.scale(scaleSize, scaleSize);
    ctx.rotate((Math.random() * 5) * Math.PI / 180);
    ctx.rect(10 / 3, 10 / 3, 25 / 3, 25 / 3);
    ctx.stroke();

    // second rect
    ctx.beginPath();
    ctx.strokeStyle = "#FF851B";
    ctx.rect(14 / 3, 14 / 3, 16 / 3, 16 / 3);
    ctx.stroke();

    return ctx.canvas;
});

MTcanvas.addStyle('framefillshop', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        size = MTcanvas.getSize();

    ctx.scale(size, size);
    // first rect
    ctx.beginPath();
    ctx.fillStyle = "#FF4136";
    ctx.lineWidth = 1;
    var scaleSize = 0.8 + (Math.random() * 0.3);
    ctx.scale(scaleSize, scaleSize);
    ctx.rotate((Math.random() * 5) * Math.PI / 180);
    ctx.fillRect(10 / 3, 10 / 3, 25 / 3, 25 / 3);
    ctx.stroke();

    // second rect
    ctx.beginPath();
    ctx.fillStyle = "#FF851B";
    ctx.fillRect(14 / 3, 14 / 3, 16 / 3, 16 / 3);
    ctx.stroke();

    return ctx.canvas;
});

MTcanvas.addStyle('circleshop', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        size = MTcanvas.getSize();

    ctx.scale(size, size);
    // first arc
    ctx.beginPath();
    ctx.strokeStyle = "#3D9970";
    ctx.lineWidth = 4 / 3;
    var scaleSize = 0.8 + (Math.random() * 0.3);
    ctx.scale(scaleSize, scaleSize);
    ctx.rotate((Math.random() * 5) * Math.PI / 180);
    ctx.arc(25 / 3, 25 / 3, 13 / 3, 0, 2 * Math.PI);
    ctx.stroke();

    // second arc
    ctx.beginPath();
    ctx.lineWidth = 2 / 3;
    ctx.strokeStyle = "#01FF70";
    ctx.arc(25 / 3, 25 / 3, 3, 0, 2 * Math.PI);
    ctx.stroke();

    return ctx.canvas;
});

MTcanvas.addStyle('circlefillshop', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        size = MTcanvas.getSize();

    ctx.scale(size, size);
    // first arc
    ctx.beginPath();
    ctx.strokeStyle = "#3D9970";
    ctx.lineWidth = 4 / 3;
    var scaleSize = 0.8 + (Math.random() * 0.3);
    ctx.scale(scaleSize, scaleSize);
    ctx.rotate((Math.random() * 5) * Math.PI / 180);
    ctx.arc(25 / 3, 25 / 3, 13 / 3, 0, 2 * Math.PI);
    ctx.fillStyle = "#3D9970";
    ctx.fill();
    ctx.stroke();

    // second arc
    ctx.beginPath();
    ctx.lineWidth = 2 / 3;
    ctx.strokeStyle = "#01FF70";
    ctx.arc(25 / 3, 25 / 3, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "#01FF70";
    ctx.fill();
    ctx.stroke();

    return ctx.canvas;
});

MTcanvas.addStyle('slashshop', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        size = MTcanvas.getSize();

    ctx.scale(size, size);
    // first line
    for (var i = 0; i <= 5; i++) {


        ctx.beginPath();
        ctx.strokeStyle = "#39CCCC";
        ctx.lineWidth = 1 / 3;
        ctx.moveTo(40 / 3, 40 / 3);
        ctx.lineTo(9, 0);
        var scaleSize = 0.8 + (Math.random() * 0.3);
        ctx.scale(scaleSize, scaleSize);
        ctx.stroke();

        // second line
        ctx.strokeStyle = "#7FDBFF";
        ctx.lineWidth = 1 / 3;
        ctx.moveTo(20 / 3, 20 / 3);
        ctx.lineTo(9, 0);
        scaleSize = 0.8 + (Math.random() * 0.3);
        ctx.scale(scaleSize, scaleSize);
        ctx.stroke();
    }
    return ctx.canvas;
});

MTcanvas.addStyle('slashfillshop', function () {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        size = MTcanvas.getSize();

    ctx.scale(size, size);
    // first line
    for (var i = 0; i <= 5; i++) {


        ctx.beginPath();
        ctx.strokeStyle = "#39CCCC";
        ctx.lineWidth = 5 / 3;
        ctx.moveTo(40 / 3, 40 / 3);
        ctx.lineTo(9, 0);
        var scaleSize = 0.8 + (Math.random() * 0.3);
        ctx.scale(scaleSize, scaleSize);
        ctx.stroke();

        // second line
        ctx.strokeStyle = "#7FDBFF";
        ctx.lineWidth = 5 / 3;
        ctx.moveTo(20 / 3, 20 / 3);
        ctx.lineTo(9, 0);
        scaleSize = 0.8 + (Math.random() * 0.3);
        ctx.scale(scaleSize, scaleSize);
        ctx.stroke();
    }
    return ctx.canvas;
});


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