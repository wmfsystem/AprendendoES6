(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _app = require("./src/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./src/app.js":2}],2:[function(require,module,exports){
'use strict';

var _World = require('./world/World');

var _World2 = _interopRequireDefault(_World);

var _WImage = require('./elements/WImage');

var _WImage2 = _interopRequireDefault(_WImage);

var _WCanvas = require('./elements/WCanvas');

var _WCanvas2 = _interopRequireDefault(_WCanvas);

var _WType = require('./enums/WType');

var _WType2 = _interopRequireDefault(_WType);

var _WBallon = require('./reusable_objects/WBallon');

var _WBallon2 = _interopRequireDefault(_WBallon);

var _WHeart = require('./reusable_objects/WHeart');

var _WHeart2 = _interopRequireDefault(_WHeart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", function () {
    var world = new _World2.default();
    world.addToBody();
    world.drawLine(0, 0, 100, 100);
    world.drawSquare(10, 10, 20, 20);
    world.drawTriangle(100, 100, 50, 150, 150, 150);
    world.drawTriangleByDimension(200, 100, 40);
    world.createBallon();
    world.createHeart();

    var img = new _WImage2.default();
    img.src = "./src/img/1.jpg";

    world.drawImage(img.getElement(), 5, 5);
    console.log(img);
});

},{"./elements/WCanvas":3,"./elements/WImage":5,"./enums/WType":6,"./reusable_objects/WBallon":7,"./reusable_objects/WHeart":8,"./world/World":9}],3:[function(require,module,exports){
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

var WCanvas = function (_WElement) {
    _inherits(WCanvas, _WElement);

    function WCanvas() {
        _classCallCheck(this, WCanvas);

        var _this = _possibleConstructorReturn(this, (WCanvas.__proto__ || Object.getPrototypeOf(WCanvas)).call(this, 'canvas'));

        _this._context = _this.context2D;
        return _this;
    }

    _createClass(WCanvas, [{
        key: 'drawLine',
        value: function drawLine(beginX, beginY, endX, endY) {
            this.moveTo(beginX, beginY);
            this.lineTo(endX, endY);
            this.stroke();
        }
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
        }
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
        }
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
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, x, y) {
            this.context.drawImage(image, x, y);
        }
    }, {
        key: 'fillRect',
        value: function fillRect(x, y, width, height, type) {
            this.context.fillRect(x, y, width, height, type);
        }
    }, {
        key: 'clearRect',
        value: function clearRect(x, y, width, height, type) {
            this.context.clearRect(x, y, width, height, type);
        }
    }, {
        key: 'strokeRect',
        value: function strokeRect(x, y, width, height, type) {
            this.context.strokeRect(x, y, width, height, type);
        }
    }, {
        key: 'arc',
        value: function arc(x, y, radius, startAngle, endAngle, anticlockwise) {
            this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        }
    }, {
        key: 'quadraticCurveTo',
        value: function quadraticCurveTo(cp1x, cp1y, x, y) {
            return this.context.quadraticCurveTo(cp1x, cp1y, x, y);
        }
    }, {
        key: 'bezierCurveTo',
        value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this.context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        }
    }, {
        key: 'lineTo',
        value: function lineTo(x, y) {
            this.context.lineTo(x, y);
        }
    }, {
        key: 'moveTo',
        value: function moveTo(x, y) {
            this.context.moveTo(x, y);
        }
    }, {
        key: 'beginPath',
        value: function beginPath() {
            return this.context.beginPath();
        }
    }, {
        key: 'closePath',
        value: function closePath() {
            return this.context.closePath();
        }
    }, {
        key: 'stroke',
        value: function stroke() {
            return this.context.stroke();
        }
    }, {
        key: 'fill',
        value: function fill() {
            return this.context.fill();
        }
    }, {
        key: 'clear',
        value: function clear() {
            return this.context.clear();
        }
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
            return this.getElement().getContext('2d');
        }
    }, {
        key: 'context3D',
        get: function get() {
            return this.getElement().getContext('3d');
        }
    }]);

    return WCanvas;
}(_WElement3.default);

exports.default = WCanvas;

},{"../enums/WType":6,"./WElement":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WElement = function () {
    function WElement(element, width, height, border) {
        _classCallCheck(this, WElement);

        this.setElement(element);
        this.setWidth(width);
        this.setHeight(height);
        this.setBorder(border);
        console.log(this.getClassName().concat(' Created!'));
    }

    _createClass(WElement, [{
        key: 'createElement',
        value: function createElement(element) {
            return document.createElement(element);
        }
    }, {
        key: 'getElement',
        value: function getElement() {
            return this._element;
        }
    }, {
        key: 'setElement',
        value: function setElement(element) {
            this._element = this.createElement(element);
        }
    }, {
        key: 'getAttributes',
        value: function getAttributes() {
            return this.getElement().attributes;
        }
    }, {
        key: 'setAttribute',
        value: function setAttribute(attr, value) {
            this.getElement().setAttribute(attr, value);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(attr, value) {
            this.setAttibute('style', attr + ': ' + value);
        }
    }, {
        key: 'setSize',
        value: function setSize(width, height) {
            this.setWidth(width);
            this.setHeight(height);
        }
    }, {
        key: 'setWidth',
        value: function setWidth() {
            var width = arguments.length <= 0 || arguments[0] === undefined ? 200 : arguments[0];

            this.getElement().setAttribute('style', 'width: '.concat(width));
            return this.getElement();
        }
    }, {
        key: 'setHeight',
        value: function setHeight() {
            var height = arguments.length <= 0 || arguments[0] === undefined ? 200 : arguments[0];

            this.getElement().setAttribute('style', 'height: '.concat(height));
            return this.getElement();
        }
    }, {
        key: 'setBorder',
        value: function setBorder() {
            var border = arguments.length <= 0 || arguments[0] === undefined ? '1px solid black' : arguments[0];

            this.getElement().setAttribute('style', 'border: '.concat(border));
            return this.getElement();
        }
    }, {
        key: 'addChild',
        value: function addChild(child) {
            this.getElement().appendChild(child);
            return this.getElement();
        }
    }, {
        key: 'addToBody',
        value: function addToBody() {
            document.body.appendChild(this.getElement());
            return this.getElement();
        }
    }, {
        key: 'addToElementById',
        value: function addToElementById(id) {
            document.getElementById(id).appendChild(this.getElement());
            return this.getElement();
        }
    }, {
        key: 'addToElementByClassName',
        value: function addToElementByClassName(className) {
            document.getElementsByClassName(className).appendChild(this.getElement());
            return this.getElement();
        }
    }, {
        key: 'getClassName',
        value: function getClassName() {
            return this.constructor.name;
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
var Type = {
    'FILL': 'fill',
    'STROKE': 'stroke',
    'CLEAR': 'clear'
};

exports.default = Type;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Object.prototype.createBallon = function () {
    if (this.context) {
        var ctx = this.context;

        // Quadratric curves example
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }
};

},{}],8:[function(require,module,exports){
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
    }
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WCanvas2 = require('../elements/WCanvas');

var _WCanvas3 = _interopRequireDefault(_WCanvas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var World = function (_WCanvas) {
    _inherits(World, _WCanvas);

    function World() {
        _classCallCheck(this, World);

        return _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));
    }

    return World;
}(_WCanvas3.default);

exports.default = World;

},{"../elements/WCanvas":3}]},{},[1]);
