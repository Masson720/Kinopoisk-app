"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/film/[id]",{

/***/ "./src/components/film/film.tsx":
/*!**************************************!*\
  !*** ./src/components/film/film.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/film/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description/description */ \"./src/components/film/description/description.tsx\");\nvar _this = undefined;\n\n\n// @ts-ignore\n\n\nvar Film = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().back),\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\film.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\film.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_description_description__WEBPACK_IMPORTED_MODULE_2__.Description, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\film.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Film;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Film);\nvar _c;\n$RefreshReg$(_c, \"Film\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9maWxtL2ZpbG0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ3BDLGFBQWE7QUFDZ0I7QUFDeUI7QUFHdEQsSUFBTUcsSUFBSSxHQUFHLFdBQU07SUFFZixxQkFBTzs7MEJBQ0gsOERBQUNGLGtEQUFJO2dCQUFDRyxJQUFJLEVBQUMsR0FBRzswQkFDViw0RUFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFFTixnRUFBTTs4QkFDakIsR0FBRzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNIOzBCQUNQLDhEQUFDRSxpRUFBVzs7OztxQkFBRTs7b0JBQ2Y7Q0FDTjtBQVZLQyxLQUFBQSxJQUFJO0FBWVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9maWxtL2ZpbG0udHN4P2M4MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge0Rlc2NyaXB0aW9ufSBmcm9tIFwiLi9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IEZpbG0gPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJhY2t9PlxyXG4gICAgICAgICAgICAgICAgeyc8J31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxEZXNjcmlwdGlvbi8+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsbTsiXSwibmFtZXMiOlsicyIsIkxpbmsiLCJEZXNjcmlwdGlvbiIsIkZpbG0iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/film/film.tsx\n"));

/***/ })

});