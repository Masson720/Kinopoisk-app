"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/slider/slider.tsx":
/*!******************************************!*\
  !*** ./src/components/slider/slider.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/slider/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Slider = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        transform: \"translateX(0px)\"\n    }), move = ref[0], setMove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), transform = ref1[0], setTransform = ref1[1];\n    console.log(transform);\n    var switcher = function(e) {\n        var shift = transform;\n        if (e && shift > 0) {\n            shift -= 200;\n            setTransform(shift);\n        } else {\n            shift += 200;\n            setTransform(shift);\n        }\n        setMove((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, move), {\n            transform: \"translateX(\".concat(shift, \"px)\")\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + \" \" + (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().left),\n                    onClick: function() {\n                        return switcher(false);\n                    },\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slider),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sliderLine),\n                        style: move,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + \" \" + (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().right),\n                    onClick: function() {\n                        return switcher(true);\n                    },\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Slider, \"lZChmhEHEuxeI/FF8fTyOQXi+kU=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFvQztBQUNMOztBQUV4QixJQUFNRSxNQUFNLEdBQUcsV0FBTTs7SUFDeEIsSUFBd0JELEdBQXdDLEdBQXhDQSwrQ0FBUSxDQUFDO1FBQUNFLFNBQVMsRUFBRSxpQkFBaUI7S0FBQyxDQUFDLEVBQXpEQyxJQUFJLEdBQWFILEdBQXdDLEdBQXJELEVBQUVJLE9BQU8sR0FBSUosR0FBd0MsR0FBNUM7SUFDcEIsSUFBa0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBdENFLFNBQVMsR0FBa0JGLElBQVcsR0FBN0IsRUFBRUssWUFBWSxHQUFJTCxJQUFXLEdBQWY7SUFDOUJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxTQUFTLENBQUM7SUFFdEIsSUFBTU0sUUFBUSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUNwQixJQUFJQyxLQUFLLEdBQUdSLFNBQVM7UUFDckIsSUFBR08sQ0FBQyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxFQUFDO1lBQ2RBLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDYkwsWUFBWSxDQUFDSyxLQUFLLENBQUMsQ0FBQztTQUN2QixNQUFJO1lBQ0RBLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDYkwsWUFBWSxDQUFDSyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUNETixPQUFPLENBQUMsd0tBQ0RELElBQUk7WUFBRUQsU0FBUyxFQUFFLGFBQVksQ0FBUSxNQUFHLENBQVRRLEtBQUssRUFBQyxLQUFHLENBQUM7VUFDL0MsQ0FBQztLQUNMO0lBRUQscUJBQU87a0JBQ0gsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFYixnRUFBTTs7OEJBQ2xCLDhEQUFDZSxRQUFNO29CQUFDRixTQUFTLEVBQUViLGtFQUFRLEdBQUcsR0FBRyxHQUFHQSxnRUFBTTtvQkFDMUNpQixPQUFPLEVBQUU7K0JBQU1SLFFBQVEsQ0FBQyxLQUFLLENBQUM7cUJBQUE7OEJBQzVCLEdBQUc7Ozs7O3lCQUFVOzhCQUNmLDhEQUFDRyxLQUFHO29CQUFDQyxTQUFTLEVBQUViLGtFQUFROzhCQUNwQiw0RUFBQ1ksS0FBRzt3QkFBQ0MsU0FBUyxFQUFFYixzRUFBWTt3QkFBRW9CLEtBQUssRUFBRWhCLElBQUk7OzBDQUNyQyw4REFBQ1EsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFYixnRUFBTTs7Ozs7cUNBQVE7MENBQzlCLDhEQUFDWSxLQUFHO2dDQUFDQyxTQUFTLEVBQUViLGdFQUFNOzs7OztxQ0FBUTswQ0FDOUIsOERBQUNZLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRWIsZ0VBQU07Ozs7O3FDQUFROzBDQUM5Qiw4REFBQ1ksS0FBRztnQ0FBQ0MsU0FBUyxFQUFFYixnRUFBTTs7Ozs7cUNBQVE7MENBQzlCLDhEQUFDWSxLQUFHO2dDQUFDQyxTQUFTLEVBQUViLGdFQUFNOzs7OztxQ0FBUTswQ0FDOUIsOERBQUNZLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRWIsZ0VBQU07Ozs7O3FDQUFROzBDQUM5Qiw4REFBQ1ksS0FBRztnQ0FBQ0MsU0FBUyxFQUFFYixnRUFBTTs7Ozs7cUNBQVE7Ozs7Ozs2QkFDNUI7Ozs7O3lCQUVKOzhCQUNOLDhEQUFDZSxRQUFNO29CQUFDRixTQUFTLEVBQUViLGtFQUFRLEdBQUcsR0FBRyxHQUFHQSxpRUFBTztvQkFDbkNpQixPQUFPLEVBQUU7K0JBQU1SLFFBQVEsQ0FBQyxJQUFJLENBQUM7cUJBQUE7OEJBQ25DLEdBQUc7Ozs7O3lCQUFVOzs7Ozs7aUJBQ2I7cUJBQ1A7Q0FDTjtHQXpDWVAsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIudHN4PzczNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFttb3ZlLCBzZXRNb3ZlXSA9IHVzZVN0YXRlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknfSk7XHJcbiAgICBjb25zdCBbdHJhbnNmb3JtLCBzZXRUcmFuc2Zvcm1dID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnNvbGUubG9nKHRyYW5zZm9ybSlcclxuXHJcbiAgICBjb25zdCBzd2l0Y2hlciA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IHNoaWZ0ID0gdHJhbnNmb3JtO1xyXG4gICAgICAgIGlmKGUgJiYgc2hpZnQgPiAwKXtcclxuICAgICAgICAgICAgc2hpZnQgLT0gMjAwO1xyXG4gICAgICAgICAgICBzZXRUcmFuc2Zvcm0oc2hpZnQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaGlmdCArPSAyMDA7XHJcbiAgICAgICAgICAgIHNldFRyYW5zZm9ybShzaGlmdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE1vdmUoe1xyXG4gICAgICAgICAgICAuLi5tb3ZlLCB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c2hpZnR9cHgpYFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm9keX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbiArICcgJyArIHMubGVmdH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICA+eyc+J308L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVyfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZXJMaW5lfSBzdHlsZT17bW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5idXR0b24gKyAnICcgKyBzLnJpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN3aXRjaGVyKHRydWUpfVxyXG4gICAgICAgICAgICA+eyc8J308L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59Il0sIm5hbWVzIjpbInMiLCJ1c2VTdGF0ZSIsIlNsaWRlciIsInRyYW5zZm9ybSIsIm1vdmUiLCJzZXRNb3ZlIiwic2V0VHJhbnNmb3JtIiwiY29uc29sZSIsImxvZyIsInN3aXRjaGVyIiwiZSIsInNoaWZ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keSIsImJ1dHRvbiIsImxlZnQiLCJvbkNsaWNrIiwic2xpZGVyIiwic2xpZGVyTGluZSIsInN0eWxlIiwiaXRlbSIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/slider/slider.tsx\n"));

/***/ })

});