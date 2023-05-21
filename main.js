/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/one.js":
/*!************************!*\
  !*** ./modules/one.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst oneFunc = () => {\r\n\tconst timerDays = document.getElementById('timer-days')\r\n\tconst timerHours = document.getElementById('timer-hours')\r\n\tconst timerMinute = document.getElementById('timer-minutes')\r\n\tconst timerSeconds = document.getElementById('timer-seconds')\r\n\r\n\tconst getTimeRemaining = (deadLine) => { \r\n\tlet dateStop = new Date(deadLine).getTime()  //время от наешго дедлайна\r\n\tlet dateNow = new Date().getTime()\t//время в текуешей даты\r\n\tlet timeRemainig = (dateStop - dateNow) / 1000  // разница(оставшееся время)в секундах\r\n\t\r\n\tlet days = Math.floor(timeRemainig / 60 / 60 / 24)\r\n\tlet hours = Math.floor((timeRemainig / 60 / 60 ) % 24)\r\n\tlet minutes = Math.floor((timeRemainig / 60) % 60)  \r\n\tlet seconds = Math.floor(timeRemainig % 60)   \t\t\t//оркугляем\r\n\t\r\n\treturn {\t\t\t\t\t\t\t\t\t\t\t\t//функция во\r\n\t\tdays,\r\n\t\thours,\r\n\t\tminutes,\r\n\t\tseconds\r\n\t}\t\r\n\t}\r\n\t// setInterval(getTimeRemaining,1000,'12 march 2023');      //у сет интервала есть неоябз параметр,который переадеься в фнукцию\r\n}\r\n\r\nconst updateClock = () => {\r\n\tlet getTime = getTimeRemaining('12 march 2023')\r\n\tconsole.log(getTime);\r\n// \ttimerDays.textContent = days\r\n// \ttimerHours.textContent = hours \r\n// \ttimerMinute.textContent = minutes\r\n// \ttimerSeconds.textContent = seconds\r\n}\r\nupdateClock()\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oneFunc);\r\n\n\n//# sourceURL=webpack:///./modules/one.js?");

/***/ }),

/***/ "./modules/two.js":
/*!************************!*\
  !*** ./modules/two.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst twoFunc = () => {\r\n\tconsole.log('two.js');\r\n\t\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twoFunc);\n\n//# sourceURL=webpack:///./modules/two.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/one */ \"./modules/one.js\");\n/* harmony import */ var _modules_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/two */ \"./modules/two.js\");\n\r\n\r\n(0,_modules_one__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;