module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//there are total 95 characters generating keys i.e (fired by keypress event) 32 to 126
var unicode = [' ', // SPACE
'!', // ! -> !
'"', // " -> "
'#', // # -> #
'$', // $ -> $
'%', // % -> %
'&', // & -> &
'\'', // ' -> '
'(', // ( -> (
')', // ) -> )
'*', // * -> *
'\u200C', // + -> ZWNJ
',', // , -> ,
'-', // - -> -
'\u0964', // . -> ।
'\u094D', // / -> ्

'\u0966', // 0 -> ०
'\u0967', // 1 -> १
'\u0968', // 2 -> २
'\u0969', // 3 -> ३
'\u096A', // 4 -> ४
'\u096B', // 5 -> ५
'\u096C', // 6 -> ६
'\u096D', // 7 -> ७
'\u096E', // 8 -> ८
'\u096F', // 9 -> ९

';', // ; -> ;
':', // : -> :
'\u0919', // < -> ङ
'\u200D', // = -> ZWJ
'\u0965', // > -> ॥
'?', // ? -> ?
'@', // @ -> @

'\u0906', // A -> आ 65
'\u092D', // B -> भ
'\u091A', // C -> च
'\u0927', // D -> ध
'\u0948', // E -> ै
'\u090A', // F -> ऊ
'\u0918', // G -> घ
'\u0905', // H -> अ
'\u0940', // I -> ी
'\u091D', // J -> झ
'\u0916', // K -> ख
'\u0933', // L -> ळ
'\u0902', // M -> ं
'\u0923', // N -> ण
'\u0913', // O -> ओ
'\u092B', // P -> फ
'\u0920', // Q -> ठ
'\u0943', // R -> ृ
'\u0936', // S -> श
'\u0925', // T -> थ
'\u0942', // U -> ू
'\u0901', // V -> ँ
'\u0914', // W -> औ
'\u0922', // X -> ढ
'\u091E', // Y -> ञ
'\u090B', // Z -> ऋ 90

'\u0907', // [ -> इ
'\u0950', // \ -> ॐ
'\u090F', // ] -> ए
'^', // ^ -> ^
'\u0952', // _ ->"॒"
'\u093D', // ` -> ऽ

'\u093E', // a -> ा  97
'\u092C', // b -> ब
'\u091B', // c -> छ
'\u0926', // d -> द
'\u0947', // e -> े
'\u0909', // f -> उ
'\u0917', // g -> ग
'\u0939', // h -> ह
'\u093F', // i -> ि
'\u091C', // j -> ज
'\u0915', // k -> क
'\u0932', // l -> ल
'\u092E', // m -> म
'\u0928', // n -> न
'\u094B', // o -> ो
'\u092A', // p -> प
'\u091F', // q -> ट
'\u0930', // r -> र
'\u0938', // s -> स
'\u0924', // t -> त
'\u0941', // u -> ु
'\u0935', // v -> व
'\u094C', // w -> ौ
'\u0921', // x -> ड
'\u092F', // y -> य
'\u0937', // z -> ष 122

'\u0908', // { -> ई
'\u0903', // | -> ः
'\u0910', // } -> ऐ
'\u093C' // ~ -> "़"
];

var preeti = [' ', '\u0967', '\u0942', '\u0969', '\u096A', '\u096B', '\u096D', '\u0941', '\u096F', '\u0966', '\u096E', '\u0971', ',', '(', '\u0964', '\u0930', '\u0923', '\u091C' + '\u094D' + '\u091E', '\u0926' + '\u094D' + '\u0926', '\u0918', '\u0926' + '\u094D' + '\u0927', '\u091B', '\u091F', '\u0920', '\u0921', '\u0922', '\u0938' + '\u094D', '\u0938', '?', '\u0902', '\u0936' + '\u094D' + '\u0930', '\u0930' + '\u0942', '\u0968', '\u092C' + '\u094D', '\u0926' + '\u094D' + '\u092F', '\u090B', '\u092E' + '\u094D', '\u092D' + '\u094D', '\u0901', '\u0928' + '\u094D', '\u091C' + '\u094D', '\u0915' + '\u094D' + '\u0937' + '\u094D', '\u0935' + '\u094D', '\u092A' + '\u094D', '\u0940', ':', '\u0932' + '\u094D', '\u0907', '\u090F', '\u0924' + '\u094D' + '\u0924', '\u091A' + '\u094D', '\u0915' + '\u094D', '\u0924' + '\u094D', '\u0917' + '\u094D', '\u0916' + '\u094D', '\u0927' + '\u094D', '\u0939' + '\u094D', '\u0925' + '\u094D', '\u0936' + '\u094D', '\u0943', '\u094D', '\u0947', '\u096C', ')', '\u091E', '\u092C', '\u0926', '\u0905', '\u092E', '\u092D', '\u093E', '\u0928', '\u091C', '\u0937' + '\u094D', '\u0935', '\u092A', '\u093F', '\u093D', '\u0932', '\u092F', '\u0909', '\u0924' + '\u094D' + '\u0930', '\u091A', '\u0915', '\u0924', '\u0917', '\u0916', '\u0927', '\u0939', '\u0925', '\u0936', '\u0930' + '\u094D', '\u094D' + '\u0930', '\u0948', '\u091E' + '\u094D'];

// Return the unicode of the key passed
function mapper(keyCode, array) {
  return array[keyCode - 32];
}

// Wrapper function for the keymap function
window.unicodify = function (keyCode) {
  return mapper(keyCode, unicode);
};
window.preetify = function (keyCode) {
  return mapper(keyCode, preeti);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nepali = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nepali = exports.Nepali = function (_Component) {
  _inherits(Nepali, _Component);

  function Nepali() {
    _classCallCheck(this, Nepali);

    var _this = _possibleConstructorReturn(this, (Nepali.__proto__ || Object.getPrototypeOf(Nepali)).call(this));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Nepali, [{
    key: 'calculate',
    value: function calculate(e) {
      var value = '';
      console.log(e.target);
      if (this.state.value !== e.target.value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e.target.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            console.log(c.charCodeAt(0));
            var conv_char = window[this.props.funcname](c.charCodeAt(0));
            value += conv_char || c;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.setState({ value: value });
        this.props.valueChange && this.props.valueChange(e, value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', _extends({
          onChange: this.calculate.bind(this),
          value: this.state.value
        }, this.props))
      );
    }
  }]);

  return Nepali;
}(_react.Component);

exports.default = Nepali;

/***/ })
/******/ ]);