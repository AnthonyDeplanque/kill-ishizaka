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

/***/ "./src/canvas/Canvas.ts":
/*!******************************!*\
  !*** ./src/canvas/Canvas.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CANVAS = void 0;\r\nexports.CANVAS = document.getElementById(\"canvas\");\r\n\n\n//# sourceURL=webpack://test/./src/canvas/Canvas.ts?");

/***/ }),

/***/ "./src/canvas/Context.ts":
/*!*******************************!*\
  !*** ./src/canvas/Context.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CONTEXT = void 0;\r\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\r\nexports.CONTEXT = Canvas_1.CANVAS.getContext(\"2d\");\r\n\n\n//# sourceURL=webpack://test/./src/canvas/Context.ts?");

/***/ }),

/***/ "./src/canvas/clearCanvas.ts":
/*!***********************************!*\
  !*** ./src/canvas/clearCanvas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.clearCanvas = void 0;\r\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/canvas/Canvas.ts\");\r\nvar Context_1 = __webpack_require__(/*! ./Context */ \"./src/canvas/Context.ts\");\r\nvar clearCanvas = function () { return Context_1.CONTEXT.clearRect(0, 0, Canvas_1.CANVAS.width, Canvas_1.CANVAS.height); };\r\nexports.clearCanvas = clearCanvas;\r\n\n\n//# sourceURL=webpack://test/./src/canvas/clearCanvas.ts?");

/***/ }),

/***/ "./src/classes/Star.ts":
/*!*****************************!*\
  !*** ./src/classes/Star.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Star = void 0;\r\nvar Transparency_1 = __webpack_require__(/*! ../variables/Transparency */ \"./src/variables/Transparency.ts\");\r\nvar Canvas_1 = __webpack_require__(/*! ../canvas/Canvas */ \"./src/canvas/Canvas.ts\");\r\nvar Context_1 = __webpack_require__(/*! ../canvas/Context */ \"./src/canvas/Context.ts\");\r\nvar randomize_1 = __importDefault(__webpack_require__(/*! ../utils/randomize */ \"./src/utils/randomize.ts\"));\r\nvar Star = (function () {\r\n    function Star(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.size = (0, randomize_1.default)(1, 4);\r\n        this.speed = this.size * 2;\r\n        this.color_r = (0, randomize_1.default)(150, 255);\r\n        this.color_g = (0, randomize_1.default)(150, 255);\r\n        this.color_b = (0, randomize_1.default)(150, 255);\r\n        this.color = \"rgba(\".concat(this.color_r, \", \").concat(this.color_g, \", \").concat(this.color_b, \", \").concat(Transparency_1.STAR_TRANSPARENCY, \")\");\r\n    }\r\n    ;\r\n    Star.prototype.draw = function () {\r\n        Context_1.CONTEXT.fillStyle = this.color;\r\n        Context_1.CONTEXT.beginPath();\r\n        Context_1.CONTEXT.arc(this.x + this.size, this.y + this.size, this.size / 2, 0, Math.PI * 2);\r\n        Context_1.CONTEXT.fill();\r\n        Context_1.CONTEXT.closePath();\r\n    };\r\n    ;\r\n    Star.prototype.update = function () {\r\n        this.y += this.speed;\r\n        if (this.y > Canvas_1.CANVAS.height) {\r\n            this.y = 0;\r\n            this.x = (0, randomize_1.default)(1, Canvas_1.CANVAS.width);\r\n        }\r\n    };\r\n    Star.prototype.run = function () {\r\n        this.draw();\r\n        this.update();\r\n    };\r\n    return Star;\r\n}());\r\nexports.Star = Star;\r\n\n\n//# sourceURL=webpack://test/./src/classes/Star.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar clearCanvas_1 = __webpack_require__(/*! ./canvas/clearCanvas */ \"./src/canvas/clearCanvas.ts\");\r\nvar starDust_1 = __webpack_require__(/*! ./variables/background/starDust */ \"./src/variables/background/starDust.ts\");\r\nfunction gameLoop() {\r\n    (0, clearCanvas_1.clearCanvas)();\r\n    starDust_1.STARDUST.forEach(function (star) { return star.run(); });\r\n    window.requestAnimationFrame(gameLoop);\r\n}\r\ngameLoop();\r\n\n\n//# sourceURL=webpack://test/./src/index.ts?");

/***/ }),

/***/ "./src/utils/randomize.ts":
/*!********************************!*\
  !*** ./src/utils/randomize.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar randomize = function (min, max) { return Math.trunc(Math.random() * (max + 1 - min) + min); };\r\nexports[\"default\"] = randomize;\r\n\n\n//# sourceURL=webpack://test/./src/utils/randomize.ts?");

/***/ }),

/***/ "./src/variables/Transparency.ts":
/*!***************************************!*\
  !*** ./src/variables/Transparency.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.STAR_TRANSPARENCY = void 0;\r\nexports.STAR_TRANSPARENCY = 0.8;\r\n\n\n//# sourceURL=webpack://test/./src/variables/Transparency.ts?");

/***/ }),

/***/ "./src/variables/background/starDust.ts":
/*!**********************************************!*\
  !*** ./src/variables/background/starDust.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.STARDUST = void 0;\r\nvar starDustInit_1 = __webpack_require__(/*! ./starDustInit */ \"./src/variables/background/starDustInit.ts\");\r\nexports.STARDUST = (0, starDustInit_1.starDustInit)();\r\n\n\n//# sourceURL=webpack://test/./src/variables/background/starDust.ts?");

/***/ }),

/***/ "./src/variables/background/starDustInit.ts":
/*!**************************************************!*\
  !*** ./src/variables/background/starDustInit.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.starDustInit = void 0;\r\nvar randomize_1 = __importDefault(__webpack_require__(/*! ../../utils/randomize */ \"./src/utils/randomize.ts\"));\r\nvar Star_1 = __webpack_require__(/*! ../../classes/Star */ \"./src/classes/Star.ts\");\r\nvar Canvas_1 = __webpack_require__(/*! ../../canvas/Canvas */ \"./src/canvas/Canvas.ts\");\r\nvar NUMBER_OF_STARS = (0, randomize_1.default)(1, 50);\r\nfunction starDustInit() {\r\n    var arrayOfStars = [];\r\n    for (var i = 0; i < NUMBER_OF_STARS; i++) {\r\n        var star = new Star_1.Star((0, randomize_1.default)(1, Canvas_1.CANVAS.width), (0, randomize_1.default)(1, Canvas_1.CANVAS.height));\r\n        arrayOfStars[i] = (star);\r\n    }\r\n    return arrayOfStars;\r\n}\r\nexports.starDustInit = starDustInit;\r\n\n\n//# sourceURL=webpack://test/./src/variables/background/starDustInit.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;