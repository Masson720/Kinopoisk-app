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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/slider/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Slider = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        transform: \"translateX(0px)\"\n    }), move = ref[0], setMove = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), transform = ref1[0], setTransform = ref1[1];\n    var switcher = function(e) {\n        var shift = transform;\n        if (!!e) {\n            if (shift > 0) {\n                shift -= 400;\n                setTransform(shift);\n            }\n        } else if (shift < 1200) {\n            shift += 400;\n            setTransform(shift);\n        }\n        setMove((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, move), {\n            transform: \"translateX(-\".concat(shift, \"px)\")\n        }));\n        console.log(shift);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + \" \" + (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().left),\n                    onClick: function() {\n                        return switcher(true);\n                    },\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slider),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sliderLine),\n                        style: move,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a0000018240d5a608c1066606b949ef8576-1735627-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a0000018240d5a608c1066606b949ef8576-1735627-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a000001823acd80ba5416ddac568b2528ad-1392821-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a00000182418c3120b3565901923a70cf94-1714228-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a0000018226e40a3b8c4ace12c0e3b73e9c-1553916-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a000001823ee2a9f72c042b3245ca87fc6e-469746-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=76563326e6986e14c2a3318f1b173c00-4633509-images-thumbs&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://avatars.mds.yandex.net/i?id=2a000001823ec567459aa59aacf3b1b95e88-399069-fast-images&n=13&exp=1\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://yandex-images.clstorage.net/5cS6c1t33/92788fnSEh1/p_O1t68U6hgwcoyLJ92VLqENdCPNEoaBbJ-isQgZ4z7zXDdJkbfhdgWt_g_FPA2BQvOXkqDUw_UqzJPj9A8bZnHjIKc_lCjZcGQZiScc1an2X3UlmsYS1HncJ7EfSeHroUx2CUtsvCrZdCCWWzSSnsQnAMa1RIWnugIdpnGbSPzmtvS2bU3rm7wqgY7hnp_m_sVwbhqYlwmrzbo8loE9IC8FYdwIqfbkkv3u2lJ4UZgJ7UIBvYMQYbeIVrhwF4M4o74w8aDCoB15ZUbArlqVpDaIvuhS3tRCLgW28teI_WmtxigWSaUxYlIyptDddhwfwKoChjdMlyV0BxM3sN6DcW51sD9gBODZeejByqrSku4zzPXqnp1czSiCvfXdS_UhZwyqkICtcGefuKbRXX7dUcYni4v_Rp2i_UfQ_zFTQXSn-nQ_4s8k0H7gDkLhEN3j-Y_zKhZRE0mgyjO62E02ZGyM6B7H57dhGP8n0pq31dfMJw-CMA8SI_2GFPM41wnxKbe1fW2NYto25EzCrZRW6biEOy6clRHAa82wOpmEPSlizSdcyed-q9M2r9dSMFEfD-4OBHeG2m57A1o9tRFIs-36OXDmQW2QdCeCTm1anewxSznjmpFZimsIejuZRzwkpc0sU4HndeHbfm3SF3tRmMFrR0W6gtzgM88TM7iew3ZssDQy7satk_zjCwDtntVr-wZ-ZxsVU8vgC7KxFkt66qQK5Z4K4LBiVLNgl1C3HNCI4UZHek9abbsMmvrxlo5yITi8ca7KKl19aADJ4JGQ6r4Mfi9Q0VKJ5Inz-NgD-6krCiifR242Y5J26x-Yt5wRxyRPBbeBkuD9TpL1dRiFday0N_YvAqJZtiwDBSBVnqb3RTcsU5hSQaeK833Qzv0hLobhmEXhOGaTc2OfUDdRlEdizUY1hJ9pPAQXv_lSBX2u8j91pkXgUvwpiwMv15ShcQc84FdZ0QFmhXC1FQ\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\",\n                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button) + \" \" + (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().right),\n                    onClick: function() {\n                        return switcher(false);\n                    },\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\components\\\\slider\\\\slider.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Slider, \"lZChmhEHEuxeI/FF8fTyOQXi+kU=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUNBQVE7MENBQ25qQyw4REFBQ3FCLEtBQUc7Z0NBQUNDLEdBQUcsRUFBRSxFQUFFO2dDQUFFVCxTQUFTLEVBQUViLGdFQUFNOzs7OztxQ0FBUTs7Ozs7OzZCQUNyQzs7Ozs7eUJBRUo7OEJBQ04sOERBQUNlLFFBQU07b0JBQUNGLFNBQVMsRUFBRWIsa0VBQVEsR0FBRyxHQUFHLEdBQUdBLGlFQUFPO29CQUNuQ2lCLE9BQU8sRUFBRTsrQkFBTVYsUUFBUSxDQUFDLEtBQUssQ0FBQztxQkFBQTs4QkFDcEMsR0FBRzs7Ozs7eUJBQVU7Ozs7OztpQkFDYjtxQkFDUDtDQUNOO0dBL0NZTCxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci50c3g/NzM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vdmUsIHNldE1vdmVdID0gdXNlU3RhdGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KSd9KTtcclxuICAgIGNvbnN0IFt0cmFuc2Zvcm0sIHNldFRyYW5zZm9ybV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3dpdGNoZXIgPSAoZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGxldCBzaGlmdCA9IHRyYW5zZm9ybTtcclxuICAgICAgICBpZighIWUpe1xyXG4gICAgICAgICAgICBpZihzaGlmdCA+IDApe1xyXG4gICAgICAgICAgICAgICAgc2hpZnQgLT0gNDAwO1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNmb3JtKHNoaWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHNoaWZ0IDwgMTIwMCl7XHJcbiAgICAgICAgICAgIHNoaWZ0ICs9IDQwMDtcclxuICAgICAgICAgICAgc2V0VHJhbnNmb3JtKHNoaWZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TW92ZSh7XHJcbiAgICAgICAgICAgIC4uLm1vdmUsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7c2hpZnR9cHgpYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coc2hpZnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYm9keX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbiArICcgJyArIHMubGVmdH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgID57Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zbGlkZXJ9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNsaWRlckxpbmV9IHN0eWxlPXttb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9pP2lkPTJhMDAwMDAxODI0MGQ1YTYwOGMxMDY2NjA2Yjk0OWVmODU3Ni0xNzM1NjI3LWZhc3QtaW1hZ2VzJm49MTMmZXhwPTEnfSBjbGFzc05hbWU9e3MuaXRlbX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvaT9pZD0yYTAwMDAwMTgyNDBkNWE2MDhjMTA2NjYwNmI5NDllZjg1NzYtMTczNTYyNy1mYXN0LWltYWdlcyZuPTEzJmV4cD0xJ30gY2xhc3NOYW1lPXtzLml0ZW19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2k/aWQ9MmEwMDAwMDE4MjNhY2Q4MGJhNTQxNmRkYWM1NjhiMjUyOGFkLTEzOTI4MjEtZmFzdC1pbWFnZXMmbj0xMyZleHA9MSd9IGNsYXNzTmFtZT17cy5pdGVtfT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9pP2lkPTJhMDAwMDAxODI0MThjMzEyMGIzNTY1OTAxOTIzYTcwY2Y5NC0xNzE0MjI4LWZhc3QtaW1hZ2VzJm49MTMmZXhwPTEnfSBjbGFzc05hbWU9e3MuaXRlbX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvaT9pZD0yYTAwMDAwMTgyMjZlNDBhM2I4YzRhY2UxMmMwZTNiNzNlOWMtMTU1MzkxNi1mYXN0LWltYWdlcyZuPTEzJmV4cD0xJ30gY2xhc3NOYW1lPXtzLml0ZW19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2k/aWQ9MmEwMDAwMDE4MjNlZTJhOWY3MmMwNDJiMzI0NWNhODdmYzZlLTQ2OTc0Ni1mYXN0LWltYWdlcyZuPTEzJmV4cD0xJ30gY2xhc3NOYW1lPXtzLml0ZW19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2k/aWQ9NzY1NjMzMjZlNjk4NmUxNGMyYTMzMThmMWIxNzNjMDAtNDYzMzUwOS1pbWFnZXMtdGh1bWJzJm49MTMmZXhwPTEnfSBjbGFzc05hbWU9e3MuaXRlbX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvaT9pZD0yYTAwMDAwMTgyM2VjNTY3NDU5YWE1OWFhY2YzYjFiOTVlODgtMzk5MDY5LWZhc3QtaW1hZ2VzJm49MTMmZXhwPTEnfSBjbGFzc05hbWU9e3MuaXRlbX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eydodHRwczovL3lhbmRleC1pbWFnZXMuY2xzdG9yYWdlLm5ldC81Y1M2YzF0MzMvOTI3ODhmblNFaDEvcF9PMXQ2OFU2aGd3Y295TEo5MlZMcUVOZENQTkVvYUJiSi1pc1FnWjR6N3pYRGRKa2JmaGRnV3RfZ19GUEEyQlF2T1hrcURVd19VcXpKUGo5QThiWm5IaklLY19sQ2paY0dRWmlTY2MxYW4yWDNVbG1zWVMxSG5jSjdFZlNlSHJvVXgyQ1V0c3ZDclpkQ0NXV3pTU25zUW5BTWExUklXbnVnSWRwbkdiU1B6bXR2UzJiVTNybTd3cWdZN2hucF9tX3NWd2JocVlsd21yemJvOGxvRTlJQzhGWWR3SXFmYmtrdjN1MmxKNFVaZ0o3VUlCdllNUVliZUlWcmh3RjRNNG83NHc4YURDb0IxNVpVYkFybHFWcERhSXZ1aFMzdFJDTGdXMjh0ZUlfV210eGlnV1NhVXhZbEl5cHREZGRod2Z3S29DaGpkTWx5VjBCeE0zc042RGNXNTFzRDlnQk9EWmVlakJ5cXJTa3U0enpQWHFucDFjelNpQ3ZmWGRTX1VoWnd5cWtJQ3RjR2VmdUtiUlhYN2RVY1luaTR2X1JwMmlfVWZRX3pGVFFYU24tblFfNHM4azBIN2dEa0xoRU4zai1ZX3pLaFpSRTBtZ3lqTzYyRTAyWkd5TTZCN0g1N2RoR1A4bjBwcTMxZGZNSnctQ01BOFNJXzJHRlBNNDF3bnhLYmUxZlcyTll0bzI1RXpDclpSVzZiaUVPeTZjbFJIQWE4MndPcG1FUFNsaXpTZGN5ZWQtcTlNMnI5ZFNNRkVmRC00T0JIZUcybTU3QTFvOXRSRklzLTM2T1hEbVFXMlFkQ2VDVG0xYW5ld3hTem5qbXBGWmltc0llanVaUnp3a3BjMHNVNEhuZGVIYmZtM1NGM3RSbU1GclIwVzZndHpnTTg4VE03aWV3M1pzc0RReTdzYXRrX3pqQ3dEdG50VnItd1otWnhzVlU4dmdDN0t4Rmt0NjZxUUs1WjRLNExCaVZMTmdsMUMzSE5DSTRVWkhlazlhYmJzTW12cnhsbzV5SVRpOGNhN0tLbDE5YUFESjRKR1E2cjRNZmk5UTBWS0o1SW56LU5nRC02a3JDaWlmUjI0Mlk1SjI2eC1ZdDV3Unh5UlBCYmVCa3VEOVRwTDFkUmlGZGF5ME5fWXZBcUpadGl3REJTQlZucWIzUlRjc1U1aFNRYWVLODMzUXp2MGhMb2JobUVYaE9HYVRjMk9mVURkUmxFZGl6VVkxaEo5cFBBUVh2X2xTQlgydThqOTFwa1hnVXZ3cGl3TXYxNVNoY1FjODRGZFowUUZtaFhDMUZRJ30gY2xhc3NOYW1lPXtzLml0ZW19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnJ30gY2xhc3NOYW1lPXtzLml0ZW19PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuYnV0dG9uICsgJyAnICsgcy5yaWdodH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hlcihmYWxzZSl9XHJcbiAgICAgICAgICAgID57JzwnfTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbn0iXSwibmFtZXMiOlsicyIsInVzZVN0YXRlIiwiU2xpZGVyIiwidHJhbnNmb3JtIiwibW92ZSIsInNldE1vdmUiLCJzZXRUcmFuc2Zvcm0iLCJzd2l0Y2hlciIsImUiLCJzaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiYnV0dG9uIiwibGVmdCIsIm9uQ2xpY2siLCJzbGlkZXIiLCJzbGlkZXJMaW5lIiwic3R5bGUiLCJpbWciLCJzcmMiLCJpdGVtIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/slider/slider.tsx\n"));

/***/ })

});