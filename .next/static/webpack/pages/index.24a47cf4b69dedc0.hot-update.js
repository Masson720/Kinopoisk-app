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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/slider/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Slider = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        transform: \"translateX(0px)\"\n    }), move = ref[0], setMove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), transform = ref1[0], setTransform = ref1[1];\n    var switcher = function(e) {\n        var shift = transform;\n        if (!!e) {\n            if (shift > 0) {\n                shift -= 400;\n                setTransform(shift);\n            }\n        } else if (shift < 1200) {\n            shift += 400;\n            setTransform(shift);\n        }\n        setMove((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, move), {\n            transform: \"translateX(-\".concat(shift, \"px)\")\n        }));\n        console.log(shift);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + \" \" + (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().left),\n                    onClick: function() {\n                        return switcher(true);\n                    },\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slider),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sliderLine),\n                        style: move,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a0000018240d5a608c1066606b949ef8576-1735627-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a0000018240d5a608c1066606b949ef8576-1735627-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a000001823acd80ba5416ddac568b2528ad-1392821-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a00000182418c3120b3565901923a70cf94-1714228-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + \" \" + (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().right),\n                    onClick: function() {\n                        return switcher(false);\n                    },\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Slider, \"lZChmhEHEuxeI/FF8fTyOQXi+kU=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDcUIsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFLEVBQUU7Z0NBQUVULFNBQVMsRUFBRWIsZ0VBQU07Ozs7O3FDQUFROzs7Ozs7NkJBQ3JDOzs7Ozt5QkFFSjs4QkFDTiw4REFBQ2UsUUFBTTtvQkFBQ0YsU0FBUyxFQUFFYixrRUFBUSxHQUFHLEdBQUcsR0FBR0EsaUVBQU87b0JBQ25DaUIsT0FBTyxFQUFFOytCQUFNVixRQUFRLENBQUMsS0FBSyxDQUFDO3FCQUFBOzhCQUNwQyxHQUFHOzs7Ozt5QkFBVTs7Ozs7O2lCQUNiO3FCQUNQO0NBQ047R0EvQ1lMLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLnRzeD83MzYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW92ZSwgc2V0TW92ZV0gPSB1c2VTdGF0ZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJ30pO1xyXG4gICAgY29uc3QgW3RyYW5zZm9ybSwgc2V0VHJhbnNmb3JtXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcbiAgICBjb25zdCBzd2l0Y2hlciA9IChlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgbGV0IHNoaWZ0ID0gdHJhbnNmb3JtO1xyXG4gICAgICAgIGlmKCEhZSl7XHJcbiAgICAgICAgICAgIGlmKHNoaWZ0ID4gMCl7XHJcbiAgICAgICAgICAgICAgICBzaGlmdCAtPSA0MDA7XHJcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm0oc2hpZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoc2hpZnQgPCAxMjAwKXtcclxuICAgICAgICAgICAgc2hpZnQgKz0gNDAwO1xyXG4gICAgICAgICAgICBzZXRUcmFuc2Zvcm0oc2hpZnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRNb3ZlKHtcclxuICAgICAgICAgICAgLi4ubW92ZSwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtzaGlmdH1weClgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhzaGlmdClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ib2R5fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuYnV0dG9uICsgJyAnICsgcy5sZWZ0fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hlcih0cnVlKX1cclxuICAgICAgICAgICAgPnsnPid9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlcn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2xpZGVyTGluZX0gc3R5bGU9e21vdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2k/aWQ9MmEwMDAwMDE4MjQwZDVhNjA4YzEwNjY2MDZiOTQ5ZWY4NTc2LTE3MzU2MjctZmFzdC1pbWFnZXMmbj0xMyZleHA9MSd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9pP2lkPTJhMDAwMDAxODI0MGQ1YTYwOGMxMDY2NjA2Yjk0OWVmODU3Ni0xNzM1NjI3LWZhc3QtaW1hZ2VzJm49MTMmZXhwPTEnfSBjbGFzc05hbWU9e3MuaXRlbX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvaT9pZD0yYTAwMDAwMTgyM2FjZDgwYmE1NDE2ZGRhYzU2OGIyNTI4YWQtMTM5MjgyMS1mYXN0LWltYWdlcyZuPTEzJmV4cD0xJ30gY2xhc3NOYW1lPXtzLml0ZW19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2k/aWQ9MmEwMDAwMDE4MjQxOGMzMTIwYjM1NjU5MDE5MjNhNzBjZjk0LTE3MTQyMjgtZmFzdC1pbWFnZXMmbj0xMyZleHA9MSd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jyd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jyd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jyd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jyd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jyd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jyd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbiArICcgJyArIHMucmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoZXIoZmFsc2UpfVxyXG4gICAgICAgICAgICA+eyc8J308L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59Il0sIm5hbWVzIjpbInMiLCJ1c2VTdGF0ZSIsIlNsaWRlciIsInRyYW5zZm9ybSIsIm1vdmUiLCJzZXRNb3ZlIiwic2V0VHJhbnNmb3JtIiwic3dpdGNoZXIiLCJlIiwic2hpZnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9keSIsImJ1dHRvbiIsImxlZnQiLCJvbkNsaWNrIiwic2xpZGVyIiwic2xpZGVyTGluZSIsInN0eWxlIiwiaW1nIiwic3JjIiwiaXRlbSIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/slider/slider.tsx\n"));

/***/ })

});