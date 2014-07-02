/*! Automation - MaskingTapeCanvas v0.1.0 24-02-2014 */
/**
 *
 * MTcanvas.constructor
 *
 */
var MTcanvas = MTcanvas || {};
MTcanvas = (function (window) {
    "use strict";

    // Private Variable
    var _canvasSize,// Size Unit, default = 1
        _canvasWidth, // Width Unit = 15
        _canvasHeight, // Height Unit = 15
        _maskingTapeWidth, // Masking Tape Width * _canvasWidth
        _styleList; // All the style fill here

    // All style
    var style = {};

    var helpers = {
        getRandomHexColor: function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    };

    var getCanvasWidth = function () {
        return _canvasWidth;
    };

    var getCanvasHeight = function () {
        return _canvasHeight;
    };

    var getCanvasSize = function () {
        return _canvasSize;
    };

    var Start = function () {
        /**
         * Start All the Canvas Settings
         */
        setDefault();
        Restart();
    };


    var Restart = function () {
        /**
         * Restart All the Canvas Settings
         * If you setup the Canvas, use Restart
         */
        var elementList,
            ctx,
            canvasSize = getCanvasSize(),
            canvasHeight = getCanvasHeight() * canvasSize,
            canvasWidth = getCanvasWidth() * canvasSize,
            i,
            j,
            k;

        // Draw Masking Tape
        for (i = 0; i < _styleList.length; i++) {
            elementList = document.querySelectorAll('canvas.maskingTape.' + _styleList[i]);
            for (j = 0; j < elementList.length; j++) {

                elementList[j].setAttribute('height', canvasHeight);
                elementList[j].setAttribute('width', canvasWidth * _maskingTapeWidth);
                ctx = elementList[j].getContext('2d');
                for (k = 0; k < _maskingTapeWidth; k++) {
                    ctx.drawImage(style[_styleList[i]](), canvasWidth * k, 0);

                }
            }
        }

        // Draw icon
        for (i = 0; i < _styleList.length; i++) {
            elementList = document.querySelectorAll('canvas.icon.' + _styleList[i]);
            for (j = 0; j < elementList.length; j++) {
                elementList[j].setAttribute('height', canvasHeight);
                elementList[j].setAttribute('width', canvasWidth);
                ctx = elementList[j].getContext('2d');
                ctx.drawImage(style[_styleList[i]](), 0, 0);
            }
        }
    };

    var setSize = function (size) {
        // Set Size change both Width and Height
        _canvasSize = size;
    };

    var setUnitWidth = function (width) {
        // Set Width unit only
        _canvasWidth = width * _canvasSize;
    };

    var setUnitHeight = function (height) {
        // Set Height unit only
        _canvasHeight = height * _canvasSize;
    };

    var setMaskingTapeWidth = function (width) {
        // Set Width for Masking Tape, Default is 20
        _maskingTapeWidth = width;
    };

    var setDefault = function () {
        // Set all the settings to default value
        _canvasSize = 3; // error over 10, debuging
        _canvasWidth = 15;
        _canvasHeight = 15;
        _maskingTapeWidth = 20;
        _styleList = [];

        for (var key in style) {
            if (key) {
                _styleList.push(key);
            }
        }
    };

    var addStyle = function (name, func) {
        style[name] = func;
    };

    // Public Method
    var mtCanvas = {
        Start: Start,
        Restart: Restart,
        setSize: setSize,
        getSize: getCanvasSize,
        setUnitWidth: setUnitWidth,
        setUnitHeight: setUnitHeight,
        setMaskingTapeWidth: setMaskingTapeWidth,
        setDefault: setDefault,
        addStyle: addStyle,
        helpers: helpers
    };

    setDefault();

    return mtCanvas;

})(window);