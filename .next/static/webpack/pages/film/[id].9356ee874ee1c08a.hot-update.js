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

/***/ "./src/components/film/description/infoBlock/InfoBlock.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/film/description/infoBlock/InfoBlock.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InfoBlock\": function() { return /* binding */ InfoBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/film/description/infoBlock/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../slider/slider */ \"./src/components/slider/slider.tsx\");\n/* harmony import */ var _facts_facts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facts/facts */ \"./src/components/film/description/infoBlock/facts/facts.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar InfoBlock = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), descriptionMode = ref[0], setDescriptionMode = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), actorsMode = ref1[0], setActorsMode = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), factsMode = ref2[0], setFactsMode = ref2[1];\n    var descriptionSwitcher = function() {\n        setDescriptionMode(true);\n        setActorsMode(false);\n        setFactsMode(false);\n    };\n    var actorsSwitcher = function() {\n        setDescriptionMode(false);\n        setActorsMode(true);\n        setFactsMode(false);\n    };\n    var factsSwitcher = function() {\n        setDescriptionMode(false);\n        setActorsMode(false);\n        setFactsMode(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttons),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: descriptionMode ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonOn) : null,\n                            onClick: descriptionSwitcher,\n                            children: \"Description\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: actorsMode ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonOn) : null,\n                            onClick: actorsSwitcher,\n                            children: \"Actors\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: factsMode ? (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonOn) : null,\n                            onClick: factsSwitcher,\n                            children: \"Facts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().upper)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().info),\n                    children: [\n                        descriptionMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about),\n                            children: \"Описание\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 35\n                        }, _this) : null,\n                        actorsMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_slider_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 35\n                                }, _this),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 30\n                        }, _this) : null,\n                        factsMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_facts_facts__WEBPACK_IMPORTED_MODULE_3__.Facts, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 34\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, _this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().moreFilms),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Similar films\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_slider_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\film\\\\description\\\\infoBlock\\\\InfoBlock.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(InfoBlock, \"5SQrbwcgQlDkuH7LjZbDIDo/nNc=\");\n_c = InfoBlock;\nvar _c;\n$RefreshReg$(_c, \"InfoBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9maWxtL2Rlc2NyaXB0aW9uL2luZm9CbG9jay9JbmZvQmxvY2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFvQztBQUNMO0FBQ2U7QUFDVjs7QUFFN0IsSUFBTUksU0FBUyxHQUFHLFdBQU07O0lBQzNCLElBQThDSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJESSxlQUFlLEdBQXdCSixHQUFjLEdBQXRDLEVBQUVLLGtCQUFrQixHQUFJTCxHQUFjLEdBQWxCO0lBQzFDLElBQW9DQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVDTSxVQUFVLEdBQW1CTixJQUFlLEdBQWxDLEVBQUVPLGFBQWEsR0FBSVAsSUFBZSxHQUFuQjtJQUNoQyxJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ1EsU0FBUyxHQUFrQlIsSUFBZSxHQUFqQyxFQUFFUyxZQUFZLEdBQUlULElBQWUsR0FBbkI7SUFFOUIsSUFBTVUsbUJBQW1CLEdBQUcsV0FBTTtRQUM5Qkwsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQ3hCRSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3BCRSxZQUFZLENBQUMsS0FBSyxDQUFDO0tBQ3RCO0lBRUQsSUFBTUUsY0FBYyxHQUFHLFdBQU07UUFDekJOLGtCQUFrQixDQUFDLEtBQUssQ0FBQztRQUN6QkUsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQkUsWUFBWSxDQUFDLEtBQUssQ0FBQztLQUN0QjtJQUVELElBQU1HLGFBQWEsR0FBRyxXQUFNO1FBQ3hCUCxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDekJFLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDcEJFLFlBQVksQ0FBQyxJQUFJLENBQUM7S0FDckI7SUFFRCxxQkFBTztrQkFDSCw0RUFBQ0ksS0FBRztZQUFDQyxTQUFTLEVBQUVmLGdFQUFNOzs4QkFDbEIsOERBQUNjLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWYsbUVBQVM7O3NDQUNyQiw4REFBQ2tCLFFBQU07NEJBQ0hILFNBQVMsRUFBRVYsZUFBZSxHQUFFTCxvRUFBVSxHQUFHLElBQUk7NEJBQzdDb0IsT0FBTyxFQUFFVCxtQkFBbUI7c0NBQy9CLGFBQVc7Ozs7O2lDQUFTO3NDQUNyQiw4REFBQ08sUUFBTTs0QkFDSEgsU0FBUyxFQUFFUixVQUFVLEdBQUVQLG9FQUFVLEdBQUcsSUFBSTs0QkFDeENvQixPQUFPLEVBQUVSLGNBQWM7c0NBQzFCLFFBQU07Ozs7O2lDQUFTO3NDQUNoQiw4REFBQ00sUUFBTTs0QkFDSEgsU0FBUyxFQUFFTixTQUFTLEdBQUVULG9FQUFVLEdBQUcsSUFBSTs0QkFDdkNvQixPQUFPLEVBQUVQLGFBQWE7c0NBQ3pCLE9BQUs7Ozs7O2lDQUFTOzs7Ozs7eUJBQ2I7OEJBQ04sOERBQUNRLElBQUU7b0JBQUNOLFNBQVMsRUFBRWYsaUVBQU87Ozs7O3lCQUFHOzhCQUN6Qiw4REFBQ2MsS0FBRztvQkFBQ0MsU0FBUyxFQUFFZixnRUFBTTs7d0JBQ2pCSyxlQUFlLGlCQUFFLDhEQUFDUyxLQUFHOzRCQUFDQyxTQUFTLEVBQUVmLGlFQUFPO3NDQUFFLFVBQVE7Ozs7O2lDQUFNLEdBQUcsSUFBSTt3QkFDL0RPLFVBQVUsaUJBQUUsOERBQUNPLEtBQUc7OzhDQUFDLDhEQUFDWixrREFBTTs7Ozt5Q0FBRTtnQ0FBQSxHQUFDOzs7Ozs7aUNBQU0sR0FBRyxJQUFJO3dCQUN4Q08sU0FBUyxpQkFBRSw4REFBQ0ssS0FBRztzQ0FBQyw0RUFBQ1gsK0NBQUs7Ozs7cUNBQUU7Ozs7O2lDQUFNLEdBQUcsSUFBSTs7Ozs7O3lCQUNwQzs4QkFDTiw4REFBQ1csS0FBRztvQkFBQ0MsU0FBUyxFQUFFZixxRUFBVzs7c0NBQ3ZCLDhEQUFDMEIsSUFBRTtzQ0FBQyxlQUFhOzs7OztpQ0FBSztzQ0FDdEIsOERBQUN4QixrREFBTTs7OztpQ0FBRTs7Ozs7O3lCQUNQOzs7Ozs7aUJBRUo7cUJBR1A7Q0FDTjtHQXREWUUsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZpbG0vZGVzY3JpcHRpb24vaW5mb0Jsb2NrL0luZm9CbG9jay50c3g/ODZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7U2xpZGVyfSBmcm9tIFwiLi4vLi4vLi4vc2xpZGVyL3NsaWRlclwiO1xyXG5pbXBvcnQge0ZhY3RzfSBmcm9tIFwiLi9mYWN0cy9mYWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9CbG9jayA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbk1vZGUsIHNldERlc2NyaXB0aW9uTW9kZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFthY3RvcnNNb2RlLCBzZXRBY3RvcnNNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmYWN0c01vZGUsIHNldEZhY3RzTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblN3aXRjaGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uTW9kZSh0cnVlKVxyXG4gICAgICAgIHNldEFjdG9yc01vZGUoZmFsc2UpXHJcbiAgICAgICAgc2V0RmFjdHNNb2RlKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdG9yc1N3aXRjaGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uTW9kZShmYWxzZSlcclxuICAgICAgICBzZXRBY3RvcnNNb2RlKHRydWUpXHJcbiAgICAgICAgc2V0RmFjdHNNb2RlKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhY3RzU3dpdGNoZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb25Nb2RlKGZhbHNlKVxyXG4gICAgICAgIHNldEFjdG9yc01vZGUoZmFsc2UpXHJcbiAgICAgICAgc2V0RmFjdHNNb2RlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm9keX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGVzY3JpcHRpb25Nb2RlPyBzLmJ1dHRvbk9uIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZXNjcmlwdGlvblN3aXRjaGVyfVxyXG4gICAgICAgICAgICAgICAgPkRlc2NyaXB0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RvcnNNb2RlPyBzLmJ1dHRvbk9uIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RvcnNTd2l0Y2hlcn1cclxuICAgICAgICAgICAgICAgID5BY3RvcnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ZhY3RzTW9kZT8gcy5idXR0b25PbiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZmFjdHNTd2l0Y2hlcn1cclxuICAgICAgICAgICAgICAgID5GYWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17cy51cHBlcn0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbmZvfT5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbk1vZGU/IDxkaXYgY2xhc3NOYW1lPXtzLmFib3V0fT7QntC/0LjRgdCw0L3QuNC1PC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHthY3RvcnNNb2RlPyA8ZGl2PjxTbGlkZXIvPiA8L2Rpdj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge2ZhY3RzTW9kZT8gPGRpdj48RmFjdHMvPjwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5tb3JlRmlsbXN9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlNpbWlsYXIgZmlsbXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC8+XHJcbn0iXSwibmFtZXMiOlsicyIsInVzZVN0YXRlIiwiU2xpZGVyIiwiRmFjdHMiLCJJbmZvQmxvY2siLCJkZXNjcmlwdGlvbk1vZGUiLCJzZXREZXNjcmlwdGlvbk1vZGUiLCJhY3RvcnNNb2RlIiwic2V0QWN0b3JzTW9kZSIsImZhY3RzTW9kZSIsInNldEZhY3RzTW9kZSIsImRlc2NyaXB0aW9uU3dpdGNoZXIiLCJhY3RvcnNTd2l0Y2hlciIsImZhY3RzU3dpdGNoZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiYnV0dG9ucyIsImJ1dHRvbiIsImJ1dHRvbk9uIiwib25DbGljayIsImhyIiwidXBwZXIiLCJpbmZvIiwiYWJvdXQiLCJtb3JlRmlsbXMiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/film/description/infoBlock/InfoBlock.tsx\n"));

/***/ })

});