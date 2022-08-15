/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/constants/api.ts":
/*!******************************!*\
  !*** ./src/constants/api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_TOKEN\": () => (/* binding */ API_TOKEN),\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL)\n/* harmony export */ });\nconst API_URL = \"https://api.kinopoisk.dev\";\nconst API_TOKEN = \"ZHDBFWJ-CX5434X-Q6M5622-XFHHBTC\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2FwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLE9BQU8sR0FBRywyQkFBMkIsQ0FBQztBQUM1QyxNQUFNQyxTQUFTLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5vcG9pc2svLi9zcmMvY29uc3RhbnRzL2FwaS50cz8wYjE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vYXBpLmtpbm9wb2lzay5kZXYnO1xyXG5leHBvcnQgY29uc3QgQVBJX1RPS0VOID0gJ1pIREJGV0otQ1g1NDM0WC1RNk01NjIyLVhGSEhCVEMnOyJdLCJuYW1lcyI6WyJBUElfVVJMIiwiQVBJX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/api.ts\n");

/***/ }),

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getColor\": () => (/* binding */ getColor),\n/* harmony export */   \"getReviewColor\": () => (/* binding */ getReviewColor),\n/* harmony export */   \"getYear\": () => (/* binding */ getYear)\n/* harmony export */ });\nconst getYear = ()=>{\n    return new Date().getFullYear();\n};\nconst getColor = (r)=>{\n    if (r > 7.5) {\n        return \"#008900\";\n    } else if (r > 6.5) {\n        return \"#b3cd1e\";\n    } else if (r > 5.5) {\n        return \"#eaa905\";\n    } else {\n        return \"#e73602\";\n    }\n};\nconst getReviewColor = (a)=>{\n    switch(a){\n        case \"Позитивный\":\n            return \"#cafcda\";\n        case \"Негативный\":\n            return \"#ffbaae\";\n        case \"Нейтральный\":\n            return \"#e8e8e8\";\n        default:\n            return \"#cafcda\";\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9oZWxwZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FBRyxJQUFNO0lBQ3pCLE9BQU8sSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxDQUFDO0NBQ25DO0FBRU0sTUFBTUMsUUFBUSxHQUFHLENBQUNDLENBQVMsR0FBSztJQUNuQyxJQUFHQSxDQUFDLEdBQUcsR0FBRyxFQUFDO1FBQ1AsT0FBTyxTQUFTO0tBQ25CLE1BQUssSUFBR0EsQ0FBQyxHQUFHLEdBQUcsRUFBQztRQUNiLE9BQU8sU0FBUztLQUNuQixNQUFLLElBQUdBLENBQUMsR0FBRyxHQUFHLEVBQUM7UUFDYixPQUFPLFNBQVM7S0FDbkIsTUFBSTtRQUNELE9BQU8sU0FBUztLQUNuQjtDQUNKO0FBRU0sTUFBTUMsY0FBYyxHQUFHLENBQUNDLENBQVMsR0FBSztJQUN6QyxPQUFRQSxDQUFDO1FBQ0wsS0FBSyxZQUFZO1lBQ2IsT0FBTyxTQUFTO1FBQ3BCLEtBQUssWUFBWTtZQUNiLE9BQU8sU0FBUztRQUNwQixLQUFLLGFBQWE7WUFDZCxPQUFPLFNBQVM7UUFDcEI7WUFDSSxPQUFPLFNBQVM7S0FDdkI7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2tpbm9wb2lzay8uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHM/NDQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0WWVhciA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb2xvciA9IChyOiBudW1iZXIpID0+IHtcclxuICAgIGlmKHIgPiA3LjUpe1xyXG4gICAgICAgIHJldHVybiAnIzAwODkwMCdcclxuICAgIH1lbHNlIGlmKHIgPiA2LjUpe1xyXG4gICAgICAgIHJldHVybiAnI2IzY2QxZSdcclxuICAgIH1lbHNlIGlmKHIgPiA1LjUpe1xyXG4gICAgICAgIHJldHVybiBcIiNlYWE5MDVcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwiI2U3MzYwMlwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZXZpZXdDb2xvciA9IChhOiBzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAoYSl7XHJcbiAgICAgICAgY2FzZSAn0J/QvtC30LjRgtC40LLQvdGL0LknOlxyXG4gICAgICAgICAgICByZXR1cm4gJyNjYWZjZGEnXHJcbiAgICAgICAgY2FzZSAn0J3QtdCz0LDRgtC40LLQvdGL0LknOlxyXG4gICAgICAgICAgICByZXR1cm4gJyNmZmJhYWUnXHJcbiAgICAgICAgY2FzZSAn0J3QtdC50YLRgNCw0LvRjNC90YvQuSc6XHJcbiAgICAgICAgICAgIHJldHVybiAnI2U4ZThlOCdcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJyNjYWZjZGEnXHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbImdldFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRDb2xvciIsInIiLCJnZXRSZXZpZXdDb2xvciIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/helpers.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pageProps.initialReduxState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mason\\\\Desktop\\\\Kinopoisk\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 13\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ087QUFDQTtBQUNEO0FBS3RCLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBRTlELE1BQU1DLEtBQUssR0FBR04sd0RBQVEsQ0FBQ0ssU0FBUyxDQUFDRSxpQkFBaUIsQ0FBQztJQUVuRCxNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFFMUIscUJBQ1EsOERBQUNDLGlEQUFRO1FBQUNJLEtBQUssRUFBRUEsS0FBSztrQkFDbEIsNEVBQUNGLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDckIsQ0FDZDtDQUVSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lub3BvaXNrLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5pbXBvcnQgdXNlU3RvcmUgZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0FwcFByb3BzfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApXHJcblxyXG59Il0sIm5hbWVzIjpbInVzZVN0b3JlIiwidXNlUm91dGVyIiwiUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJyb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/KinopoiskService.ts":
/*!******************************************!*\
  !*** ./src/services/KinopoiskService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFilmById\": () => (/* binding */ getFilmById),\n/* harmony export */   \"getReviewById\": () => (/* binding */ getReviewById),\n/* harmony export */   \"getTop\": () => (/* binding */ getTop),\n/* harmony export */   \"kinopoiskAPI\": () => (/* binding */ kinopoiskAPI),\n/* harmony export */   \"useGetFilmByIdQuery\": () => (/* binding */ useGetFilmByIdQuery),\n/* harmony export */   \"useGetReviewByIdQuery\": () => (/* binding */ useGetReviewByIdQuery),\n/* harmony export */   \"useGetTopQuery\": () => (/* binding */ useGetTopQuery)\n/* harmony export */ });\n/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/api */ \"./src/constants/api.ts\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/helpers */ \"./src/helpers/helpers.ts\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/dist/query/react */ \"@reduxjs/toolkit/dist/query/react\");\n/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst kinopoiskAPI = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({\n    reducerPath: \"kinopoiskAPI\",\n    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({\n        baseUrl: _constants_api__WEBPACK_IMPORTED_MODULE_0__.API_URL\n    }),\n    endpoints: (build)=>({\n            getTop: build.query({\n                query: (limit)=>{\n                    return `/movie?field=rating.kp&search=1-10&field=year&search=${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.getYear)()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${_constants_api__WEBPACK_IMPORTED_MODULE_0__.API_TOKEN}`;\n                }\n            }),\n            getFilmById: build.query({\n                query: (id)=>{\n                    return `/movie?search=${id}&field=id&token=${_constants_api__WEBPACK_IMPORTED_MODULE_0__.API_TOKEN}`;\n                }\n            }),\n            getReviewById: build.query({\n                query: ({ id , limit  })=>{\n                    return `review?search=${id}&field=movieId&limit=${limit}&token=${_constants_api__WEBPACK_IMPORTED_MODULE_0__.API_TOKEN}`;\n                }\n            })\n        })\n});\nconst { getTop , getFilmById , getReviewById  } = kinopoiskAPI.endpoints;\nconst { useGetTopQuery , useGetFilmByIdQuery , useGetReviewByIdQuery  } = kinopoiskAPI;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvS2lub3BvaXNrU2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBRWtDO0FBS3JFLE1BQU1LLFlBQVksR0FBR0YsNEVBQVMsQ0FBQztJQUNsQ0csV0FBVyxFQUFFLGNBQWM7SUFDM0JDLFNBQVMsRUFBRUgsaUZBQWMsQ0FBQztRQUFDSSxPQUFPLEVBQUVQLG1EQUFPO0tBQUMsQ0FBQztJQUM3Q1EsU0FBUyxFQUFFLENBQUNDLEtBQUssR0FBSyxDQUFDO1lBQ25CQyxNQUFNLEVBQUVELEtBQUssQ0FBQ0UsS0FBSyxDQUFDO2dCQUNoQkEsS0FBSyxFQUFFQyxDQUFBQSxLQUFLLEdBQUk7b0JBQ1osT0FBTyxDQUFDLHFEQUFxRCxFQUFFWCx5REFBTyxFQUFFLENBQUMsaUNBQWlDLEVBQUVXLEtBQUssQ0FBQyxrRUFBa0UsRUFBRWIscURBQVMsQ0FBQyxDQUFDO2lCQUNwTTthQUNKLENBQUM7WUFDRmMsV0FBVyxFQUFFSixLQUFLLENBQUNFLEtBQUssQ0FBZ0Q7Z0JBQ3BFQSxLQUFLLEVBQUVHLENBQUFBLEVBQUUsR0FBSTtvQkFDVCxPQUFPLENBQUMsY0FBYyxFQUFFQSxFQUFFLENBQUMsZ0JBQWdCLEVBQUVmLHFEQUFTLENBQUMsQ0FBQztpQkFDM0Q7YUFDSixDQUFDO1lBQ0ZnQixhQUFhLEVBQUVOLEtBQUssQ0FBQ0UsS0FBSyxDQUFzQjtnQkFDNUNBLEtBQUssRUFBRSxDQUFDLEVBQUNHLEVBQUUsR0FBRUYsS0FBSyxHQUFDLEdBQUs7b0JBQ3BCLE9BQU8sQ0FBQyxjQUFjLEVBQUVFLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUYsS0FBSyxDQUFDLE9BQU8sRUFBRWIscURBQVMsQ0FBQyxDQUFDO2lCQUMvRTthQUNKLENBQUM7U0FDTCxDQUFDO0NBQ0wsQ0FBQztBQUVLLE1BQU0sRUFDVFcsTUFBTSxHQUNORyxXQUFXLEdBQ1hFLGFBQWEsR0FDaEIsR0FBR1gsWUFBWSxDQUFDSSxTQUFTLENBQUM7QUFFcEIsTUFBTSxFQUNUUSxjQUFjLEdBQ2RDLG1CQUFtQixHQUNuQkMscUJBQXFCLEdBQ3hCLEdBQUdkLFlBQVksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tpbm9wb2lzay8uL3NyYy9zZXJ2aWNlcy9LaW5vcG9pc2tTZXJ2aWNlLnRzP2VmMmIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7QVBJX1RPS0VOLCBBUElfVVJMfSBmcm9tIFwiQC9jb25zdGFudHMvYXBpXCI7XHJcbmltcG9ydCB7Z2V0WWVhcn0gZnJvbSBcIkAvaGVscGVycy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7SUZpbG1EYXRhfSBmcm9tIFwiQC90eXBlcy9JRmlsbURhdGFcIjtcclxuaW1wb3J0IHtjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5fSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9kaXN0L3F1ZXJ5L3JlYWN0XCI7XHJcbmltcG9ydCB7SVJldmlld30gZnJvbSBcIkAvdHlwZXMvSVJldmlld1wiO1xyXG5pbXBvcnQge0lCYXNlUXVlcnl9IGZyb20gXCJAL3R5cGVzL0lCYXNlVHlwZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qga2lub3BvaXNrQVBJID0gY3JlYXRlQXBpKHtcclxuICAgIHJlZHVjZXJQYXRoOiBcImtpbm9wb2lza0FQSVwiLFxyXG4gICAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7YmFzZVVybDogQVBJX1VSTH0pLFxyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZ2V0VG9wOiBidWlsZC5xdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBsaW1pdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYC9tb3ZpZT9maWVsZD1yYXRpbmcua3Amc2VhcmNoPTEtMTAmZmllbGQ9eWVhciZzZWFyY2g9JHtnZXRZZWFyKCl9JmZpZWxkPXR5cGVOdW1iZXImc2VhcmNoPTEmbGltaXQ9JHtsaW1pdH0mc29ydEZpZWxkPXllYXImc29ydFR5cGU9MSZzb3J0RmllbGQ9dm90ZXMuaW1kYiZzb3J0VHlwZT0tMSZ0b2tlbj0ke0FQSV9UT0tFTn1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBnZXRGaWxtQnlJZDogYnVpbGQucXVlcnk8SUZpbG1EYXRhLCBzdHJpbmcgfCBBcnJheTxzdHJpbmc+IHwgdW5kZWZpbmVkPih7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYC9tb3ZpZT9zZWFyY2g9JHtpZH0mZmllbGQ9aWQmdG9rZW49JHtBUElfVE9LRU59YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZ2V0UmV2aWV3QnlJZDogYnVpbGQucXVlcnk8SVJldmlldywgSUJhc2VRdWVyeT4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKHtpZCwgbGltaXR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJldmlldz9zZWFyY2g9JHtpZH0mZmllbGQ9bW92aWVJZCZsaW1pdD0ke2xpbWl0fSZ0b2tlbj0ke0FQSV9UT0tFTn1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgZ2V0VG9wLFxyXG4gICAgZ2V0RmlsbUJ5SWQsXHJcbiAgICBnZXRSZXZpZXdCeUlkXHJcbn0gPSBraW5vcG9pc2tBUEkuZW5kcG9pbnRzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIHVzZUdldFRvcFF1ZXJ5LFxyXG4gICAgdXNlR2V0RmlsbUJ5SWRRdWVyeSxcclxuICAgIHVzZUdldFJldmlld0J5SWRRdWVyeVxyXG59ID0ga2lub3BvaXNrQVBJOyJdLCJuYW1lcyI6WyJBUElfVE9LRU4iLCJBUElfVVJMIiwiZ2V0WWVhciIsImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5Iiwia2lub3BvaXNrQVBJIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJnZXRUb3AiLCJxdWVyeSIsImxpbWl0IiwiZ2V0RmlsbUJ5SWQiLCJpZCIsImdldFJldmlld0J5SWQiLCJ1c2VHZXRUb3BRdWVyeSIsInVzZUdldEZpbG1CeUlkUXVlcnkiLCJ1c2VHZXRSZXZpZXdCeUlkUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/KinopoiskService.ts\n");

/***/ }),

/***/ "./src/store/reducers/filterReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/filterReducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filtersReducer\": () => (/* binding */ filtersReducer),\n/* harmony export */   \"filtersSlice\": () => (/* binding */ filtersSlice),\n/* harmony export */   \"resetFilters\": () => (/* binding */ resetFilters),\n/* harmony export */   \"setGenre\": () => (/* binding */ setGenre),\n/* harmony export */   \"setRatings\": () => (/* binding */ setRatings),\n/* harmony export */   \"setSortByRelease\": () => (/* binding */ setSortByRelease),\n/* harmony export */   \"setYear\": () => (/* binding */ setYear)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n// @ts-ignore\n\nconst initialState = {\n    filters: {\n        year: `1888-2022`,\n        rating: \"1-10\",\n        sortByRelease: \"-1\",\n        genre: \"\"\n    }\n};\nconst filtersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"filters\",\n    initialState,\n    reducers: {\n        setYear: (state, action)=>{\n            state.filters.year = action.payload;\n        },\n        setRatings: (state, action)=>{\n            state.filters.rating = action.payload;\n        },\n        setSortByRelease: (state, action)=>{\n            state.filters.sortByRelease = action.payload;\n        },\n        setGenre: (state, action)=>{\n            state.filters.genre = action.payload;\n        },\n        resetFilters: (state)=>{\n            state.filters = initialState.filters;\n        }\n    }\n});\nconst { setYear , setRatings , setSortByRelease , setGenre , resetFilters  } = filtersSlice.actions;\nconst filtersReducer = filtersSlice.reducer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvZmlsdGVyUmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2dDO0FBRzdDLE1BQU1DLFlBQVksR0FBRztJQUNqQkMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNqQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsYUFBYSxFQUFFLElBQUk7UUFDbkJDLEtBQUssRUFBRSxFQUFFO0tBQ1o7Q0FDSjtBQUVNLE1BQU1DLFlBQVksR0FBR1AsNkRBQVcsQ0FBQztJQUNwQ1EsSUFBSSxFQUFFLFNBQVM7SUFDZlAsWUFBWTtJQUNaUSxRQUFRLEVBQUU7UUFDTkMsT0FBTyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3hCRCxLQUFLLENBQUNULE9BQU8sQ0FBQ0MsSUFBSSxHQUFHUyxNQUFNLENBQUNDLE9BQU87U0FDdEM7UUFDREMsVUFBVSxFQUFFLENBQUNILEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzNCRCxLQUFLLENBQUNULE9BQU8sQ0FBQ0UsTUFBTSxHQUFHUSxNQUFNLENBQUNDLE9BQU87U0FDeEM7UUFDREUsZ0JBQWdCLEVBQUUsQ0FBQ0osS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDakNELEtBQUssQ0FBQ1QsT0FBTyxDQUFDRyxhQUFhLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTztTQUMvQztRQUNERyxRQUFRLEVBQUUsQ0FBQ0wsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDekJELEtBQUssQ0FBQ1QsT0FBTyxDQUFDSSxLQUFLLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTztTQUN2QztRQUNESSxZQUFZLEVBQUUsQ0FBQ04sS0FBSyxHQUFLO1lBQ3JCQSxLQUFLLENBQUNULE9BQU8sR0FBR0QsWUFBWSxDQUFDQyxPQUFPO1NBQ3ZDO0tBQ0o7Q0FDSixDQUFDO0FBRUssTUFBTSxFQUNUUSxPQUFPLEdBQ1BJLFVBQVUsR0FDVkMsZ0JBQWdCLEdBQ2hCQyxRQUFRLEdBQ1JDLFlBQVksR0FDZixHQUFHVixZQUFZLENBQUNXLE9BQU8sQ0FBQztBQUVsQixNQUFNQyxjQUFjLEdBQUdaLFlBQVksQ0FBQ2EsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lub3BvaXNrLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2ZpbHRlclJlZHVjZXIudHM/OTdmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7Y3JlYXRlU2xpY2V9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZmlsdGVyczoge1xyXG4gICAgICAgIHllYXI6IGAxODg4LTIwMjJgLFxyXG4gICAgICAgIHJhdGluZzogJzEtMTAnLFxyXG4gICAgICAgIHNvcnRCeVJlbGVhc2U6ICctMScsXHJcbiAgICAgICAgZ2VucmU6ICcnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnZmlsdGVycycsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFllYXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcnMueWVhciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRSYXRpbmdzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5maWx0ZXJzLnJhdGluZyA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTb3J0QnlSZWxlYXNlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5maWx0ZXJzLnNvcnRCeVJlbGVhc2UgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0R2VucmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcnMuZ2VucmUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRGaWx0ZXJzOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuZmlsdGVycyA9IGluaXRpYWxTdGF0ZS5maWx0ZXJzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIHNldFllYXIsXHJcbiAgICBzZXRSYXRpbmdzLFxyXG4gICAgc2V0U29ydEJ5UmVsZWFzZSxcclxuICAgIHNldEdlbnJlLFxyXG4gICAgcmVzZXRGaWx0ZXJzXHJcbn0gPSBmaWx0ZXJzU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJzUmVkdWNlciA9IGZpbHRlcnNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImZpbHRlcnMiLCJ5ZWFyIiwicmF0aW5nIiwic29ydEJ5UmVsZWFzZSIsImdlbnJlIiwiZmlsdGVyc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0WWVhciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFJhdGluZ3MiLCJzZXRTb3J0QnlSZWxlYXNlIiwic2V0R2VucmUiLCJyZXNldEZpbHRlcnMiLCJhY3Rpb25zIiwiZmlsdGVyc1JlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/filterReducer.ts\n");

/***/ }),

/***/ "./src/store/reducers/loadReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/loadReducer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMoreFilms\": () => (/* binding */ loadMoreFilms),\n/* harmony export */   \"loadMoreSeries\": () => (/* binding */ loadMoreSeries),\n/* harmony export */   \"loadReducer\": () => (/* binding */ loadReducer),\n/* harmony export */   \"loadSlice\": () => (/* binding */ loadSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n// @ts-ignore\n\nconst initialState = {\n    filmsLimit: 10,\n    seriesLimit: 10\n};\nconst loadSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"load\",\n    initialState,\n    reducers: {\n        loadMoreFilms: (state)=>{\n            state.filmsLimit += 10;\n        },\n        loadMoreSeries: (state)=>{\n            state.seriesLimit += 10;\n        }\n    }\n});\nconst { loadMoreFilms , loadMoreSeries  } = loadSlice.actions;\nconst loadReducer = loadSlice.reducer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvbG9hZFJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsYUFBYTtBQUNnQztBQUU3QyxNQUFNQyxZQUFZLEdBQUc7SUFDakJDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFdBQVcsRUFBRSxFQUFFO0NBQ2xCO0FBRU0sTUFBTUMsU0FBUyxHQUFHSiw2REFBVyxDQUFDO0lBQ2pDSyxJQUFJLEVBQUUsTUFBTTtJQUNaSixZQUFZO0lBQ1pLLFFBQVEsRUFBRTtRQUNOQyxhQUFhLEVBQUVDLENBQUFBLEtBQUssR0FBSTtZQUNwQkEsS0FBSyxDQUFDTixVQUFVLElBQUksRUFBRTtTQUN6QjtRQUNETyxjQUFjLEVBQUVELENBQUFBLEtBQUssR0FBSTtZQUNyQkEsS0FBSyxDQUFDTCxXQUFXLElBQUksRUFBRTtTQUMxQjtLQUNKO0NBQ0osQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUNUSSxhQUFhLEdBQ2JFLGNBQWMsR0FDakIsR0FBR0wsU0FBUyxDQUFDTSxPQUFPLENBQUM7QUFFZixNQUFNQyxXQUFXLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lub3BvaXNrLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2xvYWRSZWR1Y2VyLnRzPzViNDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQge2NyZWF0ZVNsaWNlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZmlsbXNMaW1pdDogMTAsXHJcbiAgICBzZXJpZXNMaW1pdDogMTBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdsb2FkJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgbG9hZE1vcmVGaWxtczogc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5maWxtc0xpbWl0ICs9IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkTW9yZVNlcmllczogc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5zZXJpZXNMaW1pdCArPSAxMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgbG9hZE1vcmVGaWxtcyxcclxuICAgIGxvYWRNb3JlU2VyaWVzXHJcbn0gPSBsb2FkU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkUmVkdWNlciA9IGxvYWRTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImZpbG1zTGltaXQiLCJzZXJpZXNMaW1pdCIsImxvYWRTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvYWRNb3JlRmlsbXMiLCJzdGF0ZSIsImxvYWRNb3JlU2VyaWVzIiwiYWN0aW9ucyIsImxvYWRSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducers/loadReducer.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useStore),\n/* harmony export */   \"initialStore\": () => (/* binding */ initialStore),\n/* harmony export */   \"initializeStore\": () => (/* binding */ initializeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_KinopoiskService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/KinopoiskService */ \"./src/services/KinopoiskService.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_loadReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/loadReducer */ \"./src/store/reducers/loadReducer.ts\");\n/* harmony import */ var _reducers_filterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/filterReducer */ \"./src/store/reducers/filterReducer.ts\");\n// @ts-ignore\n\n\n\n// @ts-ignore\n\n\n\nlet store;\nconst initialStore = (preloadedState = {})=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            loadReducer: _reducers_loadReducer__WEBPACK_IMPORTED_MODULE_4__.loadReducer,\n            filtersReducer: _reducers_filterReducer__WEBPACK_IMPORTED_MODULE_5__.filtersReducer,\n            [_services_KinopoiskService__WEBPACK_IMPORTED_MODULE_1__.kinopoiskAPI.reducerPath]: _services_KinopoiskService__WEBPACK_IMPORTED_MODULE_1__.kinopoiskAPI.reducer\n        },\n        preloadedState,\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_services_KinopoiskService__WEBPACK_IMPORTED_MODULE_1__.kinopoiskAPI.middleware)\n    });\n};\nconst initializeStore = (preloadedState)=>{\n    let _store = store ?? initialStore(preloadedState);\n    if (preloadedState && store) {\n        _store = initialStore({\n            ...store.getState(),\n            ...preloadedState\n        });\n    }\n    if (true) return _store;\n    if (!store) store = _store;\n    return _store;\n};\nfunction useStore(initialState) {\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>initializeStore(initialState), [\n        initialState\n    ]);\n    return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(initialStore, {\n    debug: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWE7QUFDbUQ7QUFDTjtBQUM1QjtBQUM5QixhQUFhO0FBQ29DO0FBQ0U7QUFDSztBQUd4RCxJQUFJTSxLQUFLO0FBRUYsTUFBTUMsWUFBWSxHQUFHLENBQUNDLGNBQWMsR0FBRyxFQUFFLEdBQUs7SUFDakQsT0FBT1IsZ0VBQWMsQ0FDakI7UUFDSVMsT0FBTyxFQUFFO1lBQ0xMLFdBQVc7WUFDWEMsY0FBYztZQUNkLENBQUNKLGdGQUF3QixDQUFDLEVBQUVBLDRFQUFvQjtTQUNuRDtRQUNETyxjQUFjO1FBQ2RHLFVBQVUsRUFBRSxDQUFDQyxvQkFBb0IsR0FBS0Esb0JBQW9CLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDWiwrRUFBdUIsQ0FBQztLQUMvRixDQUFDLENBQUM7Q0FDVjtBQUVNLE1BQU1hLGVBQWUsR0FBRyxDQUFDTixjQUF5QyxHQUFLO0lBQzFFLElBQUlPLE1BQU0sR0FBR1QsS0FBSyxJQUFJQyxZQUFZLENBQUNDLGNBQWMsQ0FBQztJQUVsRCxJQUFHQSxjQUFjLElBQUlGLEtBQUssRUFBQztRQUN2QlMsTUFBTSxHQUFHUixZQUFZLENBQUM7WUFBQyxHQUFHRCxLQUFLLENBQUNVLFFBQVEsRUFBRTtZQUFFLEdBQUdSLGNBQWM7U0FBQyxDQUFDLENBQUM7S0FDbkU7SUFFRCxJQUFHLElBQTZCLEVBQUUsT0FBT08sTUFBTSxDQUFDO0lBQ2hELElBQUcsQ0FBQ1QsS0FBSyxFQUFFQSxLQUFLLEdBQUdTLE1BQU0sQ0FBQztJQUUxQixPQUFPQSxNQUFNO0NBQ2hCO0FBRWMsU0FBU0UsUUFBUSxDQUFDQyxZQUF1QixFQUFDO0lBQ3JELE1BQU1aLEtBQUssR0FBR0osOENBQU8sQ0FBQyxJQUFNWSxlQUFlLENBQUNJLFlBQVksQ0FBQyxFQUFFO1FBQUNBLFlBQVk7S0FBQyxDQUFDO0lBQzFFLE9BQU9aLEtBQUssQ0FBQztDQUNoQjtBQU1NLE1BQU1hLE9BQU8sR0FBR2hCLGlFQUFhLENBQWVJLFlBQVksRUFBRTtJQUFDYSxLQUFLLEVBQUUsS0FBSztDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raW5vcG9pc2svLi9zcmMvc3RvcmUvc3RvcmUudHM/NTAyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXHJcbmltcG9ydCB7Y29uZmlndXJlU3RvcmUsIFByZWxvYWRlZFN0YXRlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge2tpbm9wb2lza0FQSX0gZnJvbSBcIi4uL3NlcnZpY2VzL0tpbm9wb2lza1NlcnZpY2VcIjtcclxuaW1wb3J0IHt1c2VNZW1vfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHtsb2FkUmVkdWNlcn0gZnJvbSBcIi4vcmVkdWNlcnMvbG9hZFJlZHVjZXJcIjtcclxuaW1wb3J0IHtmaWx0ZXJzUmVkdWNlcn0gZnJvbSBcIi4vcmVkdWNlcnMvZmlsdGVyUmVkdWNlclwiO1xyXG5cclxuXHJcbmxldCBzdG9yZTogQXBwU3RvcmVUeXBlXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0b3JlID0gKHByZWxvYWRlZFN0YXRlID0ge30pID0+IHtcclxuICAgIHJldHVybiBjb25maWd1cmVTdG9yZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlZHVjZXI6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRSZWR1Y2VyLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyc1JlZHVjZXIsXHJcbiAgICAgICAgICAgICAgICBba2lub3BvaXNrQVBJLnJlZHVjZXJQYXRoXToga2lub3BvaXNrQVBJLnJlZHVjZXJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlbG9hZGVkU3RhdGUsXHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoa2lub3BvaXNrQVBJLm1pZGRsZXdhcmUpXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGU6IFByZWxvYWRlZFN0YXRlPFJvb3RTdGF0ZT4pID0+IHtcclxuICAgIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0aWFsU3RvcmUocHJlbG9hZGVkU3RhdGUpO1xyXG5cclxuICAgIGlmKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKXtcclxuICAgICAgICBfc3RvcmUgPSBpbml0aWFsU3RvcmUoey4uLnN0b3JlLmdldFN0YXRlKCksIC4uLnByZWxvYWRlZFN0YXRlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmU7XHJcbiAgICBpZighc3RvcmUpIHN0b3JlID0gX3N0b3JlO1xyXG5cclxuICAgIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlOiBSb290U3RhdGUpe1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVUeXBlWydnZXRTdGF0ZSddPlxyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmVUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2YgaW5pdGlhbFN0b3JlPlxyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlVHlwZT4oaW5pdGlhbFN0b3JlLCB7ZGVidWc6IGZhbHNlfSkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJraW5vcG9pc2tBUEkiLCJ1c2VNZW1vIiwiY3JlYXRlV3JhcHBlciIsImxvYWRSZWR1Y2VyIiwiZmlsdGVyc1JlZHVjZXIiLCJzdG9yZSIsImluaXRpYWxTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0IiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1c2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/dist/query/react":
/*!****************************************************!*\
  !*** external "@reduxjs/toolkit/dist/query/react" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/dist/query/react");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();