module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire_find.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Firefind.js":
/*!********************************!*\
  !*** ./components/Firefind.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/components/Firefind.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Firefind extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  // 初期化。ステートとイベント用メソッドの設定\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      borderBottom: \"1px solid gray\"\n    });\n\n    this.state = {\n      input: '',\n      data: []\n    };\n    this.doChange = this.doChange.bind(this);\n    this.doAction = this.doAction.bind(this);\n  } // 入力フィールドに入力時の処理\n\n\n  doChange(e) {\n    this.setState({\n      input: e.target.value\n    });\n  } // ボタンクリック時の処理\n\n\n  doAction(e) {\n    this.findFireData(this.state.input);\n  } // 検索の実行\n\n\n  findFireData(s) {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/');\n    let self = this;\n    ref.orderByKey().equalTo(s).on('value', snapshot => {\n      self.setState({\n        data: snapshot.val()\n      });\n    });\n  } // テーブルの内容の作成\n\n\n  getTableData() {\n    let result = [];\n\n    if (this.state.data == null || this.state.data.length == 0) {\n      return [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: \"NO DATA.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 24\n        }, this)\n      }, \"0\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 12\n      }, this)];\n    }\n\n    for (let i in this.state.data) {\n      result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].ID\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          children: this.state.data[i].message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 5\n        }, this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 16\n      }, this));\n    }\n\n    return result;\n  } // レンダリング\n\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        onChange: this.doChange,\n        style: this.style,\n        value: this.state.input\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: this.doAction,\n        children: \"Find\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          children: this.getTableData()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Firefind);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVmaW5kLmpzPzA4YmIiXSwibmFtZXMiOlsiRmlyZWZpbmQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYm9yZGVyQm90dG9tIiwic3RhdGUiLCJpbnB1dCIsImRhdGEiLCJkb0NoYW5nZSIsImJpbmQiLCJkb0FjdGlvbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmluZEZpcmVEYXRhIiwicyIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5IiwiZXF1YWxUbyIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJnZXRUYWJsZURhdGEiLCJyZXN1bHQiLCJsZW5ndGgiLCJpIiwicHVzaCIsIklEIiwibmFtZSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsK0NBQXZCLENBQWlDO0FBS2hDO0FBQ0FDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2xCLFVBQU1BLEtBQU47O0FBRGtCLG1DQUxYO0FBQ1BDLGtCQUFZLEVBQUM7QUFETixLQUtXOztBQUVsQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBSyxFQUFFLEVBREs7QUFFWkMsVUFBSSxFQUFDO0FBRk8sS0FBYjtBQUlBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxHQWQrQixDQWdCaEM7OztBQUNBRCxVQUFRLENBQUNHLENBQUQsRUFBSTtBQUNYLFNBQUtDLFFBQUwsQ0FBYztBQUNiTixXQUFLLEVBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURGLEtBQWQ7QUFHQSxHQXJCK0IsQ0F1QmhDOzs7QUFDQUosVUFBUSxDQUFDQyxDQUFELEVBQUk7QUFDWCxTQUFLSSxZQUFMLENBQWtCLEtBQUtWLEtBQUwsQ0FBV0MsS0FBN0I7QUFDQSxHQTFCK0IsQ0E0QmhDOzs7QUFDQVMsY0FBWSxDQUFDQyxDQUFELEVBQUk7QUFDZixRQUFJQyxFQUFFLEdBQUdDLCtDQUFRLENBQUNDLFFBQVQsRUFBVDtBQUNBLFFBQUlDLEdBQUcsR0FBR0gsRUFBRSxDQUFDRyxHQUFILENBQU8sU0FBUCxDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUQsT0FBRyxDQUFDRSxVQUFKLEdBQ0VDLE9BREYsQ0FDVVAsQ0FEVixFQUVFUSxFQUZGLENBRUssT0FGTCxFQUVlQyxRQUFELElBQWM7QUFDMUJKLFVBQUksQ0FBQ1QsUUFBTCxDQUFjO0FBQ2JMLFlBQUksRUFBRWtCLFFBQVEsQ0FBQ0MsR0FBVDtBQURPLE9BQWQ7QUFHQSxLQU5GO0FBT0EsR0F4QytCLENBMENoQzs7O0FBQ0FDLGNBQVksR0FBRztBQUNkLFFBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLFFBQUksS0FBS3ZCLEtBQUwsQ0FBV0UsSUFBWCxJQUFtQixJQUFuQixJQUEyQixLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0JzQixNQUFoQixJQUEwQixDQUF6RCxFQUE0RDtBQUMzRCxhQUFPLGNBQUM7QUFBQSwrQkFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaLFNBQVEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUQsQ0FBUDtBQUNBOztBQUNELFNBQUssSUFBSUMsQ0FBVCxJQUFjLEtBQUt6QixLQUFMLENBQVdFLElBQXpCLEVBQStCO0FBQzlCcUIsWUFBTSxDQUFDRyxJQUFQLGVBQVk7QUFBQSxnQ0FDWDtBQUFBLG9CQUFLLEtBQUsxQixLQUFMLENBQVdFLElBQVgsQ0FBZ0J1QixDQUFoQixFQUFtQkU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVyxlQUVYO0FBQUEsb0JBQUssS0FBSzNCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQnVCLENBQWhCLEVBQW1CRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZXLGVBR1g7QUFBQSxvQkFBSyxLQUFLNUIsS0FBTCxDQUFXRSxJQUFYLENBQWdCdUIsQ0FBaEIsRUFBbUJJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFc7QUFBQSxTQUFTSixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWjtBQUtBOztBQUNELFdBQU9GLE1BQVA7QUFDQSxHQXhEK0IsQ0EwRGhDOzs7QUFDQU8sUUFBTSxHQUFHO0FBQ1Isd0JBQVE7QUFBQSw4QkFDUDtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUUsS0FBSzNCLFFBQWxDO0FBQ0MsYUFBSyxFQUFFLEtBQUs0QixLQURiO0FBQ29CLGFBQUssRUFBRSxLQUFLL0IsS0FBTCxDQUFXQztBQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE8sZUFHUDtBQUFRLGVBQU8sRUFBRSxLQUFLSSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhPLGVBSVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpPLGVBS1A7QUFBQSwrQkFBTztBQUFBLG9CQUNMLEtBQUtpQixZQUFMO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQVNBOztBQXJFK0I7O0FBd0VsQjNCLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXJlZmluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuY2xhc3MgRmlyZWZpbmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdHlsZSA9IHtcblx0XHRib3JkZXJCb3R0b206XCIxcHggc29saWQgZ3JheVwiXG5cdH1cblxuXHQvLyDliJ3mnJ/ljJbjgILjgrnjg4bjg7zjg4jjgajjgqTjg5njg7Pjg4jnlKjjg6Hjgr3jg4Pjg4njga7oqK3lrppcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0OiAnJyxcblx0XHRcdGRhdGE6W11cblx0XHR9XG5cdFx0dGhpcy5kb0NoYW5nZSA9IHRoaXMuZG9DaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Ly8g5YWl5Yqb44OV44Kj44O844Or44OJ44Gr5YWl5Yqb5pmC44Gu5Yem55CGXG5cdGRvQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlucHV0OmUudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdC8vIOODnOOCv+ODs+OCr+ODquODg+OCr+aZguOBruWHpueQhlxuXHRkb0FjdGlvbihlKSB7XG5cdFx0dGhpcy5maW5kRmlyZURhdGEodGhpcy5zdGF0ZS5pbnB1dCk7XG5cdH1cblxuXHQvLyDmpJzntKLjga7lrp/ooYxcblx0ZmluZEZpcmVEYXRhKHMpIHtcblx0XHRsZXQgZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuXHRcdGxldCByZWYgPSBkYi5yZWYoJ3NhbXBsZS8nKTtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0cmVmLm9yZGVyQnlLZXkoKVxuXHRcdFx0LmVxdWFsVG8ocylcblx0XHRcdC5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogc25hcHNob3QudmFsKClcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8vIOODhuODvOODluODq+OBruWGheWuueOBruS9nOaIkFxuXHRnZXRUYWJsZURhdGEoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXHRcdGlmICh0aGlzLnN0YXRlLmRhdGEgPT0gbnVsbCB8fCB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybiBbPHRyIGtleT1cIjBcIj48dGg+Tk8gREFUQS48L3RoPjwvdHI+XTtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHJlc3VsdC5wdXNoKDx0ciBrZXk9e2l9PlxuXHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUuZGF0YVtpXS5JRH08L3RoPlxuXHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUuZGF0YVtpXS5uYW1lfTwvdGg+XG5cdFx0XHRcdDx0ZD57dGhpcy5zdGF0ZS5kYXRhW2ldLm1lc3NhZ2V9PC90ZD5cblx0XHRcdDwvdHI+KTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIOODrOODs+ODgOODquODs+OCsFxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuICg8ZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuZG9DaGFuZ2V9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnN0eWxlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dH0gLz5cblx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+RmluZDwvYnV0dG9uPlxuXHRcdFx0PGhyIC8+XG5cdFx0XHQ8dGFibGU+PHRib2R5PlxuXHRcdFx0XHR7dGhpcy5nZXRUYWJsZURhdGEoKX1cblx0XHRcdDwvdGJvZHk+PC90YWJsZT5cblx0XHQ8L2Rpdj4pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlyZWZpbmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Firefind.js\n");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/components/Footer.js\";\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.footer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 4\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 11\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsK0NBQXJCLENBQStCO0FBQzlCQyxRQUFNLEdBQUc7QUFDUix3QkFBUTtBQUFBLDZCQUNQO0FBQUEsa0JBQU0sS0FBS0MsS0FBTCxDQUFXQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSO0FBR0E7O0FBTDZCOztBQU9oQkoscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKDxmb290ZXI+XG5cdFx0XHQ8ZGl2Pnt0aGlzLnByb3BzLmZvb3Rlcn08L2Rpdj5cblx0XHQ8L2Zvb3Rlcj4pXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/components/Header.js\";\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.header\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 11\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiaGVhZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBK0I7QUFFOUJDLFFBQU0sR0FBRztBQUNSLHdCQUFRO0FBQUEsOEJBQ1A7QUFBQSxrQkFBTSxLQUFLQyxLQUFMLENBQVdDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxlQUVQO0FBQUEsa0JBQUssS0FBS0QsS0FBTCxDQUFXRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFJQTs7QUFQNkI7O0FBU2hCTCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuICg8aGVhZGVyPlxuXHRcdFx0PGRpdj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9kaXY+XG5cdFx0XHQ8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cblx0XHQ8L2hlYWRlcj4pXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/components/Layout.js\";\n\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: this.props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"viewport\",\n          content: \"initial-scale=1.0, width=device-width\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 4\n      }, this), _static_Style__WEBPACK_IMPORTED_MODULE_5__[\"default\"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        header: this.props.header,\n        title: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 4\n      }, this), this.props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        footer: \"copyright SYODA-Tuyano.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJzdHlsZSIsImhlYWRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUU5QkMsUUFBTSxHQUFHO0FBQ1Isd0JBQVE7QUFBQSw4QkFDUCxxRUFBQyxnREFBRDtBQUFBLGdDQUNDO0FBQUEsb0JBQVEsS0FBS0MsS0FBTCxDQUFXQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBTSxpQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxlQUdDO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFDQyxpQkFBTyxFQUFDO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxFQU9OQyxxREFQTSxlQVFQLHFFQUFDLDBEQUFEO0FBQVEsY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csTUFBM0I7QUFDQyxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXQztBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUk8sRUFVTixLQUFLRCxLQUFMLENBQVdJLFFBVkwsZUFXUCxxRUFBQywwREFBRDtBQUFRLGNBQU0sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQWFBOztBQWhCNkI7O0FBa0JoQlAscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKDxkaXY+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCdcblx0XHRcdFx0XHRjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0e3N0eWxlfVxuXHRcdFx0PEhlYWRlciBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGVyfVxuXHRcdFx0XHR0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cblx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PEZvb3RlciBmb290ZXI9XCJjb3B5cmlnaHQgU1lPREEtVHV5YW5vLlwiIC8+XG5cdFx0PC9kaXY+KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/fire_find.js":
/*!****************************!*\
  !*** ./pages/fire_find.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Firefind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Firefind */ \"./components/Firefind.js\");\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/pages/fire_find.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"Sample data.\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Firefind__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 2\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlX2ZpbmQuanM/ZjViNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLGtGQUNkLHFFQUFDLDBEQUFEO0FBQVEsUUFBTSxFQUFDLE1BQWY7QUFBc0IsT0FBSyxFQUFDLGNBQTVCO0FBQUEseUJBQ0MscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCIsImZpbGUiOiIuL3BhZ2VzL2ZpcmVfZmluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEZpcmVmaW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWZpbmQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxMYXlvdXQgaGVhZGVyPVwiRmlyZVwiIHRpdGxlPVwiU2FtcGxlIGRhdGEuXCI+XG5cdFx0PEZpcmVmaW5kIC8+XG5cdDwvTGF5b3V0PlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/fire_find.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  children: `\nbody {\n\tmargin:10px;\n\tpadding:5px;\n\tcolor:#669;\n}\nheader {\n\tfont-size:64pt;\n\tfont-weight:bold;\n\ttext-align:right;\n\tletter-spacing:-8px;\n\tcolor:#ddddff;\n\tmargin:-32px 5px;\n}\nfooter {\n\tcolor:#99c;\n\tfont-size:12pt;\n\ttext-align:right;\n\tborder-bottom:1px  solid #99c;\n\tmargin:50px 0px 10px 0px;\n\tposition: relative;\n\tbottom:10px;\n\tright:10px;\n\tleft:10px;\n}\nh1 {\n\tfont-size:22pt;\n\tfont-weight:bold;\n\ttext-align:left;\n\tletter-spacing:0px;\n\tcolor:#77a;\n\tmargin:-50px 0px 50px 0px;\n}\np {\n\tmargin:0px;\n\tcolor:#669;\n\tfont-size:16pt;\n}\nhr {\n\tmargin:25px 0px;\n}\ntr {\n\tmargin:0px;\n}\ntr {\n\tmargin:0px;\n}\nth {\n\tfont-size:14pt;\n\tfont-weight:plain;\n\ttext-align:left;\n\tpadding:0px 20px;\n\tmargin:0px;\n\tborder-bottom:1px solid gray;\n}\ntd {\n\tfont-size:14pt;\n\tfont-weight:plain;\n\ttext-align:right;\n\tpadding:0px 20px;\n\tmargin:0px;\n\tborder-bottom:1px solid gray;\n}\n`\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 3,\n  columnNumber: 16\n}, undefined)); // export default <style>{`\n// body {\n// \tmargin:10px;\n// }\n// h1 {\n// \tfont-size:68pt;\n// \tfont-weight:bold;\n// \ttext-align:right;\n// \tletter-spacing:-8px;\n// \tcolor:#f0f0f0;\n// \tmargin:-32px 0px;\n// }\n// p {\n// \tmargin:0px;\n// \tcolor:#666;\n// \tfont-size:16pt;\n// }\n// `}</style>;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVlO0FBQUEsWUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvRGU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmLEUsQ0FvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3RhdGljL1N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxzdHlsZT57YFxuYm9keSB7XG5cdG1hcmdpbjoxMHB4O1xuXHRwYWRkaW5nOjVweDtcblx0Y29sb3I6IzY2OTtcbn1cbmhlYWRlciB7XG5cdGZvbnQtc2l6ZTo2NHB0O1xuXHRmb250LXdlaWdodDpib2xkO1xuXHR0ZXh0LWFsaWduOnJpZ2h0O1xuXHRsZXR0ZXItc3BhY2luZzotOHB4O1xuXHRjb2xvcjojZGRkZGZmO1xuXHRtYXJnaW46LTMycHggNXB4O1xufVxuZm9vdGVyIHtcblx0Y29sb3I6Izk5Yztcblx0Zm9udC1zaXplOjEycHQ7XG5cdHRleHQtYWxpZ246cmlnaHQ7XG5cdGJvcmRlci1ib3R0b206MXB4ICBzb2xpZCAjOTljO1xuXHRtYXJnaW46NTBweCAwcHggMTBweCAwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym90dG9tOjEwcHg7XG5cdHJpZ2h0OjEwcHg7XG5cdGxlZnQ6MTBweDtcbn1cbmgxIHtcblx0Zm9udC1zaXplOjIycHQ7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdHRleHQtYWxpZ246bGVmdDtcblx0bGV0dGVyLXNwYWNpbmc6MHB4O1xuXHRjb2xvcjojNzdhO1xuXHRtYXJnaW46LTUwcHggMHB4IDUwcHggMHB4O1xufVxucCB7XG5cdG1hcmdpbjowcHg7XG5cdGNvbG9yOiM2Njk7XG5cdGZvbnQtc2l6ZToxNnB0O1xufVxuaHIge1xuXHRtYXJnaW46MjVweCAwcHg7XG59XG50ciB7XG5cdG1hcmdpbjowcHg7XG59XG50ciB7XG5cdG1hcmdpbjowcHg7XG59XG50aCB7XG5cdGZvbnQtc2l6ZToxNHB0O1xuXHRmb250LXdlaWdodDpwbGFpbjtcblx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRwYWRkaW5nOjBweCAyMHB4O1xuXHRtYXJnaW46MHB4O1xuXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xufVxudGQge1xuXHRmb250LXNpemU6MTRwdDtcblx0Zm9udC13ZWlnaHQ6cGxhaW47XG5cdHRleHQtYWxpZ246cmlnaHQ7XG5cdHBhZGRpbmc6MHB4IDIwcHg7XG5cdG1hcmdpbjowcHg7XG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XG59XG5gfTwvc3R5bGU+XG5cblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IDxzdHlsZT57YFxuLy8gYm9keSB7XG4vLyBcdG1hcmdpbjoxMHB4O1xuLy8gfVxuLy8gaDEge1xuLy8gXHRmb250LXNpemU6NjhwdDtcbi8vIFx0Zm9udC13ZWlnaHQ6Ym9sZDtcbi8vIFx0dGV4dC1hbGlnbjpyaWdodDtcbi8vIFx0bGV0dGVyLXNwYWNpbmc6LThweDtcbi8vIFx0Y29sb3I6I2YwZjBmMDtcbi8vIFx0bWFyZ2luOi0zMnB4IDBweDtcbi8vIH1cbi8vIHAge1xuLy8gXHRtYXJnaW46MHB4O1xuLy8gXHRjb2xvcjojNjY2O1xuLy8gXHRmb250LXNpemU6MTZwdDtcbi8vIH1cbi8vIGB9PC9zdHlsZT47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });