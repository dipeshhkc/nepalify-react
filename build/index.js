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


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var preeti = [' ', // [space]
'\u091C' + '\u094D' + '\u091E', // ! -> ज्ञ
'\u0942', // " -> ू
'\u0918', // #-> घ
'\u0926' + '\u094D' + '\u0927', // $-> टु
'\u091B', // %-> छ
'\u0920', // &-> ठ
'\u0941', // '-> ु
'\u0922', // (-> ढ
'\u0923', // )-> ण
'\u0921', // *-> ड
'\u200C', // + -> ZWNJ
'\u093D', // ,-> ऽ
'\u0914', // --> औ
'\u0964', // .-> ।
'\u0930', // /-> र

'\u0966', // 0-> ०
'\u0967', // 1-> १
'\u0968', // 2-> २
'\u0969', // 3->३
'\u096A', // 4->४
'\u096B', // 5->५
'\u096C', // 6->६
'\u096D', // 7->७
'\u096E', // 8->८
'\u096F', // 9->९

'\u091F' + '\u094D' + '\u0920', // :->ट्ठ
'\u0938', // ;->स
'\u0919', // <->ङ
'\u200D', // = -> ZWJ
'\u0936' + '\u094D' + '\u0930', // >->श्र
'\u0930' + '\u0941', // ?->रु
'\u0908', // @->ई

'\u0906', // A->आ
'\u094C', // B-> ौ
'\u090B', // C->ऋ
'\u0919' + '\u094D' + '\u0917', // D -> ङ्ग
'\u0910', // E->ऐ
'\u0901', // F-> ँ
'\u0926' + '\u094D' + '\u0927', // G->द्ध
'\u091D', // H->झ
'\u0915' + '\u094D' + '\u0937', // I->क्ष
'\u094B', // J->ो
'\u092B', // K->फ
'\u0940', // L->
'\u0921' + '\u094D' + '\u0921', // M->ड्ड
'\u0926' + '\u094D' + '\u092F', // N->द्य
'\u0907', // O->इ
'\u090F', // P->ए
'\u0924' + '\u094D' + '\u0924', // Q->त्त
'\u0926' + '\u094D' + '\u0935', // R->द्व
'\u0919' + '\u094D' + '\u0915', // S->ङ्क
'\u091F' + '\u094D' + '\u091F', // T->ट्ट
'\u090A', // U->ऊ
'\u0950', // V-> 🕉
'\u0921' + '\u094D' + '\u0922', //W -> 
'\u0939' + '\u094D' + '\u092F', // X->ह्य
'\u0920' + '\u094D' + '\u0920', // Y->ठ्ठ
'\u0915' + '\u094D' + '\u0915', // Z->क्क
'\u0930' + '\u094D', // [->र्
'\u094D', // \->्
'\u0947', // ]- े
'\u091F', // ^->ट
'\u0913', // _-> ओ
'\u091E', // `-> ञ
'\u092C', // a->ब्
'\u0926', // b->द
'\u0905', // c->अ
'\u092E', // d->म
'\u092D', // e->भ
'\u093E', // f-> ा
'\u0928', // g->न
'\u091C', // h->ज
'\u0937', // i->ष
'\u0935', // j->व
'\u092A', // k->प
'\u093F', // l-> ि
'\u0903', // m->:
'\u0932', // n->ल
'\u092F', // o->य
'\u0909', // p->उ
'\u0924' + '\u094D' + '\u0930', // q->त्र
'\u091A', // r->च
'\u0915', // s->क
'\u0924', // t->त
'\u0917', // u->ग
'\u0916', // v->ख
'\u0927', // w->ध
'\u0939', // x->ह
'\u0925', // y->थ
'\u0936', // z->श
'\u0943', // {->ृ
'\u0902', // |->
'\u0948', // }->ै
'\u0965' // ~->॥
];

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

var mappingFunction = exports.mappingFunction = {
  unicodify: function unicodify(keyCode) {
    return mapper(keyCode, unicode);
  },
  preetify: function preetify(keyCode) {
    return mapper(keyCode, preeti);
  }
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

var _nepaliMapping = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nepali = exports.Nepali = function (_Component) {
  _inherits(Nepali, _Component);

  function Nepali(props) {
    _classCallCheck(this, Nepali);

    var _this = _possibleConstructorReturn(this, (Nepali.__proto__ || Object.getPrototypeOf(Nepali)).call(this, props));

    _this.state = {
      value: _this.props.initialValue || ''
    };
    return _this;
  }

  _createClass(Nepali, [{
    key: 'calculate',
    value: function calculate(e) {
      var value = "";
      e.persist();
      if (this.state.value !== e.target.value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e.target.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            try {
              var conv_char = _nepaliMapping.mappingFunction[this.props.funcname](c.charCodeAt(0));
              value += conv_char || c;
            } catch (e) {
              var _conv_char = _nepaliMapping.mappingFunction.unicodify(c.charCodeAt(0));
              value += _conv_char || c;
            }
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
        this.adjustCursor(e.target);
        this.props.valueChange && this.props.valueChange(e, value);
      }
    }

    // don't override event instead let event play and then 
    // set the selection range after 10ms, bit hacky but works

  }, {
    key: 'adjustCursor',
    value: function adjustCursor(inputRef) {
      var selectionStart = inputRef.selectionStart;
      setTimeout(function () {
        inputRef.setSelectionRange(selectionStart, selectionStart);
      }, 10);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          inputType = _props.inputType,
          props = _objectWithoutProperties(_props, ['inputType']);

      return inputType === 'textarea' ? _react2.default.createElement('textarea', _extends({}, props, {
        onChange: this.calculate.bind(this),
        value: this.state.value })) : _react2.default.createElement('input', _extends({}, props, {
        onChange: this.calculate.bind(this),
        value: this.state.value
      }));
    }
  }]);

  return Nepali;
}(_react.Component);

exports.default = Nepali;

/***/ })
/******/ ]);