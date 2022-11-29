/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analitic.ts":
/*!*************************!*\
  !*** ./src/analitic.ts ***!
  \*************************/
/***/ (() => {

eval("function createAnalts() {\n  var isRemove = false;\n  var count = 0;\n  var listn = function listn() {\n    return count++;\n  };\n  document.addEventListener('click', listn);\n  return {\n    removeEvent: function removeEvent() {\n      document.removeEventListener('click', listn);\n      isRemove = true;\n    },\n    getPush: function getPush() {\n      if (isRemove) {\n        return 'Analytics delete';\n      }\n      return count;\n    }\n  };\n}\nwindow['analytics'] = createAnalts();\n\n//# sourceURL=webpack://webp/./src/analitic.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/analitic.ts"]();
/******/ 	
/******/ })()
;