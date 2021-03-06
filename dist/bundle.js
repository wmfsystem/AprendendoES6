(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _app = require("./src/app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./src/app":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _WElement = require('./elements/WElement');

var _WElement2 = _interopRequireDefault(_WElement);

var _World = require('./world/World');

var _World2 = _interopRequireDefault(_World);

var _WImage = require('./elements/WImage');

var _WImage2 = _interopRequireDefault(_WImage);

var _WCanvas = require('./elements/WCanvas');

var _WCanvas2 = _interopRequireDefault(_WCanvas);

var _WType = require('./enums/WType');

var _WType2 = _interopRequireDefault(_WType);

var _WPosition = require('./enums/WPosition');

var _WPosition2 = _interopRequireDefault(_WPosition);

var _WBallon = require('./reusable_objects/WBallon');

var _WBallon2 = _interopRequireDefault(_WBallon);

var _WHeart = require('./reusable_objects/WHeart');

var _WHeart2 = _interopRequireDefault(_WHeart);

var _WClockOne = require('./reusable_objects/WClockOne');

var _WClockOne2 = _interopRequireDefault(_WClockOne);

var _WBall = require('./reusable_objects/WBall');

var _WBall2 = _interopRequireDefault(_WBall);

var _WBallShadow = require('./reusable_objects/WBallShadow');

var _WBallShadow2 = _interopRequireDefault(_WBallShadow);

var _WMoveRandomOne = require('./events/WMoveRandomOne');

var _WMoveRandomOne2 = _interopRequireDefault(_WMoveRandomOne);

var _WFallMove = require('./events/WFallMove');

var _WFallMove2 = _interopRequireDefault(_WFallMove);

var _WMouseFollow = require('./events/WMouseFollow');

var _WMouseFollow2 = _interopRequireDefault(_WMouseFollow);

var _WMimeType = require('./enums/WMimeType');

var _WMimeType2 = _interopRequireDefault(_WMimeType);

var _WCanvasQuality = require('./enums/WCanvasQuality');

var _WCanvasQuality2 = _interopRequireDefault(_WCanvasQuality);

var _Example = require('./examples/Example');

var _Example2 = _interopRequireDefault(_Example);

var _WException = require('./enums/WException');

var _WException2 = _interopRequireDefault(_WException);

var _WObjectType = require('./enums/WObjectType');

var _WObjectType2 = _interopRequireDefault(_WObjectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Start = (_dec = Inject('World'), _dec(_class = function Start() {
    _classCallCheck(this, Start);

    var world = this.World.config({
        id: 'World',
        border: '1px solid red'
    }).addToBody().newLayer({
        width: '500px',
        height: '400px',
        border: '2px solid black',
        position: _WPosition2.default.RELATIVE
    });

    world.getLayer(1).draw(_WObjectType2.default.TRIANGLE, {
        x: 10, y: 10, dimension: 20, type: _WType2.default.FILL
    }).element.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        world.getLayer(1).clear().draw(_WObjectType2.default.TRIANGLE, {
            x: x - 50, y: y - 50, dimension: 10, type: _WType2.default.FILL
        });
    });
}) || _class);
exports.default = Start;


window.onload = new Start();

},{"./elements/WCanvas":3,"./elements/WElement":4,"./elements/WImage":5,"./enums/WCanvasQuality":6,"./enums/WException":7,"./enums/WMimeType":8,"./enums/WObjectType":9,"./enums/WPosition":10,"./enums/WType":11,"./events/WFallMove":12,"./events/WMouseFollow":13,"./events/WMoveRandomOne":14,"./examples/Example":15,"./reusable_objects/WBall":17,"./reusable_objects/WBallShadow":18,"./reusable_objects/WBallon":19,"./reusable_objects/WClockOne":20,"./reusable_objects/WHeart":21,"./world/World":22}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WElement2 = require('./WElement');

var _WElement3 = _interopRequireDefault(_WElement2);

var _WType = require('../enums/WType');

var _WType2 = _interopRequireDefault(_WType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Emulate the Canvas element with features
 * @class
 */
var WCanvas = function (_WElement) {
    _inherits(WCanvas, _WElement);

    function WCanvas() {
        _classCallCheck(this, WCanvas);

        var _this = _possibleConstructorReturn(this, (WCanvas.__proto__ || Object.getPrototypeOf(WCanvas)).call(this, 'canvas'));

        _this._context = _this.context2D;
        _this.element.id = "canvas";
        return _this;
    }

    _createClass(WCanvas, [{
        key: 'requestAnimationFrame',
        value: function requestAnimationFrame(callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }
    }, {
        key: 'animateFadeTo',

        //@TODO
        value: function animateFadeTo(beginX, beginY, endX, endY, call) {
            this.requestAnimationFrame(this.animateFadeTo(x, y));
            return this;
        }
        /**
         * Sets or returns how a source (new) image are drawn onto a destination (existing) image.
         * @param {WGlobalCompositeOperation} globalCompositeOperation	globalCompositeOperation to set
         */

    }, {
        key: 'setGlobalCompositeOperation',
        value: function setGlobalCompositeOperation(globalCompositeOperation) {
            this.globalCompositeOperation = globalCompositeOperation;
            return this;
        }
        /**
         * Sets or returns the current alpha or transparency value of the drawing.
         * @param {number} globalAlpha	globalAlpha to set
         */

    }, {
        key: 'setGlobalAlpha',
        value: function setGlobalAlpha(globalAlpha) {
            this.globalAlpha = globalAlpha;
            return this;
        }
        /**
         * Method returns an object that contains the width of the specified text, in pixels.
         * @param {string} text	The text to be measured
         * @returns {string}
         */

    }, {
        key: 'fillText',
        value: function fillText(text) {
            return this.context.measureText(text);
        }
        /**
         * Method draws filled text on the canvas. The default color of the text is black.
         * @param {string} text	Specifies the text that will be written on the canvas
         * @param {number} x	The x coordinate where to start painting the text (relative to the canvas)
         * @param {number} y	The y coordinate where to start painting the text (relative to the canvas)
         * @param {number} maxWidth	Optional. The maximum allowed width of the text, in pixels
         */

    }, {
        key: 'fillText',
        value: function fillText(text, x, y, maxWidth) {
            this.context.fillText(text, x, y, maxWidth);
            return this;
        }
        /**
         * Method draws text (with no fill) on the canvas. The default color of the text is black.
         * @param {string} text	Specifies the text that will be written on the canvas
         * @param {number} x	The x coordinate where to start painting the text (relative to the canvas)
         * @param {number} y	The y coordinate where to start painting the text (relative to the canvas)
         * @param {number} maxWidth	Optional. The maximum allowed width of the text, in pixels
         */

    }, {
        key: 'strokeText',
        value: function strokeText(text, x, y, maxWidth) {
            this.context.strokeText(text, x, y, maxWidth);
            return this;
        }
        /**
         * The textBaseline property sets or returns the current text baseline used when drawing text.
         * @param {WTextBaseline} textBaseline	textBaseline to set
         */

    }, {
        key: 'setTextBaseline',
        value: function setTextBaseline(textBaseline) {
            this.textBaseline = textBaseline;
            return this;
        }
        /**
         * The textAlign property sets or returns the current alignment for text content, according to the anchor point.
         * @param {WTextAlign} textAlign	TextAlign to set
         */

    }, {
        key: 'setTextAlign',
        value: function setTextAlign(textAlign) {
            this.textAlign = textAlign;
            return this;
        }
        /**
         * The font property sets or returns the current font properties for text content on the canvas.
         * @param {string} font	Font to select
         */

    }, {
        key: 'setFont',
        value: function setFont(font) {
            this.font = font;
            return this;
        }
        /**
         * Method returns true if the specified point is in the current path, otherwise false.
         * @param {x} x	The x-coordinate to test
         * @param {y} y	The y-coordinate to test
         */

    }, {
        key: 'isPointInPath',
        value: function isPointInPath(x, y) {
            return this.context.isPointInPath(x, y);
        }
        /**
         * The miterLimit property sets or returns the style of the end caps for a line.
         * @param {number} miterLimit	A positive number that specifies the maximum miter length. If the current miter length exceeds the miterLimit, the corner will display as lineJoin "bevel"
         */

    }, {
        key: 'setMiterLimit',
        value: function setMiterLimit(miterLimit) {
            this.miterLimit = miterLimit;
            return this;
        }
        /**
         * The lineWidth property sets or returns the style of the end caps for a line.
         * @param {number} lineWidth	Specifies the lineWidth
         */

    }, {
        key: 'setLineWidth',
        value: function setLineWidth(lineWidth) {
            this.lineWidth = lineWidth;
            return this;
        }
        /**
         * The lineJoin property sets or returns the style of the end caps for a line.
         * @param {WLineJoin} lineJoin	Specifies the lineJoin
         */

    }, {
        key: 'setLineJoin',
        value: function setLineJoin(lineJoin) {
            this.lineJoin = lineJoin;
            return this;
        }
        /**
         * The lineCap property sets or returns the style of the end caps for a line.
         * @param {WLineCap} lineCap	Specifies the lineCap
         */

    }, {
        key: 'setLineCap',
        value: function setLineCap(lineCap) {
            this.lineCap = lineCap;
            return this;
        }
        /**
         * Method repeats the specified element in the specified direction.
         * @param {Object} image	Specifies the image, canvas, or video element of the pattern to use	 
         * @param {WRepeat} repeat	Default. The pattern repeats
         */

    }, {
        key: 'createPattern',
        value: function createPattern(image, repeat) {
            this.context.createPattern(image, repeat);
            return this;
        }
        /**
         * Method specifies the colors and position in a gradient object.
         * @param {number} stop	A value between 0.0 and 1.0 that represents the position between start and end in a gradient
         * @param {string} color A CSS color value to display at the stop position
         */

    }, {
        key: 'addColorStop',
        value: function addColorStop(stop, color) {
            this.context.addColorStop(stop, color);
            return this;
        }
        /**
         * Method creates a radial gradient object.
         * @param {number} x0 The x-coordinate of the start point of the gradient
         * @param {number} y0 The y-coordinate of the start point of the gradient
         * @param {number} r0 The radius of the gradient
         * @param {number} x1 The x-coordinate of the end point of the gradient
         * @param {number} y1 The y-coordinate of the end point of the gradient
         * @param {number} r1 The radius of the gradient
         */

    }, {
        key: 'createRadialGradient',
        value: function createRadialGradient(x0, y0, r0, x1, y1, r1) {
            this.context.createRadialGradient(x0, y0, r0, x1, y1, r1);
            return this;
        }
        /**
         * Method creates a linear gradient object.
         * @param {number} x0 The x-coordinate of the start point of the gradient
         * @param {number} y0 The y-coordinate of the start point of the gradient
         * @param {number} x1 The x-coordinate of the end point of the gradient
         * @param {number} y1 The y-coordinate of the end point of the gradient
         */

    }, {
        key: 'createLinearGradient',
        value: function createLinearGradient(x0, y0, x1, y1) {
            this.context.createLinearGradient(x0, y0, x1, y1);
            return this;
        }
        /**
         * Set strokeStyle of context
         * @param {Color} strokeStyle Offset of shadow blur
         */

    }, {
        key: 'setStrokeStyle',
        value: function setStrokeStyle(strokeStyle) {
            this.strokeStyle = strokeStyle;
            return this;
        }
        /**
         * Set shadowColor of context
         * @param {Color} shadowColor Offset of shadow blur
         */

    }, {
        key: 'setShadowColor',
        value: function setShadowColor(shadowColor) {
            this.shadowColor = shadowColor;
            return this;
        }
        /**
         * Set Shadow of context
         * @param {number} offset Offset of shadow blur
         */

    }, {
        key: 'setShadowBlur',
        value: function setShadowBlur(offset) {
            this.shadowBlur = offset;
            return this;
        }
        /**
         * Set X-Shadow of context
         * @param {number} offset Offset of shadow blur
         */

    }, {
        key: 'setShadowBlurX',
        value: function setShadowBlurX(offset) {
            this.shadowOffsetX = offset;
            return this;
        }
        /**
         * Set Y-Shadow of context
         * @param {number} offset Offset of shadow blur
         */

    }, {
        key: 'setShadowBlurY',
        value: function setShadowBlurY(offset) {
            this.shadowOffsetY = offset;
            return this;
        }
        /**
         * Saves the state of the current context
         */

    }, {
        key: 'save',
        value: function save() {
            this.context.save();
            return this;
        }
        /**
         * Previously saved path state and attributes
         */

    }, {
        key: 'restore',
        value: function restore() {
            this.context.restore();
            return this;
        }
        /**
         * Remaps the (x,y) position on the canvas
         * @param {number} x Eixo X
         * @param {number} y Eixo Y
         * @return {this}
         */

    }, {
        key: 'translate',
        value: function translate(x, y) {
            this.context.translate(x, y);
            return this;
        }
        /**
         * Scale the (x,y) position on the canvas
         * @param {number} x  Eixo X
         * @param {number} y  Eixo Y
         * @return {this}
         */

    }, {
        key: 'scale',
        value: function scale(x, y) {
            this.context.scale(x, y);
            return this;
        }
        /**
         * Rotate the (x,y) position on the canvas
         * @param {number} angle Ângulo
         * @return {this}
         */

    }, {
        key: 'rotate',
        value: function rotate(angle) {
            this.context.rotate(angle);
            return this;
        }
        /**
         * Replaces the current transformation matrix for the drawing
         * @param {number} a Horizontal scaling
         * @param {number} b Horizontal skewing
         * @param {number} c Vertical skewing
         * @param {number} d Vertical scaling
         * @param {number} e Horizontal moving
         * @param {number} f Vertical moving
         */

    }, {
        key: 'transform',
        value: function transform(a, b, c, d, e, f) {
            this.context.transform(a, b, c, d, e, f);
            return this;
        }
        /**
         * Resets the current transform to the identity matrix. Then runs 
         * @param {number} a Horizontal scaling
         * @param {number} b Horizontal skewing
         * @param {number} c Vertical skewing
         * @param {number} d Vertical scaling
         * @param {number} e Horizontal moving
         * @param {number} f Vertical moving
         */

    }, {
        key: 'setTransform',
        value: function setTransform(a, b, c, d, e, f) {
            this.context.setTransform(a, b, c, d, e, f);
            return this;
        }
        /**
         * Resets the current transform to 0
         */

    }, {
        key: 'resetTransform',
        value: function resetTransform() {
            this.context.resetTransform();
            return this;
        }
        /**
         * Clips a region of any shape and size from the original canvas
         */

    }, {
        key: 'clip',
        value: function clip() {
            this.context.clip();
            return this;
        }
        /**
         * 	Sets or returns the color, gradient, or pattern used to fill the drawing
         * @param {style} color CSS   Color value that indicates the fill color of the drawing. Default value is #000000 
         */

    }, {
        key: 'fillStyle',
        value: function fillStyle(color) {
            this.context.fillStyle = color;
            return this;
        }
        /**
         * The method creates a rectangle.
         * @param {number} x	     The x-coordinate of the upper-left corner of the rectangle
         * @param {number} y	     The y-coordinate of the upper-left corner of the rectangle
         * @param {number} width	 The width of the rectangle, in pixels
         * @param {number} height The height of the rectangle, in pixels
         */

    }, {
        key: 'drawRect',
        value: function drawRect(x, y, width, height) {
            this.context.rect(x, y, width, height);
        }
        /**
         * The method creates a Line.
         * @param {number} beginX  The begin of x-coordninate
         * @param {number} beginY  The begin of y-coordinate
         * @param {number} endX    The end x of Line
         * @param {number} endY    The end y of the Line
         * @param {number} lineWidth    The line width of the Line
         * @param {WType}  type    The type of the Line
         */

    }, {
        key: 'drawLine',
        value: function drawLine(beginX, beginY, endX, endY, lineWidth, type) {
            this.moveTo(beginX, beginY);
            this.lineTo(endX, endY);
            switch (type) {
                case _WType2.default.FILL:
                    this.fill();
                    break;
                case _WType2.default.CLEAR:
                    this.clear();
                    break;
                default:
                    this.stroke();
            }
            return this;
        }
        /**
         * Draw a Square
         * @param {number} x begin of square
         * @param {number} y end of square
         * @param {number} width width of square
         * @param {number} height height of square
         * @param {WType} type type of rect
         */

    }, {
        key: 'drawSquare',
        value: function drawSquare(x, y, width, height, type) {
            switch (type) {
                case _WType2.default.STROKE:
                    this.strokeRect(x, y, width, height, type);
                    break;
                case _WType2.default.CLEAR:
                    this.clearRect(x, y, width, height, type);
                    break;
                default:
                    this.fillRect(x, y, width, height, type);
            }
            return this;
        }
        /**
         * Draw a tringle
         * @param {number} x Indicates the initial x-position
         * @param {number} y Indicates the initial y-position
         * @param {number} x1 Indicates the x left side
         * @param {number} y1 Indicates the y left side
         * @param {number} x2 Indicates the x right side
         * @param {number} y2 Indicates the y right side
         * @param {WType} type Type of rect
         */

    }, {
        key: 'drawTriangle',
        value: function drawTriangle(x, y, x1, y1, x2, y2, type) {
            this.beginPath();
            this.moveTo(x, y);
            this.lineTo(x1, y1);
            this.lineTo(x2, y2);

            switch (type) {
                case _WType2.default.STROKE:
                    this.stroke();
                    break;
                case _WType2.default.CLEAR:
                    this.clear();
                    break;
                default:
                    this.fill();
            }
            return this;
        }
        /**
         * Draw a tringle by dimension
         * @param {number} x Indicates the initial x-position
         * @param {number} y Indicates the initial y-position
         * @param {number} dimension Indicates the dimension
         * @param {WType} type Type of rect
         */

    }, {
        key: 'drawTriangleByDimension',
        value: function drawTriangleByDimension(x, y, dimension, type) {
            this.beginPath();
            this.moveTo(x, y);
            this.lineTo(x - dimension, y + dimension);
            this.lineTo(x + dimension, y + dimension);

            switch (type) {
                case _WType2.default.STROKE:
                    this.stroke();
                    break;
                case _WType2.default.CLEAR:
                    this.clear();
                    break;
                default:
                    this.fill();
            }
            return this;
        }

        /**
         * Draw an arc/curve (used to create circles, or parts of circles)
         * @param {number} x	            The x-coordinate of the center of the circle
         * @param {number} y        	    The y-coordinate of the center of the circle
         * @param {number} radius	            The radius of the circle
         * @param {number} startAngle  	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
         * @param {number} endAngle	    The ending angle, in radians
         * @param {number} anticlockwise	Optional. Specifies whether the drawing should be counterclockwise or clockwise.
         * @param {WType} type Type of rect
         */

    }, {
        key: 'drawArc',
        value: function drawArc(x, y, radius, startAngle, endAngle, anticlockwise, type) {
            this.beginPath();
            this.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            switch (type) {
                case _WType2.default.STROKE:
                    this.stroke();
                    break;
                case _WType2.default.CLEAR:
                    this.clear();
                    break;
                default:
                    this.fill();
            }
            return this;
        }
        /**
         * Draw a image on Canvas
         * @param {Image}  img	Specifies the image, canvas, or video element to use	 
         * @param {Number} sx	Optional. The x coordinate where to start clipping	Play it »
         * @param {Number} sy	Optional. The y coordinate where to start clipping	Play it »
         * @param {Number} swidth	Optional. The width of the clipped image	Play it »
         * @param {Number} sheight	Optional. The height of the clipped image	Play it »
         * @param {Number} x	The x coordinate where to place the image on the canvas	Play it »
         * @param {Number} y	The y coordinate where to place the image on the canvas	Play it »
         * @param {Number} width	Optional. The width of the image to use (stretch or reduce the image)	Play it »
         * @param {Number} height	Optional. The height of the image to use (stretch or reduce the image)
         */

    }, {
        key: 'drawImage',
        value: function drawImage(img, sx, sy, sWidth, sHeight, dx, dy, width, height) {
            this.context.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, width, height);
            return this;
        }
        /**
         * Create zoom of canvas in other canvas
         * @param {number} zoomX zomm x-coordinate
         * @param {number} zoomY zomm y-coordinate
         * @param {WCanvas} destiny Canvas destination
         * @param {number} destinyX Canvas destination x-coordinate
         * @param {number} destinyY Canvas destination y-coordinate
         * @param {number} originWidth Canvas Origin width
         * @param {number} originHeight Canvas Origin height
         * @param {number} destinyWidth Canvas destination width
         * @param {number} destinyHeight Canvas destination height
         * @param {boolean} smoothing anti-aliasing of zoom image
         */

    }, {
        key: 'zoomImage',
        value: function zoomImage(zoomX, zoomY, destiny, destinyX, destinyY, originWidth, originHeight, destinyWidth, destinyHeight, smoothing) {
            destiny.clearRect(0, 0, destiny.element.width, destiny.element.height);
            if (smoothing) destiny.setImageSmoothingEnabled(true);else destiny.setImageSmoothingEnabled(false);
            destiny.drawImage(this.element, Math.abs(destinyX - 10), Math.abs(destinyY - 5), zoomX, zoomY, originWidth, originHeight, destinyWidth, destinyHeight);
        }
        /**
         * Create a image
         * @param {string} url Location of image
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         * @param {function} callback Callback function to invokes of load the image 
         */

    }, {
        key: 'createImage',
        value: function createImage(url, x, y, callback) {
            var $this = this;
            var img = new Image();
            img.src = url;
            img.onload = function () {
                $this.context.drawImage(img, x, y);
                img.style.display = 'none';
                if (callback) {
                    callback(img);
                }
                return this;
            };
            // return tColor(image,x,y)this
        }
        /**
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         * @param {number} width Size on x-coordinate
         * @param {number} height Size on y-coordinate
         * @return {ImageData}
         */

    }, {
        key: 'getImageData',
        value: function getImageData(x, y, width, height) {
            return this.context.getImageData(x, y, width, height);
        }
        /**
         * Put the image data on location
         * @param {ImageData} imageData ImageData to put
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         * @return {ImageData} 
         */

    }, {
        key: 'putImageData',
        value: function putImageData(imageData, x, y) {
            return this.context.putImageData(imageData, x, y);
        }
        /**
         * Get string rgba from imageData
         * @param {ImageData} imageData ImageData to get rgba
         * @return {string} RGBA
         */
        //@TODO Fazer uma classe Rgba com métodos get de r g b a, e um que retorna tudo

    }, {
        key: 'getImageDataRGBA',
        value: function getImageDataRGBA(imageData) {
            return 'rgba(' + imageData.data[0] + ',' + imageData.data[1] + ',' + imageData.data[2] + ',' + imageData.data[3] / 255 + ')';
        }
        /**
         * Get string rgba from params
         * @param {number} r Red
         * @param {number} g Green
         * @param {number} b Blue
         * @param {number} a Opacity
         * @return {string} RGBA
         */

    }, {
        key: 'stringRGBA',
        value: function stringRGBA(r, g, b, a) {
            return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
        }
        /**
         * Method returns a data URI containing a representation of the image in the format specified by the type parameter.
         * Defaults to PNG
         * The returned image is in a resolution of 96 dpi.
         * @param {WMimeType} type Type of DataUrl
         * @param {WCanvasQuality} quality Quality of DataUrl 
         */

    }, {
        key: 'toDataURL',
        value: function toDataURL(type, quality) {
            var dataUrl = this.element.toDataURL(type, quality);
            return dataUrl;
        }
        /**
         * Method creates a Blob object representing the image contained in the canvas
         * @param {function} callback Function of callback to onload Blob
         * @param {WMimeType} type Type of Blob
         * @param {WCanvasQuality} quality Quality of Blob 
         */

    }, {
        key: 'toBlob',
        value: function toBlob(callback, type, quality) {
            var toBlob = this.element.toDataURL(callback, type, quality);
            return toBlob;
        }
        /**
         * Invert color of ImageData
         * @param {ImageData} imageData ImageData to invert color
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         */

    }, {
        key: 'invertColor',
        value: function invertColor(imageData, x, y) {
            var data = imageData.data;
            for (var i = 0; i < data.length; i += 4) {
                data[i] = 255 - data[i];
                data[i + 1] = 255 - data[i + 1];
                data[i + 2] = 255 - data[i + 2];
            }
            this.putImageData(imageData, x, y);
            return this;
        }
        /**
         * Invert Canvas Color
         */

    }, {
        key: 'invertCanvasColor',
        value: function invertCanvasColor() {
            var imageData = this.getImageData(0, 0, this.element.width, this.element.height);
            this.invertColor(imageData, 0, 0);
            return this;
        }
        /**
         * Grayscale color of ImageData
         * @param {ImageData} imageData ImageData to grayscale color
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         */

    }, {
        key: 'grayscaleColor',
        value: function grayscaleColor(imageData, x, y) {
            var data = imageData.data;
            for (var i = 0; i < data.length; i += 4) {
                var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                data[i] = avg; //red
                data[i + 1] = avg; //green
                data[i + 2] = avg; //blue
            }
            this.putImageData(imageData, x, y);
            return this;
        }
        /**
         * Grayscale color
         */

    }, {
        key: 'grayscaleCanvasColor',
        value: function grayscaleCanvasColor() {
            var imageData = this.getImageData(0, 0, this.element.width, this.element.height);
            this.grayscaleColor(imageData, 0, 0);
            return this;
        }
        /**
         * Draws a "filled" rectangle
         * @param {number} x	    The x-coordinate of the upper-left corner of the rectangle
         * @param {number} y	    The y-coordinate of the upper-left corner of the rectangle
         * @param {number} width	The width of the rectangle, in pixels
         * @param {number} height	The height of the rectangle, in pixels
         * @param {WType} type      Type of Rect
         */

    }, {
        key: 'fillRect',
        value: function fillRect(x, y, width, height, type) {
            this.context.fillRect(x, y, width, height, type);
            return this;
        }
        /**
         * Clear a rectangle
         * @param {number} x	    The x-coordinate of the upper-left corner of the rectangle
         * @param {number} y	    The y-coordinate of the upper-left corner of the rectangle
         * @param {number} width	The width of the rectangle, in pixels
         * @param {number} height	The height of the rectangle, in pixels
         * @param {WType} type      Type of Rect
         */

    }, {
        key: 'clearRect',
        value: function clearRect(x, y, width, height, type) {
            this.context.clearRect(x, y, width, height, type);
            return this;
        }
        /**
         * Stroke a rectangle
         * @param {number} x	    The x-coordinate of the upper-left corner of the rectangle
         * @param {number} y	    The y-coordinate of the upper-left corner of the rectangle
         * @param {number} width	The width of the rectangle, in pixels
         * @param {number} height	The height of the rectangle, in pixels
         * @param {WType} type      Type of Rect
         */

    }, {
        key: 'strokeRect',
        value: function strokeRect(x, y, width, height, type) {
            this.context.strokeRect(x, y, width, height, type);
            return this;
        }
        /**
         * Creates an arc/curve (used to create circles, or parts of circles)
         * @param {number} x	            The x-coordinate of the center of the circle
         * @param {number} y        	    The y-coordinate of the center of the circle
         * @param {number} radius	            The radius of the circle
         * @param {number} startAngle  	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
         * @param {number} endAngle	    The ending angle, in radians
         * @param {number} anticlockwise	Optional. Specifies whether the drawing should be counterclockwise or clockwise.
         */

    }, {
        key: 'arc',
        value: function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
            this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            return this;
        }
        /**
         * Creates a quadratic Bézier curve
         * @param {number} cp1x	The x-coordinate of the Bézier control point
         * @param {number} cp1y	The y-coordinate of the Bézier control point
         * @param {number} x	The x-coordinate of the ending point
         * @param {number} y	The y-coordinate of the ending point
         */

    }, {
        key: 'quadraticCurveTo',
        value: function quadraticCurveTo(cp1x, cp1y, x, y) {
            this.context.quadraticCurveTo(cp1x, cp1y, x, y);
            return this;
        }
        /**
        * Creates a cubic Bézier curve
        * @param {number} cp1x	The x-coordinate of the first Bézier control point
        * @param {number} cp1y	The y-coordinate of the first Bézier control point
        * @param {number} cp2x	The x-coordinate of the second Bézier control point
        * @param {number} cp2y	The y-coordinate of the second Bézier control point
        * @param {number} x	The x-coordinate of the ending point
        * @param {number} y	The y-coordinate of the ending point
        */

    }, {
        key: 'bezierCurveTo',
        value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
            this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
            return this;
        }
        /**
         * Set Smoothing configuration enable
         * @param {boolean} imageSmoothingEnabled Enabled or disable the configuration
         */

    }, {
        key: 'setImageSmoothingEnabled',
        value: function setImageSmoothingEnabled(imageSmoothingEnabled) {
            this.imageSmoothingEnabled = imageSmoothingEnabled;
            return this;
        }

        /**
         * Adds a new point and creates a line to that point from the last specified point in the canvas
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         */

    }, {
        key: 'lineTo',
        value: function lineTo(x, y) {
            this.context.lineTo(x, y);
            return this;
        }
        /**
         * Moves the path to the specified point in the canvas, without creating a line
         * @param {number} x x-coordinate
         * @param {number} y y-coordinate
         */

    }, {
        key: 'moveTo',
        value: function moveTo(x, y) {
            this.context.moveTo(x, y);
            return this;
        }
        /**
         * Begins a path, or resets the current path
         */

    }, {
        key: 'beginPath',
        value: function beginPath() {
            this.context.beginPath();
            return this;
        }
        /**
         * Creates a path from the current point back to the starting point
         */

    }, {
        key: 'closePath',
        value: function closePath() {
            this.context.closePath();
            return this;
        }
        /**
         * Actually draws the path you have defined
         */

    }, {
        key: 'stroke',
        value: function stroke() {
            this.context.stroke();
            return this;
        }
        /**
         * Fills the current drawing (path)
         */

    }, {
        key: 'fill',
        value: function fill() {
            this.context.fill();
            return this;
        }
        /**
         * Clear the context
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.context.clearRect(0, 0, this.element.width, this.element.height);
            return this;
        }
    }, {
        key: 'drawSquareWithConfiguration',
        value: function drawSquareWithConfiguration(obj, configuration) {
            this.drawSquare(configuration.x, configuration.y, configuration.width, configuration.height, configuration.type);
        }
    }, {
        key: 'drawArcWithConfiguration',
        value: function drawArcWithConfiguration(obj, configuration) {
            this.drawArc(configuration.x, configuration.y, configuration.radius, configuration.startAngle, configuration.endAngle, configuration.anticlockwise, configuration.type);
        }
    }, {
        key: 'drawTringleWithConfiguration',
        value: function drawTringleWithConfiguration(obj, configuration) {
            this.drawTriangleByDimension(configuration.x, configuration.y, configuration.dimension, configuration.type);
        }
    }, {
        key: 'drawLineWithConfiguration',
        value: function drawLineWithConfiguration(obj, configuration) {
            if (configuration.lineWidth) this.lineWidth = configuration.lineWidth;
            this.drawLine(configuration.beginX, configuration.beginY, configuration.endX, configuration.endY, configuration.type);
        }
    }, {
        key: 'drawImageWithConfiguration',
        value: function drawImageWithConfiguration(obj, configuration) {
            this.drawImage(configuration.image, configuration.sx, configuration.sy, configuration.sWidth, configuration.sHeight, configuration.dx, configuration.dy, configuration.dWidth, configuration.dHeight);
        }
    }, {
        key: 'draw',
        value: function draw(obj, configuration) {
            this.fillStyle(configuration.fillStyle || 'black');
            switch (obj) {
                case 'square':
                    this.drawSquareWithConfiguration(obj, configuration);
                    break;
                case 'arc':
                    this.drawArcWithConfiguration(obj, configuration);
                    break;
                case 'triangle':
                    this.drawTringleWithConfiguration(obj, configuration);
                    break;
                case 'line':
                    this.drawLineWithConfiguration(obj, configuration);
                    break;
                case 'image':
                    this.drawImageWithConfiguration(obj, configuration);
                    break;

            }
            return this;
        }
        //@TODO

    }, {
        key: 'createEvent',
        value: function createEvent() {}
    }, {
        key: 'context',
        get: function get() {
            return this._context;
        },
        set: function set(ctx) {
            return this._context = this.getContext(ctx);
        }
    }, {
        key: 'context2D',
        get: function get() {
            return this.element.getContext('2d');
        }
    }, {
        key: 'context3D',
        get: function get() {
            return this.element.getContext('3d');
        }
    }, {
        key: 'imageSmoothingEnabled',
        get: function get() {
            return this.context.imageSmoothingEnabled || this.context.mozImageSmoothingEnabled || this.context.webkitImageSmoothingEnabled || this.context.msImageSmoothingEnabled;
        },
        set: function set(imageSmoothingEnabled) {
            if (this.context.imageSmoothingEnabled) {
                this.context.imageSmoothingEnabled = imageSmoothingEnabled;
            }
            if (this.context.mozImageSmoothingEnabled) {
                this.context.mozImageSmoothingEnabled = imageSmoothingEnabled;
            }
            if (this.context.webkitImageSmoothingEnabled) {
                this.context.webkitImageSmoothingEnabled = imageSmoothingEnabled;
            }
            if (this.context.msImageSmoothingEnabled) {
                this.context.msImageSmoothingEnabled = imageSmoothingEnabled;
            }
        }
    }, {
        key: 'shadowBlur',
        get: function get() {
            return this.context.shadowBlur;
        },
        set: function set(offset) {
            this.context.shadowBlur = offset;
        }
    }, {
        key: 'shadowOffsetX',
        get: function get() {
            return this.context.shadowOffsetX;
        },
        set: function set(offset) {
            this.context.shadowOffsetX = offset;
        }
    }, {
        key: 'shadowOffsetY',
        get: function get() {
            return this.context.shadowOffsetY;
        },
        set: function set(offset) {
            this.context.shadowOffsetY = offset;
        }
    }, {
        key: 'shadowColor',
        get: function get() {
            return this.context.shadowColor;
        },
        set: function set(shadowColor) {
            this.context.shadowColor = shadowColor;
        }
    }, {
        key: 'strokeStyle',
        get: function get() {
            return this.context.strokeStyle;
        },
        set: function set(strokeStyle) {
            this.context.strokeStyle = strokeStyle;
        }
    }, {
        key: 'lineCap',
        get: function get() {
            return this.context.lineCap;
        },
        set: function set(lineCap) {
            this.context.lineCap = lineCap;
        }
    }, {
        key: 'lineJoin',
        get: function get() {
            return this.context.lineJoin;
        },
        set: function set(lineJoin) {
            this.context.lineJoin = lineJoin;
        }
    }, {
        key: 'lineWidth',
        get: function get() {
            return this.context.lineWidth;
        },
        set: function set(lineWidth) {
            this.context.lineWidth = lineWidth;
        }
    }, {
        key: 'miterLimit',
        get: function get() {
            return this.context.miterLimit;
        },
        set: function set(miterLimit) {
            this.context.miterLimit = miterLimit;
        }
    }, {
        key: 'font',
        get: function get() {
            return this.context.font;
        },
        set: function set(font) {
            this.context.font = font;
        }
    }, {
        key: 'textAlign',
        get: function get() {
            return this.context.textAlign;
        },
        set: function set(textAlign) {
            this.context.textAlign = textAlign;
        }
    }, {
        key: 'textBaseline',
        get: function get() {
            return this.context.textBaseline;
        },
        set: function set(textBaseline) {
            this.context.textBaseline = textBaseline;
        }
    }, {
        key: 'globalAlpha',
        get: function get() {
            return this.context.globalAlpha;
        },
        set: function set(globalAlpha) {
            this.context.globalAlpha = globalAlpha;
        }
    }, {
        key: 'globalCompositeOperation',
        get: function get() {
            return this.context.globalCompositeOperation;
        },
        set: function set(globalCompositeOperation) {
            this.context.globalCompositeOperation = globalCompositeOperation;
        }
    }]);

    return WCanvas;
}(_WElement3.default);

exports.default = WCanvas;

},{"../enums/WType":11,"./WElement":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic class to elements
 * @class
 */
var WElement = function () {
    function WElement(element, configuration) {
        _classCallCheck(this, WElement);

        this.element = element;
        console.log(this.getClassName().concat(' Created!'));
    }

    _createClass(WElement, [{
        key: "createElement",

        /**
         * Create a element
         * @param {string} element Type of element
         * @example WElement element = new WElement('p')
         */
        value: function createElement(element) {
            return document.createElement(element);
        }
        /**
         * Set the id of element
         * @param {string} id Id of element
         */

    }, {
        key: "setId",
        value: function setId(id) {
            this.element.id = id;
            return this;
        }
        /**
         * Add Content to Element
         * @param {Object} content Content to append on element
         */

    }, {
        key: "addContent",
        value: function addContent(content) {
            this.element.innerHTML = content;
            return this;
        }
        /**
         * Set Attribute to element
         * @param {string} attr Attribute of element
         * @param {string} value Value of attribute
         * @example element.setAttribute('width','10')
         */

    }, {
        key: "setAttribute",
        value: function setAttribute(attr, value) {
            this.element.setAttribute(attr, value);
            return this;
        }
        /**
         * Set Style of element
         * @param {string} attr Attribute of style
         * @param {string} value Value of attributey
         * @example element.setStyle('color','red')
         */

    }, {
        key: "setStyle",
        value: function setStyle(attr, value) {
            this.element.style[attr] = value;
            return this;
        }
        /**
         * Set Configuration of element
         * @param {Object} configuration Configuration to apply
         */

    }, {
        key: "config",
        value: function config(configuration) {
            for (var prop in configuration) {
                if (prop === 'id') {
                    this.setId(configuration[prop]);
                    continue;
                }
                if (prop === 'className') {
                    this.set;
                }
                if (configuration.hasOwnProperty(prop)) {
                    this.setStyle(prop, configuration[prop]);
                }
            }
            return this;
        }
        /**
         * Add Child to Element
         * @param {Object} child Child to append on element
         */

    }, {
        key: "addChild",
        value: function addChild(child) {
            this.element.appendChild(child.element);
            return this;
        }
        /**
         * Add current element to body
         */

    }, {
        key: "addToBody",
        value: function addToBody() {
            document.body.appendChild(this.element);
            return this;
        }
        /**
         * Add current element to element with specified id
         * @param {string} id Id of element
         */

    }, {
        key: "addToElementById",
        value: function addToElementById(id) {
            document.getElementById(id).appendChild(this.element);
            return this;
        }
        /**
         * Add current element to element with specified className
         * @param {string} className Class of element
         */

    }, {
        key: "addToElementByClassName",
        value: function addToElementByClassName(className) {
            document.getElementsByClassName(className).appendChild(this.element);
            return this;
        }
        /**
         * Get name of current Class
         */

    }, {
        key: "getClassName",
        value: function getClassName() {
            return this.constructor.name;
        }
    }, {
        key: "hashcode",
        get: function get() {
            var hash = this.constructor.name.split("").reduce(function (a, b) {
                a = (a << 5) - a + b.charCodeAt(0);return a & a;
            }, 0);
            var hashcode = "";
            for (var i = 0; i < 10; i++) {
                hashcode = hashcode.concat(String.fromCodePoint(Math.round(Math.random() * 100) + 4));
            }
            return (hash + ".*wmf*." + hashcode).trim();
        }
    }, {
        key: "type",
        get: function get() {
            return this.constructor.name;
        }
    }, {
        key: "id",
        get: function get() {
            return this.element.id;
        },
        set: function set(id) {
            this.element.id = id;
        }
    }, {
        key: "element",
        get: function get() {
            return this._element;
        },
        set: function set(element) {
            this._element = this.createElement(element);
        }
    }, {
        key: "attributes",
        get: function get() {
            return this.element.attributes;
        }
    }]);

    return WElement;
}();

exports.default = WElement;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WElement2 = require('../elements/WElement.js');

var _WElement3 = _interopRequireDefault(_WElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WImage = function (_WElement) {
    _inherits(WImage, _WElement);

    function WImage(src) {
        _classCallCheck(this, WImage);

        var _this = _possibleConstructorReturn(this, (WImage.__proto__ || Object.getPrototypeOf(WImage)).call(this, 'img'));

        if (src) _this.setSrc(src);
        return _this;
    }

    _createClass(WImage, [{
        key: 'getImage',
        value: function getImage() {
            return this._image;
        }
    }, {
        key: 'setSrc',
        value: function setSrc(src) {
            this._src = _get(WImage.prototype.__proto__ || Object.getPrototypeOf(WImage.prototype), 'setAttribute', this).call(this, 'src', src);
        }
    }, {
        key: 'getSrc',
        value: function getSrc(src) {
            return this._src;
        }
    }]);

    return WImage;
}(_WElement3.default);

exports.default = WImage;

},{"../elements/WElement.js":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WCanvasQuality = {
    'FULL': 1.0,
    'MEDIUM': 0.5,
    'LOW': 0.1
};

exports.default = WCanvasQuality;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WException = {
    'NO_GET_LAYER': {
        name: 'NO_GET_LAYER',
        message: 'Error to get Layer!',
        solutions: [' - Verify if exists this id.']
    }
};

exports.default = WException;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WMimeType = {
    'IMAGE_JPEG': 'image/jpeg'
};

exports.default = WMimeType;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WObjectType = {
    'SQUARE': 'square',
    'ARC': 'arc',
    'TRIANGLE': 'triangle',
    'LINE': 'line',
    'IMAGE': 'image'
};

exports.default = WObjectType;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WPosition = {
    'STATIC': 'static',
    'RELATIVE': 'relative',
    'ABSOLUTE': 'absolute',
    'FIXED': 'fixed'
};

exports.default = WPosition;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WType = {
    'FILL': 'fill',
    'STROKE': 'stroke',
    'CLEAR': 'clear'
};

exports.default = WType;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Object.prototype.eventFallMove = function () {
    if (this.context) {
        var $this = this;
        var ctx = $this.context;

        $this.running = false;

        var raf;

        $this.start = function () {
            $this.running = true;
            $this.draw().toX($this.x).toY($this.y);

            $this.x += $this.vx;
            $this.y += $this.vy;
            $this.vy *= .99;
            $this.vy += .25;

            if ($this.y + $this.vy > $this.element.height || $this.y + $this.vy < 0) {
                $this.vy = -$this.vy;
            }

            if ($this.x + $this.vx > $this.element.width || $this.x + $this.vx < 0) {
                $this.vx = -$this.vx;
            }
            raf = window.requestAnimationFrame($this.start);
        };

        $this.stop = function () {
            $this.running = false;
            window.cancelAnimationFrame(raf);
        };

        return $this;
    }
};

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Object.prototype.eventMouseFollow = function () {
    var _this = this;

    if (this.context) {
        var $this;
        var ctx;

        var _ret = function () {
            var clear = function clear() {
                ctx.fillStyle = 'rgba(255,255,255,0.1)';
                ctx.fillRect(0, 0, $this.element.width, $this.element.height);
            };

            $this = _this;
            ctx = $this.context;


            $this.element.addEventListener('mousemove', function (e) {
                if (!$this.running) {
                    clear();
                    $this.x = e.clientX;
                    $this.y = e.clientY;
                    $this.draw();
                }
            });

            $this.element.addEventListener('click', function (e) {
                if (!$this.running) {
                    $this.start();
                } else {
                    $this.stop();
                }
            });

            return {
                v: $this
            };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
};

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Evento de objeto se movendo na tela.
 * Têm-se o x, y, vx, vy.
 * Objeto se move de acordo com x e y.
 * Utiliza-se vx e vy para somar as váriaveis de posição.
 * Quando se objeto chega ao limite do canvas, nega-se o vx e vy para
 * inverter a soma, fazendo com que o x e y decremente, e ao retornar
 * inverte-se novamente para o x e y incrementar, movendo assim o objeto
 * em sentidos opostos. 
 */
exports.default = Object.prototype.eventRandomOne = function () {
    var _this = this;

    if (this.context) {
        var $this;
        var ctx;
        var raf;

        var _ret = function () {
            var draw = function draw() {
                $this.draw().toX($this.x).toY($this.y);

                $this.x += $this.vx;
                $this.y += $this.vy;

                if ($this.y + $this.vy > $this.element.height || $this.y + $this.vy < 0) {
                    $this.vy = -$this.vy;
                }

                if ($this.x + $this.vx > $this.element.width || $this.x + $this.vx < 0) {
                    $this.vx = -$this.vx;
                }
                raf = window.requestAnimationFrame(draw);
            };

            $this = _this;
            ctx = $this.context;


            draw();
            return {
                v: $this
            };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
};

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = function Example() {
    _classCallCheck(this, Example);

    console.log("aqui");
};

exports.default = Example;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _WException = require('../enums/WException');

var _WException2 = _interopRequireDefault(_WException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetLayerException = function (_Error) {
    _inherits(GetLayerException, _Error);

    function GetLayerException(message) {
        _classCallCheck(this, GetLayerException);

        var exception = _WException2.default.NO_GET_LAYER;

        var _this = _possibleConstructorReturn(this, (GetLayerException.__proto__ || Object.getPrototypeOf(GetLayerException)).call(this, exception.message + '\n' + exception.solutions.join('\n')));

        _this.name = exception.name;
        return _this;
    }

    return GetLayerException;
}(Error);

exports.default = GetLayerException;

},{"../enums/WException":7}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Object.prototype.createBall = function (x, y) {
    if (this.context) {
        var $this = this;
        $this.x = x;
        $this.y = y;
        $this.vx = 5;
        $this.vy = 2;
        $this.radius = 25;
        $this.color = 'blue';
        $this.draw = function () {
            $this.clearRect(0, 0, $this.element.width, $this.element.height);
            $this.context.beginPath();
            $this.context.arc($this.x, $this.y, $this.radius, 0, Math.PI * 2, true);
            $this.context.closePath();
            $this.context.fillStyle = $this.color;
            $this.context.fill();
            return $this;
        };
        $this.toX = function (x) {
            $this.x = x;
            return $this;
        };
        $this.toY = function (y) {
            $this.y = y;
            return $this;
        };

        return $this;
    }
};

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Object.prototype.createBallShadow = function (x, y) {
    if (this.context) {
        var $this = this;
        $this.x = x;
        $this.y = y;
        $this.vx = 5;
        $this.vy = 2;
        $this.radius = 25;
        $this.color = 'blue';
        $this.draw = function () {
            $this.fillStyle('rgba(255,255,255,0.3)');
            $this.fillRect(0, 0, $this.element.width, $this.element.height);
            $this.context.beginPath();
            $this.context.arc($this.x, $this.y, $this.radius, 0, Math.PI * 2, true);
            $this.context.closePath();
            $this.context.fillStyle = $this.color;
            $this.context.fill();
            return $this;
        };
        $this.toX = function (x) {
            $this.x = x;
            return $this;
        };
        $this.toY = function (y) {
            $this.y = y;
            return $this;
        };

        $this.draw();

        return $this;
    }
};

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Object.prototype.createBallon = function () {
    if (this.context) {
        var ctx = this.context;

        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
        return this;
    }
};

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Object.prototype.createClockOne = function () {
    var _this = this;

    if (this.context) {
        var ctx;

        var _ret = function () {
            var clock = function clock() {
                var now = new Date();
                ctx.save();
                ctx.clearRect(0, 0, 150, 150);
                ctx.translate(75, 75);
                ctx.scale(0.4, 0.4);
                ctx.rotate(-Math.PI / 2);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.lineWidth = 8;
                ctx.lineCap = "round";

                // Hour marks
                ctx.save();
                for (var i = 0; i < 12; i++) {
                    ctx.beginPath();
                    ctx.rotate(Math.PI / 6);
                    ctx.moveTo(100, 0);
                    ctx.lineTo(120, 0);
                    ctx.stroke();
                }
                ctx.restore();

                // Minute marks
                ctx.save();
                ctx.lineWidth = 5;
                for (i = 0; i < 60; i++) {
                    if (i % 5 != 0) {
                        ctx.beginPath();
                        ctx.moveTo(117, 0);
                        ctx.lineTo(120, 0);
                        ctx.stroke();
                    }
                    ctx.rotate(Math.PI / 30);
                }
                ctx.restore();

                var sec = now.getSeconds();
                var min = now.getMinutes();
                var hr = now.getHours();
                hr = hr >= 12 ? hr - 12 : hr;

                ctx.fillStyle = "black";

                // write Hours
                ctx.save();
                ctx.rotate(hr * (Math.PI / 6) + Math.PI / 360 * min + Math.PI / 21600 * sec);
                ctx.lineWidth = 14;
                ctx.beginPath();
                ctx.moveTo(-20, 0);
                ctx.lineTo(80, 0);
                ctx.stroke();
                ctx.restore();

                // write Minutes
                ctx.save();
                ctx.rotate(Math.PI / 30 * min + Math.PI / 1800 * sec);
                ctx.lineWidth = 10;
                ctx.beginPath();
                ctx.moveTo(-28, 0);
                ctx.lineTo(112, 0);
                ctx.stroke();
                ctx.restore();

                // Write seconds
                ctx.save();
                ctx.rotate(sec * Math.PI / 30);
                ctx.strokeStyle = "#D40000";
                ctx.fillStyle = "#D40000";
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.moveTo(-30, 0);
                ctx.lineTo(83, 0);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.restore();

                ctx.beginPath();
                ctx.lineWidth = 14;
                ctx.strokeStyle = '#325FA2';
                ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
                ctx.stroke();

                ctx.restore();

                window.requestAnimationFrame(clock);
            };

            ctx = _this.context;


            window.requestAnimationFrame(clock);
            return {
                v: _this
            };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
    }
};

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Object.prototype.createHeart = function () {
    if (this.context) {
        var ctx = this.context;

        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
        return this;
    }
};

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _WElement2 = require('../elements/WElement');

var _WElement3 = _interopRequireDefault(_WElement2);

var _WCanvas = require('../elements/WCanvas');

var _WCanvas2 = _interopRequireDefault(_WCanvas);

var _GetLayerException = require('../exceptions/GetLayerException');

var _GetLayerException2 = _interopRequireDefault(_GetLayerException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var World = (_dec = Injectable(), _dec(_class = function (_WElement) {
    _inherits(World, _WElement);

    function World() {
        _classCallCheck(this, World);

        var _this = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this, 'div'));

        _this.layers = {};
        return _this;
    }

    _createClass(World, [{
        key: 'setOverflow',
        value: function setOverflow(overflow) {
            this.element.style.overflow = overflow;
            return this;
        }
    }, {
        key: 'newLayer',
        value: function newLayer(configuration) {
            var layer = new _WCanvas2.default();
            if (!configuration.id) {
                configuration.id = this.getObjectSize(this.layers) + 1;
            }
            layer.config(configuration);
            this.addChild(layer);
            this.layers[configuration.id] = layer;
            return this;
        }
    }, {
        key: 'getObjectSize',
        value: function getObjectSize(obj) {
            var size = 0,
                key = void 0;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        }
    }, {
        key: 'getLayer',
        value: function getLayer(id) {
            if (!this.layers[id]) {
                throw new _GetLayerException2.default();
            }
            return this.layers[id];
        }
    }, {
        key: 'layers',
        get: function get() {
            return this._layers;
        },
        set: function set(_layers) {
            this._layers = _layers;
        }
    }]);

    return World;
}(_WElement3.default)) || _class);
exports.default = World;

},{"../elements/WCanvas":3,"../elements/WElement":4,"../exceptions/GetLayerException":16}]},{},[1]);
