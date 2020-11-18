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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/lib/redux-store.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst isServer = true;\nconst _NRS_ = '__NEXT_REDUX_STORE__';\n\nfunction getOrCreateStore(initialState) {\n  if (isServer) {\n    return Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"initStore\"])(initialState);\n  }\n\n  if (!window[_NRS_]) {\n    window[_NRS_] = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"initStore\"])(initialState);\n  }\n\n  return window[_NRS_];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App => {\n  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n    static async getInitialProps(appContext) {\n      const reduxStore = getOrCreateStore();\n      appContext.ctx.reduxStore = reduxStore;\n      let appProps = {};\n\n      if (typeof App.getInitialProps === 'function') {\n        appProps = await App.getInitialProps(appContext);\n      }\n\n      return _objectSpread(_objectSpread({}, appProps), {}, {\n        initialReduxState: reduxStore.getState()\n      });\n    }\n\n    constructor(props) {\n      super(props);\n      this.reduxStore = getOrCreateStore(props.initialReduxState);\n    }\n\n    render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, this.props), {}, {\n        reduxStore: this.reduxStore\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 14\n      }, this);\n    }\n\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVkdXgtc3RvcmUuanM/YmU2MyJdLCJuYW1lcyI6WyJpc1NlcnZlciIsIl9OUlNfIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRTdG9yZSIsIndpbmRvdyIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJyZWR1eFN0b3JlIiwiY3R4IiwiYXBwUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLE1BQU1BLFFBQVEsT0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxzQkFBZDs7QUFHQSxTQUFTQyxnQkFBVCxDQUEyQkMsWUFBM0IsRUFBeUM7QUFDdkMsTUFBSUgsUUFBSixFQUFjO0FBQ1osV0FBT0ksd0RBQVMsQ0FBQ0QsWUFBRCxDQUFoQjtBQUNEOztBQUdELE1BQUksQ0FBQ0UsTUFBTSxDQUFDSixLQUFELENBQVgsRUFBb0I7QUFDbEJJLFVBQU0sQ0FBQ0osS0FBRCxDQUFOLEdBQWdCRyx3REFBUyxDQUFDRCxZQUFELENBQXpCO0FBQ0Q7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDSixLQUFELENBQWI7QUFDRDs7QUFHZUssa0VBQUQsSUFBUztBQUN0QixTQUFPLE1BQU1DLFlBQU4sU0FBMkJDLCtDQUEzQixDQUFxQztBQUcxQyxpQkFBYUMsZUFBYixDQUE4QkMsVUFBOUIsRUFBMEM7QUFDeEMsWUFBTUMsVUFBVSxHQUFHVCxnQkFBZ0IsRUFBbkM7QUFDQVEsZ0JBQVUsQ0FBQ0UsR0FBWCxDQUFlRCxVQUFmLEdBQTRCQSxVQUE1QjtBQUNBLFVBQUlFLFFBQVEsR0FBRyxFQUFmOztBQUNBLFVBQUksT0FBT1AsR0FBRyxDQUFDRyxlQUFYLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDSSxnQkFBUSxHQUFHLE1BQU1QLEdBQUcsQ0FBQ0csZUFBSixDQUFvQkMsVUFBcEIsQ0FBakI7QUFDRDs7QUFDRCw2Q0FDS0csUUFETDtBQUVFQyx5QkFBaUIsRUFBRUgsVUFBVSxDQUFDSSxRQUFYO0FBRnJCO0FBSUQ7O0FBR0RDLGVBQVcsQ0FBRUMsS0FBRixFQUFTO0FBQ2xCLFlBQU1BLEtBQU47QUFDQSxXQUFLTixVQUFMLEdBQWtCVCxnQkFBZ0IsQ0FBQ2UsS0FBSyxDQUFDSCxpQkFBUCxDQUFsQztBQUNEOztBQUdESSxVQUFNLEdBQUk7QUFDUiwwQkFBTyxxRUFBQyxHQUFELGtDQUFTLEtBQUtELEtBQWQ7QUFDTCxrQkFBVSxFQUFFLEtBQUtOO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBRUQ7O0FBMUJ5QyxHQUE1QztBQTRCRCxDQTdCRCIsImZpbGUiOiIuL2xpYi9yZWR1eC1zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aW5pdFN0b3JlfSBmcm9tICcuLi9zdG9yZSc7XG5cblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgX05SU18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nXG5cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZSAoaW5pdGlhbFN0YXRlKSB7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxuICB9XG5cblxuICBpZiAoIXdpbmRvd1tfTlJTX10pIHtcbiAgICB3aW5kb3dbX05SU19dID0gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSlcbiAgfVxuICByZXR1cm4gd2luZG93W19OUlNfXVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IChBcHApID0+IHtcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKGFwcENvbnRleHQpIHtcbiAgICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKClcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fVxuICAgICAgaWYgKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYXBwUHJvcHMsXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKClcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICAgIH1cblxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfVxuICAgICAgICByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/redux-store.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/redux-store */ \"./lib/redux-store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/user/workspace/javascript/react/next_app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass _App extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  render() {\n    const {\n      Component,\n      pageProps,\n      reduxStore\n    } = this.props;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_app__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n        store: reduxStore,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiX0FwcCIsIkFwcCIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZHV4U3RvcmUiLCJwcm9wcyIsIndpdGhSZWR1eFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQXVCO0FBQ3RCQyxRQUFNLEdBQUc7QUFDUixVQUFNO0FBQUVDLGVBQUY7QUFBYUMsZUFBYjtBQUF3QkM7QUFBeEIsUUFBdUMsS0FBS0MsS0FBbEQ7QUFDQSx3QkFDQyxxRUFBQyxrREFBRDtBQUFBLDZCQUNDLHFFQUFDLG9EQUFEO0FBQVUsYUFBSyxFQUFFRCxVQUFqQjtBQUFBLCtCQUNDLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFPQTs7QUFWcUI7O0FBWVJHLCtIQUFjLENBQUNQLElBQUQsQ0FBN0IiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gJy4uL2xpYi9yZWR1eC1zdG9yZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgX0FwcCBleHRlbmRzIEFwcCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0KVxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShfQXBwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Firebaseの初期化\n\nvar config = {\n  apiKey: \"AIzaSyD_UmMwe6ZQxWRaFLEOwypAbO0H64J62XU\",\n  authDomain: \"react-1203-c5cd1.firebaseapp.com\",\n  databaseURL: \"https://react-1203-c5cd1.firebaseio.com\",\n  projectId: \"react-1203-c5cd1\",\n  storageBucket: \"react-1203-c5cd1.appspot.com\",\n  messagingSenderId: \"722657462862\",\n  appId: \"1:722657462862:web:0cd1e68b7fa7617528911f\",\n  measurementId: \"G-50V88BMKMP\"\n};\nvar fireapp;\n\ntry {\n  firebase__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp(config);\n} catch (error) {\n  console.log(error.message);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fireapp); // ステート初期値\n\nconst initial = {}; // レデューサー（ダミー）\n\nfunction fireReducer(state = initial, action) {\n  switch (action.type) {\n    // ダミー\n    case 'TESTACTION':\n      return state;\n    // デフォルト\n\n    default:\n      return state;\n  }\n} // initStore関数\n\n\nfunction initStore(state = initial) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(fireReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n} // import { createStore, applyMiddleware } from 'redux'\n// import thunkMiddleware from 'redux-thunk'\n// // ステート初期値\n// const initial = {\n// \tmessage: 'START',\n// \tdata: [],\n// \tnumber: [],\n// \tresult:0\n// }\n// // レデューサー\n// function calcReducer(state = initial, action) {\n// \tswitch (action.type) {\n// \t\t// 計算実行\n// \t\tcase 'ENTER':\n// \t\t\tlet data2 = state.data.slice();\n// \t\t\tlet s = action.value;\n// \t\t\tdata2.unshift(s);\n// \t\t\tlet num = s.replace(/[^0-9]/g, \"\");\n// \t\t\tlet number2 = state.number.slice();\n// \t\t\tnumber2.unshift(num);\n// \t\t\tlet result = (state.result * 1) + (num * 1);\n// \t\t\treturn {\n// \t\t\t\tmessage: 'ENTER',\n// \t\t\t\tdata: data2,\n// \t\t\t\tnumber: number2,\n// \t\t\t\tresult: result\n// \t\t\t};\n// \t\t// リセット\n// \t\tcase 'RESET':\n// \t\t\treturn {\n// \t\t\t\tmessage: 'RESET',\n// \t\t\t\tdata: [],\n// \t\t\t\tnumber: [],\n// \t\t\t\tresult: 0\n// \t\t\t};\n// \t\t// デフォルト\n// \t\tdefault:\n// \t\t\treturn state;\n// \t}\n// }\n// // initStore関数\n// export function initStore(state = initial) {\n// \treturn createStore(calcReducer, state,\n// \tapplyMiddleware(thunkMiddleware))\n// }\n// import { createStore, applyMiddleware } from 'redux';\n// import thunkMiddleware from 'redux-thunk';\n// // ステート初期値\n// const initial = {\n// \tmessage: 'START',\n// \tcount:0\n// }\n// // レデューサー\n// function counterReducer(state = initial, action) {\n// \tswitch (action.type) {\n// \t\tcase 'INCREMENT':\n// \t\t\treturn {\n// \t\t\t\tmessage: 'INCREMENT',\n// \t\t\t\tcount: state.count + 1\n// \t\t\t};\n// \t\tcase 'DECREMENT':\n// \t\t\treturn {\n// \t\t\t\tmessage: 'DECREMENT',\n// \t\t\t\tcount: state.count - 1\n// \t\t\t};\n// \t\tcase 'RESET':\n// \t\t\treturn {\n// \t\t\t\tmessage: 'RESET',\n// \t\t\t\tcount: initial.count\n// \t\t\t};\n// \t\tdefault:\n// \t\t\treturn state;\n// \t}\n// }\n// // initStore関数(redux-store.jsで必要)\n// export function initStore(state = initial) {\n// \treturn createStore(counterReducer, state,\n// \tapplyMiddleware(thunkMiddleware))\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8wNTcxIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmVhcHAiLCJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaW5pdGlhbCIsImZpcmVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHO0FBQ1pDLFFBQU0sRUFBRSx5Q0FESTtBQUVaQyxZQUFVLEVBQUUsa0NBRkE7QUFHWkMsYUFBVyxFQUFFLHlDQUhEO0FBSVpDLFdBQVMsRUFBRSxrQkFKQztBQUtaQyxlQUFhLEVBQUUsOEJBTEg7QUFNWkMsbUJBQWlCLEVBQUUsY0FOUDtBQU9aQyxPQUFLLEVBQUUsMkNBUEs7QUFRWkMsZUFBYSxFQUFFO0FBUkgsQ0FBYjtBQVdBLElBQUlDLE9BQUo7O0FBQ0EsSUFBSTtBQUNIQyxpREFBUSxDQUFDQyxhQUFULENBQXVCWCxNQUF2QjtBQUNBLENBRkQsQ0FFRSxPQUFPWSxLQUFQLEVBQWM7QUFDZkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csT0FBbEI7QUFDQTs7QUFDY04sc0VBQWYsRSxDQUVBOztBQUNBLE1BQU1PLE9BQU8sR0FBRyxFQUFoQixDLENBR0E7O0FBQ0EsU0FBU0MsV0FBVCxDQUFxQkMsS0FBSyxHQUFHRixPQUE3QixFQUFzQ0csTUFBdEMsRUFBOEM7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0M7QUFDQSxTQUFLLFlBQUw7QUFDQyxhQUFPRixLQUFQO0FBQ0Q7O0FBQ0E7QUFDQyxhQUFPQSxLQUFQO0FBTkY7QUFRQSxDLENBRUQ7OztBQUNPLFNBQVNHLFNBQVQsQ0FBbUJILEtBQUssR0FBR0YsT0FBM0IsRUFBb0M7QUFDMUMsU0FBT00seURBQVcsQ0FBQ0wsV0FBRCxFQUFjQyxLQUFkLEVBQ2xCSyw2REFBZSxDQUFDQyxrREFBRCxDQURHLENBQWxCO0FBRUEsQyxDQUlEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xuXG4vLyBGaXJlYmFzZeOBruWIneacn+WMllxudmFyIGNvbmZpZyA9IHtcblx0YXBpS2V5OiBcIkFJemFTeURfVW1Nd2U2WlF4V1JhRkxFT3d5cEFiTzBINjRKNjJYVVwiLFxuXHRhdXRoRG9tYWluOiBcInJlYWN0LTEyMDMtYzVjZDEuZmlyZWJhc2VhcHAuY29tXCIsXG5cdGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmVhY3QtMTIwMy1jNWNkMS5maXJlYmFzZWlvLmNvbVwiLFxuXHRwcm9qZWN0SWQ6IFwicmVhY3QtMTIwMy1jNWNkMVwiLFxuXHRzdG9yYWdlQnVja2V0OiBcInJlYWN0LTEyMDMtYzVjZDEuYXBwc3BvdC5jb21cIixcblx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiNzIyNjU3NDYyODYyXCIsXG5cdGFwcElkOiBcIjE6NzIyNjU3NDYyODYyOndlYjowY2QxZTY4YjdmYTc2MTc1Mjg5MTFmXCIsXG5cdG1lYXN1cmVtZW50SWQ6IFwiRy01MFY4OEJNS01QXCJcbn07XG5cbnZhciBmaXJlYXBwO1xudHJ5IHtcblx0ZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufSBjYXRjaCAoZXJyb3IpIHtcblx0Y29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG59XG5leHBvcnQgZGVmYXVsdCBmaXJlYXBwO1xuXG4vLyDjgrnjg4bjg7zjg4jliJ3mnJ/lgKRcbmNvbnN0IGluaXRpYWwgPSB7XG59XG5cbi8vIOODrOODh+ODpeODvOOCteODvO+8iOODgOODn+ODvO+8iVxuZnVuY3Rpb24gZmlyZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdC8vIOODgOODn+ODvFxuXHRcdGNhc2UgJ1RFU1RBQ1RJT04nOlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdC8vIOODh+ODleOCqeODq+ODiFxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuLy8gaW5pdFN0b3Jl6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xuXHRyZXR1cm4gY3JlYXRlU3RvcmUoZmlyZVJlZHVjZXIsIHN0YXRlLFxuXHRhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn1cblxuXG5cbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbi8vIGltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5cbi8vIC8vIOOCueODhuODvOODiOWIneacn+WApFxuLy8gY29uc3QgaW5pdGlhbCA9IHtcbi8vIFx0bWVzc2FnZTogJ1NUQVJUJyxcbi8vIFx0ZGF0YTogW10sXG4vLyBcdG51bWJlcjogW10sXG4vLyBcdHJlc3VsdDowXG4vLyB9XG5cbi8vIC8vIOODrOODh+ODpeODvOOCteODvFxuLy8gZnVuY3Rpb24gY2FsY1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcbi8vIFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gXHRcdC8vIOioiOeul+Wun+ihjFxuLy8gXHRcdGNhc2UgJ0VOVEVSJzpcbi8vIFx0XHRcdGxldCBkYXRhMiA9IHN0YXRlLmRhdGEuc2xpY2UoKTtcbi8vIFx0XHRcdGxldCBzID0gYWN0aW9uLnZhbHVlO1xuLy8gXHRcdFx0ZGF0YTIudW5zaGlmdChzKTtcbi8vIFx0XHRcdGxldCBudW0gPSBzLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcbi8vIFx0XHRcdGxldCBudW1iZXIyID0gc3RhdGUubnVtYmVyLnNsaWNlKCk7XG4vLyBcdFx0XHRudW1iZXIyLnVuc2hpZnQobnVtKTtcbi8vIFx0XHRcdGxldCByZXN1bHQgPSAoc3RhdGUucmVzdWx0ICogMSkgKyAobnVtICogMSk7XG4vLyBcdFx0XHRyZXR1cm4ge1xuLy8gXHRcdFx0XHRtZXNzYWdlOiAnRU5URVInLFxuLy8gXHRcdFx0XHRkYXRhOiBkYXRhMixcbi8vIFx0XHRcdFx0bnVtYmVyOiBudW1iZXIyLFxuLy8gXHRcdFx0XHRyZXN1bHQ6IHJlc3VsdFxuLy8gXHRcdFx0fTtcbi8vIFx0XHQvLyDjg6rjgrvjg4Pjg4hcbi8vIFx0XHRjYXNlICdSRVNFVCc6XG4vLyBcdFx0XHRyZXR1cm4ge1xuLy8gXHRcdFx0XHRtZXNzYWdlOiAnUkVTRVQnLFxuLy8gXHRcdFx0XHRkYXRhOiBbXSxcbi8vIFx0XHRcdFx0bnVtYmVyOiBbXSxcbi8vIFx0XHRcdFx0cmVzdWx0OiAwXG4vLyBcdFx0XHR9O1xuLy8gXHRcdC8vIOODh+ODleOCqeODq+ODiFxuLy8gXHRcdGRlZmF1bHQ6XG4vLyBcdFx0XHRyZXR1cm4gc3RhdGU7XG4vLyBcdH1cbi8vIH1cblxuLy8gLy8gaW5pdFN0b3Jl6Zai5pWwXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xuLy8gXHRyZXR1cm4gY3JlYXRlU3RvcmUoY2FsY1JlZHVjZXIsIHN0YXRlLFxuLy8gXHRhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbi8vIH1cblxuXG5cbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG4vLyBpbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLy8gLy8g44K544OG44O844OI5Yid5pyf5YCkXG4vLyBjb25zdCBpbml0aWFsID0ge1xuLy8gXHRtZXNzYWdlOiAnU1RBUlQnLFxuLy8gXHRjb3VudDowXG4vLyB9XG5cbi8vIC8vIOODrOODh+ODpeODvOOCteODvFxuLy8gZnVuY3Rpb24gY291bnRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pIHtcbi8vIFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gXHRcdGNhc2UgJ0lOQ1JFTUVOVCc6XG4vLyBcdFx0XHRyZXR1cm4ge1xuLy8gXHRcdFx0XHRtZXNzYWdlOiAnSU5DUkVNRU5UJyxcbi8vIFx0XHRcdFx0Y291bnQ6IHN0YXRlLmNvdW50ICsgMVxuLy8gXHRcdFx0fTtcbi8vIFx0XHRjYXNlICdERUNSRU1FTlQnOlxuLy8gXHRcdFx0cmV0dXJuIHtcbi8vIFx0XHRcdFx0bWVzc2FnZTogJ0RFQ1JFTUVOVCcsXG4vLyBcdFx0XHRcdGNvdW50OiBzdGF0ZS5jb3VudCAtIDFcbi8vIFx0XHRcdH07XG4vLyBcdFx0Y2FzZSAnUkVTRVQnOlxuLy8gXHRcdFx0cmV0dXJuIHtcbi8vIFx0XHRcdFx0bWVzc2FnZTogJ1JFU0VUJyxcbi8vIFx0XHRcdFx0Y291bnQ6IGluaXRpYWwuY291bnRcbi8vIFx0XHRcdH07XG4vLyBcdFx0ZGVmYXVsdDpcbi8vIFx0XHRcdHJldHVybiBzdGF0ZTtcbi8vIFx0fVxuLy8gfVxuXG4vLyAvLyBpbml0U3RvcmXplqLmlbAocmVkdXgtc3RvcmUuanPjgaflv4XopoEpXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlID0gaW5pdGlhbCkge1xuLy8gXHRyZXR1cm4gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIHN0YXRlLFxuLy8gXHRhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });