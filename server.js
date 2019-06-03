/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/actions/actions.js":
/*!************************************!*\
  !*** ./src/app/actions/actions.js ***!
  \************************************/
/*! exports provided: updateTask, deleteTask, addTask, fetchTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchTodos\", function() { return fetchTodos; });\n/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsTypes */ \"./src/app/actions/actionsTypes.js\");\n\n\nfunction todos(data) {\n  return {\n    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"TODOS_FETCHED\"],\n    payload: data\n  };\n}\n\nfunction add(data) {\n  return {\n    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TODO\"],\n    payload: data\n  };\n}\n\nfunction update(data) {\n  return {\n    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_TODO\"],\n    payload: data\n  };\n}\n\nfunction remove(data) {\n  return {\n    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_TODO\"],\n    payload: data\n  };\n}\n\nfunction fetchError(err) {\n  return {\n    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ERROR\"],\n    payload: err\n  };\n}\n\nfunction updateTask(task) {\n  return function (dispatch) {\n    fetch(\"http://localhost:3000/task/\".concat(task.id), {\n      method: 'PATCH',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(task)\n    }).then(function (response) {\n      return response.json();\n    }, function (err) {\n      return dispatch(fetchError(err));\n    }).then(function (json) {\n      return dispatch(update(json));\n    });\n  };\n}\nfunction deleteTask(task_id) {\n  return function (dispatch) {\n    fetch(\"http://localhost:3000/task/\".concat(task_id), {\n      method: 'DELETE',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      }\n    }).then(function (response) {\n      return response.json();\n    }, function (err) {\n      return dispatch(fetchError(err));\n    }).then(function (json) {\n      return dispatch(remove(json));\n    });\n  };\n}\nfunction addTask(task) {\n  return function (dispatch) {\n    fetch(\"http://localhost:3000/task\", {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(task)\n    }).then(function (response) {\n      return response.json();\n    }, function (err) {\n      return dispatch(fetchError(err));\n    }).then(function (json) {\n      return dispatch(add(json));\n    });\n  };\n}\nfunction fetchTodos() {\n  return function (dispatch) {\n    fetch('http://localhost:3000/task').then(function (response) {\n      return response.json();\n    }, function (err) {\n      return dispatch(fetchError(err));\n    }).then(function (json) {\n      return dispatch(todos(json));\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/app/actions/actions.js?");

/***/ }),

/***/ "./src/app/actions/actionsTypes.js":
/*!*****************************************!*\
  !*** ./src/app/actions/actionsTypes.js ***!
  \*****************************************/
/*! exports provided: LOADING_TODOS, ADD_TODO, TODOS_FETCHED, DELETE_TODO, UPDATE_TODO, FETCH_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING_TODOS\", function() { return LOADING_TODOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TODO\", function() { return ADD_TODO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TODOS_FETCHED\", function() { return TODOS_FETCHED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_TODO\", function() { return DELETE_TODO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_TODO\", function() { return UPDATE_TODO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ERROR\", function() { return FETCH_ERROR; });\nvar LOADING_TODOS = 'LOADING_TODOS';\nvar ADD_TODO = 'ADD_TODO';\nvar TODOS_FETCHED = 'TODOS_FETCHED';\nvar DELETE_TODO = 'DELETE_TODO';\nvar UPDATE_TODO = 'UPDATE_TODO';\nvar FETCH_ERROR = 'FETCH_ERROR';\n\n//# sourceURL=webpack:///./src/app/actions/actionsTypes.js?");

/***/ }),

/***/ "./src/app/components/app.js":
/*!***********************************!*\
  !*** ./src/app/components/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoForm */ \"./src/app/components/todoForm.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoList */ \"./src/app/components/todoList.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/actions */ \"./src/app/actions/actions.js\");\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var status = _ref.status,\n      todos = _ref.todos,\n      fetchTodoList = _ref.fetchTodoList;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchTodoList();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Todo list\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), status === 'loading' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"Loading...\"), status !== 'loading' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    todos: todos\n  }));\n};\n\nApp.propTypes = {\n  fetchTodoList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  todos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(store) {\n  return {\n    todos: store.todos,\n    status: store.status\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    fetchTodoList: function fetchTodoList() {\n      return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_5__[\"fetchTodos\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(App));\n\n//# sourceURL=webpack:///./src/app/components/app.js?");

/***/ }),

/***/ "./src/app/components/todoForm.js":
/*!****************************************!*\
  !*** ./src/app/components/todoForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actions */ \"./src/app/actions/actions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar TodoForm = function TodoForm(_ref) {\n  var addTask = _ref.addTask;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      description = _useState2[0],\n      setDescription = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    autoComplete: \"off\",\n    placeholder: \"Task description\",\n    value: description,\n    onChange: function onChange(e) {\n      return setDescription(e.target.value);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return addTask({\n        description: description\n      });\n    }\n  }, \"Add task\"));\n};\n\nTodoForm.propTypes = {\n  addTask: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addTask: function addTask(task) {\n      return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__[\"addTask\"])(task));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, mapDispatchToProps)(TodoForm));\n\n//# sourceURL=webpack:///./src/app/components/todoForm.js?");

/***/ }),

/***/ "./src/app/components/todoItem.js":
/*!****************************************!*\
  !*** ./src/app/components/todoItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actions */ \"./src/app/actions/actions.js\");\n\n\n\n\n\nvar TodoItem = function TodoItem(_ref) {\n  var id = _ref.id,\n      description = _ref.description,\n      done = _ref.done,\n      switchDone = _ref.switchDone,\n      deleteTask = _ref.deleteTask;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    onChange: function onChange() {\n      return switchDone({\n        id: id,\n        done: !done\n      });\n    },\n    checked: done\n  }), description, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return deleteTask(id);\n    }\n  }, \"\\xD7\"));\n};\n\nTodoItem.propTypes = {\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  done: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  switchDone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  deleteTask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    switchDone: function switchDone(task) {\n      return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__[\"updateTask\"])(task));\n    },\n    deleteTask: function deleteTask(id) {\n      return dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__[\"deleteTask\"])(id));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, mapDispatchToProps)(TodoItem));\n\n//# sourceURL=webpack:///./src/app/components/todoItem.js?");

/***/ }),

/***/ "./src/app/components/todoList.js":
/*!****************************************!*\
  !*** ./src/app/components/todoList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItem */ \"./src/app/components/todoItem.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nvar TodoList = function TodoList(_ref) {\n  var todos = _ref.todos;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, todos.map(function (todo) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todoItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      key: todo.id\n    }, todo));\n  }));\n};\n\nTodoList.propTypes = {\n  todos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\nTodoList.defaultProps = {\n  todos: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\n//# sourceURL=webpack:///./src/app/components/todoList.js?");

/***/ }),

/***/ "./src/app/reducer.js":
/*!****************************!*\
  !*** ./src/app/reducer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/actionsTypes */ \"./src/app/actions/actionsTypes.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nvar initialState = {\n  todos: [],\n  status: 'loading'\n};\n\nvar todoApp = function todoApp() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"TODOS_FETCHED\"]:\n      return {\n        todos: _toConsumableArray(action.payload),\n        status: 'loaded'\n      };\n\n    case _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ERROR\"]:\n      return {\n        todos: [],\n        status: 'error',\n        error: action.payload\n      };\n\n    case _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_TODO\"]:\n      return {\n        todos: state.todos.map(function (todo) {\n          return todo.id === action.payload.id ? action.payload : todo;\n        }),\n        status: 'updated'\n      };\n\n    case _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TODO\"]:\n      return {\n        todos: [].concat(_toConsumableArray(state.todos), [action.payload]),\n        status: 'added'\n      };\n\n    case _actions_actionsTypes__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_TODO\"]:\n      return {\n        todos: state.todos.filter(function (todo) {\n          return todo.id !== action.payload.id;\n        }),\n        status: 'deleted'\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoApp);\n\n//# sourceURL=webpack:///./src/app/reducer.js?");

/***/ }),

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/app/reducer.js\");\n\n\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/app/store.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar tasks = [{\n  id: 1,\n  description: \"Do something.\",\n  done: false\n}, {\n  id: 2,\n  description: \"Do something 2.\",\n  done: false\n}, {\n  id: 3,\n  description: \"Something done.\",\n  done: true\n}, {\n  id: 4,\n  description: \"Do something 3.\",\n  done: false\n}, {\n  id: 5,\n  description: \"Do something else.\",\n  done: false\n}];\nvar id_counter = tasks.length + 1;\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('dist'));\napp.get('/', function (req, res) {\n  var content = Object(_render__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_app_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  res.send(content);\n});\napp.get('/task/:id', function (req, res) {\n  res.json(tasks.filter(function (task) {\n    return task.id === parseInt(req.params.id);\n  }));\n});\napp.get('/task', function (req, res) {\n  res.json(tasks.sort(function (a, b) {\n    return a.id <= b.id ? -1 : 1;\n  }));\n});\napp.post('/task', function (req, res) {\n  if (req.body.description !== undefined && req.body.description !== '') {\n    var new_task = {\n      id: id_counter,\n      description: req.body.description,\n      done: req.body.done !== undefined ? req.body.done : false\n    };\n    id_counter += 1;\n    tasks.push(new_task);\n    res.json(new_task);\n  } else {\n    res.sendStatus(400);\n  }\n});\napp.patch('/task/:id', function (req, res) {\n  var task = tasks.filter(function (task) {\n    return task.id === parseInt(req.params.id);\n  })[0];\n  if (!task) res.sendStatus(404);else {\n    if (req.body.description !== undefined) task.description = req.body.description;\n    if (req.body.done !== undefined) task.done = req.body.done;\n    tasks = tasks.filter(function (task) {\n      return task.id !== parseInt(req.params.id);\n    });\n    tasks.push(task);\n    res.json(task);\n  }\n});\napp[\"delete\"]('/task/:id', function (req, res) {\n  var task = tasks.filter(function (task) {\n    return task.id === parseInt(req.params.id);\n  })[0];\n  if (!task) res.sendStatus(404);else {\n    tasks = tasks.filter(function (task) {\n      return task.id !== parseInt(req.params.id);\n    });\n    res.json(task);\n  }\n});\napp.listen('3000', function () {\n  console.log('Interview ToDo app running...');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/app */ \"./src/app/components/app.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n  return \"\\n  <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\\\"root\\\">\".concat(content, \"</div>\\n    \\n      <script src=\\\"dist/bundle.js\\\"></script>\\n      </body>\\n      </html>\\n  \");\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });