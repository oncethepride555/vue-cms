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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nReferenceError: Unknown plugin \\\"transform-remove-strict-mode\\\" specified in \\\"E:\\\\\\\\FrontEnd_workspace\\\\\\\\vue-cms\\\\\\\\.babelrc\\\" at 2, attempted to resolve relative to \\\"E:\\\\\\\\FrontEnd_workspace\\\\\\\\vue-cms\\\"\\n    at E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:180:17\\n    at Array.map (<anonymous>)\\n    at Function.normalisePlugins (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:158:20)\\n    at OptionManager.mergeOptions (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:234:36)\\n    at OptionManager.init (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\options\\\\option-manager.js:368:12)\\n    at File.initOptions (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:212:65)\\n    at new File (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\file\\\\index.js:135:24)\\n    at Pipeline.transform (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-core\\\\lib\\\\transformation\\\\pipeline.js:46:16)\\n    at transpile (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:50:20)\\n    at Object.module.exports (E:\\\\FrontEnd_workspace\\\\vue-cms\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:173:20)\");\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });