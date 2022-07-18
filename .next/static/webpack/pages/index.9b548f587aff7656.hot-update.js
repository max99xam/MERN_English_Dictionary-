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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createData\": function() { return /* binding */ createData; },\n/* harmony export */   \"AllWordsTable\": function() { return /* binding */ AllWordsTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _defaultWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultWords */ \"./src/components/AllWordsTable/defaultWords.ts\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ \"./src/components/AllWordsTable/Row.tsx\");\n/* harmony import */ var _RowWithEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RowWithEdit */ \"./src/components/AllWordsTable/RowWithEdit.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nfunction createData(word) {\n    return _objectSpread({}, word, {\n        isEditingNow: false\n    });\n}\nvar AllWordsTable = function() {\n    var _this1 = _this;\n    var rows = _defaultWords__WEBPACK_IMPORTED_MODULE_2__.wordsDefault.map(function(word) {\n        return createData(word);\n    }).sort(function(a, b) {\n        return a.id < b.id ? -1 : 1;\n    });\n    rows[0].isEditingNow = true;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table, {\n            basic: true,\n            style: {\n                width: '1050px',\n                backgroundColor: 'white'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Header, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n                        textAlign: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                textAlign: \"center\",\n                                children: \"Id\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                textAlign: \"center\",\n                                children: \"English\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                textAlign: \"center\",\n                                children: \"Transcription\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                textAlign: \"center\",\n                                children: \"Translation\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                textAlign: \"center\",\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                                textAlign: \"center\"\n                            }, void 0, false, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Body, {\n                    children: rows.map(function(row) {\n                        return row.isEditingNow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RowWithEdit__WEBPACK_IMPORTED_MODULE_4__.RowWithEdit, {\n                            rowData: row\n                        }, row.id, false, {\n                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 8\n                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                            rowData: row\n                        }, row.id, false, {\n                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 8\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Footer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, {\n                            colSpan: \"6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                                floated: \"right\",\n                                pagination: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        icon: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                            name: \"chevron left\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 10\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        children: \"4\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {\n                                        as: \"a\",\n                                        icon: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                            name: \"chevron right\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 10\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 8\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/max/code/english-app/client/src/components/AllWordsTable/AllWordsTable.tsx\",\n            lineNumber: 27,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false));\n};\n_c = AllWordsTable;\nvar _c;\n$RefreshReg$(_c, \"AllWordsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGxXb3Jkc1RhYmxlL0FsbFdvcmRzVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUMwQztBQUV0QjtBQUNsQjtBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLFNBQVNPLFVBQVUsQ0FBQ0MsSUFBVSxFQUFFLENBQUM7SUFDdkMsTUFBTSxtQkFDRkEsSUFBSTtRQUNQQyxZQUFZLEVBQUUsS0FBSzs7QUFFckIsQ0FBQztBQUlNLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQzdCLEdBRG1DLENBQUM7O0lBRW5DLEdBQUssQ0FBQ0MsSUFBSSxHQUFHUCwyREFDUixDQUFDLFFBQVEsQ0FBUEksSUFBSTtRQUFLRCxNQUFNLENBQU5BLFVBQVUsQ0FBQ0MsSUFBSTtPQUM3QkssSUFBSSxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDO1FBQUssTUFBTSxDQUFMRCxDQUFDLENBQUNFLEVBQUUsR0FBR0QsQ0FBQyxDQUFDQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7O0lBRXRDTCxJQUFJLENBQUMsQ0FBQyxFQUFFRixZQUFZLEdBQUcsSUFBSTtJQUUzQixNQUFNOzhGQUVITixvREFBSztZQUFDYyxLQUFLO1lBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBUTtnQkFBRUMsZUFBZSxFQUFFLENBQU87WUFBQSxDQUFDOzs0RkFDOURqQiwyREFBWTswR0FDWEEsd0RBQVM7d0JBQUNtQixTQUFTLEVBQUMsQ0FBUTs7d0dBQzNCbkIsK0RBQWdCO2dDQUFDbUIsU0FBUyxFQUFDLENBQVE7MENBQUUsQ0FBRTs7Ozs7O3dHQUN2Q25CLCtEQUFnQjtnQ0FBQ21CLFNBQVMsRUFBQyxDQUFROzBDQUFDLENBQU87Ozs7Ozt3R0FDM0NuQiwrREFBZ0I7Z0NBQUNtQixTQUFTLEVBQUMsQ0FBUTswQ0FBQyxDQUFhOzs7Ozs7d0dBQ2pEbkIsK0RBQWdCO2dDQUFDbUIsU0FBUyxFQUFDLENBQVE7MENBQUMsQ0FBVzs7Ozs7O3dHQUMvQ25CLCtEQUFnQjtnQ0FBQ21CLFNBQVMsRUFBQyxDQUFROzBDQUFDLENBQU07Ozs7Ozt3R0FDMUNuQiwrREFBZ0I7Z0NBQUNtQixTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBSXJDbkIseURBQVU7OEJBQ1RRLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUGEsR0FBRyxFQUFLLENBQUM7d0JBQ25CLE1BQU0sQ0FBQ0EsR0FBRyxDQUFDaEIsWUFBWSwrRUFDckJILHFEQUFXOzRCQUFDb0IsT0FBTyxFQUFFRCxHQUFHOzJCQUFPQSxHQUFHLENBQUNULEVBQUU7Ozs7aUhBRXJDWCxxQ0FBRzs0QkFBQ3FCLE9BQU8sRUFBRUQsR0FBRzsyQkFBT0EsR0FBRyxDQUFDVCxFQUFFOzs7OztvQkFFaEMsQ0FBQzs7Ozs7OzRGQUdEYiwyREFBWTswR0FDWEEsd0RBQVM7OEdBQ1JBLCtEQUFnQjs0QkFBQ3lCLE9BQU8sRUFBQyxDQUFHO2tIQUMzQjFCLG1EQUFJO2dDQUFDMkIsT0FBTyxFQUFDLENBQU87Z0NBQUNDLFVBQVU7O2dIQUM5QjVCLHdEQUFTO3dDQUFDOEIsRUFBRSxFQUFDLENBQUc7d0NBQUNDLElBQUk7OEhBQ3BCaEMsbURBQUk7NENBQUNpQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7Z0hBRXpCaEMsd0RBQVM7d0NBQUM4QixFQUFFLEVBQUMsQ0FBRztrREFBQyxDQUFDOzs7Ozs7Z0hBQ2xCOUIsd0RBQVM7d0NBQUM4QixFQUFFLEVBQUMsQ0FBRztrREFBQyxDQUFDOzs7Ozs7Z0hBQ2xCOUIsd0RBQVM7d0NBQUM4QixFQUFFLEVBQUMsQ0FBRztrREFBQyxDQUFDOzs7Ozs7Z0hBQ2xCOUIsd0RBQVM7d0NBQUM4QixFQUFFLEVBQUMsQ0FBRztrREFBQyxDQUFDOzs7Ozs7Z0hBQ2xCOUIsd0RBQVM7d0NBQUM4QixFQUFFLEVBQUMsQ0FBRzt3Q0FBQ0MsSUFBSTs4SEFDcEJoQyxtREFBSTs0Q0FBQ2lDLElBQUksRUFBQyxDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkMsQ0FBQztLQXJEWXhCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWxsV29yZHNUYWJsZS9BbGxXb3Jkc1RhYmxlLnRzeD84MDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uLCBJbnB1dCwgTGFiZWwsIE1lbnUsIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJ3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IHdvcmRzRGVmYXVsdCB9IGZyb20gJy4vZGVmYXVsdFdvcmRzJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vUm93JztcbmltcG9ydCB7IFJvd1dpdGhFZGl0IH0gZnJvbSAnLi9Sb3dXaXRoRWRpdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhKHdvcmQ6IFdvcmQpIHtcblx0cmV0dXJuIHtcblx0XHQuLi53b3JkLFxuXHRcdGlzRWRpdGluZ05vdzogZmFsc2UsXG5cdH07XG59XG5cbmV4cG9ydCB0eXBlIFJvd1R5cGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVEYXRhPjtcblxuZXhwb3J0IGNvbnN0IEFsbFdvcmRzVGFibGUgPSAoKSA9PiB7XG5cblx0Y29uc3Qgcm93cyA9IHdvcmRzRGVmYXVsdFxuXHRcdC5tYXAoKHdvcmQpID0+IGNyZWF0ZURhdGEod29yZCkpXG5cdFx0LnNvcnQoKGEsIGIpID0+IChhLmlkIDwgYi5pZCA/IC0xIDogMSkpO1xuXG5cdHJvd3NbMF0uaXNFZGl0aW5nTm93ID0gdHJ1ZTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8VGFibGUgYmFzaWMgc3R5bGU9e3sgd2lkdGg6ICcxMDUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9fT5cblx0XHRcdFx0PFRhYmxlLkhlYWRlciA+XG5cdFx0XHRcdFx0PFRhYmxlLlJvdyB0ZXh0QWxpZ249J2NlbnRlcic+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbCB0ZXh0QWxpZ249J2NlbnRlcicgPklkPC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdFx0PFRhYmxlLkhlYWRlckNlbGwgdGV4dEFsaWduPSdjZW50ZXInPkVuZ2xpc2g8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbCB0ZXh0QWxpZ249J2NlbnRlcic+VHJhbnNjcmlwdGlvbjwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdDxUYWJsZS5IZWFkZXJDZWxsIHRleHRBbGlnbj0nY2VudGVyJz5UcmFuc2xhdGlvbjwvVGFibGUuSGVhZGVyQ2VsbD5cblx0XHRcdFx0XHRcdDxUYWJsZS5IZWFkZXJDZWxsIHRleHRBbGlnbj0nY2VudGVyJz5TdGF0dXM8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0XHQ8VGFibGUuSGVhZGVyQ2VsbCB0ZXh0QWxpZ249J2NlbnRlcic+PC9UYWJsZS5IZWFkZXJDZWxsPlxuXHRcdFx0XHRcdDwvVGFibGUuUm93PlxuXHRcdFx0XHQ8L1RhYmxlLkhlYWRlcj5cblxuXHRcdFx0XHQ8VGFibGUuQm9keT5cblx0XHRcdFx0XHR7cm93cy5tYXAoKHJvdykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJvdy5pc0VkaXRpbmdOb3cgPyAoXG5cdFx0XHRcdFx0XHRcdDxSb3dXaXRoRWRpdCByb3dEYXRhPXtyb3d9IGtleT17cm93LmlkfSAvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PFJvdyByb3dEYXRhPXtyb3d9IGtleT17cm93LmlkfSAvPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9UYWJsZS5Cb2R5PlxuXG5cdFx0XHRcdDxUYWJsZS5Gb290ZXI+XG5cdFx0XHRcdFx0PFRhYmxlLlJvdz5cblx0XHRcdFx0XHRcdDxUYWJsZS5IZWFkZXJDZWxsIGNvbFNwYW49XCI2XCI+XG5cdFx0XHRcdFx0XHRcdDxNZW51IGZsb2F0ZWQ9XCJyaWdodFwiIHBhZ2luYXRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz1cImFcIiBpY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb24gbmFtZT1cImNoZXZyb24gbGVmdFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz1cImFcIj4xPC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz1cImFcIj4yPC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz1cImFcIj4zPC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz1cImFcIj40PC9NZW51Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBhcz1cImFcIiBpY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb24gbmFtZT1cImNoZXZyb24gcmlnaHRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudS5JdGVtPlxuXHRcdFx0XHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdFx0XHQ8L1RhYmxlLkhlYWRlckNlbGw+XG5cdFx0XHRcdFx0PC9UYWJsZS5Sb3c+XG5cdFx0XHRcdDwvVGFibGUuRm9vdGVyPlxuXHRcdFx0PC9UYWJsZT5cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwiTWVudSIsIlRhYmxlIiwid29yZHNEZWZhdWx0IiwiUm93IiwiUm93V2l0aEVkaXQiLCJjcmVhdGVEYXRhIiwid29yZCIsImlzRWRpdGluZ05vdyIsIkFsbFdvcmRzVGFibGUiLCJyb3dzIiwibWFwIiwic29ydCIsImEiLCJiIiwiaWQiLCJiYXNpYyIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIZWFkZXIiLCJ0ZXh0QWxpZ24iLCJIZWFkZXJDZWxsIiwiQm9keSIsInJvdyIsInJvd0RhdGEiLCJGb290ZXIiLCJjb2xTcGFuIiwiZmxvYXRlZCIsInBhZ2luYXRpb24iLCJJdGVtIiwiYXMiLCJpY29uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AllWordsTable/AllWordsTable.tsx\n");

/***/ })

});