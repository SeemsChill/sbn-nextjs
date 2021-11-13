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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ \"./libs/firebase/init.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-sha256 */ \"./node_modules/js-sha256/src/sha256.js\");\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _engines_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engines/fetcher */ \"./libs/engines/fetcher.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n(axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.xsrfHeaderName) = \"x-csrftoken\";\n(axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.xsrfCookieName) = \"csrftoken\";\n(axios__WEBPACK_IMPORTED_MODULE_8___default().defaults.withCredentials) = true;\nvar authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AuthProvider = function(param) {\n    var children = param.children;\n    _s();\n    var auth = useProvideAuth();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(authContext.Provider, {\n        value: auth,\n        __source: {\n            fileName: \"/home/devcat/dev/sbn-frontend/libs/firebase/auth.js\",\n            lineNumber: 26,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(AuthProvider, \"XNU4Jn8u4aVzJknlKOHFJq03xMo=\", false, function() {\n    return [\n        useProvideAuth\n    ];\n});\n_c = AuthProvider;\nvar useAuth = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(authContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction useProvideAuth() {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user1 = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error1 = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), success = ref2[0], setSuccess = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSubmit = ref3[0], setSubmit = ref3[1];\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();\n    var handleUser = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(rawUser) {\n        var user;\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!rawUser) {\n                        _ctx.next = 7;\n                        break;\n                    }\n                    _ctx.next = 3;\n                    return formatUser(rawUser);\n                case 3:\n                    user = _ctx.sent;\n                    setUser(user);\n                    js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"sbn-session-id\", user.token);\n                    return _ctx.abrupt(\"return\", user);\n                case 7:\n                    js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove(\"sbn-session-id\");\n                    localStorage.removeItem(\"Authorization\");\n                    setUser(false);\n                    return _ctx.abrupt(\"return\", false);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var classicSignUp = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(username, email, password, confirmPassword) {\n        var hashedPass;\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    if (!(password != confirmPassword)) {\n                        _ctx1.next = 4;\n                        break;\n                    }\n                    setError(\"Passwords do not match\");\n                    setTimeout(function() {\n                        setError(\"\");\n                    }, 3000);\n                    return _ctx1.abrupt(\"return\");\n                case 4:\n                    setSubmit(true);\n                    hashedPass = js_sha256__WEBPACK_IMPORTED_MODULE_6___default()(password);\n                    return _ctx1.abrupt(\"return\", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.createUserWithEmailAndPassword)(auth, email, hashedPass).then(function(userCredential) {\n                        handleUser(userCredential.user);\n                        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(auth.currentUser, {\n                            displayName: \"\".concat(username)\n                        }).then(_asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var res;\n                            return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return (0,_engines_fetcher__WEBPACK_IMPORTED_MODULE_7__.fetcherSignUp)(\"http://localhost:8000/api/post/register/user/\", username, email, hashedPass);\n                                    case 2:\n                                        res = _ctx.sent;\n                                        localStorage.setItem(\"Authorization\", res.data.token);\n                                    case 4:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }))).catch(function(error) {\n                            console.log(error);\n                        });\n                    }).catch(function(error) {\n                        if (error.code == \"auth/email-already-in-use\") {\n                            setError(\"Email already in use.\");\n                            setSubmit(false);\n                            setTimeout(function() {\n                                setError(\"\");\n                            }, 3000);\n                        }\n                    }));\n                case 7:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    }));\n    var classicSignIn = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(email, password) {\n        var hashedPass;\n        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx2) {\n            while(1)switch(_ctx2.prev = _ctx2.next){\n                case 0:\n                    setSubmit(true);\n                    hashedPass = js_sha256__WEBPACK_IMPORTED_MODULE_6___default()(password);\n                    return _ctx2.abrupt(\"return\", (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithEmailAndPassword)(auth, email, hashedPass).then(_asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(userCredential) {\n                        var res;\n                        return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    handleUser(userCredential.user);\n                                    _ctx.next = 3;\n                                    return (0,_engines_fetcher__WEBPACK_IMPORTED_MODULE_7__.fetcherSignIn)(\"http://localhost:8000/api/post/login/\", hashedPass);\n                                case 3:\n                                    res = _ctx.sent;\n                                    localStorage.setItem(\"Authorization\", res.data.token);\n                                case 5:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }))).catch(function(error) {\n                        setSubmit(false);\n                        console.log(error.code);\n                        console.log(error.message);\n                    }));\n                case 3:\n                case \"end\":\n                    return _ctx2.stop();\n            }\n        }, _callee2);\n    }));\n    var signout = function() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(auth).then(function() {\n            return handleUser(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onIdTokenChanged)(auth, handleUser);\n        return function() {\n            return unsubscribe();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_8___default().get(\"http://localhost:8000/api/get/csrf/\", {\n            method: \"GET\",\n            credentials: \"include\"\n        });\n    }, []);\n    return {\n        user: user1,\n        error: error1,\n        success: success,\n        isSubmit: isSubmit,\n        classicSignIn: classicSignIn,\n        classicSignUp: classicSignUp,\n        signout: signout\n    };\n}\n_s2(useProvideAuth, \"kJDFpqBrFYq5w6ICMHgN+/v80QY=\");\nvar formatUser = _asyncToGenerator(_home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n    var token;\n    return _home_devcat_dev_sbn_frontend_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return user.getIdToken();\n            case 2:\n                token = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    uid: user.uid,\n                    email: user.email,\n                    name: user.displayName,\n                    provider: user.providerData[0].providerId,\n                    photoUrl: user.photoURL,\n                    token: token\n                });\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2ZpcmViYXNlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDcEQ7QUFRSDtBQUNTO0FBQ0Q7QUFDbUM7QUFDeEM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEJnQixzRUFBNkIsR0FBRyxDQUFhO0FBQzdDQSxzRUFBNkIsR0FBRyxDQUFXO0FBQzNDQSx1RUFBOEIsR0FBRyxJQUFJO0FBRXJDLEdBQUssQ0FBQ00sV0FBVyxpQkFBR2xCLG9EQUFhO0FBRWpDLEdBQUssQ0FBQ21CLFlBQVksR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM5QixHQUFLLENBQUNuQixJQUFJLEdBQUdvQixjQUFjO0lBRTNCLE1BQU0sc0VBQUVILFdBQVcsQ0FBQ0ksUUFBUTtRQUFDQyxLQUFLLEVBQUV0QixJQUFJOzs7Ozs7O2tCQUFHbUIsUUFBUTs7QUFDckQsQ0FBQztHQUpLRCxZQUFZOztRQUNIRSxjQUFjOzs7S0FEdkJGLFlBQVk7QUFNbEIsR0FBSyxDQUFDSyxPQUFPLEdBQUcsUUFDaEIsR0FEc0IsQ0FBQzs7SUFDckIsTUFBTSxDQUFDekIsaURBQVUsQ0FBQ21CLFdBQVc7QUFDL0IsQ0FBQztJQUZLTSxPQUFPO1NBSUpILGNBQWMsR0FBRyxDQUFDOztJQUN6QixHQUFLLENBQW1CeEIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUI0QixLQUFJLEdBQWE1QixHQUFjLEtBQXpCNkIsT0FBTyxHQUFJN0IsR0FBYztJQUN0QyxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QjhCLE1BQUssR0FBYzlCLElBQVksS0FBeEIrQixRQUFRLEdBQUkvQixJQUFZO0lBQ3RDLEdBQUssQ0FBeUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQWxDZ0MsT0FBTyxHQUFnQmhDLElBQVksS0FBMUJpQyxVQUFVLEdBQUlqQyxJQUFZO0lBQzFDLEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDa0MsUUFBUSxHQUFlbEMsSUFBZSxLQUE1Qm1DLFNBQVMsR0FBSW5DLElBQWU7SUFDN0MsR0FBSyxDQUFDSSxJQUFJLEdBQUdDLHNEQUFPO0lBRXBCLEdBQUssQ0FBQytCLFVBQVUsNkpBQUcsUUFBUSxTQUFEQyxPQUFPLEVBQUssQ0FBQztZQUU3QlQsSUFBSTs7Ozt5QkFEUlMsT0FBTzs7Ozs7MkJBQ1VDLFVBQVUsQ0FBQ0QsT0FBTzs7b0JBQS9CVCxJQUFJO29CQUNWQyxPQUFPLENBQUNELElBQUk7b0JBQ1pqQixxREFBVyxDQUFDLENBQWdCLGlCQUFFaUIsSUFBSSxDQUFDWSxLQUFLO2lEQUNqQ1osSUFBSTs7b0JBRWJqQix3REFBYyxDQUFDLENBQWdCO29CQUMvQitCLFlBQVksQ0FBQ0MsVUFBVSxDQUFDLENBQWU7b0JBQ3ZDZCxPQUFPLENBQUMsS0FBSztpREFDTixLQUFLOzs7Ozs7SUFDZCxDQUFDO0lBRUQsR0FBSyxDQUFDZSxhQUFhLDZKQUFHLFFBQVEsVUFBREMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFLLENBQUM7WUFVckVDLFVBQVU7Ozs7MEJBVFpGLFFBQVEsSUFBSUMsZUFBZTs7OztvQkFDN0JqQixRQUFRLENBQUMsQ0FBd0I7b0JBQ2pDbUIsVUFBVSxDQUFDLFFBQ2pCLEdBRHVCLENBQUM7d0JBQ2hCbkIsUUFBUSxDQUFDLENBQUU7b0JBQ2IsQ0FBQyxFQUFFLElBQUk7OztvQkFJVEksU0FBUyxDQUFDLElBQUk7b0JBQ1JjLFVBQVUsR0FBR3JDLGdEQUFNLENBQUNtQyxRQUFRO2tEQUMzQnpDLDZFQUE4QixDQUFDRixJQUFJLEVBQUUwQyxLQUFLLEVBQUVHLFVBQVUsRUFDMURFLElBQUksQ0FBQyxRQUFRLENBQVBDLGNBQWMsRUFBSyxDQUFDO3dCQUN6QmhCLFVBQVUsQ0FBQ2dCLGNBQWMsQ0FBQ3hCLElBQUk7d0JBQzlCbEIsNERBQWEsQ0FBQ04sSUFBSSxDQUFDaUQsV0FBVyxFQUFFLENBQUM7NEJBQy9CQyxXQUFXLEVBQUcsR0FBVyxPQUFUVCxRQUFRO3dCQUMxQixDQUFDLEVBQ0VNLElBQUksMkpBQUMsUUFBUSxXQUFJLENBQUM7Z0NBQ1hJLEdBQUc7Ozs7OytDQUFTMUMsK0RBQWEsQ0FDN0IsQ0FBK0MsZ0RBQy9DZ0MsUUFBUSxFQUNSQyxLQUFLLEVBQ0xHLFVBQVU7O3dDQUpOTSxHQUFHO3dDQU1UYixZQUFZLENBQUNjLE9BQU8sQ0FBQyxDQUFlLGdCQUFFRCxHQUFHLENBQUNFLElBQUksQ0FBQ2pCLEtBQUs7Ozs7Ozt3QkFDdEQsQ0FBQyxJQUNBa0IsS0FBSyxDQUFDLFFBQVEsQ0FBUDVCLEtBQUssRUFBSyxDQUFDOzRCQUNqQjZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOUIsS0FBSzt3QkFDbkIsQ0FBQztvQkFDTCxDQUFDLEVBQ0E0QixLQUFLLENBQUMsUUFBUSxDQUFQNUIsS0FBSyxFQUFLLENBQUM7d0JBQ2pCLEVBQUUsRUFBRUEsS0FBSyxDQUFDK0IsSUFBSSxJQUFJLENBQTJCLDRCQUFFLENBQUM7NEJBQzlDOUIsUUFBUSxDQUFDLENBQXVCOzRCQUNoQ0ksU0FBUyxDQUFDLEtBQUs7NEJBQ2ZlLFVBQVUsQ0FBQyxRQUNyQixHQUQyQixDQUFDO2dDQUNoQm5CLFFBQVEsQ0FBQyxDQUFFOzRCQUNiLENBQUMsRUFBRSxJQUFJO3dCQUNULENBQUM7b0JBQ0gsQ0FBQzs7Ozs7O0lBQ0wsQ0FBQztJQUVELEdBQUssQ0FBQytCLGFBQWEsNkpBQUcsUUFBUSxVQUFEaEIsS0FBSyxFQUFFQyxRQUFRLEVBQUssQ0FBQztZQUUxQ0UsVUFBVTs7OztvQkFEaEJkLFNBQVMsQ0FBQyxJQUFJO29CQUNSYyxVQUFVLEdBQUdyQyxnREFBTSxDQUFDbUMsUUFBUTtrREFDM0J4Qyx5RUFBMEIsQ0FBQ0gsSUFBSSxFQUFFMEMsS0FBSyxFQUFFRyxVQUFVLEVBQ3RERSxJQUFJLDJKQUFDLFFBQVEsU0FBREMsY0FBYyxFQUFLLENBQUM7NEJBRXpCRyxHQUFHOzs7O29DQURUbkIsVUFBVSxDQUFDZ0IsY0FBYyxDQUFDeEIsSUFBSTs7MkNBQ1pkLCtEQUFhLENBQzdCLENBQXVDLHdDQUN2Q21DLFVBQVU7O29DQUZOTSxHQUFHO29DQUlUYixZQUFZLENBQUNjLE9BQU8sQ0FBQyxDQUFlLGdCQUFFRCxHQUFHLENBQUNFLElBQUksQ0FBQ2pCLEtBQUs7Ozs7OztvQkFDdEQsQ0FBQyxJQUNBa0IsS0FBSyxDQUFDLFFBQVEsQ0FBUDVCLEtBQUssRUFBSyxDQUFDO3dCQUNqQkssU0FBUyxDQUFDLEtBQUs7d0JBQ2Z3QixPQUFPLENBQUNDLEdBQUcsQ0FBQzlCLEtBQUssQ0FBQytCLElBQUk7d0JBQ3RCRixPQUFPLENBQUNDLEdBQUcsQ0FBQzlCLEtBQUssQ0FBQ2lDLE9BQU87b0JBQzNCLENBQUM7Ozs7OztJQUNMLENBQUM7SUFFRCxHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCLE1BQU0sQ0FBQ3ZELHNEQUFPLENBQUNMLElBQUksRUFBRStDLElBQUksQ0FBQyxRQUFRO1lBQUZmLE1BQU0sQ0FBTkEsVUFBVSxDQUFDLEtBQUs7O0lBQ2xELENBQUM7SUFFRG5DLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDZ0UsV0FBVyxHQUFHekQsK0RBQWdCLENBQUNKLElBQUksRUFBRWdDLFVBQVU7UUFDckQsTUFBTSxDQUFDLFFBQVE7WUFBRjZCLE1BQU0sQ0FBTkEsV0FBVzs7SUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMaEUsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZmMsZ0RBQVMsQ0FBQyxDQUFxQyxzQ0FBRSxDQUFDO1lBQ2hEb0QsTUFBTSxFQUFFLENBQUs7WUFDYkMsV0FBVyxFQUFFLENBQVM7UUFDeEIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLENBQUMsQ0FBQztRQUNOeEMsSUFBSSxFQUFKQSxLQUFJO1FBQ0pFLEtBQUssRUFBTEEsTUFBSztRQUNMRSxPQUFPLEVBQVBBLE9BQU87UUFDUEUsUUFBUSxFQUFSQSxRQUFRO1FBQ1I0QixhQUFhLEVBQWJBLGFBQWE7UUFDYmxCLGFBQWEsRUFBYkEsYUFBYTtRQUNib0IsT0FBTyxFQUFQQSxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUM7SUF4R1F4QyxjQUFjO0FBMEd2QixHQUFLLENBQUNjLFVBQVUsNkpBQUcsUUFBUSxTQUFEVixJQUFJLEVBQUssQ0FBQztRQUM1QlksS0FBSzs7Ozs7dUJBQVNaLElBQUksQ0FBQ3lDLFVBQVU7O2dCQUE3QjdCLEtBQUs7NkNBQ0osQ0FBQztvQkFDTjhCLEdBQUcsRUFBRTFDLElBQUksQ0FBQzBDLEdBQUc7b0JBQ2J4QixLQUFLLEVBQUVsQixJQUFJLENBQUNrQixLQUFLO29CQUNqQnlCLElBQUksRUFBRTNDLElBQUksQ0FBQzBCLFdBQVc7b0JBQ3RCa0IsUUFBUSxFQUFFNUMsSUFBSSxDQUFDNkMsWUFBWSxDQUFDLENBQUMsRUFBRUMsVUFBVTtvQkFDekNDLFFBQVEsRUFBRS9DLElBQUksQ0FBQ2dELFFBQVE7b0JBQ3ZCcEMsS0FBSyxFQUFMQSxLQUFLO2dCQUNQLENBQUM7Ozs7OztBQUNILENBQUM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9maXJlYmFzZS9hdXRoLmpzPzljZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhdXRoIGZyb20gXCIuL2luaXRcIjtcbmltcG9ydCB7XG4gIGdldEF1dGgsXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIG9uSWRUb2tlbkNoYW5nZWQsXG4gIHNpZ25PdXQsXG4gIHVwZGF0ZVByb2ZpbGUsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgc2hhMjU2IGZyb20gXCJqcy1zaGEyNTZcIjtcbmltcG9ydCB7IGZldGNoZXJTaWduVXAsIGZldGNoZXJTaWduSW4gfSBmcm9tIFwiLi4vZW5naW5lcy9mZXRjaGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIngtY3NyZnRva2VuXCI7XG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcblxuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5jb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59O1xuXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNTdWJtaXQsIHNldFN1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG5cbiAgY29uc3QgaGFuZGxlVXNlciA9IGFzeW5jIChyYXdVc2VyKSA9PiB7XG4gICAgaWYgKHJhd1VzZXIpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHJhd1VzZXIpO1xuICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgIENvb2tpZXMuc2V0KFwic2JuLXNlc3Npb24taWRcIiwgdXNlci50b2tlbik7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gICAgQ29va2llcy5yZW1vdmUoXCJzYm4tc2Vzc2lvbi1pZFwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkF1dGhvcml6YXRpb25cIik7XG4gICAgc2V0VXNlcihmYWxzZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNsYXNzaWNTaWduVXAgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSA9PiB7XG4gICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgc2V0RXJyb3IoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U3VibWl0KHRydWUpO1xuICAgIGNvbnN0IGhhc2hlZFBhc3MgPSBzaGEyNTYocGFzc3dvcmQpO1xuICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIGhhc2hlZFBhc3MpXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgaGFuZGxlVXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcbiAgICAgICAgdXBkYXRlUHJvZmlsZShhdXRoLmN1cnJlbnRVc2VyLCB7XG4gICAgICAgICAgZGlzcGxheU5hbWU6IGAke3VzZXJuYW1lfWAsXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hlclNpZ25VcChcbiAgICAgICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3QvcmVnaXN0ZXIvdXNlci9cIixcbiAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICBoYXNoZWRQYXNzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBdXRob3JpemF0aW9uXCIsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09IFwiYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZVwiKSB7XG4gICAgICAgICAgc2V0RXJyb3IoXCJFbWFpbCBhbHJlYWR5IGluIHVzZS5cIik7XG4gICAgICAgICAgc2V0U3VibWl0KGZhbHNlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGFzc2ljU2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldFN1Ym1pdCh0cnVlKTtcbiAgICBjb25zdCBoYXNoZWRQYXNzID0gc2hhMjU2KHBhc3N3b3JkKTtcbiAgICByZXR1cm4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIGhhc2hlZFBhc3MpXG4gICAgICAudGhlbihhc3luYyAodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgaGFuZGxlVXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hlclNpZ25JbihcbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zdC9sb2dpbi9cIixcbiAgICAgICAgICBoYXNoZWRQYXNzXG4gICAgICAgICk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQXV0aG9yaXphdGlvblwiLCByZXMuZGF0YS50b2tlbik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRTdWJtaXQoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5jb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4gaGFuZGxlVXNlcihmYWxzZSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbklkVG9rZW5DaGFuZ2VkKGF1dGgsIGhhbmRsZVVzZXIpO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXQvY3NyZi9cIiwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICAgIGVycm9yLFxuICAgIHN1Y2Nlc3MsXG4gICAgaXNTdWJtaXQsXG4gICAgY2xhc3NpY1NpZ25JbixcbiAgICBjbGFzc2ljU2lnblVwLFxuICAgIHNpZ25vdXQsXG4gIH07XG59XG5cbmNvbnN0IGZvcm1hdFVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpO1xuICByZXR1cm4ge1xuICAgIHVpZDogdXNlci51aWQsXG4gICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgbmFtZTogdXNlci5kaXNwbGF5TmFtZSxcbiAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcbiAgICBwaG90b1VybDogdXNlci5waG90b1VSTCxcbiAgICB0b2tlbixcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aCB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImF1dGgiLCJnZXRBdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbklkVG9rZW5DaGFuZ2VkIiwic2lnbk91dCIsInVwZGF0ZVByb2ZpbGUiLCJDb29raWVzIiwic2hhMjU2IiwiZmV0Y2hlclNpZ25VcCIsImZldGNoZXJTaWduSW4iLCJheGlvcyIsInVzZVNXUiIsImRlZmF1bHRzIiwieHNyZkhlYWRlck5hbWUiLCJ4c3JmQ29va2llTmFtZSIsIndpdGhDcmVkZW50aWFscyIsImF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VQcm92aWRlQXV0aCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJpc1N1Ym1pdCIsInNldFN1Ym1pdCIsImhhbmRsZVVzZXIiLCJyYXdVc2VyIiwiZm9ybWF0VXNlciIsInNldCIsInRva2VuIiwicmVtb3ZlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNsYXNzaWNTaWduVXAiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJoYXNoZWRQYXNzIiwic2V0VGltZW91dCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsImN1cnJlbnRVc2VyIiwiZGlzcGxheU5hbWUiLCJyZXMiLCJzZXRJdGVtIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJjbGFzc2ljU2lnbkluIiwibWVzc2FnZSIsInNpZ25vdXQiLCJ1bnN1YnNjcmliZSIsImdldCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiZ2V0SWRUb2tlbiIsInVpZCIsIm5hbWUiLCJwcm92aWRlciIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJwaG90b1VybCIsInBob3RvVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/firebase/auth.js\n");

/***/ })

});