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

/***/ "./src/components/AllWordsTable/AllWordsTable.tsx":
/*!********************************************************!*\
  !*** ./src/components/AllWordsTable/AllWordsTable.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createData\": function() { return /* binding */ createData; },\n/* harmony export */   \"AllWordsTable\": function() { return /* binding */ AllWordsTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _defaultWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultWords */ \"./src/components/AllWordsTable/defaultWords.ts\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ \"./src/components/AllWordsTable/Row.tsx\");\n/* harmony import */ var _RowWithEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RowWithEdit */ \"./src/components/AllWordsTable/RowWithEdit.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nfunction createData(word) {\n    return _objectSpread({}, word, {\n        isEditingNow: false\n    });\n}\nvar AllWordsTable = function() {\n    var _this1 = _this;\n    var rows = _defaultWords__WEBPACK_IMPORTED_MODULE_2__.wordsDefault.map(function(word) {\n        return createData(word);\n    }).sort(function(a, b) {\n        return a.id < b.id ? -1 : 1;\n    });\n    rows[0].isEditingNow = true;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table, {\n            basic: true,\n            style: {\n                width: '1050px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Header, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                children: \"Id\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                children: \"English\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                children: \"Transcription\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                children: \"Translation\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {}, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Body, {\n                    children: rows.map(function(row) {\n                        return row.isEditingNow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RowWithEdit__WEBPACK_IMPORTED_MODULE_4__.RowWithEdit, {\n                            rowData: row\n                        }, row.id, false, {\n                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 8\n                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                            rowData: row\n                        }, row.id, false, {\n                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 8\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Footer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                            colSpan: \"6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                                floated: \"right\",\n                                pagination: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        icon: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                            name: \"chevron left\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 10\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"4\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        icon: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                            name: \"chevron right\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 10\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 8\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false));\n};\n_c = AllWordsTable;\nvar _c;\n$RefreshReg$(_c, \"AllWordsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGxXb3Jkc1RhYmxlL0FsbFdvcmRzVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUMwQztBQUV0QjtBQUNsQjtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLFNBQVNPLFVBQVUsQ0FBQ0MsSUFBVSxFQUFFLENBQUM7SUFDdkMsTUFBTSxtQkFDRkEsSUFBSTtRQUNQQyxZQUFZLEVBQUUsS0FBSzs7QUFFckIsQ0FBQztBQUlNLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQzdCLEdBRG1DLENBQUM7O0lBRW5DLEdBQUssQ0FBQ0MsSUFBSSxHQUFHUCwyREFDUixDQUFDLFFBQVEsQ0FBUEksSUFBSTtRQUFLRCxNQUFNLENBQU5BLFVBQVUsQ0FBQ0MsSUFBSTtPQUM3QkssSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDO1FBQUssTUFBTSxDQUFMRCxDQUFDLENBQUNFLEVBQUUsR0FBR0QsQ0FBQyxDQUFDQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7O0lBRXRDTCxJQUFJLENBQUMsQ0FBQyxFQUFFRixZQUFZLEdBQUcsSUFBSTtJQUUzQixNQUFNOzhGQUVITixvREFBSztZQUFDYyxLQUFLO1lBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBUTtZQUFDLENBQUM7OzRGQUNyQ2hCLDJEQUFZOzBHQUNYQSx3REFBUzs7d0dBQ1JBLCtEQUFnQjswQ0FBQyxDQUFFOzs7Ozs7d0dBQ25CQSwrREFBZ0I7MENBQUMsQ0FBTzs7Ozs7O3dHQUN4QkEsK0RBQWdCOzBDQUFDLENBQWE7Ozs7Ozt3R0FDOUJBLCtEQUFnQjswQ0FBQyxDQUFXOzs7Ozs7d0dBQzVCQSwrREFBZ0I7MENBQUMsQ0FBTTs7Ozs7O3dHQUN2QkEsK0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzRGQUlsQkEseURBQVU7OEJBQ1RRLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUFcsR0FBRyxFQUFLLENBQUM7d0JBQ25CLE1BQU0sQ0FBQ0EsR0FBRyxDQUFDZCxZQUFZLCtFQUNyQkgscURBQVc7NEJBQUNrQixPQUFPLEVBQUVELEdBQUc7MkJBQU9BLEdBQUcsQ0FBQ1AsRUFBRTs7OztpSEFFckNYLHFDQUFHOzRCQUFDbUIsT0FBTyxFQUFFRCxHQUFHOzJCQUFPQSxHQUFHLENBQUNQLEVBQUU7Ozs7O29CQUVoQyxDQUFDOzs7Ozs7NEZBR0RiLDJEQUFZOzBHQUNYQSx3REFBUzs4R0FDUkEsK0RBQWdCOzRCQUFDdUIsT0FBTyxFQUFDLENBQUc7a0hBQzNCeEIsbURBQUk7Z0NBQUN5QixPQUFPLEVBQUMsQ0FBTztnQ0FBQ0MsVUFBVTs7Z0hBQzlCMUIsd0RBQVM7d0NBQUM0QixFQUFFLEVBQUMsQ0FBRzt3Q0FBQ0MsSUFBSTs4SEFDcEI5QixtREFBSTs0Q0FBQytCLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7OztnSEFFekI5Qix3REFBUzt3Q0FBQzRCLEVBQUUsRUFBQyxDQUFHO2tEQUFDLENBQUM7Ozs7OztnSEFDbEI1Qix3REFBUzt3Q0FBQzRCLEVBQUUsRUFBQyxDQUFHO2tEQUFDLENBQUM7Ozs7OztnSEFDbEI1Qix3REFBUzt3Q0FBQzRCLEVBQUUsRUFBQyxDQUFHO2tEQUFDLENBQUM7Ozs7OztnSEFDbEI1Qix3REFBUzt3Q0FBQzRCLEVBQUUsRUFBQyxDQUFHO2tEQUFDLENBQUM7Ozs7OztnSEFDbEI1Qix3REFBUzt3Q0FBQzRCLEVBQUUsRUFBQyxDQUFHO3dDQUFDQyxJQUFJOzhIQUNwQjlCLG1EQUFJOzRDQUFDK0IsSUFBSSxFQUFDLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQyxDQUFDO0tBckRZdEIsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbGxXb3Jkc1RhYmxlL0FsbFdvcmRzVGFibGUudHN4PzgwOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb24sIElucHV0LCBMYWJlbCwgTWVudSwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAndHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgd29yZHNEZWZhdWx0IH0gZnJvbSAnLi9kZWZhdWx0V29yZHMnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9Sb3cnO1xuaW1wb3J0IHsgUm93V2l0aEVkaXQgfSBmcm9tICcuL1Jvd1dpdGhFZGl0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGEod29yZDogV29yZCkge1xuXHRyZXR1cm4ge1xuXHRcdC4uLndvcmQsXG5cdFx0aXNFZGl0aW5nTm93OiBmYWxzZSxcblx0fTtcbn1cblxuZXhwb3J0IHR5cGUgUm93VHlwZSA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZURhdGE+O1xuXG5leHBvcnQgY29uc3QgQWxsV29yZHNUYWJsZSA9ICgpID0+IHtcblxuXHRjb25zdCByb3dzID0gd29yZHNEZWZhdWx0XG5cdFx0Lm1hcCgod29yZCkgPT4gY3JlYXRlRGF0YSh3b3JkKSlcblx0XHQuc29ydCgoYSwgYikgPT4gKGEuaWQgPCBiLmlkID8gLTEgOiAxKSk7XG5cblx0cm93c1swXS5pc0VkaXRpbmdOb3cgPSB0cnVlO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxUYWJsZSBiYXNpYyBzdHlsZT17eyB3aWR0aDogJzEwNTBweCcgfX0+XG5cdFx0XHRcdDxUYWJsZS5IZWFkZXIgPlxuXHRcdFx0XHRcdDxUYWJsZS5Sb3c+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD5JZDwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdDxUYWJsZS5IZWFkZXJDZWxsPkVuZ2xpc2g8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD5UcmFuc2NyaXB0aW9uPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0PFRhYmxlLkhlYWRlckNlbGw+VHJhbnNsYXRpb248L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD5TdGF0dXM8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbD48L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0PC9UYWJsZS5Sb3c+XG5cdFx0XHRcdDwvVGFibGUuSGVhZGVyPlxuXG5cdFx0XHRcdDxUYWJsZS5Cb2R5PlxuXHRcdFx0XHRcdHtyb3dzLm1hcCgocm93KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcm93LmlzRWRpdGluZ05vdyA/IChcblx0XHRcdFx0XHRcdFx0PFJvd1dpdGhFZGl0IHJvd0RhdGE9e3Jvd30ga2V5PXtyb3cuaWR9IC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8Um93IHJvd0RhdGE9e3Jvd30ga2V5PXtyb3cuaWR9IC8+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L1RhYmxlLkJvZHk+XG5cblx0XHRcdFx0PFRhYmxlLkZvb3Rlcj5cblx0XHRcdFx0XHQ8VGFibGUuUm93PlxuXHRcdFx0XHRcdFx0PFRhYmxlLkhlYWRlckNlbGwgY29sU3Bhbj1cIjZcIj5cblx0XHRcdFx0XHRcdFx0PE1lbnUgZmxvYXRlZD1cInJpZ2h0XCIgcGFnaW5hdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPVwiYVwiIGljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPVwiY2hldnJvbiBsZWZ0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPVwiYVwiPjE8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPVwiYVwiPjI8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPVwiYVwiPjM8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPVwiYVwiPjQ8L01lbnUuSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVudS5JdGVtIGFzPVwiYVwiIGljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPVwiY2hldnJvbiByaWdodFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0XHRcdDwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHQ8L1RhYmxlLlJvdz5cblx0XHRcdFx0PC9UYWJsZS5Gb290ZXI+XG5cdFx0XHQ8L1RhYmxlPlxuXHRcdDwvPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkljb24iLCJNZW51IiwiVGFibGUiLCJ3b3Jkc0RlZmF1bHQiLCJSb3ciLCJSb3dXaXRoRWRpdCIsImNyZWF0ZURhdGEiLCJ3b3JkIiwiaXNFZGl0aW5nTm93IiwiQWxsV29yZHNUYWJsZSIsInJvd3MiLCJtYXAiLCJzb3J0IiwiYSIsImIiLCJpZCIsImJhc2ljIiwic3R5bGUiLCJ3aWR0aCIsIkhlYWRlciIsIkhlYWRlckNlbGwiLCJCb2R5Iiwicm93Iiwicm93RGF0YSIsIkZvb3RlciIsImNvbFNwYW4iLCJmbG9hdGVkIiwicGFnaW5hdGlvbiIsIkl0ZW0iLCJhcyIsImljb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AllWordsTable/AllWordsTable.tsx\n");

/***/ })

});