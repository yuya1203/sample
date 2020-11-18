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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire_add.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Fireadd.js":
/*!*******************************!*\
  !*** ./components/Fireadd.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/components/Fireadd.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Fireadd extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  // 初期化処理\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 10px\"\n    });\n\n    this.state = {\n      name_str: '',\n      msg_str: '',\n      lastID: -1,\n      data: []\n    };\n    this.getLastID(); // 最後のIDのチェック\n\n    this.doChangeName = this.doChangeName.bind(this);\n    this.doChangeMsg = this.doChangeMsg.bind(this);\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doChangeName(e) {\n    this.setState({\n      name_str: e.target.value\n    });\n  }\n\n  doChangeMsg(e) {\n    this.setState({\n      msg_str: e.target.value\n    });\n  }\n\n  doAction(e) {\n    this.addFireData();\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/fire');\n  } // 最後のIDを取得\n\n\n  getLastID() {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/');\n    let self = this;\n    ref.orderByKey().limitToLast(1).on('value', snapshot => {\n      let res = snapshot.val();\n\n      for (let i in res) {\n        self.setState({\n          lastID: i\n        });\n        return;\n      }\n    });\n  } // データを追加する\n\n\n  addFireData() {\n    if (this.state.lastID == -1) {\n      return;\n    }\n\n    let id = this.state.lastID * 1 + 1;\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/' + id);\n    ref.set({\n      ID: id,\n      message: this.state.msg_str,\n      name: this.state.name_str\n    });\n  } // レンダリング\n\n\n  render() {\n    if (this.state.lastID == -1) {\n      this.getLastID();\n    }\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: this.state.lastID == -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"please wait...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              className: \"label\",\n              children: \"name\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                placeholder: \"your name.\",\n                onChange: this.doChangeName,\n                value: this.state.name_str\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 15\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              className: \"label\",\n              children: \"message\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                size: \"40\",\n                placeholder: \"type message...\",\n                onChange: this.doChangeMsg,\n                value: this.state.msg_str\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 15\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                onClick: this.doAction,\n                children: \"Add\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 9\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 22\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fireadd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVhZGQuanM/YTNkOCJdLCJuYW1lcyI6WyJGaXJlYWRkIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwicGFkZGluZyIsInN0YXRlIiwibmFtZV9zdHIiLCJtc2dfc3RyIiwibGFzdElEIiwiZGF0YSIsImdldExhc3RJRCIsImRvQ2hhbmdlTmFtZSIsImJpbmQiLCJkb0NoYW5nZU1zZyIsImRvQWN0aW9uIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRGaXJlRGF0YSIsIlJvdXRlciIsInB1c2giLCJkYiIsImZpcmViYXNlIiwiZGF0YWJhc2UiLCJyZWYiLCJzZWxmIiwib3JkZXJCeUtleSIsImxpbWl0VG9MYXN0Iiwib24iLCJzbmFwc2hvdCIsInJlcyIsInZhbCIsImkiLCJpZCIsInNldCIsIklEIiwibWVzc2FnZSIsIm5hbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxPQUFOLFNBQXNCQywrQ0FBdEIsQ0FBZ0M7QUFPOUI7QUFDQUMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsbUNBUFg7QUFDTkMsY0FBUSxFQUFDLE1BREg7QUFFTkMsYUFBTyxFQUFDO0FBRkYsS0FPVzs7QUFFakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBQyxFQURFO0FBRVhDLGFBQU8sRUFBQyxFQUZHO0FBR1hDLFlBQU0sRUFBQyxDQUFDLENBSEc7QUFJWEMsVUFBSSxFQUFDO0FBSk0sS0FBYjtBQU1BLFNBQUtDLFNBQUwsR0FSaUIsQ0FRQzs7QUFDbEIsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkQsSUFBakIs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LEVBQUMsTUFBWjtBQUFtQixvQkFBSSxFQUFDLElBQXhCO0FBQ0YsMkJBQVcsRUFBQyxpQkFEVjtBQUVGLHdCQUFRLEVBQUUsS0FBS08sV0FGYjtBQUdGLHFCQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXRTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsZUFjRTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUosZUFBYTtBQUFBLHFDQUNiO0FBQVEsdUJBQU8sRUFBRSxLQUFLTyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUEyQkQ7O0FBNUc2Qjs7QUFnSGpCZixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmlyZWFkZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuXG5jbGFzcyBGaXJlYWRkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3R5bGUgPSB7XG4gICAgZm9udFNpemU6XCIxMnB0XCIsXG4gICAgcGFkZGluZzpcIjVweCAxMHB4XCJcbiAgfVxuXG5cbiAgLy8g5Yid5pyf5YyW5Yem55CGXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lX3N0cjonJyxcbiAgICAgIG1zZ19zdHI6JycsXG4gICAgICBsYXN0SUQ6LTEsXG4gICAgICBkYXRhOltdXG4gICAgfVxuICAgIHRoaXMuZ2V0TGFzdElEKCk7IC8vIOacgOW+jOOBrklE44Gu44OB44Kn44OD44KvXG4gICAgdGhpcy5kb0NoYW5nZU5hbWUgPSB0aGlzLmRvQ2hhbmdlTmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9DaGFuZ2VNc2cgPSB0aGlzLmRvQ2hhbmdlTXNnLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb0FjdGlvbiA9IHRoaXMuZG9BY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgZG9DaGFuZ2VOYW1lKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmFtZV9zdHI6ZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG4gIGRvQ2hhbmdlTXNnKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbXNnX3N0cjplLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuXG4gIGRvQWN0aW9uKGUpe1xuICAgIHRoaXMuYWRkRmlyZURhdGEoKTtcbiAgICBSb3V0ZXIucHVzaCgnL2ZpcmUnKTtcbiAgfVxuXG5cbiAgLy8g5pyA5b6M44GuSUTjgpLlj5blvpdcbiAgZ2V0TGFzdElEKCl7XG4gICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICBsZXQgcmVmID0gZGIucmVmKCdzYW1wbGUvJyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHJlZi5vcmRlckJ5S2V5KClcbiAgICAgIC5saW1pdFRvTGFzdCgxKVxuICAgICAgLm9uKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcbiAgICAgICAgbGV0IHJlcyA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICBmb3IobGV0IGkgaW4gcmVzKXtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxhc3RJRDppXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIOODh+ODvOOCv+OCkui/veWKoOOBmeOCi1xuICBhZGRGaXJlRGF0YSgpe1xuICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJRCA9PSAtMSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpZCA9IHRoaXMuc3RhdGUubGFzdElEICogMSArIDE7XG4gICAgbGV0IGRiID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICBsZXQgcmVmID0gZGIucmVmKCdzYW1wbGUvJyArIGlkKTtcbiAgICByZWYuc2V0KHtcbiAgICAgIElEOiBpZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubXNnX3N0cixcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZV9zdHJcbiAgICB9KTtcbiAgfVxuXG5cbiAgLy8g44Os44Oz44OA44Oq44Oz44KwXG4gIHJlbmRlcigpe1xuICAgIGlmICh0aGlzLnN0YXRlLmxhc3RJRCA9PSAtMSl7XG4gICAgICB0aGlzLmdldExhc3RJRCgpO1xuICAgIH1cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICB7KHRoaXMuc3RhdGUubGFzdElEID09IC0xKVxuICAgICAgP1xuICAgICAgPHA+cGxlYXNlIHdhaXQuLi48L3A+XG4gICAgICA6XG4gICAgICA8dGFibGU+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwibGFiZWxcIj5uYW1lPC90aD5cbiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWUuXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRvQ2hhbmdlTmFtZX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWVfc3RyfSAvPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwibGFiZWxcIj5tZXNzYWdlPC90aD5cbiAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cIjQwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRvQ2hhbmdlTXNnfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXNnX3N0cn0gLz48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+PHRoPjwvdGg+PHRkPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PkFkZDwvYnV0dG9uPlxuICAgICAgICA8L3RkPjwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIH1cbiAgICA8L2Rpdj4pXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBGaXJlYWRkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Fireadd.js\n");

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

/***/ "./pages/fire_add.js":
/*!***************************!*\
  !*** ./pages/fire_add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Fireadd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Fireadd */ \"./components/Fireadd.js\");\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/pages/fire_add.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"add data.\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Fireadd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 2\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlX2FkZC5qcz82N2VhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsa0ZBQ2QscUVBQUMsMERBQUQ7QUFBUSxRQUFNLEVBQUMsTUFBZjtBQUFzQixPQUFLLEVBQUMsV0FBNUI7QUFBQSx5QkFDQyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREIiwiZmlsZSI6Ii4vcGFnZXMvZmlyZV9hZGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGaXJlYWRkIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWFkZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcblx0PExheW91dCBoZWFkZXI9XCJGaXJlXCIgdGl0bGU9XCJhZGQgZGF0YS5cIj5cblx0XHQ8RmlyZWFkZCAvPlxuXHQ8L0xheW91dD5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/fire_add.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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