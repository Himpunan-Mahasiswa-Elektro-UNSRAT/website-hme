"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction LoginPage() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!username || !password) {\n            setError(\"Email and password are required.\");\n        } else {\n            try {\n                // Simulate API call\n                await fakeApiCall(username, password);\n                setUsername(\"\");\n                setPassword(\"\");\n                setError(null);\n                alert(\"Login successful!\");\n            } catch (error) {\n                setError(\"Invalid email or password.\");\n            }\n        }\n    };\n    // Simulated API call\n    const fakeApiCall = (username, password)=>{\n        return new Promise((resolve, reject)=>{\n            setTimeout(()=>{\n                if (username === \"admin\" && password === \"password\") {\n                    resolve();\n                } else {\n                    reject(new Error(\"Invalid credentials\"));\n                }\n            }, 1000);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col lg:flex-row min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center w-full lg:w-4/19 p-8 lg:p-28 bg-white relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 left-0 m-4 lg:m-8 w-36\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://fatek.unsrat.ac.id/informatika/wp-content/uploads/2020/08/Screen-Shot-2020-08-02-at-06.39.07.png\",\n                            alt: \"Logo\",\n                            className: \"w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-md p-10 bg-white shadow-md rounded-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-bold text-center text-blue-900 mb-5\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2x4 text-center text-gray-800 mb-5\",\n                                children: \"Selamat datang kembali, Elek-Elik!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                className: \"space-y-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"username\",\n                                                className: \"block text-black-600 text-sm font-bold mb-2 py-2\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 5\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"username\",\n                                                type: \"text\",\n                                                value: username,\n                                                onChange: (e)=>setUsername(e.target.value),\n                                                className: \"shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"block text-black-700 text-sm font-bold mb-2\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 7\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                type: \"password\",\n                                                value: password,\n                                                onChange: (e)=>setPassword(e.target.value),\n                                                className: \"shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 5\n                                    }, this),\n                                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-red-500 text-xs italic\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-1xl flex items-center justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-900 text-white font-bold py-4 px-14 rounded-full focus:outline-none border border-white hover:bg-gray-200\",\n                                            type: \"submit\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 7\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center mt-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/forgot-password\",\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-blue-800 hover:text-blue-700 text-sm\",\n                                                children: \"Lupa Password?\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 9\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 7\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full lg:w-1/3 bg-blue-900 text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center p-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl font-bold mb-4\",\n                            children: \"Halo, Elek-Elik!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-6\",\n                            children: \"Buat akun dan akses semua dalam website Himpunan Mahasiswa Elektro\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/register\",\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"inline-block bg-blue-900 text-white font-bold py-4 px-10 rounded-full border border-white hover:bg-gray-200\",\n                                children: \"REGISTER\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 93,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"RvMmxVkv+7mWGlmKyRdsvpfij9g=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNmO0FBR2QsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUVsRCxNQUFNUyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUksQ0FBQ1IsWUFBWSxDQUFDRSxVQUFVO1lBQzFCRyxTQUFTO1FBQ1gsT0FBTztZQUNMLElBQUk7Z0JBQ0Ysb0JBQW9CO2dCQUNwQixNQUFNSSxZQUFZVCxVQUFVRTtnQkFDNUJELFlBQVk7Z0JBQ1pFLFlBQVk7Z0JBQ1pFLFNBQVM7Z0JBQ1RLLE1BQU07WUFDUixFQUFFLE9BQU9OLE9BQU87Z0JBQ2RDLFNBQVM7WUFDWDtRQUNGO0lBQ0Y7SUFFQSxxQkFBcUI7SUFDckIsTUFBTUksY0FBYyxDQUFDVCxVQUFrQkU7UUFDckMsT0FBTyxJQUFJUyxRQUFRLENBQUNDLFNBQVNDO1lBQzNCQyxXQUFXO2dCQUNULElBQUlkLGFBQWEsV0FBV0UsYUFBYSxZQUFZO29CQUNuRFU7Z0JBQ0YsT0FBTztvQkFDTEMsT0FBTyxJQUFJRSxNQUFNO2dCQUNuQjtZQUNGLEdBQUc7UUFDTDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUVwQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUlDLEtBQUk7NEJBQTJHQyxLQUFJOzRCQUFPSixXQUFVOzs7Ozs7Ozs7OztrQ0FFNUksOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDZCw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQW9EOzs7Ozs7MENBQ2xFLDhEQUFDTTtnQ0FBRU4sV0FBVTswQ0FBMEM7Ozs7OzswQ0FDdkQsOERBQUNPO2dDQUFLQyxVQUFVbkI7Z0NBQWNXLFdBQVU7O2tEQUN0Qyw4REFBQ0M7OzBEQUNELDhEQUFDUTtnREFBTUMsU0FBUTtnREFBV1YsV0FBVTswREFBbUQ7Ozs7OzswREFHckYsOERBQUNXO2dEQUNDQyxJQUFHO2dEQUNIQyxNQUFLO2dEQUNMQyxPQUFPL0I7Z0RBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxZQUFZZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dEQUMzQ2QsV0FBVTs7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDQzs7MERBQ0MsOERBQUNRO2dEQUFNQyxTQUFRO2dEQUFXVixXQUFVOzBEQUE4Qzs7Ozs7OzBEQUdsRiw4REFBQ1c7Z0RBQ0NDLElBQUc7Z0RBQ0hDLE1BQUs7Z0RBQ0xDLE9BQU83QjtnREFDUDhCLFVBQVUsQ0FBQ0MsSUFBTTlCLFlBQVk4QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0RBQzNDZCxXQUFVOzs7Ozs7Ozs7Ozs7b0NBR2JiLHVCQUFTLDhEQUFDbUI7d0NBQUVOLFdBQVU7a0RBQStCYjs7Ozs7O2tEQUN0RCw4REFBQ2M7d0NBQUlELFdBQVU7a0RBQ2IsNEVBQUNrQjs0Q0FBT2xCLFdBQVU7NENBQW9IYSxNQUFLO3NEQUFTOzs7Ozs7Ozs7OztrREFJdEosOERBQUNaO3dDQUFJRCxXQUFVO2tEQUNiLDRFQUFDbkIsaURBQUlBOzRDQUFDc0MsTUFBSzs0Q0FBbUJDLGNBQWM7c0RBQzFDLDRFQUFDQztnREFBRXJCLFdBQVU7MERBQTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9qRSw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQUdMLFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDTTs0QkFBRU4sV0FBVTtzQ0FBTzs7Ozs7O3NDQUNwQiw4REFBQ25CLGlEQUFJQTs0QkFBQ3NDLE1BQUs7NEJBQVlDLGNBQWM7c0NBQ25DLDRFQUFDQztnQ0FBRXJCLFdBQVU7MENBQThHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpJO0dBbkd3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgc2V0RXJyb3IoXCJFbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkLlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2ltdWxhdGUgQVBJIGNhbGxcclxuICAgICAgICBhd2FpdCBmYWtlQXBpQ2FsbCh1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xyXG4gICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICAgIGFsZXJ0KFwiTG9naW4gc3VjY2Vzc2Z1bCFcIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFNpbXVsYXRlZCBBUEkgY2FsbFxyXG4gIGNvbnN0IGZha2VBcGlDYWxsID0gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gXCJhZG1pblwiICYmIHBhc3N3b3JkID09PSBcInBhc3N3b3JkXCIpIHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBtaW4taC1zY3JlZW5cIj5cclxuey8qIExlZnQgc2lkZTogTG9naW4gZm9ybSAqL31cclxuPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbGc6dy00LzE5IHAtOCBsZzpwLTI4IGJnLXdoaXRlIHJlbGF0aXZlXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbS00IGxnOm0tOCB3LTM2XCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmF0ZWsudW5zcmF0LmFjLmlkL2luZm9ybWF0aWthL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L1NjcmVlbi1TaG90LTIwMjAtMDgtMDItYXQtMDYuMzkuMDcucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cInctZnVsbFwiLz5cclxuICAgIDwvZGl2PlxyXG4gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgcC0xMCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBteC1hdXRvXCI+XHJcbiAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtOTAwIG1iLTVcIj5Mb2dpbjwvaDI+XHJcbiAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeDQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCBtYi01XCI+U2VsYW1hdCBkYXRhbmcga2VtYmFsaSwgRWxlay1FbGlrITwvcD5cclxuICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjay02MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiBweS0yXCI+XHJcbiAgICAgICAgRW1haWxcclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS00IHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjay03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgIFBhc3N3b3JkXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTQgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcIj57ZXJyb3J9PC9wPn1cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS00IHB4LTE0IHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci13aGl0ZSBob3ZlcjpiZy1ncmF5LTIwMFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCIgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTgwMCBob3Zlcjp0ZXh0LWJsdWUtNzAwIHRleHQtc21cIj5MdXBhIFBhc3N3b3JkPzwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIHsvKiBSaWdodCBzaWRlOiBSZWdpc3RyYXRpb24gcHJvbXB0ICovfVxyXG48ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBsZzp3LTEvMyBiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTEyXCI+XHJcbiAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5IYWxvLCBFbGVrLUVsaWshPC9oMj5cclxuICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj5CdWF0IGFrdW4gZGFuIGFrc2VzIHNlbXVhIGRhbGFtIHdlYnNpdGUgSGltcHVuYW4gTWFoYXNpc3dhIEVsZWt0cm88L3A+XHJcbiAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS00IHB4LTEwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlIGhvdmVyOmJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgUkVHSVNURVJcclxuICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkxvZ2luUGFnZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmYWtlQXBpQ2FsbCIsImFsZXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiRXJyb3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});