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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction LoginPage() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!username || !password) {\n            setError(\"Email and password are required.\");\n        } else {\n            try {\n                // Simulate API call\n                await fakeApiCall(username, password);\n                setUsername(\"\");\n                setPassword(\"\");\n                setError(null);\n                alert(\"Login successful!\");\n            } catch (error) {\n                setError(\"Invalid email or password.\");\n            }\n        }\n    };\n    // Simulated API call\n    const fakeApiCall = (username, password)=>{\n        return new Promise((resolve, reject)=>{\n            setTimeout(()=>{\n                if (username === \"admin\" && password === \"password\") {\n                    resolve();\n                } else {\n                    reject(new Error(\"Invalid credentials\"));\n                }\n            }, 1000);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col lg:flex-row min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center w-full lg:w-4/19 p-8 lg:p-28 bg-white relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 left-0 m-4 lg:m-8 w-36\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://vscode.dev/github/Himpunan-Mahasiswa-Elektro-UNSRAT/website-hme/blob/feat/vinc/login-page-fix.png\",\n                            alt: \"Logo\",\n                            className: \"w-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 5\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-md p-10 bg-white shadow-md rounded-lg mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-bold text-center text-blue-900 mb-7\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-5x1 text-center text-sm text-gray-800 mb-5\",\n                                children: \" Selamat datang kembali, Elek-Elik!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                className: \"space-y-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"username\",\n                                                className: \"block text-black-600 text-sm font-bold mb-2 py-2\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 5\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"username\",\n                                                type: \"text\",\n                                                value: username,\n                                                onChange: (e)=>setUsername(e.target.value),\n                                                className: \"shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"block text-black-700 text-sm font-bold mb-2\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 7\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                type: \"password\",\n                                                value: password,\n                                                onChange: (e)=>setPassword(e.target.value),\n                                                className: \"shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 5\n                                    }, this),\n                                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-red-500 text-xs italic\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-1xl flex items-center justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-900 text-white font-bold py-4 px-14 rounded-full focus:outline-none border border-white hover:bg-gray-200\",\n                                            type: \"submit\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 7\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-center mt-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/forgot-password\",\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-blue-800 hover:text-blue-700 text-sm\",\n                                                children: \"Lupa Password?\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 9\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 7\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center w-full lg:w-1/3 bg-blue-900 text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center p-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl font-bold mb-4\",\n                            children: \"Halo, Elek-Elik!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-6\",\n                            children: \"Buat akun dan akses semua dalam website Himpunan Mahasiswa Elektro\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/register\",\n                            legacyBehavior: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"inline-block bg-blue-900 text-white font-bold py-4 px-10 rounded-full border border-white hover:bg-gray-200\",\n                                children: \"REGISTER\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 92,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\website-hme-main\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"RvMmxVkv+7mWGlmKyRdsvpfij9g=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNmO0FBRWQsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUVsRCxNQUFNUyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUksQ0FBQ1IsWUFBWSxDQUFDRSxVQUFVO1lBQzFCRyxTQUFTO1FBQ1gsT0FBTztZQUNMLElBQUk7Z0JBQ0Ysb0JBQW9CO2dCQUNwQixNQUFNSSxZQUFZVCxVQUFVRTtnQkFDNUJELFlBQVk7Z0JBQ1pFLFlBQVk7Z0JBQ1pFLFNBQVM7Z0JBQ1RLLE1BQU07WUFDUixFQUFFLE9BQU9OLE9BQU87Z0JBQ2RDLFNBQVM7WUFDWDtRQUNGO0lBQ0Y7SUFFQSxxQkFBcUI7SUFDckIsTUFBTUksY0FBYyxDQUFDVCxVQUFrQkU7UUFDckMsT0FBTyxJQUFJUyxRQUFRLENBQUNDLFNBQVNDO1lBQzNCQyxXQUFXO2dCQUNULElBQUlkLGFBQWEsV0FBV0UsYUFBYSxZQUFZO29CQUNuRFU7Z0JBQ0YsT0FBTztvQkFDTEMsT0FBTyxJQUFJRSxNQUFNO2dCQUNuQjtZQUNGLEdBQUc7UUFDTDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUVwQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUlDLEtBQUk7NEJBQTRHQyxLQUFJOzRCQUFPSixXQUFVOzs7Ozs7Ozs7OztrQ0FFN0ksOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDZCw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQW9EOzs7Ozs7MENBQ2xFLDhEQUFDTTtnQ0FBRU4sV0FBVTswQ0FBa0Q7Ozs7OzswQ0FDL0QsOERBQUNPO2dDQUFLQyxVQUFVbkI7Z0NBQWNXLFdBQVU7O2tEQUN0Qyw4REFBQ0M7OzBEQUNELDhEQUFDUTtnREFBTUMsU0FBUTtnREFBV1YsV0FBVTswREFBbUQ7Ozs7OzswREFHckYsOERBQUNXO2dEQUNDQyxJQUFHO2dEQUNIQyxNQUFLO2dEQUNMQyxPQUFPL0I7Z0RBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxZQUFZZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dEQUMzQ2QsV0FBVTs7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDQzs7MERBQ0MsOERBQUNRO2dEQUFNQyxTQUFRO2dEQUFXVixXQUFVOzBEQUE4Qzs7Ozs7OzBEQUdsRiw4REFBQ1c7Z0RBQ0NDLElBQUc7Z0RBQ0hDLE1BQUs7Z0RBQ0xDLE9BQU83QjtnREFDUDhCLFVBQVUsQ0FBQ0MsSUFBTTlCLFlBQVk4QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0RBQzNDZCxXQUFVOzs7Ozs7Ozs7Ozs7b0NBR2JiLHVCQUFTLDhEQUFDbUI7d0NBQUVOLFdBQVU7a0RBQStCYjs7Ozs7O2tEQUN0RCw4REFBQ2M7d0NBQUlELFdBQVU7a0RBQ2IsNEVBQUNrQjs0Q0FBT2xCLFdBQVU7NENBQW9IYSxNQUFLO3NEQUFTOzs7Ozs7Ozs7OztrREFJdEosOERBQUNaO3dDQUFJRCxXQUFVO2tEQUNiLDRFQUFDbkIsaURBQUlBOzRDQUFDc0MsTUFBSzs0Q0FBbUJDLGNBQWM7c0RBQzFDLDRFQUFDQztnREFBRXJCLFdBQVU7MERBQTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9qRSw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQUdMLFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDTTs0QkFBRU4sV0FBVTtzQ0FBTzs7Ozs7O3NDQUNwQiw4REFBQ25CLGlEQUFJQTs0QkFBQ3NDLE1BQUs7NEJBQVlDLGNBQWM7c0NBQ25DLDRFQUFDQztnQ0FBRXJCLFdBQVU7MENBQThHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpJO0dBbkd3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICBzZXRFcnJvcihcIkVtYWlsIGFuZCBwYXNzd29yZCBhcmUgcmVxdWlyZWQuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBTaW11bGF0ZSBBUEkgY2FsbFxyXG4gICAgICAgIGF3YWl0IGZha2VBcGlDYWxsKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoXCJcIik7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBzdWNjZXNzZnVsIVwiKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRFcnJvcihcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gU2ltdWxhdGVkIEFQSSBjYWxsXHJcbiAgY29uc3QgZmFrZUFwaUNhbGwgPSAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lID09PSBcImFkbWluXCIgJiYgcGFzc3dvcmQgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IG1pbi1oLXNjcmVlblwiPlxyXG57LyogTGVmdCBzaWRlOiBMb2dpbiBmb3JtICovfVxyXG48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBsZzp3LTQvMTkgcC04IGxnOnAtMjggYmctd2hpdGUgcmVsYXRpdmVcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBtLTQgbGc6bS04IHctMzZcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92c2NvZGUuZGV2L2dpdGh1Yi9IaW1wdW5hbi1NYWhhc2lzd2EtRWxla3Ryby1VTlNSQVQvd2Vic2l0ZS1obWUvYmxvYi9mZWF0L3ZpbmMvbG9naW4tcGFnZS1maXgucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cInctZnVsbFwiLz5cclxuICA8L2Rpdj5cclxuIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHAtMTAgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgbXgtYXV0b1wiPlxyXG4gIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTkwMCBtYi03XCI+TG9naW48L2gyPlxyXG4gIDxwIGNsYXNzTmFtZT1cInRleHQtNXgxIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTgwMCBtYi01XCI+IFNlbGFtYXQgZGF0YW5nIGtlbWJhbGksIEVsZWstRWxpayE8L3A+XHJcbiAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2stNjAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgcHktMlwiPlxyXG4gICAgICAgIEVtYWlsXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktNCBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2stNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5cclxuICAgICAgICBQYXNzd29yZFxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS00IHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgaXRhbGljXCI+e2Vycm9yfTwvcD59XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktNCBweC0xNCByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItd2hpdGUgaG92ZXI6YmctZ3JheS0yMDBcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgTG9naW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL2ZvcmdvdC1wYXNzd29yZFwiIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCB0ZXh0LXNtXCI+THVwYSBQYXNzd29yZD88L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICB7LyogUmlnaHQgc2lkZTogUmVnaXN0cmF0aW9uIHByb21wdCAqL31cclxuPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbGc6dy0xLzMgYmctYmx1ZS05MDAgdGV4dC13aGl0ZVwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0xMlwiPlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+SGFsbywgRWxlay1FbGlrITwvaDI+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJtYi02XCI+QnVhdCBha3VuIGRhbiBha3NlcyBzZW11YSBkYWxhbSB3ZWJzaXRlIEhpbXB1bmFuIE1haGFzaXN3YSBFbGVrdHJvPC9wPlxyXG4gICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctYmx1ZS05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktNCBweC0xMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZSBob3ZlcjpiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgIFJFR0lTVEVSXHJcbiAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJMb2dpblBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmFrZUFwaUNhbGwiLCJhbGVydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIkVycm9yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});