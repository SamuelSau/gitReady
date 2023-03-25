"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_RecordingComponent_js"],{

/***/ "./src/components/RecordingComponent.js":
/*!**********************************************!*\
  !*** ./src/components/RecordingComponent.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RecordingComponent = ()=>{\n    _s();\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audioChunks, setAudioChunks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [audioBlob, setAudioBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const startRecording = ()=>{\n        setRecording(true);\n        setAudioChunks([]);\n    };\n    const stopRecording = ()=>{\n        setRecording(false);\n        const audioBlob = new Blob(audioChunks, {\n            type: \"audio/wav\"\n        });\n        console.log(\"Audio blob type:\", audioBlob.type);\n        setAudioBlob(audioBlob);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let mediaRecorder = null;\n        if (recording) {\n            navigator.mediaDevices.getUserMedia({\n                audio: true\n            }).then((stream)=>{\n                mediaRecorder = new MediaRecorder(stream);\n                mediaRecorder.addEventListener(\"dataavailable\", (e)=>{\n                    if (e.data.size > 0) {\n                        setAudioChunks((chunks)=>[\n                                ...chunks,\n                                e.data\n                            ]);\n                    }\n                });\n                mediaRecorder.start();\n            }).catch((error)=>setError(error));\n        } else if (mediaRecorder !== null) {\n            mediaRecorder.stop();\n        }\n    }, [\n        recording\n    ]);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"audio_file\", new File([\n            audioBlob\n        ], \"audio.wav\", {\n            type: \"audio/wav\"\n        }));\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/get_chatgpt_response/\", {\n                method: \"POST\",\n                body: formData\n            });\n            console.log(\"Response:\", response);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    const downloadAudio = ()=>{\n        if (audioBlob) {\n            const url = URL.createObjectURL(audioBlob);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.setAttribute(\"download\", \"audio.wav\");\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link);\n        } else {\n            alert(\"No audio recording available.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Recording Component\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: startRecording,\n                disabled: recording,\n                children: \"Start Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: stopRecording,\n                disabled: !recording,\n                children: \"Stop Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                disabled: !audioBlob,\n                children: \"Submit Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: downloadAudio,\n                disabled: !audioBlob,\n                children: \"Download Audio\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Error: \",\n                    error.message\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 86,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RecordingComponent, \"QhAoEmF79WdbUPT4CGrz7xtsuwM=\");\n_c = RecordingComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecordingComponent);\nvar _c;\n$RefreshReg$(_c, \"RecordingComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UzNCO2dCQUFjNEIsVUFBVSxDQUFDdEQ7MEJBQVc7Ozs7OzswQkFHckQsOERBQUNvRDtnQkFBT0MsU0FBU2hCO2dCQUFlaUIsVUFBVSxDQUFDdEQ7MEJBQVc7Ozs7OztZQUdyREUsdUJBQVMsOERBQUNxRDs7b0JBQUU7b0JBQVFyRCxNQUFNc0QsT0FBTzs7Ozs7Ozs7Ozs7OztBQUd4QztHQXRGTTdEO0tBQUFBO0FBd0ZOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVjb3JkaW5nQ29tcG9uZW50LmpzP2NhZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlY29yZGluZ0NvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbcmVjb3JkaW5nLCBzZXRSZWNvcmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthdWRpb0NodW5rcywgc2V0QXVkaW9DaHVua3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthdWRpb0Jsb2IsIHNldEF1ZGlvQmxvYl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBzdGFydFJlY29yZGluZyA9ICgpID0+IHtcclxuICAgIHNldFJlY29yZGluZyh0cnVlKTtcclxuICAgIHNldEF1ZGlvQ2h1bmtzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0UmVjb3JkaW5nKGZhbHNlKTtcclxuICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkF1ZGlvIGJsb2IgdHlwZTpcIiwgYXVkaW9CbG9iLnR5cGUpO1xyXG4gICAgc2V0QXVkaW9CbG9iKGF1ZGlvQmxvYik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBtZWRpYVJlY29yZGVyID0gbnVsbDtcclxuXHJcbiAgICBpZiAocmVjb3JkaW5nKSB7XHJcbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcclxuICAgICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcclxuICAgICAgICAudGhlbigoc3RyZWFtKSA9PiB7XHJcbiAgICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtKTtcclxuICAgICAgICAgIG1lZGlhUmVjb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFhdmFpbGFibGVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgIHNldEF1ZGlvQ2h1bmtzKChjaHVua3MpID0+IFsuLi5jaHVua3MsIGUuZGF0YV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHNldEVycm9yKGVycm9yKSk7XHJcbiAgICB9IGVsc2UgaWYgKG1lZGlhUmVjb3JkZXIgIT09IG51bGwpIHtcclxuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICB9XHJcbiAgfSwgW3JlY29yZGluZ10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYXVkaW9fZmlsZVwiLCBuZXcgRmlsZShbYXVkaW9CbG9iXSwgXCJhdWRpby53YXZcIiwgeyB0eXBlOiBcImF1ZGlvL3dhdlwiIH0pKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZ2V0X2NoYXRncHRfcmVzcG9uc2UvJywge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlOlwiLCByZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkb3dubG9hZEF1ZGlvID0gKCkgPT4ge1xyXG4gICAgaWYgKGF1ZGlvQmxvYikge1xyXG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiYXVkaW8ud2F2XCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5vIGF1ZGlvIHJlY29yZGluZyBhdmFpbGFibGUuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+UmVjb3JkaW5nIENvbXBvbmVudDwvaDE+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRSZWNvcmRpbmd9IGRpc2FibGVkPXtyZWNvcmRpbmd9PlxyXG4gICAgICAgIFN0YXJ0IFJlY29yZGluZ1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfSBkaXNhYmxlZD17IXJlY29yZGluZ30+XHJcbiAgICAgICAgU3RvcCBSZWNvcmRpbmdcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBkaXNhYmxlZD17IWF1ZGlvQmxvYn0+XHJcbiAgICAgICAgU3VibWl0IFJlY29yZGluZ1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZEF1ZGlvfSBkaXNhYmxlZD17IWF1ZGlvQmxvYn0+XHJcbiAgICAgICAgRG93bmxvYWQgQXVkaW9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtlcnJvciAmJiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRpbmdDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVjb3JkaW5nQ29tcG9uZW50IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwiYXVkaW9DaHVua3MiLCJzZXRBdWRpb0NodW5rcyIsImF1ZGlvQmxvYiIsInNldEF1ZGlvQmxvYiIsImVycm9yIiwic2V0RXJyb3IiLCJzdGFydFJlY29yZGluZyIsInN0b3BSZWNvcmRpbmciLCJCbG9iIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYVJlY29yZGVyIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ0aGVuIiwic3RyZWFtIiwiTWVkaWFSZWNvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGF0YSIsInNpemUiLCJjaHVua3MiLCJzdGFydCIsImNhdGNoIiwic3RvcCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiRmlsZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZG93bmxvYWRBdWRpbyIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiYWxlcnQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RecordingComponent.js\n"));

/***/ })

}]);