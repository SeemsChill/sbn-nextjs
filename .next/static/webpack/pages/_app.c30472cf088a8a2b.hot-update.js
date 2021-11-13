"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./libs/firebase/auth.js":
/*!*******************************!*\
  !*** ./libs/firebase/auth.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ \"./libs/firebase/init.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-sha256 */ \"./node_modules/js-sha256/src/sha256.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _engines_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engines/fetcher */ \"./libs/engines/fetcher.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n(axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.xsrfHeaderName) = \"x-csrftoken\";\n(axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.xsrfCookieName) = \"csrftoken\";\n(axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.withCredentials) = true;\nvar authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AuthProvider = function(param) {\n    var children = param.children;\n    _s();\n    var auth = useProvideAuth();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(authContext.Provider, {\n        value: auth,\n        __source: {\n            fileName: \"/home/devcat/dev/sbn-frontend/libs/firebase/auth.js\",\n            lineNumber: 28,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(AuthProvider, \"XNU4Jn8u4aVzJknlKOHFJq03xMo=\", false, function() {\n    return [\n        useProvideAuth\n    ];\n});\n_c = AuthProvider;\nvar useAuth = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(authContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction useProvideAuth() {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user1 = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), success = ref2[0], setSuccess = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSubmit = ref3[0], setSubmit = ref3[1];\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n    var handleUser = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(rawUser) {\n        var user;\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!rawUser) {\n                        _ctx.next = 7;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return formatUser(rawUser);\n                case 3:\n                    user = _ctx.sent;\n                    setUser(user);\n                    js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"sbn-session-id\", user.token);\n                    return _ctx.abrupt(\"return\", user);\n                case 7:\n                    js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove(\"sbn-session-id\");\n                    localStorage.removeItem(\"Authorization\");\n                    setUser(false);\n                    return _ctx.abrupt(\"return\", false);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var classicSignUp = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(username, email, password, confirmPassword) {\n        var hashedPass;\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    if (!(password != confirmPassword)) {\n                        _ctx1.next = 4;\n                        break;\n                    }\n                    setError(\"Passwords do not match\");\n                    setTimeout(function() {\n                        setError(\"\");\n                    }, 3000);\n                    return _ctx1.abrupt(\"return\");\n                case 4:\n                    setSubmit(true);\n                    hashedPass = js_sha256__WEBPACK_IMPORTED_MODULE_6___default()(password);\n                    return _ctx1.abrupt(\"return\", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.createUserWithEmailAndPassword)(auth, email, hashedPass).then(function(userCredential) {\n                        handleUser(userCredential.user);\n                        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, {\n                            displayName: \"\".concat(username)\n                        }).then(_asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var res;\n                            return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return (0,_engines_fetcher__WEBPACK_IMPORTED_MODULE_7__.fetcherSignUp)(\"http://localhost:8000/api/post/register/user/\", username, email, hashedPass);\n                                    case 2:\n                                        res = _ctx.sent;\n                                        localStorage.setItem(\"Authorization\", res.data.token);\n                                    case 4:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }))).catch(function(error) {\n                            console.log(error);\n                        });\n                    }).catch(function(error) {\n                        setSubmit(false);\n                        if (error.code == \"auth/email-already-in-use\") {\n                            setError(\"Email already in use.\");\n                            setTimeout(function() {\n                                setError(\"\");\n                            }, 3000);\n                        }\n                    }));\n                case 7:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    }));\n    var classicSignIn = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(email, password) {\n        var hashedPass;\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx2) {\n            while(1)switch(_ctx2.prev = _ctx2.next){\n                case 0:\n                    setSubmit(true);\n                    hashedPass = js_sha256__WEBPACK_IMPORTED_MODULE_6___default()(password);\n                    return _ctx2.abrupt(\"return\", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(auth, email, hashedPass).then(_asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userCredential) {\n                        var res;\n                        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    handleUser(userCredential.user);\n                                    _ctx.next = 3;\n                                    return (0,_engines_fetcher__WEBPACK_IMPORTED_MODULE_7__.fetcherSignIn)(\"http://localhost:8000/api/post/login/\", hashedPass);\n                                case 3:\n                                    res = _ctx.sent;\n                                    localStorage.setItem(\"Authorization\", res.data.token);\n                                case 5:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }))).catch(function(error) {\n                        setSubmit(false);\n                        if (error.code == \"auth/wrong-password\") {\n                            setError(\"Incorrect password.\");\n                            setTimeout(function() {\n                                setError(\"\");\n                            }, 3000);\n                        }\n                        if (error.code == \"auth/user-not-found\") {\n                            setError(\"User not found, please sign-up.\");\n                            setTimeout(function() {\n                                setError(\"\");\n                            }, 3000);\n                        }\n                    }));\n                case 3:\n                case \"end\":\n                    return _ctx2.stop();\n            }\n        }, _callee2);\n    }));\n    var signInWithGoogle = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx3) {\n            while(1)switch(_ctx3.prev = _ctx3.next){\n                case 0:\n                    return _ctx3.abrupt(\"return\", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(auth, new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider()).then(_asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userCredential) {\n                        var res;\n                        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    handleUser(userCredential.user);\n                                    _ctx.next = 3;\n                                    return (0,_engines_fetcher__WEBPACK_IMPORTED_MODULE_7__.fetcherSignUpThirdParty)(\"http://localhost:8000/api/post/register/user/\");\n                                case 3:\n                                    res = _ctx.sent;\n                                    console.log(res);\n                                case 5:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }))).catch(function(error) {\n                        console.log(error.code);\n                        console.log(error.message);\n                    }));\n                case 1:\n                case \"end\":\n                    return _ctx3.stop();\n            }\n        }, _callee3);\n    }));\n    var signout = function() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(auth).then(function() {\n            return handleUser(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onIdTokenChanged)(auth, handleUser);\n        return function() {\n            return unsubscribe();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8___default().get(\"http://localhost:8000/api/get/csrf/\", {\n            method: \"GET\",\n            credentials: \"include\"\n        });\n    }, []);\n    return {\n        user: user1,\n        error: error1,\n        success: success,\n        isSubmit: isSubmit,\n        classicSignIn: classicSignIn,\n        classicSignUp: classicSignUp,\n        signout: signout,\n        signInWithGoogle: signInWithGoogle\n    };\n}\n_s2(useProvideAuth, \"kJDFpqBrFYq5w6ICMHgN+/v80QY=\");\nvar formatUser = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n    var token;\n    return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return user.getIdToken();\n            case 2:\n                token = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    uid: user.uid,\n                    email: user.email,\n                    name: user.displayName,\n                    provider: user.providerData[0].providerId,\n                    photoUrl: user.photoURL,\n                    token: token\n                });\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQURWLElBQUksRUFBSyxDQUFDO1FBQzVCWSxLQUFLOzs7Ozt1QkFBU1osSUFBSSxDQUFDMEMsVUFBVTs7Z0JBQTdCOUIsS0FBSzs2Q0FDSixDQUFDO29CQUNOK0IsR0FBRyxFQUFFM0MsSUFBSSxDQUFDMkMsR0FBRztvQkFDYnpCLEtBQUssRUFBRWxCLElBQUksQ0FBQ2tCLEtBQUs7b0JBQ2pCMEIsSUFBSSxFQUFFNUMsSUFBSSxDQUFDMEIsV0FBVztvQkFDdEJtQixRQUFRLEVBQUU3QyxJQUFJLENBQUM4QyxZQUFZLENBQUMsQ0FBQyxFQUFFQyxVQUFVO29CQUN6Q0MsUUFBUSxFQUFFaEQsSUFBSSxDQUFDaUQsUUFBUTtvQkFDdkJyQyxLQUFLLEVBQUxBLEtBQUs7Z0JBQ1AsQ0FBQzs7Ozs7O0FBQ0gsQ0FBQztBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL2ZpcmViYXNlL2F1dGguanM/OWNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF1dGggZnJvbSBcIi4vaW5pdFwiO1xuaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbkluV2l0aFBvcHVwLFxuICBvbklkVG9rZW5DaGFuZ2VkLFxuICBzaWduT3V0LFxuICB1cGRhdGVQcm9maWxlLFxuICBHb29nbGVBdXRoUHJvdmlkZXIsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgc2hhMjU2IGZyb20gXCJqcy1zaGEyNTZcIjtcbmltcG9ydCB7IGZldGNoZXJTaWduSW4sIGZldGNoZXJTaWduVXAsIGZldGNoZXJTaWduVXBUaGlyZFBhcnR5IH0gZnJvbSBcIi4uL2VuZ2luZXMvZmV0Y2hlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmF4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gXCJ4LWNzcmZ0b2tlblwiO1xuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSBcImNzcmZ0b2tlblwiO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG5cbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU3VibWl0LCBzZXRTdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuXG4gIGNvbnN0IGhhbmRsZVVzZXIgPSBhc3luYyAocmF3VXNlcikgPT4ge1xuICAgIGlmIChyYXdVc2VyKSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZm9ybWF0VXNlcihyYXdVc2VyKTtcbiAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICBDb29raWVzLnNldChcInNibi1zZXNzaW9uLWlkXCIsIHVzZXIudG9rZW4pO1xuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICAgIENvb2tpZXMucmVtb3ZlKFwic2JuLXNlc3Npb24taWRcIik7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJBdXRob3JpemF0aW9uXCIpO1xuICAgIHNldFVzZXIoZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBjbGFzc2ljU2lnblVwID0gYXN5bmMgKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkgPT4ge1xuICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHNldEVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgIH0sIDMwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN1Ym1pdCh0cnVlKTtcbiAgICBjb25zdCBoYXNoZWRQYXNzID0gc2hhMjU2KHBhc3N3b3JkKTtcbiAgICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBoYXNoZWRQYXNzKVxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgICAgIGhhbmRsZVVzZXIodXNlckNyZWRlbnRpYWwudXNlcik7XG4gICAgICAgIHVwZGF0ZVByb2ZpbGUoYXV0aC5jdXJyZW50VXNlciwge1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiBgJHt1c2VybmFtZX1gLFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoZXJTaWduVXAoXG4gICAgICAgICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0L3JlZ2lzdGVyL3VzZXIvXCIsXG4gICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgaGFzaGVkUGFzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQXV0aG9yaXphdGlvblwiLCByZXMuZGF0YS50b2tlbik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRTdWJtaXQoZmFsc2UpO1xuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIikge1xuICAgICAgICAgIHNldEVycm9yKFwiRW1haWwgYWxyZWFkeSBpbiB1c2UuXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsYXNzaWNTaWduSW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0U3VibWl0KHRydWUpO1xuICAgIGNvbnN0IGhhc2hlZFBhc3MgPSBzaGEyNTYocGFzc3dvcmQpO1xuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgaGFzaGVkUGFzcylcbiAgICAgIC50aGVuKGFzeW5jICh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBoYW5kbGVVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaGVyU2lnbkluKFxuICAgICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0L2xvZ2luL1wiLFxuICAgICAgICAgIGhhc2hlZFBhc3NcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBdXRob3JpemF0aW9uXCIsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdChmYWxzZSk7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09IFwiYXV0aC93cm9uZy1wYXNzd29yZFwiKSB7XG4gICAgICAgICAgc2V0RXJyb3IoXCJJbmNvcnJlY3QgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yLmNvZGUgPT0gXCJhdXRoL3VzZXItbm90LWZvdW5kXCIpIHtcbiAgICAgICAgICBzZXRFcnJvcihcIlVzZXIgbm90IGZvdW5kLCBwbGVhc2Ugc2lnbi11cC5cIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKSkudGhlbihhc3luYyAodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgIGhhbmRsZVVzZXIodXNlckNyZWRlbnRpYWwudXNlcik7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaGVyU2lnblVwVGhpcmRQYXJ0eShcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3QvcmVnaXN0ZXIvdXNlci9cIlxuICAgICAgKTsgXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IuY29kZSk7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4gaGFuZGxlVXNlcihmYWxzZSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbklkVG9rZW5DaGFuZ2VkKGF1dGgsIGhhbmRsZVVzZXIpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQvY3NyZi9cIiwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICAgIGVycm9yLFxuICAgIHN1Y2Nlc3MsXG4gICAgaXNTdWJtaXQsXG4gICAgY2xhc3NpY1NpZ25JbixcbiAgICBjbGFzc2ljU2lnblVwLFxuICAgIHNpZ25vdXQsXG4gICAgc2lnbkluV2l0aEdvb2dsZSxcbiAgfTtcbn1cblxuY29uc3QgZm9ybWF0VXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XG4gIHJldHVybiB7XG4gICAgdWlkOiB1c2VyLnVpZCxcbiAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICBuYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgIHByb3ZpZGVyOiB1c2VyLnByb3ZpZGVyRGF0YVswXS5wcm92aWRlcklkLFxuICAgIHBob3RvVXJsOiB1c2VyLnBob3RvVVJMLFxuICAgIHRva2VuLFxuICB9O1xufTtcblxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXV0aCIsImdldEF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhQb3B1cCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJzaWduT3V0IiwidXBkYXRlUHJvZmlsZSIsIkdvb2dsZUF1dGhQcm92aWRlciIsIkNvb2tpZXMiLCJzaGEyNTYiLCJmZXRjaGVyU2lnbkluIiwiZmV0Y2hlclNpZ25VcCIsImZldGNoZXJTaWduVXBUaGlyZFBhcnR5IiwiYXhpb3MiLCJ1c2VTV1IiLCJkZWZhdWx0cyIsInhzcmZIZWFkZXJOYW1lIiwieHNyZkNvb2tpZU5hbWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUHJvdmlkZUF1dGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaXNTdWJtaXQiLCJzZXRTdWJtaXQiLCJoYW5kbGVVc2VyIiwicmF3VXNlciIsImZvcm1hdFVzZXIiLCJzZXQiLCJ0b2tlbiIsInJlbW92ZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjbGFzc2ljU2lnblVwIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiaGFzaGVkUGFzcyIsInNldFRpbWVvdXQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwicmVzIiwic2V0SXRlbSIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiY2xhc3NpY1NpZ25JbiIsInNpZ25JbldpdGhHb29nbGUiLCJtZXNzYWdlIiwic2lnbm91dCIsInVuc3Vic2NyaWJlIiwiZ2V0IiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJnZXRJZFRva2VuIiwidWlkIiwibmFtZSIsInByb3ZpZGVyIiwicHJvdmlkZXJEYXRhIiwicHJvdmlkZXJJZCIsInBob3RvVXJsIiwicGhvdG9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/firebase/auth.js\n");

/***/ })

});