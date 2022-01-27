(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"newYear","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"newYear","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"newYear","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"newYear","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"newYear","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!************************************!*\
  !*** D:/uinApp/newYear/pages.json ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!*********************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _mixin = _interopRequireDefault(__webpack_require__(/*! ./tool/mixin/mixin.js */ 13));


var _index = _interopRequireDefault(__webpack_require__(/*! ./tool/function/dayjs/index */ 17));
var _util = _interopRequireDefault(__webpack_require__(/*! ./tool/function/util */ 15));


var _guid = _interopRequireDefault(__webpack_require__(/*! ./tool/function/guid.js */ 23));

var _sleep = _interopRequireDefault(__webpack_require__(/*! ./tool/function/sleep.js */ 24));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./tool/function/randomArray.js */ 25));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./tool/function/deepClone.js */ 26));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./tool/function/deepMerge.js */ 27));



var _test = _interopRequireDefault(__webpack_require__(/*! ./tool/function/test.js */ 28));

var _random = _interopRequireDefault(__webpack_require__(/*! ./tool/function/random.js */ 29));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./tool/function/trim.js */ 30));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./tool/function/toast.js */ 31));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./tool/function/getParent.js */ 32));

var _getParentAttr = _interopRequireDefault(__webpack_require__(/*! ./tool/function/getParentAttr.js */ 33));

var _getParentAls = _interopRequireDefault(__webpack_require__(/*! ./tool/function/getParentAls.js */ 34));

var _upload = _interopRequireDefault(__webpack_require__(/*! ./tool/function/upload.js */ 35));

var _preview = _interopRequireDefault(__webpack_require__(/*! ./tool/function/preview.js */ 16));


var _objToString = __webpack_require__(/*! ./tool/function/objToString.js */ 39);

var _calendar = _interopRequireDefault(__webpack_require__(/*! ./tool/function/calendar.js */ 40));

var _signBoard = _interopRequireDefault(__webpack_require__(/*! ./tool/function/signBoard.js */ 41));

var _choujianggailv = _interopRequireDefault(__webpack_require__(/*! ./tool/function/choujianggailv.js */ 42));



var _config = _interopRequireDefault(__webpack_require__(/*! ./tool/config/config.js */ 43));
var _tmVuetify = _interopRequireDefault(__webpack_require__(/*! ./tool/store/tm-vuetify */ 44));
var _vuex = _interopRequireDefault(__webpack_require__(/*! ./tool/function/vuex.js */ 46));
var _theme = _interopRequireDefault(__webpack_require__(/*! ./tool/function/theme.js */ 47));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./tool/request/index */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


var $tm = {

  sleep: _sleep.default,
  request: _index2.default,
  objToString: _objToString.objToString,
  dayjs: _index.default.dayjs,
  guid: _guid.default,
  upload: _upload.default,
  preview: _preview.default,
  randomArray: _randomArray.default,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  getParentAttr: _getParentAttr.default,
  getParentAls: _getParentAls.default,
  trim: _trim.default,
  toast: _toast.default,
  config: _config.default,
  calendar: _calendar.default,
  HandwritingSelf: _signBoard.default,
  choujiang: _choujianggailv.default,
  vx: new _vuex.default(_tmVuetify.default),
  theme: _theme.default,
  u: _util.default };





uni.$tm = $tm;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  Vue.prototype.$tm = _objectSpread({}, $tm);

  // Vue.prototype.$store = store

};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/mixin/mixin.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _wxshare = _interopRequireDefault(__webpack_require__(/*! ../function/wxshare.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
module.exports = _objectSpread(_objectSpread({},
_wxshare.default.sharebywx), {}, {
  data: function data() {
    return {
      tmVueTifly_pages: '' };

  },
  created: function created() {
    this.setVueTiflyThemeBlack();
  },
  onShow: function onShow() {
    uni.$tm.vx.commit('setPageNow', '/' + this.__route__);
    this.setVueTiflyThemeBlack();
  },
  onLoad: function onLoad() {
    // this.$tm.vx.commit('setWxShare',{title:'hhhhh'})
  },

  methods: {
    setVueTiflyThemeBlack: function setVueTiflyThemeBlack() {
      var vueTifly_black = this.$tm.vx.state().tmVuetify.black;
      if (vueTifly_black === true) {
        uni.setTabBarStyle({
          backgroundColor: "#212121" });

      } else {
        uni.setTabBarStyle({
          backgroundColor: "#FFFFFF" });

      }
    },
    // ...mapMutations(['setTmVuetifyColor', 'setTmVuetifyBlack']),
    // 检测提供的字符串是否是颜色值还是颜色主题。true，表示颜色主题名称。否则为false.
    $TestColor: function $TestColor(color) {
      if (typeof color !== 'string') return false;

      if (color.indexOf('rgb') > -1 || color.indexOf('rgba') > -1 || color.indexOf('#') > -1) {
        return {
          theme: false,
          color: color };

      } else {
        return {
          theme: true,
          color: color };

      }
    },
    // 检查给定的值。如果是带有vw,vh,rem,em,upx,rpx,%则返回.如果是px,或者45数字，则转换为upx单位的数值。
    $TestUnit: function $TestUnit(n) {
      if (typeof n !== 'string' && typeof n !== 'number') return 0;
      if (typeof n === 'number') return {
        type: 'number',
        value: uni.upx2px(n) };

      var reg = /(vw|vh|rem|em|\%|upx|rpx|auto|px)/g;

      if (reg.test(n)) {

        return {
          type: 'string',
          value: n };

      }
      var num = parseFloat(n);
      if (isNaN(n)) return 0;
      return {
        type: 'number',
        value: uni.upx2px(n) };


    },
    $Querey: function $Querey(clsaaName, t) {var _this = this;var ycnum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;var isAll = arguments.length > 3 ? arguments[3] : undefined;

      return new Promise(function (rs, rj) {

        if (isAll == true) {













          uni.$tm.sleep(ycnum).then(function (r) {
            uni.createSelectorQuery().in(t ? t : _this).selectAll(clsaaName).
            boundingClientRect().exec(
            function (res) {
              rs(res);
            });
          });











        } else {













          uni.$tm.sleep(ycnum).then(function (r) {
            uni.createSelectorQuery().in(t ? t : _this).select(clsaaName).
            boundingClientRect().exec(
            function (res) {
              rs(res);
            });
          });











        }
        // console.log(ycnum);

      });
    } },


  onPageScroll: function onPageScroll(e) {
    /**
                                           * 此全局注册用于在组件顶部，监听下拉状况以解决渐变透明的功能。
                                           * 组件：tm-menubars能用到。
                                           */
    uni.$emit('onPageScroll', e);
  },
  onReachBottom: function onReachBottom() {

  },
  beforeDestroy: function beforeDestroy() {

  } });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!*************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/wxshare.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * 微信小程序分享功能。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */
var cfg = function cfg() {

  var config = _objectSpread({},
  this.$tm.vx.store.state.tmVuetify.wxshareConfig_miniMp || {});

  if (typeof config.query !== 'object') config.query = {};
  //获取当前路径。
  if (!config.path) {
    var cur = getCurrentPages();
    config.path = cur[cur.length - 1].route;

    config.path = (config.path[0] == '/' ? '' : '/') + config.path;
    config.copyLink = config.path;

  }
  // util.httpUrlAddKey
  var query = '';
  for (var key in config.query) {
    if (config.hasOwnProperty.call(config.query, key)) {
      var element = config.query[key];
      query = _util.default.httpUrlAddKey(query, key, element);
    }
  }
  config.copyLink = config.path = config.path + query;
  config.query = query;

  return config;


};
var sharebywx = {
  onShareAppMessage: function onShareAppMessage() {
    var cg = cfg.call(this) || {};

    return _objectSpread({}, cg);
  },
  onShareTimeline: function onShareTimeline() {
    var cg = cfg.call(this) || {};

    return _objectSpread({}, cg);
  } };var _default =



{ sharebywx: sharebywx };exports.default = _default;

/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/util.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











var _preview = __webpack_require__(/*! ./preview.js */ 16); /**
                                         * 预览图片。
                                         @param {Object} url 必填 当前预览的图片链接。
                                         @param {Object} list 可以是url数组，也可以是对象，数据比如：["http:url"] or [{url:"https:url",...}]
                                         @param {Object} rangKey 如果list是对象数组，需要提供url字段。
                                         */ /**
                                            * 数据分组
                                            * @param {Array} oArr - 原数组列表
                                            * @param {Number} length - 单个数组长度
                                            * @return {Array}  arr - 分组后的新数组
                                            */function splitData() {var oArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;var arr = [];var minArr = [];
  oArr.forEach(function (c) {
    if (minArr.length === length) {
      minArr = [];
    }
    if (minArr.length === 0) {
      arr.push(minArr);
    }
    minArr.push(c);
  });

  return arr;
}

/**
  * 剩余时间格式化
  * @param {Number} t - 剩余多少秒
  * @return {Object}  format - 格式后的天时分秒对象
  */
function timeMuch(t) {
  var format = {
    d: '00',
    h: '00',
    m: '00',
    s: '00' };

  if (t > 0) {
    var d = Math.floor(t / 86400);
    var h = Math.floor(t / 3600 % 24);
    var m = Math.floor(t / 60 % 60);
    var s = Math.floor(t % 60);
    format.d = d < 10 ? '0' + d : d;
    format.h = h < 10 ? '0' + h : h;
    format.m = m < 10 ? '0' + m : m;
    format.s = s < 10 ? '0' + s : s;
  }
  return format;
}
/**
  * 打电话
  * @param {String<Number>} phoneNumber - 数字字符串
  * @return {Promise}
  */
function callPhone() {var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var num = phoneNumber.toString();
  return new Promise(function (rs, rj) {
    uni.makePhoneCall({
      phoneNumber: num,
      success: function success() {return rs();},
      fail: function fail(err) {return rj(err);} });

  });
}

/**
   * 调起客户端相机扫码。
   * @param {Boolean} onlyFromCamera true 是否只允许相机扫码识别
   * @param {Array<string>} scanType ['barCode', 'qrCode', 'datamatrix','datamatrix']
   * @returns Promise 成功返回相关数据结构
   */
function scanCode() {var onlyFromCamera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;var scanType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['barCode', 'qrCode', 'datamatrix', 'datamatrix'];



  return new Promise(function (rs, rj) {
    uni.scanCode({
      onlyFromCamera: onlyFromCamera,
      scanType: scanType,
      success: function success(res) {return rs(res);},
      fail: function fail(error) {return rj(error);} });

  });
}

/**
   * 设置剪切板内容。
   * @param {String} data 
   * @returns Promise true/false
   */
function setClipboardData(data) {


  return new Promise(function (rs, rj) {
    uni.setClipboardData({
      data: data,
      success: function success() {return rs(true);},
      fail: function fail(error) {return rj(error);} });

  });






















}
/**
   * 获取剪切板内容
   * @returns Promise 剪切板内容
   */
function getClipboardData() {

  return new Promise(function (rs, rj) {
    uni.getClipboardData({
      success: function success(res) {return rs(res.data);},
      fail: function fail(error) {return rj(error);} });

  });




}

/**
   * 设置cookie数据
   * @param {String} key 键值
   * @param {String} data 值
   * @returns Boolean
   */
function setCookie(key, data) {
  try {
    uni.setStorageSync(key, data);
    return true;
  } catch (e) {
    return false;
  }
}
/**
   * 删除一个本地cookie
   * @param {String} key 键值
   * @returns Boolean
   */
function delCookie(key) {
  try {
    uni.removeStorageSync(key);
    return true;
  } catch (e) {
    return false;
  }
}

/**
   * 获取一个cookie数据
   * 如果存入的是对象，返回的也是对象。如果是string返回的也是字符串。
   * @param {String} key 键
   * @returns json/string
   */
function getCookie(key) {
  try {
    var value = uni.getStorageSync(key);
    try {
      var val = JSON.parse(value);
      return val;
    } catch (e) {
      return value;
    }
  } catch (e) {
    return undefined;
  }
}


/**
   * 向地址连接追加参数。
   * @param {string} uri 网址
   * @param {string} key 字段
   * @param {string} value 字段值
   * @returns 
   */
function httpUrlAddKey(uri, key, value) {
  if (!value) {
    return uri;
  }
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}var _default =

{
  previewImg: _preview.previewImg, //预览图片。
  splitData: splitData, //数据分组
  timeMuch: timeMuch, //剩余时间格式化
  callPhone: callPhone, //打电话
  scanCode: scanCode, //调起客户端相机扫码。
  setClipboardData: setClipboardData, //设置剪切板内容。
  getClipboardData: getClipboardData, //获取剪切板内容
  setCookie: setCookie, //设置cookie数据
  delCookie: delCookie, //删除一个本地cookie
  getCookie: getCookie, //获取一个cookie数据
  httpUrlAddKey: httpUrlAddKey //向地址连接追加参数
};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */
/*!*************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/preview.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 上传文件。
                                                                                                      * 作者：tmzdy
                                                                                                      * 时间：‎2021‎年‎7‎月‎28‎日，‏‎9:14:53
                                                                                                      * 联系：zhongjihan@sina.com
                                                                                                      * 预览图片。
                                                                                                      * @param {Object} url 必填 当前预览的图片链接。
                                                                                                      * @param {Object} list 可以是url数组，也可以是对象，数据比如：["http:url"] or [{url:"https:url",...}]
                                                                                                      * @param {Object} rangKey 如果list是对象数组，需要提供url字段。
                                                                                                      */
function previewImg(url, list, rangKey) {

  if (!url) {
    uni.$tm.toast("参数有误");
    return;
  }

  if (arguments.length == 1) {
    uni.previewImage({
      current: url,
      urls: list ? list : [url] });

  } else if (arguments.length === 3) {

    if (typeof list[0] === 'object' && typeof list[0] !== 'undefined') {

      var urls = [];
      list.forEach(function (item) {
        urls.push(item[rangKey]);
      });

      uni.previewImage({
        current: url,
        urls: urls,
        fail: function fail(er) {
          console.warn(er);
        } });

    } else if (typeof list[0] === 'string') {
      uni.previewImage({
        current: url,
        urls: list });

    }
  } else {
    uni.$tm.toast("参数有误");
  }



}var _default =

{
  previewImg: previewImg };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 17 */
/*!*****************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/dayjs/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;__webpack_require__(/*! ./zh-cn.min */ 18);
var relativeTime = __webpack_require__(/*! ./relativeTime.min */ 20);
var isBetween = __webpack_require__(/*! ./isBetween.min */ 21);
var toObject = __webpack_require__(/*! ./toObject.min */ 22);
var dayjs = __webpack_require__(/*! ./dayjs.min */ 19);

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(toObject);var _default =

{ dayjs: dayjs };exports.default = _default;

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/dayjs/zh-cn.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/dayjs@1.10.7/locale/zh-cn.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, _) { true ? module.exports = _(__webpack_require__(/*! ./dayjs.min */ 19)) : undefined;}(this, function (e) {"use strict";function _(e) {return e && "object" == typeof e && "default" in e ? e : { default: e };}var t = _(e),d = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function ordinal(e, _) {switch (_) {case "W":return e + "周";default:return e + "日";}}, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s后", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function meridiem(e, _) {var t = 100 * e + _;return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1100 ? "上午" : t < 1300 ? "中午" : t < 1800 ? "下午" : "晚上";} };return t.default.locale(d, null, !0), d;});

/***/ }),
/* 19 */
/*!*********************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/dayjs/dayjs.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {"use strict";var t = 1e3,e = 6e4,n = 36e5,r = "millisecond",i = "second",s = "minute",u = "hour",a = "day",o = "week",f = "month",h = "quarter",c = "year",d = "date",$ = "Invalid Date",l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },m = function m(t, e, n) {var r = String(t);return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;},g = { s: m, z: function z(t) {var e = -t.utcOffset(),n = Math.abs(e),r = Math.floor(n / 60),i = n % 60;return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");}, m: function t(e, n) {if (e.date() < n.date()) return -t(n, e);var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),i = e.clone().add(r, f),s = n - i < 0,u = e.clone().add(r + (s ? -1 : 1), f);return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);}, a: function a(t) {return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);}, p: function p(t) {return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "");}, u: function u(t) {return void 0 === t;} },D = "en",v = {};v[D] = M;var p = function p(t) {return t instanceof _;},S = function S(t, e, n) {var r;if (!t) return D;if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {var i = t.name;v[i] = t, r = i;}return !n && r && (D = r), r || !n && D;},w = function w(t, e) {if (p(t)) return t.clone();var n = "object" == typeof e ? e : {};return n.date = t, n.args = arguments, new _(n);},O = g;O.l = S, O.i = p, O.w = function (t, e) {return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });};var _ = function () {function M(t) {this.$L = S(t.locale, null, !0), this.parse(t);}var m = M.prototype;return m.parse = function (t) {this.$d = function (t) {var e = t.date,n = t.utc;if (null === e) return new Date(NaN);if (O.u(e)) return new Date();if (e instanceof Date) return new Date(e);if ("string" == typeof e && !/Z$/i.test(e)) {var r = e.match(l);if (r) {var i = r[2] - 1 || 0,s = (r[7] || "0").substring(0, 3);return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);}}return new Date(e);}(t), this.$x = t.x || {}, this.init();}, m.init = function () {var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();}, m.$utils = function () {return O;}, m.isValid = function () {return !(this.$d.toString() === $);}, m.isSame = function (t, e) {var n = w(t);return this.startOf(e) <= n && n <= this.endOf(e);}, m.isAfter = function (t, e) {return w(t) < this.startOf(e);}, m.isBefore = function (t, e) {return this.endOf(e) < w(t);}, m.$g = function (t, e, n) {return O.u(t) ? this[e] : this.set(n, t);}, m.unix = function () {return Math.floor(this.valueOf() / 1e3);}, m.valueOf = function () {return this.$d.getTime();}, m.startOf = function (t, e) {var n = this,r = !!O.u(e) || e,h = O.p(t),$ = function $(t, e) {var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);return r ? i : i.endOf(a);},l = function l(t, e) {return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);},y = this.$W,M = this.$M,m = this.$D,g = "set" + (this.$u ? "UTC" : "");switch (h) {case c:return r ? $(1, 0) : $(31, 11);case f:return r ? $(1, M) : $(0, M + 1);case o:var D = this.$locale().weekStart || 0,v = (y < D ? y + 7 : y) - D;return $(r ? m - v : m + (6 - v), M);case a:case d:return l(g + "Hours", 0);case u:return l(g + "Minutes", 1);case s:return l(g + "Seconds", 2);case i:return l(g + "Milliseconds", 3);default:return this.clone();}}, m.endOf = function (t) {return this.startOf(t, !1);}, m.$set = function (t, e) {var n,o = O.p(t),h = "set" + (this.$u ? "UTC" : ""),$ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],l = o === a ? this.$D + (e - this.$W) : e;if (o === f || o === c) {var y = this.clone().set(d, 1);y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;} else $ && this.$d[$](l);return this.init(), this;}, m.set = function (t, e) {return this.clone().$set(t, e);}, m.get = function (t) {return this[O.p(t)]();}, m.add = function (r, h) {var d,$ = this;r = Number(r);var l = O.p(h),y = function y(t) {var e = w($);return O.w(e.date(e.date() + Math.round(t * r)), $);};if (l === f) return this.set(f, this.$M + r);if (l === c) return this.set(c, this.$y + r);if (l === a) return y(1);if (l === o) return y(7);var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,m = this.$d.getTime() + r * M;return O.w(m, this);}, m.subtract = function (t, e) {return this.add(-1 * t, e);}, m.format = function (t) {var e = this,n = this.$locale();if (!this.isValid()) return n.invalidDate || $;var r = t || "YYYY-MM-DDTHH:mm:ssZ",i = O.z(this),s = this.$H,u = this.$m,a = this.$M,o = n.weekdays,f = n.months,h = function h(t, n, i, s) {return t && (t[n] || t(e, r)) || i[n].substr(0, s);},c = function c(t) {return O.s(s % 12 || 12, t, "0");},d = n.meridiem || function (t, e, n) {var r = t < 12 ? "AM" : "PM";return n ? r.toLowerCase() : r;},l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i };return r.replace(y, function (t, e) {return e || l[t] || i.replace(":", "");});}, m.utcOffset = function () {return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);}, m.diff = function (r, d, $) {var l,y = O.p(d),M = w(r),m = (M.utcOffset() - this.utcOffset()) * e,g = this - M,D = O.m(this, M);return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);}, m.daysInMonth = function () {return this.endOf(f).$D;}, m.$locale = function () {return v[this.$L];}, m.locale = function (t, e) {if (!t) return this.$L;var n = this.clone(),r = S(t, e, !0);return r && (n.$L = r), n;}, m.clone = function () {return O.w(this.$d, this);}, m.toDate = function () {return new Date(this.valueOf());}, m.toJSON = function () {return this.isValid() ? this.toISOString() : null;}, m.toISOString = function () {return this.$d.toISOString();}, m.toString = function () {return this.$d.toUTCString();}, M;}(),b = _.prototype;return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {b[t[1]] = function (e) {return this.$g(e, t[0], t[1]);};}), w.extend = function (t, e) {return t.$i || (t(e, _, w), t.$i = !0), w;}, w.locale = S, w.isDayjs = p, w.unix = function (t) {return w(1e3 * t);}, w.en = v[D], w.Ls = v, w.p = {}, w;});

/***/ }),
/* 20 */
/*!****************************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/dayjs/relativeTime.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (r, e) { true ? module.exports = e() : undefined;}(this, function () {"use strict";return function (r, e, t) {r = r || {};var n = e.prototype,o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };function i(r, e, t, o) {return n.fromToBase(r, e, t, o);}t.en.relativeTime = o, n.fromToBase = function (e, n, i, d, u) {for (var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {var y = h[c];y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0));var p = (r.rounding || Math.round)(Math.abs(f));if (s = f > 0, p <= y.r || !y.r) {p <= 1 && c > 0 && (y = h[c - 1]);var v = l[y.l];u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s);break;}}if (n) return a;var M = s ? l.future : l.past;return "function" == typeof M ? M(a) : M.replace("%s", a);}, n.to = function (r, e) {return i(r, e, this, !0);}, n.from = function (r, e) {return i(r, e, this);};var d = function d(r) {return r.$u ? t.utc() : t();};n.toNow = function (r) {return this.to(d(this), r);}, n.fromNow = function (r) {return this.from(d(this), r);};};});

/***/ }),
/* 21 */
/*!*************************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/dayjs/isBetween.min.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, i) { true ? module.exports = i() : undefined;}(this, function () {"use strict";return function (e, i, t) {i.prototype.isBetween = function (e, i, s, f) {var n = t(e),o = t(i),r = "(" === (f = f || "()")[0],u = ")" === f[1];return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));};};});

/***/ }),
/* 22 */
/*!************************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/dayjs/toObject.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {"use strict";return function (t, e) {e.prototype.toObject = function () {return { years: this.$y, months: this.$M, date: this.$D, hours: this.$H, minutes: this.$m, seconds: this.$s, milliseconds: this.$ms };};};});

/***/ }),
/* 23 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/guid.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 24 */
/*!***********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/sleep.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 作者：tmzdy
                                                                                                      * 延时操作
                                                                                                      * @param {Number} wait = [500] 延时
                                                                                                      */
function sleep() {var wait = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var timid = null;
  clearTimeout(timid);
  return new Promise(function (res, rej) {
    timid = setTimeout(function () {
      res();
    }, wait);
  });
}var _default =

sleep;exports.default = _default;

/***/ }),
/* 25 */
/*!*****************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/randomArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 26 */
/*!***************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/deepClone.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此库来自 https://www.uviewui.com/js/intro.html
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 27 */
/*!***************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/deepMerge.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 此库来自 https://www.uviewui.com/js/intro.html

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 28 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/test.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

/**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 检查对象或者数组的值， true表示通过，没有空；false表示有空值。
   * @param {Object} obj 对象
   * @param {Array<String>} filter 需要排除的字段以数组提供。 对象
   */
function checkObject(obj) {var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var istrue = true;
  function testObjec(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) || obj == null) {
      istrue = false;
      return false;
    }
    for (var item in obj) {
      if (filter.indexOf(item) === -1) {
        if (typeof obj[item] === 'undefined' || obj[item] === null) {

          istrue = false;
          break;
          return false;
        }
        if (typeof obj[item] === 'object') {
          if (Array.isArray(obj[item])) {
            if (obj[item].length == 0) {
              istrue = false;

              break;
              return false;
            }
          } else {
            testObjec(obj[item]);

          }

        } else if (typeof obj[item] === 'string') {

          if (!uni.$tm.trim(obj[item])) {
            istrue = false;
            break;
            return false;
          }
        }
      }

    }

  }
  testObjec(obj);
  return istrue;
}
//中国邮政编码
function chinaPost(value) {
  return /[1-9]\d{5}(?!\d)/.test(value);
}
//中国银行卡号
function bankCard(value) {
  var p = /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/;
  var str = value.replace(/\s+/g, "");
  return p.test(str);
}
//密码验证，只能字母字符和数字
//默认6位
function password(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var p = new RegExp("^[w+|-|+*.`!@#$%^&()_+,///]{" + len + ",}$");
  return p.test(value);
}
//密码验证，只能字母字符和数字
//默认6位
//并且，大小写字母和数字必须至少要有1位。
function password2(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var p = new RegExp("^[w+|-|+*.`!@#$%^&()_+,///]{" + len + ",}$");
  if (!p.test(value)) return false;
  if (!/[a-z]{1,}/.test(value)) return false;
  if (!/[A-Z]{1,}/.test(value)) return false;
  if (!/[0-9]{1,}/.test(value)) return false;
  return true;
}var _default =

{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  idCard: idCard,
  carNo: carNo,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  jsonString: jsonString,
  object: object,
  checkObject: checkObject,
  chinaPost: chinaPost,
  password: password,
  password2: password2 };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/random.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 30 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/trim.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 31 */
/*!***********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/toast.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 32 */
/*!***************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/getParent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 此库来自 https://www.uviewui.com/js/intro.html
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {var _parent$$options;
    // 父组件
    if (((_parent$$options = parent.$options) === null || _parent$$options === void 0 ? void 0 : _parent$$options.name) !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 33 */
/*!*******************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/getParentAttr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParentAttr; // 使用时，node =  this.$parent;
function getParentAttr(name, keys, node) {

  var parent = node;
  while (parent) {var _parent$$options;
    // 父组件
    if (((_parent$$options = parent.$options) === null || _parent$$options === void 0 ? void 0 : _parent$$options.name) !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {

      return parent[keys];
    }
  }
  return undefined;


}

/***/ }),
/* 34 */
/*!******************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/getParentAls.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParentAls; // 使用时，node =  this.$parent;
// 根据给定的父组件名，寻找它的上一级。
function getParentAls(name, node) {

  var parent = node;
  while (parent) {var _parent$$options;
    // 父组件
    if (((_parent$$options = parent.$options) === null || _parent$$options === void 0 ? void 0 : _parent$$options.name) !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {

      return parent;
    }
  }
  return undefined;


}

/***/ }),
/* 35 */
/*!************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/upload.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 36));var _guid = _interopRequireDefault(__webpack_require__(/*! ./guid */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 上传文件。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 作者：tmzdy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 时间：‎2021‎年‎7‎月‎28‎日，‏‎9:14:53
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 联系：zhongjihan@sina.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} chooesefile -- 选择图片上传
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} selected -- 选择图片成功后触发。返回选择后的图片。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} addfile -- 动态加入预上传的文件。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} progress -- 进度。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} fail -- 失败。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} success -- 成功。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} complete -- 完成。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} start -- 开始上传。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {Function} stop -- 停止上传。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */var
uploadfile = /*#__PURE__*/function () {



  function uploadfile(_ref) {var _arguments$;var maxfile = _ref.maxfile,uploadUrl = _ref.uploadUrl,opts = _ref.opts,file_list = _ref.file_list,isAuto = _ref.isAuto;_classCallCheck(this, uploadfile);_defineProperty(this, "filelist", []);_defineProperty(this, "isStop", false);_defineProperty(this, "index", 0);
    var arg = _objectSpread({
      maxfile: 9,
      uploadUrl: '',
      file_list: [],
      isAuto: true,
      opts: {},
      maxsize: 10 * 1024 * 1024,
      code: 0 }, (_arguments$ =
    arguments[0]) !== null && _arguments$ !== void 0 ? _arguments$ : {});
    var ots = {
      name: 'file', header: {} };
    //配置{name: 'file', // 上传时的文件key名。默认file,header: {}, // 上传的头部参数。}
    this.config = {
      maxfile: arg.maxfile,
      uploadUrl: arg.uploadUrl,
      opts: _objectSpread(_objectSpread({}, ots), arg.opts),
      file_list: arg.file_list, //默认提供的图片.
      maxsize: arg.maxsize,
      code: arg.code,
      isAuto: arg.isAuto //自动上传
    };
  }
  /**
     * 成功后返回选择后的图片列表。
     */_createClass(uploadfile, [{ key: "chooesefile", value: function () {var _chooesefile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var t;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                t = this;return _context.abrupt("return",
                new Promise(function (rs, rj) {

                  uni.chooseImage({
                    count: t.config.maxfile,
                    fail: function fail(e) {
                      uni.$tm.toast("用户取消选择图片");
                      rj();
                    },
                    success: function success(res) {var _t$filelist;
                      if (res.tempFilePaths.length == 0) {
                        uni.$tm.toast("未选择图片");
                        return;
                      }
                      var imgarray = res.tempFilePaths;
                      var fielist = res.tempFiles;
                      var jgsk = [];
                      //0待上传，1上传中，2上传失败，3上传成功。4超过大小限制
                      imgarray.forEach(function (item, index) {
                        var isMaxsize = fielist[index].size > t.config.maxsize ? true : false;
                        jgsk.push({
                          url: item,
                          status: isMaxsize ? '超过大小' : "待上传",
                          progress: isMaxsize ? 100 : 0,
                          fileId: (0, _guid.default)(),
                          statusCode: isMaxsize ? 4 : 0,
                          data: null //上传成功后的回调数据。
                        });
                      });
                      (_t$filelist = t.filelist).push.apply(_t$filelist, jgsk);

                      t.selected(t.filelist);
                      if (t.config.isAuto) {
                        t.start();
                      }

                      rs(t.filelist);
                    } });

                }));case 2:case "end":return _context.stop();}}}, _callee, this);}));function chooesefile() {return _chooesefile.apply(this, arguments);}return chooesefile;}() }, { key: "setConfig", value: function setConfig(_ref2)

    {var maxfile = _ref2.maxfile,uploadUrl = _ref2.uploadUrl,opts = _ref2.opts,file_list = _ref2.file_list,isAuto = _ref2.isAuto;

      var arg = arguments.length == 0 ? {} : arguments[0];
      this.config = _objectSpread(_objectSpread({}, this.config), arg);
    }
    // 动态加入预上传的文件。
    /**
     * 动态加入文件
     * @param {Object} filelist
     */ }, { key: "addfile", value: function addfile(
    filelist) {var _this$filelist;
      if (typeof filelist !== 'object' && !Array.isArray(filelist)) return;
      (_this$filelist = this.filelist).push.apply(_this$filelist, _toConsumableArray(filelist));
    }
    // 选择图片成功后触发。返回选择后的图片。
  }, { key: "selected", value: function selected(filelist) {}
    // 进度。
  }, { key: "progress", value: function progress(item) {}
    // 失败
  }, { key: "fail", value: function fail(item) {}
    // 成功
  }, { key: "success", value: function success(item) {}
    // 完成。
  }, { key: "complete", value: function complete(filelist) {}
    // 开始上传。
  }, { key: "start", value: function start() {
      if (this.filelist.length <= 0) {
        uni.$tm.toast("未选择图片");
        return;
      }
      var t = this;
      // t重新开始上传从头开始。
      this.index = 0;
      this.isStop = false;
      function startupload() {var _t$config$opts$name, _t$config$opts, _t$config$opts$header, _t$config$opts2;
        if (t.isStop) return;
        var item = t.filelist[t.index];
        if (!item || typeof item === 'undefined') {
          // 文件不存在。直接结束。
          t.complete(t.filelist);

          return;
        }

        if (item.statusCode == 3 || item.statusCode == 1 || item.statusCode == 4) {
          // 直接跳过。至下一个文件。
          t.index++;
          startupload();
          return;
        }

        var upObj = uni.uploadFile({
          url: t.config.uploadUrl,
          name: (_t$config$opts$name = (_t$config$opts = t.config.opts) === null || _t$config$opts === void 0 ? void 0 : _t$config$opts.name) !== null && _t$config$opts$name !== void 0 ? _t$config$opts$name : 'file',
          header: (_t$config$opts$header = (_t$config$opts2 = t.config.opts) === null || _t$config$opts2 === void 0 ? void 0 : _t$config$opts2.header) !== null && _t$config$opts$header !== void 0 ? _t$config$opts$header : {},
          filePath: item.url,

          success: function success(res) {
            if (res.statusCode != 200) {
              item.statusCode = 2;
              item.status = "上传失败";
              uni.$tm.toast(String(res.statusCode));
              t.fail(item);
              t.index++;
              return;
            }
            var jsd = {};
            var isOk = true;
            // 是否从服务器返回的是json。如果不是则表示fasle为string.
            var isJsonCallbackData = true;

            try {
              jsd = JSON.parse(res.data);
            } catch (e) {
              isJsonCallbackData = false;
              jsd = res.data;
              item.data = res.data;

            }

            if (isJsonCallbackData) {
              try {var _jsd;
                item.data = JSON.parse(res.data).data;
                if (((_jsd = jsd) === null || _jsd === void 0 ? void 0 : _jsd.code) !== t.config.code) {
                  isOk = false;
                }
              } catch (e) {
                isOk = false;
              }
            }


            if (!isOk) {var _jsd2;
              uni.$tm.toast(((_jsd2 = jsd) === null || _jsd2 === void 0 ? void 0 : _jsd2.msg) || "失败");
              item.statusCode = 2;
              item.status = "上传失败";
              t.fail(item);
              t.index++;
              return;
            }

            // 上传成功。
            item.statusCode = 3;
            item.status = "上传成功";
            uni.$tm.toast("上传成功");
            // t.filelist[t.index] = item;
            // t.filelist.splice(t.index,1,item)

            t.success(item);

          },
          fail: function fail(res) {

            uni.$tm.toast(res.errMsg);
            item.statusCode = 2;
            item.status = "上传失败";
            // t.filelist[t.index] = item;
            t.fail(item);
            t.index++;
          },
          complete: function complete(res) {
            // 直接下一个文件。

            startupload();
          } });

        if (upObj) {
          upObj.onProgressUpdate(function (res) {
            t.filelist[t.index].statusCode = 1;
            t.filelist[t.index].status = "上传中";
            t.filelist[t.index].progress = res.progress;
            // t.filelist[t.index] = item;
            t.progress(item);

          });
        }

      }
      startupload();
    }
    // 停止上传
  }, { key: "stop", value: function stop() {
      this.isStop = true;
    } }]);return uploadfile;}();


/**
                                  * 上传文件。
                                  * 作者：tmzdy
                                  * 时间：‎2021‎年‎7‎月‎28‎日，‏‎9:14:53
                                  * 联系：zhongjihan@sina.com
                                  * 选择图片上传，相册或者拍照。
                                  * @param {Number} maxfile 最大上传的文件数量，默认为 9 ;
                                  * @param {String} uploadUrl -- ""
                                  * @param {Object} opts -- {}
                                  * @param {Function} progress  {} --上传中调用
                                  * @param {Function} success  {} --上传成功才会调用。
                                  * @param {Function} selected  {} --选完图片待上传调用。
                                  * @param {Function} fail  {} --上传失败时调用，返回文件相关
                                  * @param {Function} complete  {} -- 完成上传时触发，失败与成功都触发。
                                  */
function chooseImgUpload() {var maxfile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;var uploadUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var progress = arguments.length > 3 ? arguments[3] : undefined;var _success = arguments.length > 4 ? arguments[4] : undefined;var selected = arguments.length > 5 ? arguments[5] : undefined;var _fail = arguments.length > 6 ? arguments[6] : undefined;var complete = arguments.length > 7 ? arguments[7] : undefined;
  uni.chooseImage({
    count: maxfile,
    fail: function fail(e) {
      uni.$tm.toast("用户取消选择图片");
    },
    success: function success(res) {

      if (res.tempFilePaths.length == 0) {
        uni.$tm.toast("未选择图片");
        return;
      }
      var imgarray = res.tempFilePaths;
      var jgsk = [];
      //0待上传，1上传中，2上传失败，3上传成功。
      imgarray.forEach(function (item, index) {
        jgsk.push({
          url: item,
          status: "待上传",
          progress: 0,
          fileId: (0, _guid.default)(),
          statusCode: 0,
          data: null //上传成功后的回调数据。
        });
      });
      if (selected) {
        selected(jgsk);
      }

      var index = 0;
      function startupload() {var _opts$name, _opts$header;
        var item = jgsk[index];
        if (!item) {
          // 文件不存在。直接结束。
          if (complete) {
            complete(jgsk);
          }
          return;
        }
        if (item.statusCode == 2 || item.statusCode == 1) {
          // 直接跳过。至下一个文件。
          index++;
          startupload();
        }

        var upObj = uni.uploadFile({
          url: uploadUrl,
          name: (_opts$name = opts === null || opts === void 0 ? void 0 : opts.name) !== null && _opts$name !== void 0 ? _opts$name : 'file',
          header: (_opts$header = opts === null || opts === void 0 ? void 0 : opts.header) !== null && _opts$header !== void 0 ? _opts$header : {},
          filePath: item.url,
          success: function success(res) {
            if (res.statusCode != 200) {
              item.statusCode = 2;
              item.status = "上传失败";
              uni.$tm.toast(res.errMsg);
              if (_fail) {
                _fail(item);
              }
              return;
            }
            try {
              item.data = JSON.parse(res.data).data;
            } catch (e) {
              item.statusCode = 2;
              item.status = "上传失败";
              uni.$tm.toast(res.errMsg);
              if (_fail) {
                _fail(item);
              }
              return;
            }

            // 上传成功。
            item.statusCode = 3;
            item.status = "上传成功";
            item.data = JSON.parse(res.data).data;
            uni.$tm.toast("上传成功");
            if (_success) {
              _success(item);
            }

          },
          fail: function fail(res) {

            uni.$tm.toast(res.errMsg);
            item.statusCode = 2;
            item.status = "上传失败";
            if (_fail) {
              _fail(item);
            }
          },
          complete: function complete(res) {
            // 直接下一个文件。
            index++;
            startupload();
          } });

        if (upObj) {
          upObj.onProgressUpdate(function (res) {
            item.statusCode = 1;
            item.status = "上传中";
            item.progress = res.progress;
            if (progress) {
              progress(item);
            }

          });
        }

      }
      startupload();
    } });

}var _default =

{
  chooseImgUpload: chooseImgUpload, uploadfile: uploadfile };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 36 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 37);

/***/ }),
/* 37 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 38);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 38 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 39 */
/*!*****************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/objToString.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 把对象转换为string，提供对象 和 分割符。
function objToString(obj) {var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
  if (typeof obj !== "object") return '';
  var a = '';
  for (var i in obj) {
    a += i + ':' + obj[i] + split;
  }
  return a;
}

module.exports.objToString = objToString;

/***/ }),
/* 40 */
/*!**************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/calendar.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 日历库
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 作者：tmzdy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 时间：2021-7-27
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 联系：zhongjihan@sina.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
calendar = /*#__PURE__*/function () {





  /**
                                      * value:初始化时间
                                      * start:开始始间 ，提供了后，会在返回的日历上标记每个日期是否是在start 和 end之间。
                                      * end:结束时间 
                                      */
  function calendar(_ref) {var value = _ref.value,start = _ref.start,end = _ref.end;_classCallCheck(this, calendar);_defineProperty(this, "value", new Date());_defineProperty(this, "now_day_month", new Date());_defineProperty(this, "start_time", new Date(1900, 0, 1));_defineProperty(this, "end_time", new Date(2100, 11, 31));_defineProperty(this, "txtdateArray", []);
    if (arguments.length === 1) {
      var arg = arguments[0];

      if (arg === null || arg === void 0 ? void 0 : arg.value) {
        value = value.replace(/-/g, '/');
        var dobj = new Date(value);
        this.value = new Date(dobj.getFullYear(), dobj.getMonth(), dobj.getDate());

        this.now_day_month = this.value;
      }
      if (arg === null || arg === void 0 ? void 0 : arg.start) {
        var sv = start;
        if (typeof sv === 'string') {
          sv = new Date(sv.replace(/-/g, '/'));
        } else if (typeof sv === 'object') {
          sv = new Date(sv);
        }
        this.start_time = sv;
      }
      if (arg === null || arg === void 0 ? void 0 : arg.end) {
        var _sv = end;
        if (typeof _sv === 'string') {
          _sv = new Date(_sv.replace(/-/g, '/'));
        } else if (typeof _sv === 'object') {
          _sv = new Date(_sv);
        }
        this.end_time = _sv;
      }
    }

  }
  /**
    * 日期转化为字符串， 4位年+2位月+2位日
    */_createClass(calendar, [{ key: "getDateStr", value: function getDateStr(
    date) {
      var _year = date.getFullYear();
      var _month = date.getMonth(); // 月从0开始计数
      var _d = date.getDate();

      _month = _month > 9 ? "" + _month : "0" + _month;
      _d = _d > 9 ? "" + _d : "0" + _d;
      return _year + _month + _d;
    }
    // 设置当前计算的日历的时间 。格式为时间 格式。
  }, { key: "setValue", value: function setValue(value) {
      if (value) {
        var dobj = new Date();
        if (typeof value === 'object') {
          dobj = new Date(value);
        } else {
          value = value.replace(/-/g, '/');
          dobj = new Date(value);
        }

        this.value = new Date(dobj.getFullYear(), dobj.getMonth(), dobj.getDate());
        this.now_day_month = this.value;
      }
      return this;
    }
    // 未设置
  }, { key: "setStart", value: function setStart(start) {
      var sv = start;
      if (typeof sv === 'string') {
        sv = new Date(sv.replace(/-/g, '/'));
      } else if (typeof sv === 'object') {
        sv = new Date(sv);
      }

      this.start_time = sv;
      return this;
    } }, { key: "setEnd", value: function setEnd(
    end) {
      var sv = end;
      if (typeof sv === 'string') {
        sv = new Date(sv.replace(/-/g, '/'));
      } else if (typeof sv === 'object') {
        sv = new Date(sv);
      }

      this.end_time = sv;

      return this;
    }
    // 设置文本数据。携带在对象 中。
  }, { key: "setTimeArrayText", value: function setTimeArrayText(textArray) {
      if (!Array.isArray(textArray)) return;
      /**
                                              * textArray
                                              * {date:"2021-7-1",text:"你好"}
                                              */
      this.txtdateArray = textArray;
      return this;
    } }, { key: "monthDay", value: function monthDay(

    year, month) {
      var date = new Date(year, month, 1, 0, 0, 0);
      var yesterDay = new Date(date - 1000);
      return yesterDay.getDate();
    } }, { key: "nongli", value: function nongli(
    year, month, day) {
      var calendarobj = {
        gregorianYear: null, //公历年
        gregorianMonth: null, //公历月
        gregorianDay: null, //公历日
        weekday: null, //星期
        hours: null,
        minutes: null,
        seconds: null,

        lunarYear: null, //农历年
        lunarMonth: null, //农历月
        lunarDay: null, //农历日

        lunarYearCn: '', //农历天干地支纪年
        lunarMonthCn: '', //农历中文月
        lunarDayCn: '', //农历中文日
        zodiacYear: '', //农历生肖年

        solarTerm: '', //节气
        gregorianFestival: '', //公历节日
        lunarFestival: '' //农历节日
      };

      var lunarInfo = [
      0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
      0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
      0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
      0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
      0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
      0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
      0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
      0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
      0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
      0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
      0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
      0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
      0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
      0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
      0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];

      var zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
      var Gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
      var Zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
      var weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
      var now = new Date();

      //用于计算农历年月日的数据
      var GY = year;
      var GM = month;
      var GD = day;


      //==== 传入 offset 传回干支, 0=甲子
      function cyclical(num) {
        return Gan[num % 10] + Zhi[num % 12];
      }

      //==== 传回农历 year年的总天数
      function lYearDays(year) {
        var i,sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) {
          sum += lunarInfo[year - 1900] & i ? 1 : 0;
        }
        return sum + leapDays(year);
      }

      //==== 传回农历 year年闰月的天数
      function leapDays(year) {
        if (leapMonth(year)) {
          return lunarInfo[year - 1900] & 0x10000 ? 30 : 29;
        } else
        {
          return 0;
        }
      }

      //==== 传回农历 year年闰哪个月 1-12 , 没闰传回 0
      function leapMonth(year) {
        return lunarInfo[year - 1900] & 0xf;
      }

      //==== 传回农历 year年month月的总天数
      function monthDays(year, month) {
        return lunarInfo[year - 1900] & 0x10000 >> month ? 30 : 29;
      }

      //==== 算出农历, 传入日期对象, 传回农历日期对象
      //     该对象属性有 农历年year 农历月month 农历日day 是否闰年isLeap yearCyl dayCyl monCyl
      function Lunar(objDate) {
        var i,temp = 0;
        var baseDate = new Date(1900, 0, 31);
        var offset = Math.floor((objDate - baseDate) / 86400000);

        var dayCyl = offset + 40;
        var monCyl = 14;

        for (i = 1900; i < 2050 && offset > 0; i++) {
          temp = lYearDays(i);
          offset -= temp;
          monCyl += 12;
        }
        if (offset < 0) {
          offset += temp;
          i--;
          monCyl -= 12;
        }
        //农历年
        var year = i;
        var yearCyl = i - 1864;

        var leap = leapMonth(i); //闰哪个月
        var isLeap = false; //是否闰年

        for (i = 1; i < 13 && offset > 0; i++) {
          //闰月
          if (leap > 0 && i === leap + 1 && isLeap === false) {
            --i;isLeap = true;temp = leapDays(year);
          } else
          {
            temp = monthDays(year, i);
          }

          //解除闰月
          if (isLeap === true && i === leap + 1) {
            isLeap = false;
          }

          offset -= temp;
          if (isLeap === false) {
            monCyl++;
          }
        }

        if (offset === 0 && leap > 0 && i === leap + 1)
        if (isLeap) {
          isLeap = false;
        } else
        {
          isLeap = true;
          --i;
          --monCyl;
        }

        if (offset < 0) {
          offset += temp;
          --i;
          --monCyl;
        }
        //农历月
        var month = i;
        //农历日
        var day = offset + 1;

        return {
          year: year,
          month: month,
          day: day,
          isLeap: isLeap,
          leap: leap,
          yearCyl: yearCyl,
          dayCyl: dayCyl,
          monCyl: monCyl };

      }

      //==== 中文日期 m为传入月份，d为传入日期
      function cDay(m, d) {
        var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var nStr2 = ['初', '十', '廿', '卅', ''];
        //农历中文月
        var lunarMonthCn;
        //农历中文日
        var lunarDayCn;
        if (m > 10) {
          lunarMonthCn = '十' + nStr1[m - 10];
        } else {
          lunarMonthCn = nStr1[m];
        }
        lunarMonthCn += '月';

        switch (d) {
          case 10:lunarDayCn = '初十';break;
          case 20:lunarDayCn = '二十';break;
          case 30:lunarDayCn = '三十';break;
          default:lunarDayCn = nStr2[Math.floor(d / 10)] + nStr1[d % 10];}

        return {
          lunarMonthCn: lunarMonthCn,
          lunarDayCn: lunarDayCn };

      }

      //节气
      function getSolarTerm() {
        var sTermInfo = [
        0, 21208, 42467, 63836, 85337, 107014,
        128867, 150921, 173149, 195551, 218072, 240693,
        263343, 285989, 308563, 331033, 353350, 375494,
        397447, 419210, 440795, 462224, 483532, 504758];

        var solarTerm = [
        '小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
        '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
        '小暑', '大暑', '立秋', '处暑', '白露', '秋分',
        '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];


        var solarTerms = '';
        var tmp1 = new Date(
        31556925974.7 * (GY - 1900) + sTermInfo[(GM - 1) * 2 + 1] * 60000 + Date.UTC(1900, 0, 6, 2, 5));

        var tmp2 = tmp1.getUTCDate();
        if (tmp2 === GD) solarTerms = solarTerm[(GM - 1) * 2 + 1];
        tmp1 = new Date(
        31556925974.7 * (GY - 1900) + sTermInfo[(GM - 1) * 2] * 60000 + Date.UTC(1900, 0, 6, 2, 5));

        tmp2 = tmp1.getUTCDate();
        if (tmp2 === GD) solarTerms = solarTerm[(GM - 1) * 2];

        return solarTerms;
      }

      //==== 中文日期 m为传入月份，d为传入日期
      function cDay(m, d) {
        var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var nStr2 = ['初', '十', '廿', '卅', ''];
        //农历中文月
        var lunarMonthCn;
        //农历中文日
        var lunarDayCn;
        if (m > 10) {
          lunarMonthCn = '十' + nStr1[m - 10];
        } else {
          lunarMonthCn = nStr1[m];
        }
        lunarMonthCn += '月';

        switch (d) {
          case 10:lunarDayCn = '初十';break;
          case 20:lunarDayCn = '二十';break;
          case 30:lunarDayCn = '三十';break;
          default:lunarDayCn = nStr2[Math.floor(d / 10)] + nStr1[d % 10];}

        return {
          lunarMonthCn: lunarMonthCn,
          lunarDayCn: lunarDayCn };

      }
      //去掉时分秒的日期
      var sDObj = new Date(GY, GM - 1, GD);
      var lDObj = new Lunar(sDObj);


      //节气
      // calendar.solarTerm = getSolarTerm()
      var n = cDay(lDObj.month, lDObj.day);
      var y = cyclical(GY - 1900 + 36);
      return {
        year: y,
        month: n.lunarMonthCn,
        day: n.lunarDayCn,
        shengxiao: zodiacs[(GY - 4) % 12],
        jieqi: getSolarTerm() };

    }
    //下个月，可以一直操作
  }, { key: "nextMonth", value: function nextMonth() {
      this.value = new Date(this.value.getFullYear(), this.value.getMonth() + 1, 1);
      return this;
    }
    //上个月，可以一直操作
  }, { key: "prevMonth", value: function prevMonth() {
      this.value = new Date(this.value.getFullYear(), this.value.getMonth() - 1, 1);
      return this;
    }
    //下一年
  }, { key: "nexYear", value: function nexYear() {
      this.value = new Date(this.value.getFullYear() + 1, this.value.getMonth(), this.value.getDate());
      return this;
    }
    //上一年
  }, { key: "prevYear", value: function prevYear() {
      this.value = new Date(this.value.getFullYear() - 1, this.value.getMonth(), this.value.getDate());
      return this;
    }
    // 把之前设置的上一年，下一年，上一月下一月等数据清除，恢复 到最原始的月份年份数据。
  }, { key: "setInit", value: function setInit() {
      this.value = this.now_day_month;
      return this;
    }
    // 返回初始化时的月份
  }, { key: "getNowData", value: function getNowData() {
      // 当前时间 。
      var week = [7, 1, 2, 3, 4, 5, 6];
      var text_week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      var _thisdateStr = this.now_day_month.toLocaleString();
      var _thisMothn = this.now_day_month.getMonth(); //当前月
      var _thisDay = this.now_day_month.getDate(); //当前日
      var _thisYear = this.now_day_month.getFullYear(); //当前年
      var _thisWeek = this.now_day_month.getDay(); //当前周
      var _thisMothn_day = new Date(_thisYear, _thisMothn, 1); ///当月第一天数据。
      var _thisDayDate = new Date(_thisYear, _thisMothn, _thisDay);
      var months = [31, this.monthDay(_thisYear, _thisMothn), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var _thisMothn_lastDay = new Date(_thisYear, _thisMothn, months[_thisMothn]); ///当月最后数据。
      var dateArray = []; //当前日历表数据。
      var llineDate = []; //行数据。
      var j = 1;
      var ishs = true; //如果第一排没有本月数据需要切换模式。把本月放第一位。
      for (var i = 1; i < 8; i++) {
        var tdy = new Date(_thisYear, _thisMothn, i - 6 - _thisMothn_day.getDay()); //当前循环日期。
        if (i == 7) {

          var tf = tdy.getTime() >= _thisMothn_day.getTime() && tdy.getTime() <= _thisMothn_lastDay.getTime() ? true : false;
          if (!tf) {
            ishs = false;
            break;
          }
        }
      }
      for (var _i = 1; _i < 43; _i++) {
        var Day = null;
        if (!ishs) {
          Day = new Date(_thisYear, _thisMothn, _i + 1 - _thisMothn_day.getDay()); //当前循环日期。
        } else {
          Day = new Date(_thisYear, _thisMothn, _i - 6 - _thisMothn_day.getDay()); //当前循环日期。
        }
        dateArray.push({
          year: Day.getFullYear(), //年
          month: Day.getMonth() + 1, //月1-12
          week: week[Day.getDay()], //周的数字1~7
          week_text: text_week[Day.getDay()], //周的中文
          day: Day.getDate(), //几号
          prevMoth: Day.getTime() < _thisMothn_day.getTime() ? true : false, //是否是上月。
          nowMonth: Day.getTime() >= _thisMothn_day.getTime() && Day.getTime() <= _thisMothn_lastDay.getTime() ? true : false, //是否当月
          nowDay: Day.getTime() == _thisDayDate.getTime() ? true : false, //是否是当天。
          nowYear: 0, //是否当年
          nextMoth: Day.getTime() > _thisMothn_lastDay.getTime() ? true : false, //是否下月
          beginEnd: Day.getTime() >= this.start_time.getTime() && Day.getTime() <= this.end_time.getTime() ? true : false, //是否在开始和结束区间范围内。
          nongli: this.nongli(Day.getFullYear(), Day.getMonth() + 1, Day.getDate()) });


      }

      return dateArray;
    }
    // 返回当前选中月的日历数组。如果你不设置value和数据getNowData和getData相等。
    /**
     * 返回当前月数据。
     * @return {
    	 beginEnd: false,//是否在规定范围时间内
    	 day: 16,//日
    	 month: 7,//月
    	 nextMoth: false,//是否下月
    	 nowDay: false,//是否当天
    	 nowMonth: true,//是否当月
    	 prevMoth: false,/是否下月
    	 week: 5,//周1-7
    	 week_text: "周五",//同上
    	 year: 2021,//年
    	 nongli:{ //农历
    		 day: "初七",//日
    		 jieqi: "",//节气
    		 month: "六月",//月
    		 shengxiao: "牛",//生肖
    		 year: "辛丑" //农历年
    	 }
     }
     */ }, { key: "getData", value: function getData()
    {var _this = this;
      // 当前时间 。
      var week = [7, 1, 2, 3, 4, 5, 6];
      var text_week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      var _thisdateStr = this.value.toLocaleString();
      var _thisMothn = this.value.getMonth(); //当前月
      var _thisDay = this.value.getDate(); //当前日
      var _thisYear = this.value.getFullYear(); //当前年
      var _thisWeek = this.value.getDay(); //当前周
      var _thisMothn_day = new Date(_thisYear, _thisMothn, 1); ///当月第一天数据。
      var _thisDayDate = new Date(_thisYear, _thisMothn, _thisDay);
      var months = [31, this.monthDay(_thisYear, _thisMothn), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var _thisMothn_lastDay = new Date(_thisYear, _thisMothn, months[_thisMothn]); ///当月最后数据。
      var dateArray = []; //当前日历表数据。
      var llineDate = []; //行数据。
      var j = 1;
      var ishs = true; //如果第一排没有本月数据需要切换模式。把本月放第一位。
      for (var i = 1; i < 8; i++) {
        var tdy = new Date(_thisYear, _thisMothn, i - 6 - _thisMothn_day.getDay()); //当前循环日期。
        if (i == 7) {

          var tf = tdy.getTime() >= _thisMothn_day.getTime() && tdy.getTime() <= _thisMothn_lastDay.getTime() ? true : false;
          if (!tf) {
            ishs = false;
            break;
          }
        }
      }var _loop = function _loop(

      _i2) {
        Day = null;
        if (!ishs) {
          Day = new Date(_thisYear, _thisMothn, _i2 + 1 - _thisMothn_day.getDay()); //当前循环日期。
        } else {
          Day = new Date(_thisYear, _thisMothn, _i2 - 6 - _thisMothn_day.getDay()); //当前循环日期。
        }
        var dstr = Day.getFullYear() + "-" + (Day.getMonth() + 1) + "-" + Day.getDate();
        var TxtIndex = _this.txtdateArray.findIndex(function (item) {

          return item.date == dstr;
        });


        dateArray.push({
          year: Day.getFullYear(), //年
          month: Day.getMonth() + 1, //月1-12
          week: week[Day.getDay()], //周的数字1~7
          week_text: text_week[Day.getDay()], //周的中文
          day: Day.getDate(), //几号
          prevMoth: Day.getTime() < _thisMothn_day.getTime() ? true : false, //是否是上月。
          nowMonth: Day.getTime() >= _thisMothn_day.getTime() && Day.getTime() <= _thisMothn_lastDay.getTime() ? true : false, //是否当月
          nowDay: Day.getTime() == _thisDayDate.getTime() ? true : false, //是否是当天。
          nextMoth: Day.getTime() > _thisMothn_lastDay.getTime() ? true : false, //是否下月
          beginEnd: Day.getTime() >= _this.start_time.getTime() && Day.getTime() <= _this.end_time.getTime() ? true : false, //是否在开始和结束区间范围内。
          nongli: _this.nongli(Day.getFullYear(), Day.getMonth() + 1, Day.getDate()),
          text: TxtIndex > -1 ? _this.txtdateArray[TxtIndex]['text'] : "" });};for (var _i2 = 1; _i2 < 43; _i2++) {var Day;_loop(_i2);


      }

      return dateArray;
    } }]);return calendar;}();var _default =




calendar;exports.default = _default;

/***/ }),
/* 41 */
/*!***************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/signBoard.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * 签名版，钢笔效果
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * 源参考：https://www.cnblogs.com/fangsmile/p/14324460.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */var



Point =
function Point(x, y, time) {_classCallCheck(this, Point);
  this.x = x;
  this.y = y;
  this.isControl = false;
  this.time = Date.now();
  this.lineWidth = 0;
  this.isAdd = false;
};var


Line =
function Line() {_classCallCheck(this, Line);
  this.points = new Array();
  this.changeWidthCount = 0;
  this.lineWidth = 10;
};var

HandwritingSelf = /*#__PURE__*/function () {

  function HandwritingSelf(canvas, w, h) {var line_w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;var line_color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#ff0000';_classCallCheck(this, HandwritingSelf);

    this.canvas = { width: w, height: h };
    this.ctx = canvas;
    var context = this.ctx;
    this.ctx.ellipse = function (x, y, a, b) {

    } // ----
    // this.points = new Array();
    ;this.line = new Line();
    this.pointLines = new Array(); //Line数组
    this.k = 0.5;
    this.begin = null;
    this.middle = null;
    this.end = null;
    this.preTime = null;
    this.lineWidth = line_w;
    this.lineColor = line_color;
    this.isDown = false;
  }_createClass(HandwritingSelf, [{ key: "down", value: function down(
    x, y) {
      this.isDown = true;
      this.line = new Line();
      this.line.lineWidth = this.lineWidth;
      var currentPoint = new Point(x, y, Date.now());
      this.addPoint(currentPoint);

      this.preTime = Date.now();
    } }, { key: "move", value: function move(
    x, y) {
      // console.log("move:",x,y)
      if (this.isDown) {
        var currentPoint = new Point(x, y, Date.now());
        this.addPoint(currentPoint);
        this.draw();
      }
    } }, { key: "up", value: function up(
    x, y) {
      // if (e.touches.length > 0) {
      var currentPoint = new Point(x, y, Date.now());
      this.addPoint(currentPoint);
      // }
      this.draw(true);

      this.pointLines.push(this.line);

      this.begin = null;
      this.middle = null;
      this.end = null;
      this.isDown = false;
    } }, { key: "draw", value: function draw()
    {var _this = this;var isUp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.setStrokeStyle(this.lineColor);


      //绘制不包含this.line的线条
      this.pointLines.forEach(function (line, index) {
        var points = line.points;
        _this.ctx.beginPath();
        _this.ctx.ellipse(points[0].x - 1.5, points[0].y, 6, 3, Math.PI / 4, 0, Math.PI * 2);
        _this.ctx.fill();
        _this.ctx.beginPath();
        _this.ctx.moveTo(points[0].x, points[0].y);
        var lastW = line.lineWidth;
        _this.ctx.setLineWidth(line.lineWidth);
        _this.ctx.setLineJoin("round");
        _this.ctx.setLineCap("round");
        var minLineW = line.lineWidth / 4;
        var isChangeW = false;

        var changeWidthCount = line.changeWidthCount;
        for (var _i = 1; _i <= points.length; _i++) {
          if (_i == points.length) {
            _this.ctx.stroke();
            break;
          }
          if (_i > points.length - changeWidthCount) {
            if (!isChangeW) {
              _this.ctx.stroke(); //将之前的线条不变的path绘制完
              isChangeW = true;
              if (_i > 1 && points[_i - 1].isControl)
              continue;
            }
            var w = (lastW - minLineW) / changeWidthCount * (points.length - _i) + minLineW;
            points[_i - 1].lineWidth = w;
            _this.ctx.beginPath(); //为了开启新的路径 否则每次stroke 都会把之前的路径在描一遍
            // this.ctx.strokeStyle = "rgba("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+",1)";
            _this.ctx.setLineWidth(w);
            _this.ctx.moveTo(points[_i - 1].x, points[_i - 1].y); //移动到之前的点
            _this.ctx.lineTo(points[_i].x, points[_i].y);
            _this.ctx.stroke(); //将之前的线条不变的path绘制完
          } else {
            if (points[_i].isControl && points[_i + 1]) {
              _this.ctx.quadraticCurveTo(points[_i].x, points[_i].y, points[_i + 1].x, points[_i + 1].y);
            } else if (_i >= 1 && points[_i - 1].isControl) {//上一个是控制点 当前点已经被绘制
            } else
            _this.ctx.lineTo(points[_i].x, points[_i].y);
          }
        }
      });

      //绘制this.line线条
      var points;
      if (isUp)
      points = this.line.points;else

      points = _toConsumableArray(this.line.points);
      //当前绘制的线条最后几个补点 贝塞尔方式增加点
      var count = 0;
      var insertCount = 0;
      var i = points.length - 1;
      var endPoint = points[i];
      var controlPoint;
      var startPoint;
      while (i >= 0) {
        if (points[i].isControl == true) {
          controlPoint = points[i];
          count++;
        } else {
          startPoint = points[i];
        }
        if (startPoint && controlPoint && endPoint) {//使用贝塞尔计算补点
          var dis = this.z_distance(startPoint, controlPoint) + this.z_distance(controlPoint, endPoint);
          var insertPoints = this.BezierCalculate([startPoint, controlPoint, endPoint], Math.floor(dis / 6) + 1);
          insertCount += insertPoints.length;
          var index = i; //插入位置
          // 把insertPoints 变成一个适合splice的数组（包含splice前2个参数的数组） 
          insertPoints.unshift(index, 1);
          Array.prototype.splice.apply(points, insertPoints);

          //补完点后
          endPoint = startPoint;
          startPoint = null;
        }
        if (count >= 6)
        break;
        i--;
      }
      //确定最后线宽变化的点数
      var changeWidthCount = count + insertCount;
      if (isUp)
      this.line.changeWidthCount = changeWidthCount;

      //制造椭圆头
      this.ctx.fillStyle = "rgba(255,20,87,1)";
      this.ctx.beginPath();
      this.ctx.ellipse(points[0].x - 1.5, points[0].y, 6, 3, Math.PI / 4, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.draw(true);

      this.ctx.beginPath();
      this.ctx.moveTo(points[0].x, points[0].y);
      var lastW = this.line.lineWidth;
      this.ctx.setLineWidth(this.line.lineWidth);
      this.ctx.setLineJoin("round");
      this.ctx.setLineCap("round");
      var minLineW = this.line.lineWidth / 4;
      var isChangeW = false;
      for (var _i2 = 1; _i2 <= points.length; _i2++) {
        if (_i2 == points.length) {
          this.ctx.stroke();
          break;
        }
        //最后的一些点线宽变细
        if (_i2 > points.length - changeWidthCount) {
          if (!isChangeW) {
            this.ctx.stroke(); //将之前的线条不变的path绘制完
            isChangeW = true;
            if (_i2 > 1 && points[_i2 - 1].isControl)
            continue;
          }

          //计算线宽
          var w = (lastW - minLineW) / changeWidthCount * (points.length - _i2) + minLineW;
          points[_i2 - 1].lineWidth = w;
          this.ctx.beginPath(); //为了开启新的路径 否则每次stroke 都会把之前的路径在描一遍
          // this.ctx.strokeStyle = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ",0.5)";
          this.ctx.setLineWidth(w);
          this.ctx.moveTo(points[_i2 - 1].x, points[_i2 - 1].y); //移动到之前的点
          this.ctx.lineTo(points[_i2].x, points[_i2].y);
          this.ctx.stroke(); //将之前的线条不变的path绘制完
        } else {
          if (points[_i2].isControl && points[_i2 + 1]) {
            this.ctx.quadraticCurveTo(points[_i2].x, points[_i2].y, points[_i2 + 1].x, points[_i2 + 1].y);
          } else if (_i2 >= 1 && points[_i2 - 1].isControl) {//上一个是控制点 当前点已经被绘制
          } else
          this.ctx.lineTo(points[_i2].x, points[_i2].y);
        }
      }
      this.ctx.draw(true);
    } }, { key: "addPoint", value: function addPoint(

    p) {
      if (this.line.points.length >= 1) {
        var last_point = this.line.points[this.line.points.length - 1];
        var distance = this.z_distance(p, last_point);
        if (distance < 10) {
          return;
        }
      }

      if (this.line.points.length == 0) {
        this.begin = p;
        p.isControl = true;
        this.pushPoint(p);
      } else {
        this.middle = p;
        var controlPs = this.computeControlPoints(this.k, this.begin, this.middle, null);
        this.pushPoint(controlPs.first);
        this.pushPoint(p);
        p.isControl = true;

        this.begin = this.middle;
      }
    } }, { key: "addOtherPoint", value: function addOtherPoint(

    p1, p2, w1, w2) {

      var otherPoints = new Array();
      var dis = this.z_distance(p1, p2);
      if (dis >= 25) {
        otherPoints.push(p1);
        var insertPCount = Math.floor(dis / 20);
        for (var j = 0; j < insertPCount; j++) {
          var insertP = new Point(p1.x + (j + 1) / (insertPCount + 1) * (p2.x - p1.x), p1.y + (j + 1) / (insertPCount + 1) * (p2.y - p1.y));
          insertP.isAdd = true;
          otherPoints.push(insertP);
        }
        otherPoints.push(p2);
      }
      var count = otherPoints.length;
      if (count > 0) {
        console.log("addOtherPoint");
        debugger;
        var diffW = (w2 - w1) / (count - 1);
        for (var i = 1; i < count; i++) {
          var w = w1 + diffW * i;
          this.ctx.beginPath();
          this.ctx.setLineWidth(w);
          this.ctx.moveTo(otherPoints[i - 1].x, otherPoints[i - 1].y);
          this.ctx.lineTo(otherPoints[i].x, otherPoints[i].y);
          this.ctx.stroke();
        }
      }
      return otherPoints;
    } }, { key: "pushPoint", value: function pushPoint(
    p) {
      //排除重复点
      if (this.line.points.length >= 1 && this.line.points[this.line.points.length - 1].x == p.x && this.line.points[this.line.points.length - 1].y == p.y)
      return;
      this.line.points.push(p);
    } }, { key: "computeControlPoints", value: function computeControlPoints(
    k, begin, middle, end) {
      if (k > 0.5 || k <= 0)
      return;

      var diff1 = new Point(middle.x - begin.x, middle.y - begin.y);
      var diff2 = null;
      if (end)
      diff2 = new Point(end.x - middle.x, end.y - middle.y);

      // let l1 = (diff1.x ** 2 + diff1.y ** 2) ** (1 / 2)
      // let l2 = (diff2.x ** 2 + diff2.y ** 2) ** (1 / 2)

      var first = new Point(middle.x - k * diff1.x, middle.y - k * diff1.y);
      var second = null;
      if (diff2)
      second = new Point(middle.x + k * diff2.x, middle.y + k * diff2.y);
      return { first: first, second: second };
    }
    // W_current = 
    // 　　W_previous + min( abs(k*s - W_previous), distance * K_width_unit_change) (k * s-W_previous) >= 0
    // 　　W_previous - min( abs(k*s - W_previous), distance * K_width_unit_change) (k * s-W_previous) < 0
    // 　　W_current 　　　　  当前线段的宽度
    // 　　W_previous　　　　与当前线条相邻的前一条线段的宽度
    // 　　distance 　　	　　    当前线条的长度
    // 　　w_k 　　　　　　　	设定的一个固定阈值,表示:单位距离内, 笔迹的线条宽度可以变化的最大量. 
    // 　　distance * w_k 　　  即为当前线段的长度内, 笔宽可以相对于前一条线段笔宽的基础上, 最多能够变宽或者可以变窄多少.
  }, { key: "z_linewidth", value: function z_linewidth(b, e, bwidth, step) {

      if (e.time == b.time)
      return bwidth;

      var max_speed = 2.0;
      var d = this.z_distance(b, e);
      var s = d / (e.time - b.time); //计算速度
      console.log("s", e.time - b.time, s);
      s = s > max_speed ? max_speed : s;

      // let w = (max_speed - s) / max_speed;
      var w = 0.5 / s;

      var max_dif = d * step;
      console.log(w, bwidth, max_dif);
      if (w < 0.05) w = 0.05;
      if (Math.abs(w - bwidth) > max_dif) {
        if (w > bwidth)
        w = bwidth + max_dif;else

        w = bwidth - max_dif;
      }
      // printf("d:%.4f, time_diff:%lld, speed:%.4f, width:%.4f\n", d, e.t-b.t, s, w);
      return w;
    } }, { key: "z_distance", value: function z_distance(
    b, e) {
      return Math.sqrt(Math.pow(e.x - b.x, 2) + Math.pow(e.y - b.y, 2));
    } }, { key: "BezierCalculate", value: function BezierCalculate(
    poss, precision) {

      //维度，坐标轴数（二维坐标，三维坐标...）
      var dimersion = 2;

      //贝塞尔曲线控制点数（阶数）
      var number = poss.length;

      //控制点数不小于 2 ，至少为二维坐标系
      if (number < 2 || dimersion < 2)
      return null;

      var result = new Array();

      //计算杨辉三角
      var mi = new Array();
      mi[0] = mi[1] = 1;
      for (var i = 3; i <= number; i++) {

        var t = new Array();
        for (var j = 0; j < i - 1; j++) {
          t[j] = mi[j];
        }

        mi[0] = mi[i - 1] = 1;
        for (var _j = 0; _j < i - 2; _j++) {
          mi[_j + 1] = t[_j] + t[_j + 1];
        }
      }

      //计算坐标点
      for (var _i3 = 0; _i3 < precision; _i3++) {
        var _t = _i3 / precision;
        var p = new Point(0, 0);
        p.isAdd = true;
        result.push(p);
        for (var _j2 = 0; _j2 < dimersion; _j2++) {
          var temp = 0.0;
          for (var k = 0; k < number; k++) {
            temp += Math.pow(1 - _t, number - k - 1) * (_j2 == 0 ? poss[k].x : poss[k].y) * Math.pow(_t, k) * mi[k];
          }
          _j2 == 0 ? p.x = temp : p.y = temp;
        }
      }

      return result;
    } }]);return HandwritingSelf;}();var _default =



HandwritingSelf;exports.default = _default;

/***/ }),
/* 42 */
/*!********************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/choujianggailv.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function choujiang(prizes) {
  var prizeList = []; //按照权重分解后的奖品数组
  prizes.map(function (item) {
    prizeList.push(_objectSpread({},

    item));

    for (var i = 0; i < item.gailv; i++) {
      prizeList.push(_objectSpread({},

      item));

    }
  });
  prizeList = reset(prizeList);
  // 范围随机数
  function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  };
  // 随机打乱数组
  function reset(arr) {
    var eachArr = arr.concat([]);
    var lastArr = [];
    function deepEach(deepArr) {
      if (deepArr.length) {
        var randomIndex = randomFrom(0, eachArr.length - 1);
        lastArr.push(eachArr[randomIndex]);
        eachArr.splice(randomIndex, 1);
        deepEach(eachArr);
      }
    }
    deepEach(eachArr);
    return lastArr;
  }
  this.getResult = function () {
    var random = randomFrom(0, prizeList.length - 1);
    return prizeList[random];
  };
}var _default =

choujiang;exports.default = _default;

/***/ }),
/* 43 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/config/config.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 创建时间：2021年7月2日11:24:23
                                                                                                      * 作者：tmzdy
                                                                                                      */
var ver = '1.2.29';var _default =
{
  v: ver,
  version: ver,
  V: ver,
  ver: ver };exports.default = _default;

/***/ }),
/* 44 */
/*!*************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/store/tm-vuetify.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
_vue.default.use(_vuex.default);

var moduleTrue = {};
// 为了兼容如果用户，不按规范创建，或者不使用vuex时就可略过导入用户的模块。
try {
  var modulesList = !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

  if (typeof modulesList === 'function' && typeof modulesList !== 'undefined') {
    // 加载modules目录下所有文件(分模块)
    var modules = modulesList.keys().reduce(function (modules, modulePath) {
      var moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
      var value = modulesList(modulePath);
      modules[moduleName] = _objectSpread({ namespaced: true }, value.default);

      return modules;

    }, {});
    moduleTrue = modules;
  }

} catch (e) {
  //TODO handle the exception
  console.warn('tmui提醒：用户未使用vuex');
}
var pdefault_cookies_color = uni.getStorageSync('setTmVuetifyColor');
var pdefault_cookies_black = uni.getStorageSync('setTmVuetifyBlack');



var store = new _vuex.default.Store({
  modules: _objectSpread({},
  moduleTrue),

  state: {
    tmVuetify: {
      color: typeof pdefault_cookies_color === 'string' ? pdefault_cookies_color : '',
      black: typeof pdefault_cookies_black === 'boolean' ? pdefault_cookies_black : false,
      tmVueTifly_pages: '',
      tmVueTifly_pagesIndex: '',
      //这里是微信小程序和微信H5的配置资料。
      wxshareConfig_miniMp: {
        title: '', // 分享标题
        desc: '', // 描述
        imageUrl: '', // 分享图片
        path: '', // 分享路径
        copyLink: '', // 复制链接
        query: {} // 分享参数
      } } },


  getters: {
    // $tm:state=>{
    // 	return $tm;
    // }
  },
  mutations: {
    setTmVuetifyColor: function setTmVuetifyColor(state, color) {
      _vue.default.set(state.tmVuetify, 'color', color);
    },
    setPageNow: function setPageNow(state, url) {
      _vue.default.set(state.tmVuetify, 'tmVueTifly_pages', url);
    },
    setPageNowIndex: function setPageNowIndex(state, index) {
      _vue.default.set(state.tmVuetify, 'tmVueTifly_pagesIndex', index);
    },
    setTmVuetifyBlack: function setTmVuetifyBlack(state, black) {
      _vue.default.set(state.tmVuetify, 'black', black);
      if (black === true) {
        uni.setTabBarStyle({
          backgroundColor: "#212121" });

      } else {
        uni.setTabBarStyle({
          backgroundColor: "#FFFFFF" });

      }
    },
    setWxShare: function setWxShare(state, cfg) {

      var pcf = cfg || {};
      if (typeof pcf !== 'object' || Array.isArray(cfg)) pcf = {};
      _vue.default.set(state.tmVuetify, 'wxshareConfig_miniMp', _objectSpread(_objectSpread({}, state.tmVuetify.wxshareConfig_miniMp), pcf));

    } } });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 45 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 46 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/vuex.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 操作全局Vuex。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 作者：tmzdy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 时间：‎2021‎年‎10‎月‎14‎日
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 联系：zhongjihan@sina.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var

vuex = /*#__PURE__*/function () {
  function vuex(store) {_classCallCheck(this, vuex);
    this.store = store;
  }
  //链式调用
  _createClass(vuex, [{ key: "state", value: function state() {
      return this.store.state;
    }
    //链式调用
  }, { key: "getters", value: function getters() {
      var t = this;
      var g = this.store.getters;
      var keys = Object.keys(g);

      var k = keys.map(function (el, index) {
        var f = el.split('/');
        var tst = {};
        if (f.length == 1) {
          tst[el] = g[el];
        } else {

          tst[f[0]] = {};
          tst[f[0]][f[1]] = g[el];

        }
        return tst;
      });
      var rulst = {};
      k.forEach(function (el) {
        rulst = _objectSpread(_objectSpread({}, rulst), el);
      });
      return rulst;
    } }, { key: "commit", value: function commit(
    funName, arg) {
      try {
        this.store.commit(funName, arg);
      } catch (e) {
        console.error("未发现函数方法:" + funName);
      }
    } }, { key: "actions", value: function actions(
    funName, arg) {
      try {
        this.store.dispatch(funName, arg);
      } catch (e) {
        console.error("未发现函数方法:" + funName);
      }
    }
    //获得原始vuex对象。
  }, { key: "getVuex", value: function getVuex() {
      return this.store;
    } }]);return vuex;}();var _default =



vuex;exports.default = _default;

/***/ }),
/* 47 */
/*!***********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/theme.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var theme = {
  getTheme: function getTheme() {
    return {
      color: uni.$tm.vx.state().tmVuetify.color,
      black: uni.$tm.vx.state().tmVuetify.black };

  },
  setBlack: function setBlack(arg) {
    var p = arg;
    if (typeof arg !== 'undefined') {
      uni.$tm.vx.commit("setTmVuetifyBlack", arg);
    } else {
      p = !uni.$tm.vx.state().tmVuetify.black;
      uni.$tm.vx.commit("setTmVuetifyBlack", !uni.$tm.vx.state().tmVuetify.black);

    }
    uni.setStorageSync('setTmVuetifyBlack', p);

  },
  setTheme: function setTheme(arg) {
    var p = arg || "primary";
    uni.$tm.vx.commit("setTmVuetifyColor", p);
    uni.setStorageSync('setTmVuetifyColor', p);
  },
  clear: function clear() {
    uni.$tm.vx.commit("setTmVuetifyColor", '');
    uni.removeStorageSync('setTmVuetifyColor');
  } };var _default =


theme;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 48 */
/*!**********************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/request/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 27));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/*!********************************************!*\
  !*** D:/uinApp/newYear/static/yanhua.json ***!
  \********************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.1.4\",\"fr\":60,\"ip\":0,\"op\":240,\"w\":375,\"h\":375,\"nm\":\"Comp 2\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1.083]},\"o\":{\"x\":[0.012,1],\"y\":[0,0]},\"n\":[\"0p833_1_0p012_0\",\"0p833_1p083_1_0\"],\"t\":0,\"s\":[0,1],\"e\":[93.75,1]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0.083]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0p083\"],\"t\":15,\"s\":[93.75,1],\"e\":[0,0]},{\"t\":30}],\"ix\":2},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":0,\"s\":[-187.5,0],\"e\":[-93.75,0],\"to\":[15.625,0],\"ti\":[-31.25,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_1_0p167_0p167\",\"t\":15,\"s\":[-93.75,0],\"e\":[0,0],\"to\":[31.25,0],\"ti\":[-15.625,0]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.490196078431,0.698039215686,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":15,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":104}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":36,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":104}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.490196078431,0.698039215686,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":36,\"s\":[60,0],\"e\":[0,100]},{\"t\":104}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":34,\"op\":105,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":7.5,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":32,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":96}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":32,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":96}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.750827205882,0.852413042854,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":32,\"s\":[60,0],\"e\":[0,100]},{\"t\":96}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":24,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":15,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":30,\"op\":98,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":28,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":88}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":28,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":88}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.490196078431,0.698039215686,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":28,\"s\":[60,0],\"e\":[0,100]},{\"t\":88}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":28,\"op\":91,\"st\":28,\"bm\":0}]},{\"id\":\"comp_1\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1.083]},\"o\":{\"x\":[0.012,1],\"y\":[0,0]},\"n\":[\"0p833_1_0p012_0\",\"0p833_1p083_1_0\"],\"t\":0,\"s\":[0,1],\"e\":[93.75,1]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0.083]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0p083\"],\"t\":15,\"s\":[93.75,1],\"e\":[0,0]},{\"t\":30}],\"ix\":2},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":0,\"s\":[-187.5,0],\"e\":[-93.75,0],\"to\":[15.625,0],\"ti\":[-31.25,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_1_0p167_0p167\",\"t\":15,\"s\":[-93.75,0],\"e\":[0,0],\"to\":[31.25,0],\"ti\":[-15.625,0]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.486274509804,0.364705882353,0.929411764706,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":15,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":104}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":36,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":104}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.486274509804,0.364705882353,0.929411764706,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":36,\"s\":[60,0],\"e\":[0,100]},{\"t\":104}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":34,\"op\":105,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":7.5,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":32,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":96}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":32,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":96}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.643137254902,0.556862745098,0.952941176471,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":32,\"s\":[60,0],\"e\":[0,100]},{\"t\":96}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":24,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":15,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":30,\"op\":98,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":28,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":88}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":28,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":88}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.486274509804,0.364705882353,0.929411764706,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":28,\"s\":[60,0],\"e\":[0,100]},{\"t\":88}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":28,\"op\":91,\"st\":28,\"bm\":0}]},{\"id\":\"comp_2\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1.083]},\"o\":{\"x\":[0.012,1],\"y\":[0,0]},\"n\":[\"0p833_1_0p012_0\",\"0p833_1p083_1_0\"],\"t\":0,\"s\":[0,1],\"e\":[93.75,1]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0.083]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0p083\"],\"t\":15,\"s\":[93.75,1],\"e\":[0,0]},{\"t\":30}],\"ix\":2},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":0,\"s\":[-187.5,0],\"e\":[-93.75,0],\"to\":[15.625,0],\"ti\":[-31.25,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_1_0p167_0p167\",\"t\":15,\"s\":[-93.75,0],\"e\":[0,0],\"to\":[31.25,0],\"ti\":[-15.625,0]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.494117647059,0.839215686275,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":15,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":104}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":36,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":104}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.494117647059,0.839215686275,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":36,\"s\":[60,0],\"e\":[0,100]},{\"t\":104}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":34,\"op\":105,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":7.5,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":32,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":96}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":32,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":96}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.730839568493,0.892384906844,0.947457107843,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":32,\"s\":[60,0],\"e\":[0,100]},{\"t\":96}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":24,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":15,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":30,\"op\":98,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":28,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":88}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":28,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":88}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.494117647059,0.839215686275,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":28,\"s\":[60,0],\"e\":[0,100]},{\"t\":88}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":28,\"op\":91,\"st\":28,\"bm\":0}]},{\"id\":\"comp_3\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1.083]},\"o\":{\"x\":[0.012,1],\"y\":[0,0]},\"n\":[\"0p833_1_0p012_0\",\"0p833_1p083_1_0\"],\"t\":0,\"s\":[0,1],\"e\":[93.75,1]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0.083]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0p083\"],\"t\":15,\"s\":[93.75,1],\"e\":[0,0]},{\"t\":30}],\"ix\":2},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":0,\"s\":[-187.5,0],\"e\":[-93.75,0],\"to\":[15.625,0],\"ti\":[-31.25,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_1_0p167_0p167\",\"t\":15,\"s\":[-93.75,0],\"e\":[0,0],\"to\":[31.25,0],\"ti\":[-15.625,0]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.717647058824,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":15,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":104}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":36,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":104}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.717647058824,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":36,\"s\":[70,0],\"e\":[0,100]},{\"t\":104}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":34,\"op\":105,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":7.5,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":32,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":96}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":32,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":96}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.82023788153,0.36334252451,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":32,\"s\":[70,0],\"e\":[0,100]},{\"t\":96}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":24,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":15,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":30,\"op\":98,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":28,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":88}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":28,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":88}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.717647058824,0,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":28,\"s\":[70,0],\"e\":[0,100]},{\"t\":88}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":28,\"op\":91,\"st\":28,\"bm\":0}]},{\"id\":\"comp_4\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1.083]},\"o\":{\"x\":[0.012,1],\"y\":[0,0]},\"n\":[\"0p833_1_0p012_0\",\"0p833_1p083_1_0\"],\"t\":0,\"s\":[0,1],\"e\":[93.75,1]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0.083]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0p083\"],\"t\":15,\"s\":[93.75,1],\"e\":[0,0]},{\"t\":30}],\"ix\":2},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":0,\"s\":[-187.5,0],\"e\":[-93.75,0],\"to\":[15.625,0],\"ti\":[-31.25,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_1_0p167_0p167\",\"t\":15,\"s\":[-93.75,0],\"e\":[0,0],\"to\":[31.25,0],\"ti\":[-15.625,0]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.839215686275,0.827450980392,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":15,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":104}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":36,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":104}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.839215686275,0.827450980392,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":36,\"s\":[75,0],\"e\":[0,100]},{\"t\":104}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":34,\"op\":105,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":7.5,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":32,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":96}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":32,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":96}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.408093830183,0.822411151961,0.816602998621,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":32,\"s\":[75,0],\"e\":[0,100]},{\"t\":96}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":24,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":15,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":30,\"op\":98,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":28,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":88}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":28,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":88}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.839215686275,0.827450980392,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":28,\"s\":[75,0],\"e\":[0,100]},{\"t\":88}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":28,\"op\":91,\"st\":28,\"bm\":0}]},{\"id\":\"comp_5\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"rc\",\"d\":1,\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833],\"y\":[1,1.083]},\"o\":{\"x\":[0.012,1],\"y\":[0,0]},\"n\":[\"0p833_1_0p012_0\",\"0p833_1p083_1_0\"],\"t\":0,\"s\":[0,1],\"e\":[93.75,1]},{\"i\":{\"x\":[0.667,0.667],\"y\":[1,1]},\"o\":{\"x\":[0.167,0.167],\"y\":[0,0.083]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0p083\"],\"t\":15,\"s\":[93.75,1],\"e\":[0,0]},{\"t\":30}],\"ix\":2},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_0p833_0p333_0\",\"t\":0,\"s\":[-187.5,0],\"e\":[-93.75,0],\"to\":[15.625,0],\"ti\":[-31.25,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p667_1_0p167_0p167\",\"t\":15,\"s\":[-93.75,0],\"e\":[0,0],\"to\":[31.25,0],\"ti\":[-15.625,0]},{\"t\":30}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Rectangle Path 1\",\"mn\":\"ADBE Vector Shape - Rect\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.443137258291,0.372549027205,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Rectangle 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":15,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":104}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":36,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":104}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.443137258291,0.372549027205,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":36,\"s\":[75,0],\"e\":[0,100]},{\"t\":104}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":34,\"op\":105,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":7.5,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":32,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":96}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":32,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":96}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.607843160629,0.560784339905,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":32,\"s\":[75,0],\"e\":[0,100]},{\"t\":96}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":24,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":15,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":30,\"op\":98,\"st\":28,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.03,0.03,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\",\"0p667_1_0p333_0\"],\"t\":28,\"s\":[0,0,100],\"e\":[100,100,100]},{\"t\":88}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"sr\",\"sy\":2,\"d\":1,\"pt\":{\"a\":0,\"k\":3,\"ix\":3},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":28,\"s\":[0,0],\"e\":[0,100],\"to\":[0,16.6666660308838],\"ti\":[0,-16.6666660308838]},{\"t\":88}],\"ix\":4},\"r\":{\"a\":0,\"k\":0,\"ix\":5},\"or\":{\"a\":0,\"k\":20,\"ix\":7},\"os\":{\"a\":0,\"k\":0,\"ix\":9},\"ix\":1,\"nm\":\"Polystar Path 1\",\"mn\":\"ADBE Vector Shape - Star\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,0.443137258291,0.372549027205,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.023,10.539],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0],\"y\":[1,1]},\"o\":{\"x\":[0.03,0.03],\"y\":[0,0]},\"n\":[\"0_1_0p03_0\",\"0_1_0p03_0\"],\"t\":28,\"s\":[75,0],\"e\":[0,100]},{\"t\":88}],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Polystar 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"rp\",\"c\":{\"a\":0,\"k\":12,\"ix\":1},\"o\":{\"a\":0,\"k\":0,\"ix\":2},\"m\":1,\"ix\":2,\"tr\":{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":30,\"ix\":4},\"so\":{\"a\":0,\"k\":100,\"ix\":5},\"eo\":{\"a\":0,\"k\":100,\"ix\":6},\"nm\":\"Transform\"},\"nm\":\"Repeater 1\",\"mn\":\"ADBE Vector Filter - Repeater\",\"hd\":false}],\"ip\":28,\"op\":91,\"st\":28,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"Comp 7\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-90,\"ix\":10},\"p\":{\"a\":0,\"k\":[307.473,158.568,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[50,50,100],\"ix\":6}},\"ao\":0,\"w\":375,\"h\":375,\"ip\":104,\"op\":224,\"st\":104,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"Comp 6\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-90,\"ix\":10},\"p\":{\"a\":0,\"k\":[79.867,175.707,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[60,60,100],\"ix\":6}},\"ao\":0,\"w\":375,\"h\":375,\"ip\":120,\"op\":240,\"st\":120,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":0,\"nm\":\"Comp 5\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-90,\"ix\":10},\"p\":{\"a\":0,\"k\":[184.758,96.182,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[70,70,100],\"ix\":6}},\"ao\":0,\"w\":375,\"h\":375,\"ip\":90,\"op\":210,\"st\":90,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":0,\"nm\":\"Comp 4\",\"refId\":\"comp_3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-90,\"ix\":10},\"p\":{\"a\":0,\"k\":[86.723,167.48,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[60,60,100],\"ix\":6}},\"ao\":0,\"w\":375,\"h\":375,\"ip\":25,\"op\":145,\"st\":25,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":0,\"nm\":\"Comp 3\",\"refId\":\"comp_4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-90,\"ix\":10},\"p\":{\"a\":0,\"k\":[286.906,216.84,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[75,75,100],\"ix\":6}},\"ao\":0,\"w\":375,\"h\":375,\"ip\":16,\"op\":136,\"st\":16,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":0,\"nm\":\"Comp 1\",\"refId\":\"comp_5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-90,\"ix\":10},\"p\":{\"a\":0,\"k\":[187.5,108.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[187.5,187.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[80,80,100],\"ix\":6}},\"ao\":0,\"w\":375,\"h\":375,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),
/* 56 */
/*!*****************************************!*\
  !*** D:/uinApp/newYear/static/san.json ***!
  \*****************************************/
/*! exports provided: v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.20\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":100,\"ip\":0,\"op\":200,\"w\":1000,\"h\":1000,\"nm\":\"Sand Clock\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Sand Drop 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[500,500,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":116,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,-364.299],[0,1.007]],\"c\":false}]},{\"t\":157,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,-300.299],[0,0.007]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":107,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":116,\"s\":[0]},{\"t\":157,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":116,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":157,\"s\":[100]},{\"t\":166,\"s\":[8]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.760999971278,0.270999983245,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":101,\"op\":167,\"st\":108,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Sand Drop\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[500,500,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":8,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,-1.103],[0,363.454]],\"c\":false}]},{\"t\":46,\"s\":[{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[0,2.897],[0,143.454]],\"c\":false}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":50,\"s\":[0]},{\"t\":59,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":8,\"s\":[100]},{\"t\":50,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.760999971278,0.270999983245,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":-6,\"op\":60,\"st\":1,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":1,\"nm\":\"Top Sand Matt\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[500,258,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[500,500,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[48.594,48.594,100],\"ix\":6}},\"ao\":0,\"sw\":1000,\"sh\":1000,\"sc\":\"#fefefe\",\"ip\":0,\"op\":341,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Top Sand Outlines\",\"tt\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[500,340.418,0],\"to\":[0,53.333,0],\"ti\":[0,-53.333,0]},{\"t\":50,\"s\":[500,660.418,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[184.25,159.668,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.207,157.979],[0,0],[0,0],[-59.47,-35.504],[0,0]],\"o\":[[59.47,-35.504],[0,0],[0,0],[0.207,157.979],[0,0],[0,0]],\"v\":[[1.886,158.168],[184,-159.418],[0,-159.418],[-184,-159.418],[-1.886,158.168],[0,159.418]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.760999971278,0.270999983245,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[184.25,159.668],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":50,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Top Sand Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":116,\"s\":[500,20,0],\"to\":[0,53.403,0],\"ti\":[0,-53.403,0]},{\"t\":167,\"s\":[500,340.418,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[184.25,159.668,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.207,157.979],[0,0],[0,0],[-59.47,-35.504],[0,0]],\"o\":[[59.47,-35.504],[0,0],[0,0],[0.207,157.979],[0,0],[0,0]],\"v\":[[1.886,158.168],[184,-159.418],[0,-159.418],[-184,-159.418],[-1.886,158.168],[0,159.418]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.760999971278,0.270999983245,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[184.25,159.668],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":107,\"op\":342,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":1,\"nm\":\"Bottom Sand Matt 2\",\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[500,258,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[500,500,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[48.594,48.594,100],\"ix\":6}},\"ao\":0,\"sw\":1000,\"sh\":1000,\"sc\":\"#fefefe\",\"ip\":0,\"op\":341,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"Bottom Sand Outlines\",\"tt\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":8,\"s\":[500,978.418,0],\"to\":[0,-53.333,0],\"ti\":[0,53.333,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":58,\"s\":[500,658.418,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":107,\"s\":[500,658.418,0],\"to\":[0,-53,0],\"ti\":[0,53,0]},{\"t\":158,\"s\":[500,340.418,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[184.25,159.668,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.207,-157.979],[0,0],[0,0],[-59.47,35.505],[0,0]],\"o\":[[59.47,35.505],[0,0],[0,0],[0.207,-157.979],[0,0],[0,0]],\"v\":[[1.886,-158.168],[184,159.418],[0,159.418],[-184,159.418],[-1.886,-158.168],[0,-159.418]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.987999949736,0.760999971278,0.270999983245,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[184.25,159.668],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":341,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Our Glass Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.421],\"y\":[0.901]},\"o\":{\"x\":[0.625],\"y\":[0.171]},\"t\":62,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":100,\"s\":[180]},{\"i\":{\"x\":[0.479],\"y\":[0.889]},\"o\":{\"x\":[0.543],\"y\":[0.026]},\"t\":167,\"s\":[180]},{\"t\":200,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[500,499.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[242.25,395.75,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,-21.539],[-21.539,0],[0,0],[0,21.539],[21.539,0]],\"o\":[[-21.539,0],[0,21.539],[0,0],[21.539,0],[0,-21.539],[0,0]],\"v\":[[-203,-39],[-242,0],[-203,39],[203,39],[242,0],[203,-39]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":100,\"ix\":10},\"r\":1,\"bm\":0,\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0,0,0,0.822,0.231,0.231,0.231,1,0.463,0.463,0.463],\"ix\":9}},\"s\":{\"a\":0,\"k\":[0,-52.538],\"ix\":5},\"e\":{\"a\":0,\"k\":[0,33.466],\"ix\":6},\"t\":1,\"nm\":\"Gradient Fill 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[242.25,40.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Top\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,-21.539],[-21.539,0],[0,0],[0,21.539],[21.539,0]],\"o\":[[-21.539,0],[0,21.539],[0,0],[21.539,0],[0,-21.539],[0,0]],\"v\":[[-203,-39],[-242,0],[-203,39],[203,39],[242,0],[203,-39]],\"c\":true},\"ix\":2},\"nm\":\"Path 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":100,\"ix\":10},\"r\":1,\"bm\":0,\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0.388,0.388,0.388,0.253,0.194,0.194,0.194,1,0,0,0],\"ix\":9}},\"s\":{\"a\":0,\"k\":[0,-52.538],\"ix\":5},\"e\":{\"a\":0,\"k\":[0,33.466],\"ix\":6},\"t\":1,\"nm\":\"Gradient Fill 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[242.25,753.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Bottom\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-31.21,46.027],[-29.797,20.919],[34.796,51.317],[0.115,88.019],[0,0],[0,0],[-58.737,-114.366],[-14.416,-97.37]],\"o\":[[0,0],[0.115,-88.019],[34.796,-51.318],[-29.798,-20.919],[-31.21,-46.028],[0,0],[0,0],[-6.388,105.535],[-58.84,115.306],[0,0]],\"v\":[[-97.007,327.504],[-96.994,317.491],[-28.441,110.102],[76.819,-0.082],[-28.441,-110.265],[-96.994,-317.655],[-97.007,-327.668],[10.007,-327.332],[97.007,3.668],[10.007,327.668]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.746082246304,0.934314668179,0.996078431606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":35,\"ix\":5},\"r\":1,\"bm\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[145.243,396.582],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ourglass Shadow\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-31.21,46.027],[-29.797,20.919],[34.796,51.317],[0.115,88.019],[0,0],[0,0],[0,0],[31.21,-46.028],[29.797,-20.919],[-34.795,-51.318],[-0.115,-88.019],[0,0]],\"o\":[[0,0],[0.115,-88.019],[34.796,-51.318],[-29.798,-20.919],[-31.21,-46.028],[0,0],[0,0],[0,0],[-0.115,88.018],[-34.795,51.316],[29.798,20.92],[31.21,46.027],[0,0],[0,0]],\"v\":[[-194.013,327.586],[-194,317.573],[-125.447,110.184],[-20.187,0],[-125.447,-110.183],[-194,-317.573],[-194.013,-327.586],[194.013,-327.586],[194,-317.573],[125.447,-110.183],[20.188,0],[125.447,110.184],[194,317.573],[194.013,327.586]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.333333343267,0.333333343267,0.333333343267,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.779999976065,0.902000038297,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":20,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[242.25,396.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Glass\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":202,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Mask Outlines\",\"parent\":4,\"td\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[242.25,396.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[184.25,317.836,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.445,0.905],[-0.203,155.197],[0,0],[0,0],[-60.544,-37.928],[1.445,-0.905],[0.204,-155.197],[0,0],[0,0],[60.544,37.928]],\"o\":[[60.544,-37.928],[0,0],[0,0],[0.204,155.197],[1.445,0.905],[-60.544,37.928],[0,0],[0,0],[-0.203,-155.197],[-1.445,-0.905]],\"v\":[[5.085,-1.957],[184,-317.586],[0,-317.586],[-184,-317.586],[-5.085,-1.957],[-5.085,1.957],[-184,317.586],[0,317.586],[184,317.586],[5.085,1.957]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[184.25,317.836],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":202,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":0,\"nm\":\"Sand\",\"parent\":4,\"tt\":1,\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[242.25,396.25,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[500,500,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":1000,\"h\":1000,\"ip\":0,\"op\":202,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Our Glass Outlines\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.421],\"y\":[0.901]},\"o\":{\"x\":[0.625],\"y\":[0.171]},\"t\":62,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"t\":100,\"s\":[180]},{\"i\":{\"x\":[0.479],\"y\":[0.889]},\"o\":{\"x\":[0.543],\"y\":[0.026]},\"t\":167,\"s\":[180]},{\"t\":200,\"s\":[360]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[500,499.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[242.25,395.75,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-31.21,46.027],[-29.797,20.919],[34.796,51.317],[0.115,88.019],[0,0],[0,0],[0,0],[31.21,-46.028],[29.797,-20.919],[-34.795,-51.318],[-0.115,-88.019],[0,0]],\"o\":[[0,0],[0.115,-88.019],[34.796,-51.318],[-29.798,-20.919],[-31.21,-46.028],[0,0],[0,0],[0,0],[-0.115,88.018],[-34.795,51.316],[29.798,20.92],[31.21,46.027],[0,0],[0,0]],\"v\":[[-194.013,327.586],[-194,317.573],[-125.447,110.184],[-20.187,0],[-125.447,-110.183],[-194,-317.573],[-194.013,-327.586],[194.013,-327.586],[194,-317.573],[125.447,-110.183],[20.188,0],[125.447,110.184],[194,317.573],[194.013,327.586]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0.329965263605,0.584313750267,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":50,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[242.25,396.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Glass\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":202,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/*!************************************************************!*\
  !*** D:/uinApp/newYear/tm-vuetify/tool/function/lottie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });var defaultCurveSegments = 200;function rafFactory() {var r = Date.now(),a = 1e3 / 60;return function (t) {var e = Date.now(),i = Math.min(1e3 / 24, Math.max(a, e - r + a)),s = setTimeout(function () {t(e + i);}, i);return r = e + i, s;};}var raf = rafFactory();function createSizedArray(t) {return Array.apply(null, { length: t });}function createTypedArray(t, e) {return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : null;}function createTag(t) {var e = {};switch (t) {case "canvas":return e.getContext = function () {}, e;default:return e;}}function randomString(t, e) {void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");var i = void 0,s = "";for (i = t; 0 < i; --i) {s += e[Math.round(Math.random() * (e.length - 1))];}return s;}var subframeEnabled = !0;function getDescriptor(t, e) {return Object.getOwnPropertyDescriptor(t, e);}function getEnvObj() {return "undefined" != typeof wx && "getSystemInfo" in wx && "function" == typeof wx.getSystemInfo ? wx : "undefined" != typeof my && "function" == typeof my.getSystemInfo ? my : "undefined" != typeof swan && "function" == typeof swan.getSystemInfo ? swan : "undefined" != typeof qq && "function" == typeof qq.getSystemInfo ? qq : "undefined" != typeof tt && "function" == typeof tt.getSystemInfo ? tt : void console.log("in uni");}var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;},classCallCheck = function classCallCheck(t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");},createClass = function () {function s(t, e) {for (var i = 0; i < e.length; i++) {var s = e[i];s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);}}return function (t, e, i) {return e && s(t.prototype, e), i && s(t, i), t;};}(),_extends = Object.assign || function (t) {for (var e = 1; e < arguments.length; e++) {var i = arguments[e];for (var s in i) {Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);}}return t;},get = function t(e, i, s) {null === e && (e = Function.prototype);var r = Object.getOwnPropertyDescriptor(e, i);if (void 0 === r) {var a = Object.getPrototypeOf(e);return null === a ? void 0 : t(a, i, s);}if ("value" in r) return r.value;var n = r.get;return void 0 !== n ? n.call(s) : void 0;},inherits = function inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);},possibleConstructorReturn = function possibleConstructorReturn(t, e) {if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != typeof e && "function" != typeof e ? t : e;},slicedToArray = function slicedToArray(t, e) {if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {var i = [],s = !0,r = !1,a = void 0;try {for (var n, o = t[Symbol.iterator](); !(s = (n = o.next()).done) && (i.push(n.value), !e || i.length !== e); s = !0) {;}} catch (t) {r = !0, a = t;} finally {try {!s && o.return && o.return();} finally {if (r) throw a;}}return i;}(t, e);throw new TypeError("Invalid attempt to destructure non-iterable instance");},ALI_OBJ = getEnvObj(),handleSuccess = function handleSuccess(t, e, i) {var s = 1 < arguments.length && void 0 !== e ? e : noop,r = i;if (t.success) {var a = r,n = t.success;t.success = function (t) {var e = s(t) || t;n.call(a, e);};}};function noop() {}var wxToAliApi = { request: function request(t) {var e = changeOpts(0 < arguments.length && void 0 !== t ? t : {}, { header: "headers" });return handleSuccess(e, function (t) {return changeOpts(t, { headers: "header", status: "statusCode" });}), ALI_OBJ.canIUse("request") ? ALI_OBJ.request(e) : ALI_OBJ.httpRequest(e);}, downloadFile: function downloadFile(t) {var e = changeOpts(0 < arguments.length && void 0 !== t ? t : {});return handleSuccess(e, function (t) {return changeOpts(t, { apFilePath: "tempFilePath" });}), ALI_OBJ.downloadFile(e);} };function changeOpts(i) {var s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},r = {};return Object.keys(i).forEach(function (t) {var e = Object.prototype.hasOwnProperty.call(s, t) ? s[t] : t;"" !== e && (r[e] = i[t]);}), r = _extends({}, r, t);}var api = _extends({}, getEnvObj());function getUserDataPath() {try {return api.env.USER_DATA_PATH;} catch (t) {return console.warn("getUserDataPath error"), "/USER_DATA_PATH";}}if (api.getFileSystemManager || (api.getFileSystemManager = function () {console.warn("当前小程序不支持 getFileSystemManager");}), !api.base64ToArrayBuffer) {for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = new Uint8Array(256), i = 0; i < chars.length; i++) {lookup[chars.charCodeAt(i)] = i;}api.base64ToArrayBuffer = function (t) {var e = .75 * t.length,i = t.length,s = void 0,r = 0,a = void 0,n = void 0,o = void 0,h = void 0;"=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);var p = new ArrayBuffer(e),l = new Uint8Array(p);for (s = 0; s < i; s += 4) {a = lookup[t.charCodeAt(s)], n = lookup[t.charCodeAt(s + 1)], o = lookup[t.charCodeAt(s + 2)], h = lookup[t.charCodeAt(s + 3)], l[r++] = a << 2 | n >> 4, l[r++] = (15 & n) << 4 | o >> 2, l[r++] = (3 & o) << 6 | 63 & h;}return p;};}api.ap && Object.keys(wxToAliApi).forEach(function (t) {api[t] = wxToAliApi[t];});var _cos = Math.cos,_sin = Math.sin,_tan = Math.tan,_rnd = Math.round,Matrix = function () {function t() {classCallCheck(this, t), this._identity = !0, this._identityCalculated = !1, this.props = new Float32Array(16), this.reset();}return createClass(t, [{ key: "reset", value: function value() {return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;} }, { key: "rotate", value: function value(t) {if (0 === t) return this;var e = _cos(t),i = _sin(t);return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);} }, { key: "rotateX", value: function value(t) {if (0 === t) return this;var e = _cos(t),i = _sin(t);return this._t(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1);} }, { key: "rotateY", value: function value(t) {if (0 === t) return this;var e = _cos(t),i = _sin(t);return this._t(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1);} }, { key: "rotateZ", value: function value(t) {if (0 === t) return this;var e = _cos(t),i = _sin(t);return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);} }, { key: "shear", value: function value(t, e) {return this._t(1, e, t, 1, 0, 0);} }, { key: "skew", value: function value(t, e) {return this.shear(_tan(t), _tan(e));} }, { key: "skewFromAxis", value: function value(t, e) {var i = _cos(e),s = _sin(e);return this._t(i, s, 0, 0, -s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);} }, { key: "scale", value: function value(t, e, i) {return i = isNaN(i) ? 1 : i, 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);} }, { key: "setTransform", value: function value(t, e, i, s, r, a, n, o, h, p, l, c, u, f, d, m) {return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = r, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = p, this.props[10] = l, this.props[11] = c, this.props[12] = u, this.props[13] = f, this.props[14] = d, this.props[15] = m, this;} }, { key: "translate", value: function value(t, e, i) {return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this;} }, { key: "transform", value: function value(t, e, i, s, r, a, n, o, h, p, l, c, u, f, d, m) {var y = this.props;if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === a && 0 === n && 0 === o && 0 === h && 0 === p && 1 === l && 0 === c) return y[12] = y[12] * t + y[15] * u, y[13] = y[13] * a + y[15] * f, y[14] = y[14] * l + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;var v = y[0],g = y[1],k = y[2],x = y[3],b = y[4],P = y[5],_ = y[6],C = y[7],S = y[8],T = y[9],E = y[10],A = y[11],w = y[12],I = y[13],D = y[14],F = y[15];return y[0] = v * t + g * r + k * h + x * u, y[1] = v * e + g * a + k * p + x * f, y[2] = v * i + g * n + k * l + x * d, y[3] = v * s + g * o + k * c + x * m, y[4] = b * t + P * r + _ * h + C * u, y[5] = b * e + P * a + _ * p + C * f, y[6] = b * i + P * n + _ * l + C * d, y[7] = b * s + P * o + _ * c + C * m, y[8] = S * t + T * r + E * h + A * u, y[9] = S * e + T * a + E * p + A * f, y[10] = S * i + T * n + E * l + A * d, y[11] = S * s + T * o + E * c + A * m, y[12] = w * t + I * r + D * h + F * u, y[13] = w * e + I * a + D * p + F * f, y[14] = w * i + I * n + D * l + F * d, y[15] = w * s + I * o + D * c + F * m, this._identityCalculated = !1, this;} }, { key: "isIdentity", value: function value() {var t = this.props;return this._identityCalculated || (this._identity = !(1 !== t[0] || 0 !== t[1] || 0 !== t[2] || 0 !== t[3] || 0 !== t[4] || 1 !== t[5] || 0 !== t[6] || 0 !== t[7] || 0 !== t[8] || 0 !== t[9] || 1 !== t[10] || 0 !== t[11] || 0 !== t[12] || 0 !== t[13] || 0 !== t[14] || 1 !== t[15]), this._identityCalculated = !0), this._identity;} }, { key: "equals", value: function value(t) {for (var e = 0, i = this.props; e < 16;) {if (t.props[e] !== i[e]) return !1;e += 1;}return !0;} }, { key: "clone", value: function value(t) {var e = void 0,i = this.props;for (e = 0; e < 16; e += 1) {t.props[e] = i[e];}} }, { key: "cloneFromProps", value: function value(t) {var e = void 0;for (e = 0; e < 16; e += 1) {this.props[e] = t[e];}} }, { key: "applyToPoint", value: function value(t, e, i) {var s = this.props;return { x: t * s[0] + e * s[4] + i * s[8] + s[12], y: t * s[1] + e * s[5] + i * s[9] + s[13], z: t * s[2] + e * s[6] + i * s[10] + s[14] };} }, { key: "applyToX", value: function value(t, e, i) {var s = this.props;return t * s[0] + e * s[4] + i * s[8] + s[12];} }, { key: "applyToY", value: function value(t, e, i) {var s = this.props;return t * s[1] + e * s[5] + i * s[9] + s[13];} }, { key: "applyToZ", value: function value(t, e, i) {var s = this.props;return t * s[2] + e * s[6] + i * s[10] + s[14];} }, { key: "inversePoint", value: function value(t) {var e = this.props,i = e[0] * e[5] - e[1] * e[4],s = e[5] / i,r = -e[1] / i,a = -e[4] / i,n = e[0] / i,o = (e[4] * e[13] - e[5] * e[12]) / i,h = -(e[0] * e[13] - e[1] * e[12]) / i;return [t[0] * s + t[1] * a + o, t[0] * r + t[1] * n + h, 0];} }, { key: "inversePoints", value: function value(t) {var e = void 0,i = t.length,s = [];for (e = 0; e < i; e += 1) {s[e] = this.inversePoint(t[e]);}return s;} }, { key: "applyToTriplePoints", value: function value(t, e, i) {var s = createTypedArray("float32", 6);if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];else {var r = this.props,a = r[0],n = r[1],o = r[4],h = r[5],p = r[12],l = r[13];s[0] = t[0] * a + t[1] * o + p, s[1] = t[0] * n + t[1] * h + l, s[2] = e[0] * a + e[1] * o + p, s[3] = e[0] * n + e[1] * h + l, s[4] = i[0] * a + i[1] * o + p, s[5] = i[0] * n + i[1] * h + l;}return s;} }, { key: "applyToPointArray", value: function value(t, e, i) {var s = void 0;if (this.isIdentity()) s = [t, e, i];else {var r = this.props;s = [t * r[0] + e * r[4] + i * r[8] + r[12], t * r[1] + e * r[5] + i * r[9] + r[13], t * r[2] + e * r[6] + i * r[10] + r[14]];}return s;} }, { key: "applyToPointStringified", value: function value(t, e) {if (this.isIdentity()) return t + "," + e;var i = this.props;return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100;} }, { key: "toCSS", value: function value() {for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) {i += _rnd(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;}return i;} }, { key: "roundMatrixProperty", value: function value(t) {return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? _rnd(1e4 * t) / 1e4 : t;} }, { key: "to2dCSS", value: function value() {var t = this.props,e = this.roundMatrixProperty;return "matrix(" + e(t[0]) + "," + e(t[1]) + "," + e(t[4]) + "," + e(t[5]) + "," + e(t[12]) + "," + e(t[13]) + ")";} }, { key: "_t", value: function value() {return this.transform.apply(this, arguments);} }]), t;}();function Mixin(t) {for (var e = arguments.length, a = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) {a[i - 1] = arguments[i];}function n(e, i) {Object.getOwnPropertyNames(i).forEach(function (t) {try {t.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));} catch (t) {console.error(t);}});}var s = (inherits(o, t), o);function o() {var t;classCallCheck(this, o);for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) {i[s] = arguments[s];}var r = possibleConstructorReturn(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [this].concat(i)));return a.forEach(function (t) {var e = new t();n(r, e);}), r;}return a.forEach(function (t) {for (var e = t.prototype.__proto__; e && e.constructor !== Object;) {n(s.prototype, e), e = e.__proto__;}n(s.prototype, t.prototype), n(s, t);}), s;}var beziers = {},NEWTON_ITERATIONS = 4,NEWTON_MIN_SLOPE = .001,SUBDIVISION_PRECISION = 1e-7,SUBDIVISION_MAX_ITERATIONS = 10,kSplineTableSize = 11,kSampleStepSize = 1 / (kSplineTableSize - 1),float32ArraySupported = "function" == typeof Float32Array;function A(t, e) {return 1 - 3 * e + 3 * t;}function B(t, e) {return 3 * e - 6 * t;}function C(t) {return 3 * t;}function calcBezier(t, e, i) {return ((A(e, i) * t + B(e, i)) * t + C(e)) * t;}function getSlope(t, e, i) {return 3 * A(e, i) * t * t + 2 * B(e, i) * t + C(e);}function binarySubdivide(t, e, i, s, r) {for (var a = void 0, n = void 0, o = 0; 0 < (a = calcBezier(n = e + (i - e) / 2, s, r) - t) ? i = n : e = n, Math.abs(a) > SUBDIVISION_PRECISION && ++o < SUBDIVISION_MAX_ITERATIONS;) {;}return n;}function newtonRaphsonIterate(t, e, i, s) {for (var r = 0; r < NEWTON_ITERATIONS; ++r) {var a = getSlope(e, i, s);if (0 == +a) return e;e -= (calcBezier(e, i, s) - t) / a;}return e;}function BezierEasing(t) {this._p = t, this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize), this._precomputed = !1, this.get = this.get.bind(this);}function getBezierEasing(t, e, i, s, r) {var a = r || ("bez_" + t + "_" + e + "_" + i + "_" + s).replace(/\./g, "p");if (beziers[a]) return beziers[a];var n = new BezierEasing([t, e, i, s]);return beziers[a] = n;}BezierEasing.prototype = { get: function get(t) {var e = this._p[0],i = this._p[1],s = this._p[2],r = this._p[3];return this._precomputed || this._precompute(), e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : calcBezier(this._getTForX(t), i, r);}, _precompute: function _precompute() {var t = this._p[0],e = this._p[1],i = this._p[2],s = this._p[3];this._precomputed = !0, t === e && i === s || this._calcSampleValues();}, _calcSampleValues: function _calcSampleValues() {for (var t = this._p[0], e = this._p[2], i = 0; i < kSplineTableSize; ++i) {this._mSampleValues[i] = calcBezier(i * kSampleStepSize, t, e);}}, _getTForX: function _getTForX(t) {for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, r = 0, a = 1, n = kSplineTableSize - 1; a !== n && s[a] <= t; ++a) {r += kSampleStepSize;}var o = r + (t - s[--a]) / (s[a + 1] - s[a]) * kSampleStepSize,h = getSlope(o, e, i);return NEWTON_MIN_SLOPE <= h ? newtonRaphsonIterate(t, o, e, i) : 0 === h ? o : binarySubdivide(t, r, r + kSampleStepSize, e, i);} };var ob = {};ob.getBezierEasing = getBezierEasing;var reservedWords = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" },ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",keywords = { 5: ecma5AndLessKeywords, 6: ecma5AndLessKeywords + " const class extends export import super" },keywordRelationalOperator = /^in(stanceof)?$/,nonASCIIidentifierStartChars = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",nonASCIIidentifierChars = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]"),nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541],astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];function isInAstralSet(t, e) {for (var i = 65536, s = 0; s < e.length; s += 2) {if (t < (i += e[s])) return !1;if (t <= (i += e[s + 1])) return !0;}}function isIdentifierStart(t, e) {return t < 65 ? 36 === t : t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? 170 <= t && nonASCIIidentifierStart.test(String.fromCharCode(t)) : !1 !== e && isInAstralSet(t, astralIdentifierStartCodes)));}function isIdentifierChar(t, e) {return t < 48 ? 36 === t : t < 58 || !(t < 65) && (t < 91 || (t < 97 ? 95 === t : t < 123 || (t <= 65535 ? 170 <= t && nonASCIIidentifier.test(String.fromCharCode(t)) : !1 !== e && (isInAstralSet(t, astralIdentifierStartCodes) || isInAstralSet(t, astralIdentifierCodes)))));}var TokenType = function TokenType(t, e) {void 0 === e && (e = {}), this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop || null, this.updateContext = null;};function binop(t, e) {return new TokenType(t, { beforeExpr: !0, binop: e });}var beforeExpr = { beforeExpr: !0 },startsExpr = { startsExpr: !0 },keywords$1 = {};function kw(t, e) {return void 0 === e && (e = {}), e.keyword = t, keywords$1[t] = new TokenType(t, e);}var types = { num: new TokenType("num", startsExpr), regexp: new TokenType("regexp", startsExpr), string: new TokenType("string", startsExpr), name: new TokenType("name", startsExpr), eof: new TokenType("eof"), bracketL: new TokenType("[", { beforeExpr: !0, startsExpr: !0 }), bracketR: new TokenType("]"), braceL: new TokenType("{", { beforeExpr: !0, startsExpr: !0 }), braceR: new TokenType("}"), parenL: new TokenType("(", { beforeExpr: !0, startsExpr: !0 }), parenR: new TokenType(")"), comma: new TokenType(",", beforeExpr), semi: new TokenType(";", beforeExpr), colon: new TokenType(":", beforeExpr), dot: new TokenType("."), question: new TokenType("?", beforeExpr), arrow: new TokenType("=>", beforeExpr), template: new TokenType("template"), invalidTemplate: new TokenType("invalidTemplate"), ellipsis: new TokenType("...", beforeExpr), backQuote: new TokenType("`", startsExpr), dollarBraceL: new TokenType("${", { beforeExpr: !0, startsExpr: !0 }), eq: new TokenType("=", { beforeExpr: !0, isAssign: !0 }), assign: new TokenType("_=", { beforeExpr: !0, isAssign: !0 }), incDec: new TokenType("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }), prefix: new TokenType("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), logicalOR: binop("||", 1), logicalAND: binop("&&", 2), bitwiseOR: binop("|", 3), bitwiseXOR: binop("^", 4), bitwiseAND: binop("&", 5), equality: binop("==/!=/===/!==", 6), relational: binop("</>/<=/>=", 7), bitShift: binop("<</>>/>>>", 8), plusMin: new TokenType("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }), modulo: binop("%", 10), star: binop("*", 10), slash: binop("/", 10), starstar: new TokenType("**", { beforeExpr: !0 }), _break: kw("break"), _case: kw("case", beforeExpr), _catch: kw("catch"), _continue: kw("continue"), _debugger: kw("debugger"), _default: kw("default", beforeExpr), _do: kw("do", { isLoop: !0, beforeExpr: !0 }), _else: kw("else", beforeExpr), _finally: kw("finally"), _for: kw("for", { isLoop: !0 }), _function: kw("function", startsExpr), _if: kw("if"), _return: kw("return", beforeExpr), _switch: kw("switch"), _throw: kw("throw", beforeExpr), _try: kw("try"), _var: kw("var"), _const: kw("const"), _while: kw("while", { isLoop: !0 }), _with: kw("with"), _new: kw("new", { beforeExpr: !0, startsExpr: !0 }), _this: kw("this", startsExpr), _super: kw("super", startsExpr), _class: kw("class", startsExpr), _extends: kw("extends", beforeExpr), _export: kw("export"), _import: kw("import"), _null: kw("null", startsExpr), _true: kw("true", startsExpr), _false: kw("false", startsExpr), _in: kw("in", { beforeExpr: !0, binop: 7 }), _instanceof: kw("instanceof", { beforeExpr: !0, binop: 7 }), _typeof: kw("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _void: kw("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _delete: kw("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }) },lineBreak = /\r\n?|\n|\u2028|\u2029/,lineBreakG = new RegExp(lineBreak.source, "g");function isNewLine(t) {return 10 === t || 13 === t || 8232 === t || 8233 === t;}var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,ref = Object.prototype,hasOwnProperty = ref.hasOwnProperty,toString = ref.toString;function has(t, e) {return hasOwnProperty.call(t, e);}var isArray = Array.isArray || function (t) {return "[object Array]" === toString.call(t);},Position = function Position(t, e) {this.line = t, this.column = e;};Position.prototype.offset = function (t) {return new Position(this.line, this.column + t);};var SourceLocation = function SourceLocation(t, e, i) {this.start = e, this.end = i, null !== t.sourceFile && (this.source = t.sourceFile);};function getLineInfo(t, e) {for (var i = 1, s = 0;;) {lineBreakG.lastIndex = s;var r = lineBreakG.exec(t);if (!(r && r.index < e)) return new Position(i, e - s);++i, s = r.index + r[0].length;}}var defaultOptions = { ecmaVersion: 7, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: !1, allowImportExportEverywhere: !1, allowHashBang: !1, locations: !1, onToken: null, onComment: null, ranges: !1, program: null, sourceFile: null, directSourceFile: null, preserveParens: !1, plugins: {} };function getOptions(t) {var e = {};for (var i in defaultOptions) {e[i] = t && has(t, i) ? t[i] : defaultOptions[i];}if (2015 <= e.ecmaVersion && (e.ecmaVersion -= 2009), null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5), isArray(e.onToken)) {var s = e.onToken;e.onToken = function (t) {return s.push(t);};}return isArray(e.onComment) && (e.onComment = pushComment(e, e.onComment)), e;}function pushComment(o, h) {return function (t, e, i, s, r, a) {var n = { type: t ? "Block" : "Line", value: e, start: i, end: s };o.locations && (n.loc = new SourceLocation(this, r, a)), o.ranges && (n.range = [i, s]), h.push(n);};}var plugins = {};function keywordRegexp(t) {return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$");}var Parser = function Parser(t, e, i) {this.options = t = getOptions(t), this.sourceFile = t.sourceFile, this.keywords = keywordRegexp(keywords[6 <= t.ecmaVersion ? 6 : 5]);var s = "";if (!t.allowReserved) {for (var r = t.ecmaVersion; !(s = reservedWords[r]); r--) {;}"module" == t.sourceType && (s += " await");}this.reservedWords = keywordRegexp(s);var a = (s ? s + " " : "") + reservedWords.strict;this.reservedWordsStrict = keywordRegexp(a), this.reservedWordsStrictBind = keywordRegexp(a + " " + reservedWords.strictBind), this.input = String(e), this.containsEsc = !1, this.loadPlugins(t.plugins), i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = types.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === t.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.inFunction = this.inGenerator = this.inAsync = !1, this.yieldPos = this.awaitPos = 0, this.labels = [], 0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterFunctionScope();};Parser.prototype.isKeyword = function (t) {return this.keywords.test(t);}, Parser.prototype.isReservedWord = function (t) {return this.reservedWords.test(t);}, Parser.prototype.extend = function (t, e) {this[t] = e(this[t]);}, Parser.prototype.loadPlugins = function (t) {for (var e in t) {var i = plugins[e];if (!i) throw new Error("Plugin '" + e + "' not found");i(this, t[e]);}}, Parser.prototype.parse = function () {var t = this.options.program || this.startNode();return this.nextToken(), this.parseTopLevel(t);};var pp = Parser.prototype,literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;function DestructuringErrors() {this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;}pp.strictDirective = function (t) {for (;;) {skipWhiteSpace.lastIndex = t, t += skipWhiteSpace.exec(this.input)[0].length;var e = literal.exec(this.input.slice(t));if (!e) return !1;if ("use strict" == (e[1] || e[2])) return !0;t += e[0].length;}}, pp.eat = function (t) {return this.type === t && (this.next(), !0);}, pp.isContextual = function (t) {return this.type === types.name && this.value === t && !this.containsEsc;}, pp.eatContextual = function (t) {return !!this.isContextual(t) && (this.next(), !0);}, pp.expectContextual = function (t) {this.eatContextual(t) || this.unexpected();}, pp.canInsertSemicolon = function () {return this.type === types.eof || this.type === types.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));}, pp.insertSemicolon = function () {if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;}, pp.semicolon = function () {this.eat(types.semi) || this.insertSemicolon() || this.unexpected();}, pp.afterTrailingComma = function (t, e) {if (this.type == t) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), e || this.next(), !0;}, pp.expect = function (t) {this.eat(t) || this.unexpected();}, pp.unexpected = function (t) {this.raise(null != t ? t : this.start, "Unexpected token");}, pp.checkPatternErrors = function (t, e) {if (t) {-1 < t.trailingComma && this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");var i = e ? t.parenthesizedAssign : t.parenthesizedBind;-1 < i && this.raiseRecoverable(i, "Parenthesized pattern");}}, pp.checkExpressionErrors = function (t, e) {if (!t) return !1;var i = t.shorthandAssign,s = t.doubleProto;if (!e) return 0 <= i || 0 <= s;0 <= i && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), 0 <= s && this.raiseRecoverable(s, "Redefinition of __proto__ property");}, pp.checkYieldAwaitInDefaultParams = function () {this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");}, pp.isSimpleAssignTarget = function (t) {return "ParenthesizedExpression" === t.type ? this.isSimpleAssignTarget(t.expression) : "Identifier" === t.type || "MemberExpression" === t.type;};var pp$1 = Parser.prototype;pp$1.parseTopLevel = function (t) {var e = {};for (t.body || (t.body = []); this.type !== types.eof;) {var i = this.parseStatement(!0, !0, e);t.body.push(i);}return this.adaptDirectivePrologue(t.body), this.next(), 6 <= this.options.ecmaVersion && (t.sourceType = this.options.sourceType), this.finishNode(t, "Program");};var loopLabel = { kind: "loop" },switchLabel = { kind: "switch" };pp$1.isLet = function () {if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;skipWhiteSpace.lastIndex = this.pos;var t = skipWhiteSpace.exec(this.input),e = this.pos + t[0].length,i = this.input.charCodeAt(e);if (91 === i || 123 == i) return !0;if (isIdentifierStart(i, !0)) {for (var s = e + 1; isIdentifierChar(this.input.charCodeAt(s), !0);) {++s;}var r = this.input.slice(e, s);if (!keywordRelationalOperator.test(r)) return !0;}return !1;}, pp$1.isAsyncFunction = function () {if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;skipWhiteSpace.lastIndex = this.pos;var t = skipWhiteSpace.exec(this.input),e = this.pos + t[0].length;return !(lineBreak.test(this.input.slice(this.pos, e)) || "function" !== this.input.slice(e, e + 8) || e + 8 != this.input.length && isIdentifierChar(this.input.charAt(e + 8)));}, pp$1.parseStatement = function (t, e, i) {var s,r = this.type,a = this.startNode();switch (this.isLet() && (r = types._var, s = "let"), r) {case types._break:case types._continue:return this.parseBreakContinueStatement(a, r.keyword);case types._debugger:return this.parseDebuggerStatement(a);case types._do:return this.parseDoStatement(a);case types._for:return this.parseForStatement(a);case types._function:return !t && 6 <= this.options.ecmaVersion && this.unexpected(), this.parseFunctionStatement(a, !1);case types._class:return t || this.unexpected(), this.parseClass(a, !0);case types._if:return this.parseIfStatement(a);case types._return:return this.parseReturnStatement(a);case types._switch:return this.parseSwitchStatement(a);case types._throw:return this.parseThrowStatement(a);case types._try:return this.parseTryStatement(a);case types._const:case types._var:return s = s || this.value, t || "var" == s || this.unexpected(), this.parseVarStatement(a, s);case types._while:return this.parseWhileStatement(a);case types._with:return this.parseWithStatement(a);case types.braceL:return this.parseBlock();case types.semi:return this.parseEmptyStatement(a);case types._export:case types._import:return this.options.allowImportExportEverywhere || (e || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r === types._import ? this.parseImport(a) : this.parseExport(a, i);default:if (this.isAsyncFunction()) return t || this.unexpected(), this.next(), this.parseFunctionStatement(a, !0);var n = this.value,o = this.parseExpression();return r === types.name && "Identifier" === o.type && this.eat(types.colon) ? this.parseLabeledStatement(a, n, o) : this.parseExpressionStatement(a, o);}}, pp$1.parseBreakContinueStatement = function (t, e) {var i = "break" == e;this.next(), this.eat(types.semi) || this.insertSemicolon() ? t.label = null : this.type !== types.name ? this.unexpected() : (t.label = this.parseIdent(), this.semicolon());for (var s = 0; s < this.labels.length; ++s) {var r = this.labels[s];if (null == t.label || r.name === t.label.name) {if (null != r.kind && (i || "loop" === r.kind)) break;if (t.label && i) break;}}return s === this.labels.length && this.raise(t.start, "Unsyntactic " + e), this.finishNode(t, i ? "BreakStatement" : "ContinueStatement");}, pp$1.parseDebuggerStatement = function (t) {return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");}, pp$1.parseDoStatement = function (t) {return this.next(), this.labels.push(loopLabel), t.body = this.parseStatement(!1), this.labels.pop(), this.expect(types._while), t.test = this.parseParenExpression(), 6 <= this.options.ecmaVersion ? this.eat(types.semi) : this.semicolon(), this.finishNode(t, "DoWhileStatement");}, pp$1.parseForStatement = function (t) {this.next();var e = 9 <= this.options.ecmaVersion && this.inAsync && this.eatContextual("await") ? this.lastTokStart : -1;if (this.labels.push(loopLabel), this.enterLexicalScope(), this.expect(types.parenL), this.type === types.semi) return -1 < e && this.unexpected(e), this.parseFor(t, null);var i = this.isLet();if (this.type === types._var || this.type === types._const || i) {var s = this.startNode(),r = i ? "let" : this.value;return this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), !(this.type === types._in || 6 <= this.options.ecmaVersion && this.isContextual("of")) || 1 !== s.declarations.length || "var" !== r && s.declarations[0].init ? (-1 < e && this.unexpected(e), this.parseFor(t, s)) : (9 <= this.options.ecmaVersion && (this.type === types._in ? -1 < e && this.unexpected(e) : t.await = -1 < e), this.parseForIn(t, s));}var a = new DestructuringErrors(),n = this.parseExpression(!0, a);return this.type === types._in || 6 <= this.options.ecmaVersion && this.isContextual("of") ? (9 <= this.options.ecmaVersion && (this.type === types._in ? -1 < e && this.unexpected(e) : t.await = -1 < e), this.toAssignable(n, !1, a), this.checkLVal(n), this.parseForIn(t, n)) : (this.checkExpressionErrors(a, !0), -1 < e && this.unexpected(e), this.parseFor(t, n));}, pp$1.parseFunctionStatement = function (t, e) {return this.next(), this.parseFunction(t, !0, !1, e);}, pp$1.parseIfStatement = function (t) {return this.next(), t.test = this.parseParenExpression(), t.consequent = this.parseStatement(!this.strict && this.type == types._function), t.alternate = this.eat(types._else) ? this.parseStatement(!this.strict && this.type == types._function) : null, this.finishNode(t, "IfStatement");}, pp$1.parseReturnStatement = function (t) {return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(types.semi) || this.insertSemicolon() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");}, pp$1.parseSwitchStatement = function (t) {var e,i = this;this.next(), t.discriminant = this.parseParenExpression(), t.cases = [], this.expect(types.braceL), this.labels.push(switchLabel), this.enterLexicalScope();for (var s = !1; this.type != types.braceR;) {if (i.type === types._case || i.type === types._default) {var r = i.type === types._case;e && i.finishNode(e, "SwitchCase"), t.cases.push(e = i.startNode()), e.consequent = [], i.next(), r ? e.test = i.parseExpression() : (s && i.raiseRecoverable(i.lastTokStart, "Multiple default clauses"), s = !0, e.test = null), i.expect(types.colon);} else e || i.unexpected(), e.consequent.push(i.parseStatement(!0));}return this.exitLexicalScope(), e && this.finishNode(e, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(t, "SwitchStatement");}, pp$1.parseThrowStatement = function (t) {return this.next(), lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");};var empty = [];pp$1.parseTryStatement = function (t) {if (this.next(), t.block = this.parseBlock(), t.handler = null, this.type === types._catch) {var e = this.startNode();this.next(), this.expect(types.parenL), e.param = this.parseBindingAtom(), this.enterLexicalScope(), this.checkLVal(e.param, "let"), this.expect(types.parenR), e.body = this.parseBlock(!1), this.exitLexicalScope(), t.handler = this.finishNode(e, "CatchClause");}return t.finalizer = this.eat(types._finally) ? this.parseBlock() : null, t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"), this.finishNode(t, "TryStatement");}, pp$1.parseVarStatement = function (t, e) {return this.next(), this.parseVar(t, !1, e), this.semicolon(), this.finishNode(t, "VariableDeclaration");}, pp$1.parseWhileStatement = function (t) {return this.next(), t.test = this.parseParenExpression(), this.labels.push(loopLabel), t.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(t, "WhileStatement");}, pp$1.parseWithStatement = function (t) {return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), t.object = this.parseParenExpression(), t.body = this.parseStatement(!1), this.finishNode(t, "WithStatement");}, pp$1.parseEmptyStatement = function (t) {return this.next(), this.finishNode(t, "EmptyStatement");}, pp$1.parseLabeledStatement = function (t, e, i) {for (var s = 0, r = this.labels; s < r.length; s += 1) {r[s].name === e && this.raise(i.start, "Label '" + e + "' is already declared");}for (var a = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null, n = this.labels.length - 1; 0 <= n; n--) {var o = this.labels[n];if (o.statementStart != t.start) break;o.statementStart = this.start, o.kind = a;}return this.labels.push({ name: e, kind: a, statementStart: this.start }), t.body = this.parseStatement(!0), ("ClassDeclaration" == t.body.type || "VariableDeclaration" == t.body.type && "var" != t.body.kind || "FunctionDeclaration" == t.body.type && (this.strict || t.body.generator)) && this.raiseRecoverable(t.body.start, "Invalid labeled declaration"), this.labels.pop(), t.label = i, this.finishNode(t, "LabeledStatement");}, pp$1.parseExpressionStatement = function (t, e) {return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");}, pp$1.parseBlock = function (t) {void 0 === t && (t = !0);var e = this.startNode();for (e.body = [], this.expect(types.braceL), t && this.enterLexicalScope(); !this.eat(types.braceR);) {var i = this.parseStatement(!0);e.body.push(i);}return t && this.exitLexicalScope(), this.finishNode(e, "BlockStatement");}, pp$1.parseFor = function (t, e) {return t.init = e, this.expect(types.semi), t.test = this.type === types.semi ? null : this.parseExpression(), this.expect(types.semi), t.update = this.type === types.parenR ? null : this.parseExpression(), this.expect(types.parenR), this.exitLexicalScope(), t.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(t, "ForStatement");}, pp$1.parseForIn = function (t, e) {var i = this.type === types._in ? "ForInStatement" : "ForOfStatement";return this.next(), "ForInStatement" == i && ("AssignmentPattern" !== e.type && ("VariableDeclaration" !== e.type || null == e.declarations[0].init || !this.strict && "Identifier" === e.declarations[0].id.type) || this.raise(e.start, "Invalid assignment in for-in loop head")), t.left = e, t.right = "ForInStatement" == i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(types.parenR), this.exitLexicalScope(), t.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(t, i);}, pp$1.parseVar = function (t, e, i) {var s = this;for (t.declarations = [], t.kind = i;;) {var r = s.startNode();if (s.parseVarId(r, i), s.eat(types.eq) ? r.init = s.parseMaybeAssign(e) : "const" !== i || s.type === types._in || 6 <= s.options.ecmaVersion && s.isContextual("of") ? "Identifier" == r.id.type || e && (s.type === types._in || s.isContextual("of")) ? r.init = null : s.raise(s.lastTokEnd, "Complex binding patterns require an initialization value") : s.unexpected(), t.declarations.push(s.finishNode(r, "VariableDeclarator")), !s.eat(types.comma)) break;}return t;}, pp$1.parseVarId = function (t, e) {t.id = this.parseBindingAtom(e), this.checkLVal(t.id, e, !1);}, pp$1.parseFunction = function (t, e, i, s) {this.initFunction(t), (9 <= this.options.ecmaVersion || 6 <= this.options.ecmaVersion && !s) && (t.generator = this.eat(types.star)), 8 <= this.options.ecmaVersion && (t.async = !!s), e && (t.id = "nullableID" === e && this.type != types.name ? null : this.parseIdent(), t.id && this.checkLVal(t.id, "var"));var r = this.inGenerator,a = this.inAsync,n = this.yieldPos,o = this.awaitPos,h = this.inFunction;return this.inGenerator = t.generator, this.inAsync = t.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, this.enterFunctionScope(), e || (t.id = this.type == types.name ? this.parseIdent() : null), this.parseFunctionParams(t), this.parseFunctionBody(t, i), this.inGenerator = r, this.inAsync = a, this.yieldPos = n, this.awaitPos = o, this.inFunction = h, this.finishNode(t, e ? "FunctionDeclaration" : "FunctionExpression");}, pp$1.parseFunctionParams = function (t) {this.expect(types.parenL), t.params = this.parseBindingList(types.parenR, !1, 8 <= this.options.ecmaVersion), this.checkYieldAwaitInDefaultParams();}, pp$1.parseClass = function (t, e) {this.next(), this.parseClassId(t, e), this.parseClassSuper(t);var i = this.startNode(),s = !1;for (i.body = [], this.expect(types.braceL); !this.eat(types.braceR);) {var r = this.parseClassMember(i);r && "MethodDefinition" === r.type && "constructor" === r.kind && (s && this.raise(r.start, "Duplicate constructor in the same class"), s = !0);}return t.body = this.finishNode(i, "ClassBody"), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");}, pp$1.parseClassMember = function (t) {var r = this;if (this.eat(types.semi)) return null;function e(t, e) {void 0 === e && (e = !1);var i = r.start,s = r.startLoc;return !!r.eatContextual(t) && (!(r.type === types.parenL || e && r.canInsertSemicolon()) || (a.key && r.unexpected(), a.computed = !1, a.key = r.startNodeAt(i, s), a.key.name = t, r.finishNode(a.key, "Identifier"), !1));}var a = this.startNode();a.kind = "method", a.static = e("static");var i = this.eat(types.star),s = !1;i || (8 <= this.options.ecmaVersion && e("async", !0) ? (s = !0, i = 9 <= this.options.ecmaVersion && this.eat(types.star)) : e("get") ? a.kind = "get" : e("set") && (a.kind = "set")), a.key || this.parsePropertyName(a);var n = a.key;return a.computed || a.static || !("Identifier" === n.type && "constructor" === n.name || "Literal" === n.type && "constructor" === n.value) ? a.static && "Identifier" === n.type && "prototype" === n.name && this.raise(n.start, "Classes may not have a static property named prototype") : ("method" !== a.kind && this.raise(n.start, "Constructor can't have get/set modifier"), i && this.raise(n.start, "Constructor can't be a generator"), s && this.raise(n.start, "Constructor can't be an async method"), a.kind = "constructor"), this.parseClassMethod(t, a, i, s), "get" === a.kind && 0 !== a.value.params.length && this.raiseRecoverable(a.value.start, "getter should have no params"), "set" === a.kind && 1 !== a.value.params.length && this.raiseRecoverable(a.value.start, "setter should have exactly one param"), "set" === a.kind && "RestElement" === a.value.params[0].type && this.raiseRecoverable(a.value.params[0].start, "Setter cannot use rest params"), a;}, pp$1.parseClassMethod = function (t, e, i, s) {e.value = this.parseMethod(i, s), t.body.push(this.finishNode(e, "MethodDefinition"));}, pp$1.parseClassId = function (t, e) {t.id = this.type === types.name ? this.parseIdent() : !0 === e ? this.unexpected() : null;}, pp$1.parseClassSuper = function (t) {t.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;}, pp$1.parseExport = function (t, e) {if (this.next(), this.eat(types.star)) return this.expectContextual("from"), this.type !== types.string && this.unexpected(), t.source = this.parseExprAtom(), this.semicolon(), this.finishNode(t, "ExportAllDeclaration");if (this.eat(types._default)) {var i;if (this.checkExport(e, "default", this.lastTokStart), this.type === types._function || (i = this.isAsyncFunction())) {var s = this.startNode();this.next(), i && this.next(), t.declaration = this.parseFunction(s, "nullableID", !1, i);} else if (this.type === types._class) {var r = this.startNode();t.declaration = this.parseClass(r, "nullableID");} else t.declaration = this.parseMaybeAssign(), this.semicolon();return this.finishNode(t, "ExportDefaultDeclaration");}if (this.shouldParseExportStatement()) t.declaration = this.parseStatement(!0), "VariableDeclaration" === t.declaration.type ? this.checkVariableExport(e, t.declaration.declarations) : this.checkExport(e, t.declaration.id.name, t.declaration.id.start), t.specifiers = [], t.source = null;else {if (t.declaration = null, t.specifiers = this.parseExportSpecifiers(e), this.eatContextual("from")) this.type !== types.string && this.unexpected(), t.source = this.parseExprAtom();else {for (var a = 0, n = t.specifiers; a < n.length; a += 1) {var o = n[a];this.checkUnreserved(o.local);}t.source = null;}this.semicolon();}return this.finishNode(t, "ExportNamedDeclaration");}, pp$1.checkExport = function (t, e, i) {t && (has(t, e) && this.raiseRecoverable(i, "Duplicate export '" + e + "'"), t[e] = !0);}, pp$1.checkPatternExport = function (t, e) {var i = e.type;if ("Identifier" == i) this.checkExport(t, e.name, e.start);else if ("ObjectPattern" == i) for (var s = 0, r = e.properties; s < r.length; s += 1) {var a = r[s];this.checkPatternExport(t, a);} else if ("ArrayPattern" == i) for (var n = 0, o = e.elements; n < o.length; n += 1) {var h = o[n];h && this.checkPatternExport(t, h);} else "Property" == i ? this.checkPatternExport(t, e.value) : "AssignmentPattern" == i ? this.checkPatternExport(t, e.left) : "RestElement" == i ? this.checkPatternExport(t, e.argument) : "ParenthesizedExpression" == i && this.checkPatternExport(t, e.expression);}, pp$1.checkVariableExport = function (t, e) {if (t) for (var i = 0, s = e; i < s.length; i += 1) {var r = s[i];this.checkPatternExport(t, r.id);}}, pp$1.shouldParseExportStatement = function () {return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();}, pp$1.parseExportSpecifiers = function (t) {var e = this,i = [],s = !0;for (this.expect(types.braceL); !this.eat(types.braceR);) {if (s) s = !1;else if (e.expect(types.comma), e.afterTrailingComma(types.braceR)) break;var r = e.startNode();r.local = e.parseIdent(!0), r.exported = e.eatContextual("as") ? e.parseIdent(!0) : r.local, e.checkExport(t, r.exported.name, r.exported.start), i.push(e.finishNode(r, "ExportSpecifier"));}return i;}, pp$1.parseImport = function (t) {return this.next(), this.type === types.string ? (t.specifiers = empty, t.source = this.parseExprAtom()) : (t.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), t.source = this.type === types.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(t, "ImportDeclaration");}, pp$1.parseImportSpecifiers = function () {var t = this,e = [],i = !0;if (this.type === types.name) {var s = this.startNode();if (s.local = this.parseIdent(), this.checkLVal(s.local, "let"), e.push(this.finishNode(s, "ImportDefaultSpecifier")), !this.eat(types.comma)) return e;}if (this.type === types.star) {var r = this.startNode();return this.next(), this.expectContextual("as"), r.local = this.parseIdent(), this.checkLVal(r.local, "let"), e.push(this.finishNode(r, "ImportNamespaceSpecifier")), e;}for (this.expect(types.braceL); !this.eat(types.braceR);) {if (i) i = !1;else if (t.expect(types.comma), t.afterTrailingComma(types.braceR)) break;var a = t.startNode();a.imported = t.parseIdent(!0), t.eatContextual("as") ? a.local = t.parseIdent() : (t.checkUnreserved(a.imported), a.local = a.imported), t.checkLVal(a.local, "let"), e.push(t.finishNode(a, "ImportSpecifier"));}return e;}, pp$1.adaptDirectivePrologue = function (t) {for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e) {t[e].directive = t[e].expression.raw.slice(1, -1);}}, pp$1.isDirectiveCandidate = function (t) {return "ExpressionStatement" === t.type && "Literal" === t.expression.type && "string" == typeof t.expression.value && ('"' === this.input[t.start] || "'" === this.input[t.start]);};var pp$2 = Parser.prototype;pp$2.toAssignable = function (t, e, i) {if (6 <= this.options.ecmaVersion && t) switch (t.type) {case "Identifier":this.inAsync && "await" === t.name && this.raise(t.start, "Can not use 'await' as identifier inside an async function");break;case "ObjectPattern":case "ArrayPattern":case "RestElement":break;case "ObjectExpression":t.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);for (var s = 0, r = t.properties; s < r.length; s += 1) {var a = r[s];this.toAssignable(a, e), "RestElement" !== a.type || "ArrayPattern" !== a.argument.type && "ObjectPattern" !== a.argument.type || this.raise(a.argument.start, "Unexpected token");}break;case "Property":"init" !== t.kind && this.raise(t.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(t.value, e);break;case "ArrayExpression":t.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(t.elements, e);break;case "SpreadElement":t.type = "RestElement", this.toAssignable(t.argument, e), "AssignmentPattern" === t.argument.type && this.raise(t.argument.start, "Rest elements cannot have a default value");break;case "AssignmentExpression":"=" !== t.operator && this.raise(t.left.end, "Only '=' operator can be used for specifying default value."), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);case "AssignmentPattern":break;case "ParenthesizedExpression":this.toAssignable(t.expression, e);break;case "MemberExpression":if (!e) break;default:this.raise(t.start, "Assigning to rvalue");} else i && this.checkPatternErrors(i, !0);return t;}, pp$2.toAssignableList = function (t, e) {for (var i = t.length, s = 0; s < i; s++) {var r = t[s];r && this.toAssignable(r, e);}if (i) {var a = t[i - 1];6 === this.options.ecmaVersion && e && a && "RestElement" === a.type && "Identifier" !== a.argument.type && this.unexpected(a.argument.start);}return t;}, pp$2.parseSpread = function (t) {var e = this.startNode();return this.next(), e.argument = this.parseMaybeAssign(!1, t), this.finishNode(e, "SpreadElement");}, pp$2.parseRestBinding = function () {var t = this.startNode();return this.next(), 6 === this.options.ecmaVersion && this.type !== types.name && this.unexpected(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");}, pp$2.parseBindingAtom = function () {if (6 <= this.options.ecmaVersion) switch (this.type) {case types.bracketL:var t = this.startNode();return this.next(), t.elements = this.parseBindingList(types.bracketR, !0, !0), this.finishNode(t, "ArrayPattern");case types.braceL:return this.parseObj(!0);}return this.parseIdent();}, pp$2.parseBindingList = function (t, e, i) {for (var s = this, r = [], a = !0; !this.eat(t);) {if (a ? a = !1 : s.expect(types.comma), e && s.type === types.comma) r.push(null);else {if (i && s.afterTrailingComma(t)) break;if (s.type === types.ellipsis) {var n = s.parseRestBinding();s.parseBindingListItem(n), r.push(n), s.type === types.comma && s.raise(s.start, "Comma is not permitted after the rest element"), s.expect(t);break;}var o = s.parseMaybeDefault(s.start, s.startLoc);s.parseBindingListItem(o), r.push(o);}}return r;}, pp$2.parseBindingListItem = function (t) {return t;}, pp$2.parseMaybeDefault = function (t, e, i) {if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(types.eq)) return i;var s = this.startNodeAt(t, e);return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");}, pp$2.checkLVal = function (t, e, i) {switch (t.type) {case "Identifier":this.strict && this.reservedWordsStrictBind.test(t.name) && this.raiseRecoverable(t.start, (e ? "Binding " : "Assigning to ") + t.name + " in strict mode"), i && (has(i, t.name) && this.raiseRecoverable(t.start, "Argument name clash"), i[t.name] = !0), e && "none" !== e && (("var" === e && !this.canDeclareVarName(t.name) || "var" !== e && !this.canDeclareLexicalName(t.name)) && this.raiseRecoverable(t.start, "Identifier '" + t.name + "' has already been declared"), "var" === e ? this.declareVarName(t.name) : this.declareLexicalName(t.name));break;case "MemberExpression":e && this.raiseRecoverable(t.start, "Binding member expression");break;case "ObjectPattern":for (var s = 0, r = t.properties; s < r.length; s += 1) {var a = r[s];this.checkLVal(a, e, i);}break;case "Property":this.checkLVal(t.value, e, i);break;case "ArrayPattern":for (var n = 0, o = t.elements; n < o.length; n += 1) {var h = o[n];h && this.checkLVal(h, e, i);}break;case "AssignmentPattern":this.checkLVal(t.left, e, i);break;case "RestElement":this.checkLVal(t.argument, e, i);break;case "ParenthesizedExpression":this.checkLVal(t.expression, e, i);break;default:this.raise(t.start, (e ? "Binding" : "Assigning to") + " rvalue");}};var pp$3 = Parser.prototype;pp$3.checkPropClash = function (t, e, i) {if (!(9 <= this.options.ecmaVersion && "SpreadElement" === t.type || 6 <= this.options.ecmaVersion && (t.computed || t.method || t.shorthand))) {var s,r = t.key;switch (r.type) {case "Identifier":s = r.name;break;case "Literal":s = String(r.value);break;default:return;}var a = t.kind;if (6 <= this.options.ecmaVersion) "__proto__" === s && "init" === a && (e.proto && (i && i.doubleProto < 0 ? i.doubleProto = r.start : this.raiseRecoverable(r.start, "Redefinition of __proto__ property")), e.proto = !0);else {var n = e[s = "$" + s];if (n) ("init" === a ? this.strict && n.init || n.get || n.set : n.init || n[a]) && this.raiseRecoverable(r.start, "Redefinition of property");else n = e[s] = { init: !1, get: !1, set: !1 };n[a] = !0;}}}, pp$3.parseExpression = function (t, e) {var i = this.start,s = this.startLoc,r = this.parseMaybeAssign(t, e);if (this.type !== types.comma) return r;var a = this.startNodeAt(i, s);for (a.expressions = [r]; this.eat(types.comma);) {a.expressions.push(this.parseMaybeAssign(t, e));}return this.finishNode(a, "SequenceExpression");}, pp$3.parseMaybeAssign = function (t, e, i) {if (this.inGenerator && this.isContextual("yield")) return this.parseYield();var s = !1,r = -1,a = -1;e ? (r = e.parenthesizedAssign, a = e.trailingComma, e.parenthesizedAssign = e.trailingComma = -1) : (e = new DestructuringErrors(), s = !0);var n = this.start,o = this.startLoc;this.type != types.parenL && this.type != types.name || (this.potentialArrowAt = this.start);var h = this.parseMaybeConditional(t, e);if (i && (h = i.call(this, h, n, o)), this.type.isAssign) {var p = this.startNodeAt(n, o);return p.operator = this.value, p.left = this.type === types.eq ? this.toAssignable(h, !1, e) : h, s || DestructuringErrors.call(e), e.shorthandAssign = -1, this.checkLVal(h), this.next(), p.right = this.parseMaybeAssign(t), this.finishNode(p, "AssignmentExpression");}return s && this.checkExpressionErrors(e, !0), -1 < r && (e.parenthesizedAssign = r), -1 < a && (e.trailingComma = a), h;}, pp$3.parseMaybeConditional = function (t, e) {var i = this.start,s = this.startLoc,r = this.parseExprOps(t, e);if (this.checkExpressionErrors(e)) return r;if (this.eat(types.question)) {var a = this.startNodeAt(i, s);return a.test = r, a.consequent = this.parseMaybeAssign(), this.expect(types.colon), a.alternate = this.parseMaybeAssign(t), this.finishNode(a, "ConditionalExpression");}return r;}, pp$3.parseExprOps = function (t, e) {var i = this.start,s = this.startLoc,r = this.parseMaybeUnary(e, !1);return this.checkExpressionErrors(e) ? r : r.start == i && "ArrowFunctionExpression" === r.type ? r : this.parseExprOp(r, i, s, -1, t);}, pp$3.parseExprOp = function (t, e, i, s, r) {var a = this.type.binop;if (null == a || r && this.type === types._in || !(s < a)) return t;var n = this.type === types.logicalOR || this.type === types.logicalAND,o = this.value;this.next();var h = this.start,p = this.startLoc,l = this.parseExprOp(this.parseMaybeUnary(null, !1), h, p, a, r),c = this.buildBinary(e, i, t, l, o, n);return this.parseExprOp(c, e, i, s, r);}, pp$3.buildBinary = function (t, e, i, s, r, a) {var n = this.startNodeAt(t, e);return n.left = i, n.operator = r, n.right = s, this.finishNode(n, a ? "LogicalExpression" : "BinaryExpression");}, pp$3.parseMaybeUnary = function (t, e) {var i,s = this,r = this.start,a = this.startLoc;if (this.inAsync && this.isContextual("await")) i = this.parseAwait(), e = !0;else if (this.type.prefix) {var n = this.startNode(),o = this.type === types.incDec;n.operator = this.value, n.prefix = !0, this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), o ? this.checkLVal(n.argument) : this.strict && "delete" === n.operator && "Identifier" === n.argument.type ? this.raiseRecoverable(n.start, "Deleting local variable in strict mode") : e = !0, i = this.finishNode(n, o ? "UpdateExpression" : "UnaryExpression");} else {if (i = this.parseExprSubscripts(t), this.checkExpressionErrors(t)) return i;for (; this.type.postfix && !this.canInsertSemicolon();) {var h = s.startNodeAt(r, a);h.operator = s.value, h.prefix = !1, h.argument = i, s.checkLVal(i), s.next(), i = s.finishNode(h, "UpdateExpression");}}return !e && this.eat(types.starstar) ? this.buildBinary(r, a, i, this.parseMaybeUnary(null, !1), "**", !1) : i;}, pp$3.parseExprSubscripts = function (t) {var e = this.start,i = this.startLoc,s = this.parseExprAtom(t),r = "ArrowFunctionExpression" === s.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd);if (this.checkExpressionErrors(t) || r) return s;var a = this.parseSubscripts(s, e, i);return t && "MemberExpression" === a.type && (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1), t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1)), a;}, pp$3.parseSubscripts = function (t, e, i, s) {for (var r = this, a = 8 <= this.options.ecmaVersion && "Identifier" === t.type && "async" === t.name && this.lastTokEnd == t.end && !this.canInsertSemicolon() && "async" === this.input.slice(t.start, t.end), n = void 0;;) {if ((n = r.eat(types.bracketL)) || r.eat(types.dot)) {var o = r.startNodeAt(e, i);o.object = t, o.property = n ? r.parseExpression() : r.parseIdent(!0), o.computed = !!n, n && r.expect(types.bracketR), t = r.finishNode(o, "MemberExpression");} else if (!s && r.eat(types.parenL)) {var h = new DestructuringErrors(),p = r.yieldPos,l = r.awaitPos;r.yieldPos = 0, r.awaitPos = 0;var c = r.parseExprList(types.parenR, 8 <= r.options.ecmaVersion, !1, h);if (a && !r.canInsertSemicolon() && r.eat(types.arrow)) return r.checkPatternErrors(h, !1), r.checkYieldAwaitInDefaultParams(), r.yieldPos = p, r.awaitPos = l, r.parseArrowExpression(r.startNodeAt(e, i), c, !0);r.checkExpressionErrors(h, !0), r.yieldPos = p || r.yieldPos, r.awaitPos = l || r.awaitPos;var u = r.startNodeAt(e, i);u.callee = t, u.arguments = c, t = r.finishNode(u, "CallExpression");} else {if (r.type !== types.backQuote) return t;var f = r.startNodeAt(e, i);f.tag = t, f.quasi = r.parseTemplate({ isTagged: !0 }), t = r.finishNode(f, "TaggedTemplateExpression");}}}, pp$3.parseExprAtom = function (t) {var e,i = this.potentialArrowAt == this.start;switch (this.type) {case types._super:return this.inFunction || this.raise(this.start, "'super' outside of function or class"), e = this.startNode(), this.next(), this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL && this.unexpected(), this.finishNode(e, "Super");case types._this:return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");case types.name:var s = this.start,r = this.startLoc,a = this.containsEsc,n = this.parseIdent(this.type !== types.name);if (8 <= this.options.ecmaVersion && !a && "async" === n.name && !this.canInsertSemicolon() && this.eat(types._function)) return this.parseFunction(this.startNodeAt(s, r), !1, !1, !0);if (i && !this.canInsertSemicolon()) {if (this.eat(types.arrow)) return this.parseArrowExpression(this.startNodeAt(s, r), [n], !1);if (8 <= this.options.ecmaVersion && "async" === n.name && this.type === types.name && !a) return n = this.parseIdent(), !this.canInsertSemicolon() && this.eat(types.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(s, r), [n], !0);}return n;case types.regexp:var o = this.value;return (e = this.parseLiteral(o.value)).regex = { pattern: o.pattern, flags: o.flags }, e;case types.num:case types.string:return this.parseLiteral(this.value);case types._null:case types._true:case types._false:return (e = this.startNode()).value = this.type === types._null ? null : this.type === types._true, e.raw = this.type.keyword, this.next(), this.finishNode(e, "Literal");case types.parenL:var h = this.start,p = this.parseParenAndDistinguishExpression(i);return t && (t.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(p) && (t.parenthesizedAssign = h), t.parenthesizedBind < 0 && (t.parenthesizedBind = h)), p;case types.bracketL:return e = this.startNode(), this.next(), e.elements = this.parseExprList(types.bracketR, !0, !0, t), this.finishNode(e, "ArrayExpression");case types.braceL:return this.parseObj(!1, t);case types._function:return e = this.startNode(), this.next(), this.parseFunction(e, !1);case types._class:return this.parseClass(this.startNode(), !1);case types._new:return this.parseNew();case types.backQuote:return this.parseTemplate();default:this.unexpected();}}, pp$3.parseLiteral = function (t) {var e = this.startNode();return e.value = t, e.raw = this.input.slice(this.start, this.end), this.next(), this.finishNode(e, "Literal");}, pp$3.parseParenExpression = function () {this.expect(types.parenL);var t = this.parseExpression();return this.expect(types.parenR), t;}, pp$3.parseParenAndDistinguishExpression = function (t) {var e,i = this,s = this.start,r = this.startLoc,a = 8 <= this.options.ecmaVersion;if (6 <= this.options.ecmaVersion) {this.next();var n,o = this.start,h = this.startLoc,p = [],l = !0,c = !1,u = new DestructuringErrors(),f = this.yieldPos,d = this.awaitPos;for (this.yieldPos = 0, this.awaitPos = 0; this.type !== types.parenR;) {if (l ? l = !1 : i.expect(types.comma), a && i.afterTrailingComma(types.parenR, !0)) {c = !0;break;}if (i.type === types.ellipsis) {n = i.start, p.push(i.parseParenItem(i.parseRestBinding())), i.type === types.comma && i.raise(i.start, "Comma is not permitted after the rest element");break;}p.push(i.parseMaybeAssign(!1, u, i.parseParenItem));}var m = this.start,y = this.startLoc;if (this.expect(types.parenR), t && !this.canInsertSemicolon() && this.eat(types.arrow)) return this.checkPatternErrors(u, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = f, this.awaitPos = d, this.parseParenArrowList(s, r, p);p.length && !c || this.unexpected(this.lastTokStart), n && this.unexpected(n), this.checkExpressionErrors(u, !0), this.yieldPos = f || this.yieldPos, this.awaitPos = d || this.awaitPos, 1 < p.length ? ((e = this.startNodeAt(o, h)).expressions = p, this.finishNodeAt(e, "SequenceExpression", m, y)) : e = p[0];} else e = this.parseParenExpression();if (this.options.preserveParens) {var v = this.startNodeAt(s, r);return v.expression = e, this.finishNode(v, "ParenthesizedExpression");}return e;}, pp$3.parseParenItem = function (t) {return t;}, pp$3.parseParenArrowList = function (t, e, i) {return this.parseArrowExpression(this.startNodeAt(t, e), i);};var empty$1 = [];pp$3.parseNew = function () {var t = this.startNode(),e = this.parseIdent(!0);if (6 <= this.options.ecmaVersion && this.eat(types.dot)) {t.meta = e;var i = this.containsEsc;return t.property = this.parseIdent(!0), "target" === t.property.name && !i || this.raiseRecoverable(t.property.start, "The only valid meta property for new is new.target"), this.inFunction || this.raiseRecoverable(t.start, "new.target can only be used in functions"), this.finishNode(t, "MetaProperty");}var s = this.start,r = this.startLoc;return t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0), this.eat(types.parenL) ? t.arguments = this.parseExprList(types.parenR, 8 <= this.options.ecmaVersion, !1) : t.arguments = empty$1, this.finishNode(t, "NewExpression");}, pp$3.parseTemplateElement = function (t) {var e = t.isTagged,i = this.startNode();return this.type === types.invalidTemplate ? (e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = { raw: this.value, cooked: null }) : i.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"), cooked: this.value }, this.next(), i.tail = this.type === types.backQuote, this.finishNode(i, "TemplateElement");}, pp$3.parseTemplate = function (t) {void 0 === t && (t = {});var e = t.isTagged;void 0 === e && (e = !1);var i = this.startNode();this.next(), i.expressions = [];var s = this.parseTemplateElement({ isTagged: e });for (i.quasis = [s]; !s.tail;) {this.expect(types.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(types.braceR), i.quasis.push(s = this.parseTemplateElement({ isTagged: e }));}return this.next(), this.finishNode(i, "TemplateLiteral");}, pp$3.isAsyncProp = function (t) {return !t.computed && "Identifier" === t.key.type && "async" === t.key.name && (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || 9 <= this.options.ecmaVersion && this.type === types.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));}, pp$3.parseObj = function (t, e) {var i = this.startNode(),s = !0,r = {};for (i.properties = [], this.next(); !this.eat(types.braceR);) {if (s) s = !1;else if (this.expect(types.comma), this.afterTrailingComma(types.braceR)) break;var a = this.parseProperty(t, e);t || this.checkPropClash(a, r, e), i.properties.push(a);}return this.finishNode(i, t ? "ObjectPattern" : "ObjectExpression");}, pp$3.parseProperty = function (t, e) {var i,s,r,a,n = this.startNode();if (9 <= this.options.ecmaVersion && this.eat(types.ellipsis)) return t ? (n.argument = this.parseIdent(!1), this.type === types.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(n, "RestElement")) : (this.type === types.parenL && e && (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start), e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)), n.argument = this.parseMaybeAssign(!1, e), this.type === types.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start), this.finishNode(n, "SpreadElement"));6 <= this.options.ecmaVersion && (n.method = !1, n.shorthand = !1, (t || e) && (r = this.start, a = this.startLoc), t || (i = this.eat(types.star)));var o = this.containsEsc;return this.parsePropertyName(n), !t && !o && 8 <= this.options.ecmaVersion && !i && this.isAsyncProp(n) ? (s = !0, i = 9 <= this.options.ecmaVersion && this.eat(types.star), this.parsePropertyName(n, e)) : s = !1, this.parsePropertyValue(n, t, i, s, r, a, e, o), this.finishNode(n, "Property");}, pp$3.parsePropertyValue = function (t, e, i, s, r, a, n, o) {if ((i || s) && this.type === types.colon && this.unexpected(), this.eat(types.colon)) t.value = e ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, n), t.kind = "init";else if (6 <= this.options.ecmaVersion && this.type === types.parenL) e && this.unexpected(), t.kind = "init", t.method = !0, t.value = this.parseMethod(i, s);else if (e || o || !(5 <= this.options.ecmaVersion) || t.computed || "Identifier" !== t.key.type || "get" !== t.key.name && "set" !== t.key.name || this.type == types.comma || this.type == types.braceR) 6 <= this.options.ecmaVersion && !t.computed && "Identifier" === t.key.type ? (this.checkUnreserved(t.key), t.kind = "init", e ? t.value = this.parseMaybeDefault(r, a, t.key) : this.type === types.eq && n ? (n.shorthandAssign < 0 && (n.shorthandAssign = this.start), t.value = this.parseMaybeDefault(r, a, t.key)) : t.value = t.key, t.shorthand = !0) : this.unexpected();else {(i || s) && this.unexpected(), t.kind = t.key.name, this.parsePropertyName(t), t.value = this.parseMethod(!1);var h = "get" === t.kind ? 0 : 1;if (t.value.params.length !== h) {var p = t.value.start;"get" === t.kind ? this.raiseRecoverable(p, "getter should have no params") : this.raiseRecoverable(p, "setter should have exactly one param");} else "set" === t.kind && "RestElement" === t.value.params[0].type && this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");}}, pp$3.parsePropertyName = function (t) {if (6 <= this.options.ecmaVersion) {if (this.eat(types.bracketL)) return t.computed = !0, t.key = this.parseMaybeAssign(), this.expect(types.bracketR), t.key;t.computed = !1;}return t.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(!0);}, pp$3.initFunction = function (t) {t.id = null, 6 <= this.options.ecmaVersion && (t.generator = !1, t.expression = !1), 8 <= this.options.ecmaVersion && (t.async = !1);}, pp$3.parseMethod = function (t, e) {var i = this.startNode(),s = this.inGenerator,r = this.inAsync,a = this.yieldPos,n = this.awaitPos,o = this.inFunction;return this.initFunction(i), 6 <= this.options.ecmaVersion && (i.generator = t), 8 <= this.options.ecmaVersion && (i.async = !!e), this.inGenerator = i.generator, this.inAsync = i.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, this.enterFunctionScope(), this.expect(types.parenL), i.params = this.parseBindingList(types.parenR, !1, 8 <= this.options.ecmaVersion), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1), this.inGenerator = s, this.inAsync = r, this.yieldPos = a, this.awaitPos = n, this.inFunction = o, this.finishNode(i, "FunctionExpression");}, pp$3.parseArrowExpression = function (t, e, i) {var s = this.inGenerator,r = this.inAsync,a = this.yieldPos,n = this.awaitPos,o = this.inFunction;return this.enterFunctionScope(), this.initFunction(t), 8 <= this.options.ecmaVersion && (t.async = !!i), this.inGenerator = !1, this.inAsync = t.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, t.params = this.toAssignableList(e, !0), this.parseFunctionBody(t, !0), this.inGenerator = s, this.inAsync = r, this.yieldPos = a, this.awaitPos = n, this.inFunction = o, this.finishNode(t, "ArrowFunctionExpression");}, pp$3.parseFunctionBody = function (t, e) {var i = e && this.type !== types.braceL,s = this.strict,r = !1;if (i) t.body = this.parseMaybeAssign(), t.expression = !0, this.checkParams(t, !1);else {var a = 7 <= this.options.ecmaVersion && !this.isSimpleParamList(t.params);s && !a || (r = this.strictDirective(this.end)) && a && this.raiseRecoverable(t.start, "Illegal 'use strict' directive in function with non-simple parameter list");var n = this.labels;this.labels = [], r && (this.strict = !0), this.checkParams(t, !s && !r && !e && this.isSimpleParamList(t.params)), t.body = this.parseBlock(!1), t.expression = !1, this.adaptDirectivePrologue(t.body.body), this.labels = n;}this.exitFunctionScope(), this.strict && t.id && this.checkLVal(t.id, "none"), this.strict = s;}, pp$3.isSimpleParamList = function (t) {for (var e = 0, i = t; e < i.length; e += 1) {if ("Identifier" !== i[e].type) return !1;}return !0;}, pp$3.checkParams = function (t, e) {for (var i = {}, s = 0, r = t.params; s < r.length; s += 1) {var a = r[s];this.checkLVal(a, "var", e ? null : i);}}, pp$3.parseExprList = function (t, e, i, s) {for (var r = this, a = [], n = !0; !this.eat(t);) {if (n) n = !1;else if (r.expect(types.comma), e && r.afterTrailingComma(t)) break;var o = void 0;i && r.type === types.comma ? o = null : r.type === types.ellipsis ? (o = r.parseSpread(s), s && r.type === types.comma && s.trailingComma < 0 && (s.trailingComma = r.start)) : o = r.parseMaybeAssign(!1, s), a.push(o);}return a;}, pp$3.checkUnreserved = function (t) {var e = t.start,i = t.end,s = t.name;this.inGenerator && "yield" === s && this.raiseRecoverable(e, "Can not use 'yield' as identifier inside a generator"), this.inAsync && "await" === s && this.raiseRecoverable(e, "Can not use 'await' as identifier inside an async function"), this.isKeyword(s) && this.raise(e, "Unexpected keyword '" + s + "'"), this.options.ecmaVersion < 6 && -1 != this.input.slice(e, i).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s) && (this.inAsync || "await" !== s || this.raiseRecoverable(e, "Can not use keyword 'await' outside an async function"), this.raiseRecoverable(e, "The keyword '" + s + "' is reserved"));}, pp$3.parseIdent = function (t, e) {var i = this.startNode();return t && "never" == this.options.allowReserved && (t = !1), this.type === types.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(), this.finishNode(i, "Identifier"), t || this.checkUnreserved(i), i;}, pp$3.parseYield = function () {this.yieldPos || (this.yieldPos = this.start);var t = this.startNode();return this.next(), this.type == types.semi || this.canInsertSemicolon() || this.type != types.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(types.star), t.argument = this.parseMaybeAssign()), this.finishNode(t, "YieldExpression");}, pp$3.parseAwait = function () {this.awaitPos || (this.awaitPos = this.start);var t = this.startNode();return this.next(), t.argument = this.parseMaybeUnary(null, !0), this.finishNode(t, "AwaitExpression");};var pp$4 = Parser.prototype;pp$4.raise = function (t, e) {var i = getLineInfo(this.input, t);e += " (" + i.line + ":" + i.column + ")";var s = new SyntaxError(e);throw s.pos = t, s.loc = i, s.raisedAt = this.pos, s;}, pp$4.raiseRecoverable = pp$4.raise, pp$4.curPosition = function () {if (this.options.locations) return new Position(this.curLine, this.pos - this.lineStart);};var pp$5 = Parser.prototype,assign = Object.assign || function (t) {for (var e = [], i = arguments.length - 1; 0 < i--;) {e[i] = arguments[i + 1];}for (var s = 0, r = e; s < r.length; s += 1) {var a = r[s];for (var n in a) {has(a, n) && (t[n] = a[n]);}}return t;};pp$5.enterFunctionScope = function () {this.scopeStack.push({ var: {}, lexical: {}, childVar: {}, parentLexical: {} });}, pp$5.exitFunctionScope = function () {this.scopeStack.pop();}, pp$5.enterLexicalScope = function () {var t = this.scopeStack[this.scopeStack.length - 1],e = { var: {}, lexical: {}, childVar: {}, parentLexical: {} };this.scopeStack.push(e), assign(e.parentLexical, t.lexical, t.parentLexical);}, pp$5.exitLexicalScope = function () {var t = this.scopeStack.pop(),e = this.scopeStack[this.scopeStack.length - 1];assign(e.childVar, t.var, t.childVar);}, pp$5.canDeclareVarName = function (t) {var e = this.scopeStack[this.scopeStack.length - 1];return !has(e.lexical, t) && !has(e.parentLexical, t);}, pp$5.canDeclareLexicalName = function (t) {var e = this.scopeStack[this.scopeStack.length - 1];return !has(e.lexical, t) && !has(e.var, t) && !has(e.childVar, t);}, pp$5.declareVarName = function (t) {this.scopeStack[this.scopeStack.length - 1].var[t] = !0;}, pp$5.declareLexicalName = function (t) {this.scopeStack[this.scopeStack.length - 1].lexical[t] = !0;};var Node = function Node(t, e, i) {this.type = "", this.start = e, this.end = 0, t.options.locations && (this.loc = new SourceLocation(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [e, 0]);},pp$6 = Parser.prototype;function finishNodeAt(t, e, i, s) {return t.type = e, t.end = i, this.options.locations && (t.loc.end = s), this.options.ranges && (t.range[1] = i), t;}pp$6.startNode = function () {return new Node(this, this.start, this.startLoc);}, pp$6.startNodeAt = function (t, e) {return new Node(this, t, e);}, pp$6.finishNode = function (t, e) {return finishNodeAt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);};var TokContext = function TokContext(t, e, i, s, r) {this.token = t, this.isExpr = !!e, this.preserveSpace = !!i, this.override = s, this.generator = !!r;},types$1 = { b_stat: new TokContext("{", !(pp$6.finishNodeAt = function (t, e, i, s) {return finishNodeAt.call(this, t, e, i, s);})), b_expr: new TokContext("{", !0), b_tmpl: new TokContext("${", !1), p_stat: new TokContext("(", !1), p_expr: new TokContext("(", !0), q_tmpl: new TokContext("`", !0, !0, function (t) {return t.tryReadTemplateToken();}), f_stat: new TokContext("function", !1), f_expr: new TokContext("function", !0), f_expr_gen: new TokContext("function", !0, !1, null, !0), f_gen: new TokContext("function", !1, !1, null, !0) },pp$7 = Parser.prototype;pp$7.initialContext = function () {return [types$1.b_stat];}, pp$7.braceIsBlock = function (t) {var e = this.curContext();return e === types$1.f_expr || e === types$1.f_stat || (t !== types.colon || e !== types$1.b_stat && e !== types$1.b_expr ? t === types._return || t == types.name && this.exprAllowed ? lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) : t === types._else || t === types.semi || t === types.eof || t === types.parenR || t == types.arrow || (t == types.braceL ? e === types$1.b_stat : t != types._var && t != types.name && !this.exprAllowed) : !e.isExpr);}, pp$7.inGeneratorContext = function () {for (var t = this.context.length - 1; 1 <= t; t--) {var e = this.context[t];if ("function" === e.token) return e.generator;}return !1;}, pp$7.updateContext = function (t) {var e,i = this.type;i.keyword && t == types.dot ? this.exprAllowed = !1 : (e = i.updateContext) ? e.call(this, t) : this.exprAllowed = i.beforeExpr;}, types.parenR.updateContext = types.braceR.updateContext = function () {if (1 != this.context.length) {var t = this.context.pop();t === types$1.b_stat && "function" === this.curContext().token && (t = this.context.pop()), this.exprAllowed = !t.isExpr;} else this.exprAllowed = !0;}, types.braceL.updateContext = function (t) {this.context.push(this.braceIsBlock(t) ? types$1.b_stat : types$1.b_expr), this.exprAllowed = !0;}, types.dollarBraceL.updateContext = function () {this.context.push(types$1.b_tmpl), this.exprAllowed = !0;}, types.parenL.updateContext = function (t) {var e = t === types._if || t === types._for || t === types._with || t === types._while;this.context.push(e ? types$1.p_stat : types$1.p_expr), this.exprAllowed = !0;}, types.incDec.updateContext = function () {}, types._function.updateContext = types._class.updateContext = function (t) {t.beforeExpr && t !== types.semi && t !== types._else && (t !== types.colon && t !== types.braceL || this.curContext() !== types$1.b_stat) ? this.context.push(types$1.f_expr) : this.context.push(types$1.f_stat), this.exprAllowed = !1;}, types.backQuote.updateContext = function () {this.curContext() === types$1.q_tmpl ? this.context.pop() : this.context.push(types$1.q_tmpl), this.exprAllowed = !1;}, types.star.updateContext = function (t) {if (t == types._function) {var e = this.context.length - 1;this.context[e] === types$1.f_expr ? this.context[e] = types$1.f_expr_gen : this.context[e] = types$1.f_gen;}this.exprAllowed = !0;}, types.name.updateContext = function (t) {var e = !1;6 <= this.options.ecmaVersion && ("of" == this.value && !this.exprAllowed || "yield" == this.value && this.inGeneratorContext()) && (e = !0), this.exprAllowed = e;};var Token = function Token(t) {this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new SourceLocation(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);},pp$8 = Parser.prototype,isRhino = "object" == ("undefined" == typeof Packages ? "undefined" : _typeof2(Packages)) && "[object JavaPackage]" == Object.prototype.toString.call(Packages);function tryCreateRegexp(t, e, i, s) {try {return new RegExp(t, e);} catch (t) {if (void 0 !== i) throw t instanceof SyntaxError && s.raise(i, "Error parsing regular expression: " + t.message), t;}}pp$8.next = function () {this.options.onToken && this.options.onToken(new Token(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();}, pp$8.getToken = function () {return this.next(), new Token(this);}, "undefined" != typeof Symbol && (pp$8[Symbol.iterator] = function () {var e = this;return { next: function next() {var t = e.getToken();return { done: t.type === types.eof, value: t };} };}), pp$8.curContext = function () {return this.context[this.context.length - 1];}, pp$8.nextToken = function () {var t = this.curContext();return t && t.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(types.eof) : t.override ? t.override(this) : void this.readToken(this.fullCharCodeAtPos());}, pp$8.readToken = function (t) {return isIdentifierStart(t, 6 <= this.options.ecmaVersion) || 92 === t ? this.readWord() : this.getTokenFromCode(t);}, pp$8.fullCharCodeAtPos = function () {var t = this.input.charCodeAt(this.pos);return t <= 55295 || 57344 <= t ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;}, pp$8.skipBlockComment = function () {var t,e = this.options.onComment && this.curPosition(),i = this.pos,s = this.input.indexOf("*/", this.pos += 2);if (-1 === s && this.raise(this.pos - 2, "Unterminated comment"), this.pos = s + 2, this.options.locations) for (lineBreakG.lastIndex = i; (t = lineBreakG.exec(this.input)) && t.index < this.pos;) {++this.curLine, this.lineStart = t.index + t[0].length;}this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, s), i, this.pos, e, this.curPosition());}, pp$8.skipLineComment = function (t) {for (var e = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += t); this.pos < this.input.length && !isNewLine(s);) {s = this.input.charCodeAt(++this.pos);}this.options.onComment && this.options.onComment(!1, this.input.slice(e + t, this.pos), e, this.pos, i, this.curPosition());}, pp$8.skipSpace = function () {var t = this;t: for (; this.pos < this.input.length;) {var e = t.input.charCodeAt(t.pos);switch (e) {case 32:case 160:++t.pos;break;case 13:10 === t.input.charCodeAt(t.pos + 1) && ++t.pos;case 10:case 8232:case 8233:++t.pos, t.options.locations && (++t.curLine, t.lineStart = t.pos);break;case 47:switch (t.input.charCodeAt(t.pos + 1)) {case 42:t.skipBlockComment();break;case 47:t.skipLineComment(2);break;default:break t;}break;default:if (!(8 < e && e < 14 || 5760 <= e && nonASCIIwhitespace.test(String.fromCharCode(e)))) break t;++t.pos;}}}, pp$8.finishToken = function (t, e) {this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());var i = this.type;this.type = t, this.value = e, this.updateContext(i);}, pp$8.readToken_dot = function () {var t = this.input.charCodeAt(this.pos + 1);if (48 <= t && t <= 57) return this.readNumber(!0);var e = this.input.charCodeAt(this.pos + 2);return 6 <= this.options.ecmaVersion && 46 === t && 46 === e ? (this.pos += 3, this.finishToken(types.ellipsis)) : (++this.pos, this.finishToken(types.dot));}, pp$8.readToken_slash = function () {var t = this.input.charCodeAt(this.pos + 1);return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === t ? this.finishOp(types.assign, 2) : this.finishOp(types.slash, 1);}, pp$8.readToken_mult_modulo_exp = function (t) {var e = this.input.charCodeAt(this.pos + 1),i = 1,s = 42 === t ? types.star : types.modulo;return 7 <= this.options.ecmaVersion && 42 == t && 42 === e && (++i, s = types.starstar, e = this.input.charCodeAt(this.pos + 2)), 61 === e ? this.finishOp(types.assign, i + 1) : this.finishOp(s, i);}, pp$8.readToken_pipe_amp = function (t) {var e = this.input.charCodeAt(this.pos + 1);return e === t ? this.finishOp(124 === t ? types.logicalOR : types.logicalAND, 2) : 61 === e ? this.finishOp(types.assign, 2) : this.finishOp(124 === t ? types.bitwiseOR : types.bitwiseAND, 1);}, pp$8.readToken_caret = function () {return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(types.assign, 2) : this.finishOp(types.bitwiseXOR, 1);}, pp$8.readToken_plus_min = function (t) {var e = this.input.charCodeAt(this.pos + 1);return e === t ? 45 != e || this.inModule || 62 != this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(types.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === e ? this.finishOp(types.assign, 2) : this.finishOp(types.plusMin, 1);}, pp$8.readToken_lt_gt = function (t) {var e = this.input.charCodeAt(this.pos + 1),i = 1;return e === t ? (i = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(types.assign, i + 1) : this.finishOp(types.bitShift, i)) : 33 != e || 60 != t || this.inModule || 45 != this.input.charCodeAt(this.pos + 2) || 45 != this.input.charCodeAt(this.pos + 3) ? (61 === e && (i = 2), this.finishOp(types.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());}, pp$8.readToken_eq_excl = function (t) {var e = this.input.charCodeAt(this.pos + 1);return 61 === e ? this.finishOp(types.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === t && 62 === e && 6 <= this.options.ecmaVersion ? (this.pos += 2, this.finishToken(types.arrow)) : this.finishOp(61 === t ? types.eq : types.prefix, 1);}, pp$8.getTokenFromCode = function (t) {switch (t) {case 46:return this.readToken_dot();case 40:return ++this.pos, this.finishToken(types.parenL);case 41:return ++this.pos, this.finishToken(types.parenR);case 59:return ++this.pos, this.finishToken(types.semi);case 44:return ++this.pos, this.finishToken(types.comma);case 91:return ++this.pos, this.finishToken(types.bracketL);case 93:return ++this.pos, this.finishToken(types.bracketR);case 123:return ++this.pos, this.finishToken(types.braceL);case 125:return ++this.pos, this.finishToken(types.braceR);case 58:return ++this.pos, this.finishToken(types.colon);case 63:return ++this.pos, this.finishToken(types.question);case 96:if (this.options.ecmaVersion < 6) break;return ++this.pos, this.finishToken(types.backQuote);case 48:var e = this.input.charCodeAt(this.pos + 1);if (120 === e || 88 === e) return this.readRadixNumber(16);if (6 <= this.options.ecmaVersion) {if (111 === e || 79 === e) return this.readRadixNumber(8);if (98 === e || 66 === e) return this.readRadixNumber(2);}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(types.prefix, 1);}this.raise(this.pos, "Unexpected character '" + codePointToString(t) + "'");}, pp$8.finishOp = function (t, e) {var i = this.input.slice(this.pos, this.pos + e);return this.pos += e, this.finishToken(t, i);};var regexpUnicodeSupport = !!tryCreateRegexp("￿", "u");function codePointToString(t) {return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));}pp$8.readRegexp = function () {for (var t, e, s = this, r = this.pos;;) {s.pos >= s.input.length && s.raise(r, "Unterminated regular expression");var i = s.input.charAt(s.pos);if (lineBreak.test(i) && s.raise(r, "Unterminated regular expression"), t) t = !1;else {if ("[" === i) e = !0;else if ("]" === i && e) e = !1;else if ("/" === i && !e) break;t = "\\" === i;}++s.pos;}var a = this.input.slice(r, this.pos);++this.pos;var n = this.pos,o = this.readWord1();this.containsEsc && this.unexpected(n);var h = a,p = "";if (o) {var l = "gim";6 <= this.options.ecmaVersion && (l += "uy"), 9 <= this.options.ecmaVersion && (l += "s");for (var c = 0; c < o.length; c++) {var u = o.charAt(c);-1 == l.indexOf(u) && s.raise(r, "Invalid regular expression flag"), -1 < o.indexOf(u, c + 1) && s.raise(r, "Duplicate regular expression flag");}0 <= o.indexOf("u") && (p = regexpUnicodeSupport ? "u" : (h = (h = h.replace(/\\u\{([0-9a-fA-F]+)\}/g, function (t, e, i) {return 1114111 < (e = Number("0x" + e)) && s.raise(r + i + 3, "Code point out of bounds"), "x";})).replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"), p.replace("u", "")));}var f = null;return isRhino || (tryCreateRegexp(h, p, r, this), f = tryCreateRegexp(a, o)), this.finishToken(types.regexp, { pattern: a, flags: o, value: f });}, pp$8.readInt = function (t, e) {for (var i = this.pos, s = 0, r = 0, a = null == e ? 1 / 0 : e; r < a; ++r) {var n = this.input.charCodeAt(this.pos),o = void 0;if (t <= (o = 97 <= n ? n - 97 + 10 : 65 <= n ? n - 65 + 10 : 48 <= n && n <= 57 ? n - 48 : 1 / 0)) break;++this.pos, s = s * t + o;}return this.pos === i || null != e && this.pos - i !== e ? null : s;}, pp$8.readRadixNumber = function (t) {this.pos += 2;var e = this.readInt(t);return null == e && this.raise(this.start + 2, "Expected number in radix " + t), isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(types.num, e);}, pp$8.readNumber = function (t) {var e = this.pos;t || null !== this.readInt(10) || this.raise(e, "Invalid number");var i = 2 <= this.pos - e && 48 === this.input.charCodeAt(e);i && this.strict && this.raise(e, "Invalid number"), i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1);var s = this.input.charCodeAt(this.pos);46 !== s || i || (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), 69 !== s && 101 !== s || i || (43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s || ++this.pos, null === this.readInt(10) && this.raise(e, "Invalid number")), isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");var r = this.input.slice(e, this.pos),a = i ? parseInt(r, 8) : parseFloat(r);return this.finishToken(types.num, a);}, pp$8.readCodePoint = function () {var t;if (123 === this.input.charCodeAt(this.pos)) {this.options.ecmaVersion < 6 && this.unexpected();var e = ++this.pos;t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, 1114111 < t && this.invalidStringToken(e, "Code point out of bounds");} else t = this.readHexChar(4);return t;}, pp$8.readString = function (t) {for (var e = this, i = "", s = ++this.pos;;) {e.pos >= e.input.length && e.raise(e.start, "Unterminated string constant");var r = e.input.charCodeAt(e.pos);if (r === t) break;92 === r ? (i += e.input.slice(s, e.pos), i += e.readEscapedChar(!1), s = e.pos) : (isNewLine(r) && e.raise(e.start, "Unterminated string constant"), ++e.pos);}return i += this.input.slice(s, this.pos++), this.finishToken(types.string, i);};var INVALID_TEMPLATE_ESCAPE_ERROR = {};function parse(t, e) {return new Parser(e, t).parse();}pp$8.tryReadTemplateToken = function () {this.inTemplateElement = !0;try {this.readTmplToken();} catch (t) {if (t !== INVALID_TEMPLATE_ESCAPE_ERROR) throw t;this.readInvalidTemplateToken();}this.inTemplateElement = !1;}, pp$8.invalidStringToken = function (t, e) {if (this.inTemplateElement && 9 <= this.options.ecmaVersion) throw INVALID_TEMPLATE_ESCAPE_ERROR;this.raise(t, e);}, pp$8.readTmplToken = function () {for (var t = this, e = "", i = this.pos;;) {t.pos >= t.input.length && t.raise(t.start, "Unterminated template");var s = t.input.charCodeAt(t.pos);if (96 === s || 36 === s && 123 === t.input.charCodeAt(t.pos + 1)) return t.pos !== t.start || t.type !== types.template && t.type !== types.invalidTemplate ? (e += t.input.slice(i, t.pos), t.finishToken(types.template, e)) : 36 === s ? (t.pos += 2, t.finishToken(types.dollarBraceL)) : (++t.pos, t.finishToken(types.backQuote));if (92 === s) e += t.input.slice(i, t.pos), e += t.readEscapedChar(!0), i = t.pos;else if (isNewLine(s)) {switch (e += t.input.slice(i, t.pos), ++t.pos, s) {case 13:10 === t.input.charCodeAt(t.pos) && ++t.pos;case 10:e += "\n";break;default:e += String.fromCharCode(s);}t.options.locations && (++t.curLine, t.lineStart = t.pos), i = t.pos;} else ++t.pos;}}, pp$8.readInvalidTemplateToken = function () {for (var t = this; this.pos < this.input.length; this.pos++) {switch (t.input[t.pos]) {case "\\":++t.pos;break;case "$":if ("{" !== t.input[t.pos + 1]) break;case "`":return t.finishToken(types.invalidTemplate, t.input.slice(t.start, t.pos));}}this.raise(this.start, "Unterminated template");}, pp$8.readEscapedChar = function (t) {var e = this.input.charCodeAt(++this.pos);switch (++this.pos, e) {case 110:return "\n";case 114:return "\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return codePointToString(this.readCodePoint());case 116:return "\t";case 98:return "\b";case 118:return "\v";case 102:return "\f";case 13:10 === this.input.charCodeAt(this.pos) && ++this.pos;case 10:return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";default:if (48 <= e && e <= 55) {var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],s = parseInt(i, 8);return 255 < s && (i = i.slice(0, -1), s = parseInt(i, 8)), this.pos += i.length - 1, e = this.input.charCodeAt(this.pos), "0" === i && 56 != e && 57 != e || !this.strict && !t || this.invalidStringToken(this.pos - 1 - i.length, "Octal literal in strict mode"), String.fromCharCode(s);}return String.fromCharCode(e);}}, pp$8.readHexChar = function (t) {var e = this.pos,i = this.readInt(16, t);return null === i && this.invalidStringToken(e, "Bad character escape sequence"), i;}, pp$8.readWord1 = function () {for (var t = this, e = "", i = !(this.containsEsc = !1), s = this.pos, r = 6 <= this.options.ecmaVersion; this.pos < this.input.length;) {var a = t.fullCharCodeAtPos();if (isIdentifierChar(a, r)) t.pos += a <= 65535 ? 1 : 2;else {if (92 !== a) break;t.containsEsc = !0, e += t.input.slice(s, t.pos);var n = t.pos;117 != t.input.charCodeAt(++t.pos) && t.invalidStringToken(t.pos, "Expecting Unicode escape sequence \\uXXXX"), ++t.pos;var o = t.readCodePoint();(i ? isIdentifierStart : isIdentifierChar)(o, r) || t.invalidStringToken(n, "Invalid Unicode escape"), e += codePointToString(o), s = t.pos;}i = !1;}return e + this.input.slice(s, this.pos);}, pp$8.readWord = function () {var t = this.readWord1(),e = types.name;return this.keywords.test(t) && (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + t), e = keywords$1[t]), this.finishToken(e, t);};var ScopeVar = function () {function t(t, e) {this.value = e, this.kind = t;}return t.prototype.$set = function (t) {return "const" !== this.value && (this.value = t, !0);}, t.prototype.$get = function () {return this.value;}, t;}(),Scope = function () {function t(t, e, i) {this.prefix = "@", this.type = t, this.parent = e || null, this.content = {}, this.invasived = !1;}return t.prototype.$find = function (t) {var e = this.prefix + t;return this.content.hasOwnProperty(e) ? this.content[e] : this.parent ? this.parent.$find(t) : null;}, t.prototype.$let = function (t, e) {var i = this.prefix + t;return !this.content[i] && (this.content[i] = new ScopeVar("let", e), !0);}, t.prototype.$const = function (t, e) {var i = this.prefix + t;return !this.content[i] && (this.content[i] = new ScopeVar("const", e), !0);}, t.prototype.$var = function (t, e) {for (var i = this.prefix + t, s = this; null !== s.parent && "function" !== s.type;) {s = s.parent;}return !s.content[i] && (this.content[i] = new ScopeVar("var", e), !0);}, t.prototype.$declar = function (t, e, i) {var s = this;return { var: function _var() {return s.$var(e, i);}, let: function _let() {return s.$let(e, i);}, const: function _const() {return s.$const(e, i);} }[t]();}, t;}(),BREAK_SINGAL = {},CONTINUE_SINGAL = {},RETURN_SINGAL = { result: void 0 },evaluate_map = { Program: function Program(t, e) {for (var i = 0, s = t.body; i < s.length; i++) {var r = s[i];evaluate(r, e);}}, Identifier: function Identifier(t, e) {if ("undefined" !== t.name) {var i = e.$find(t.name);if (i) return i.$get();throw "[Error] " + t.loc + ", '" + t.name + "' 未定义";}}, Literal: function Literal(t, e) {return t.value;}, BlockStatement: function BlockStatement(t, e) {for (var i = e.invasived ? e : new Scope("block", e), s = 0, r = t.body; s < r.length; s++) {var a = r[s],n = evaluate(a, i);if (n === BREAK_SINGAL || n === CONTINUE_SINGAL || n === RETURN_SINGAL) return n;}}, EmptyStatement: function EmptyStatement(t, e) {}, DebuggerStatement: function DebuggerStatement(t, e) {}, ExpressionStatement: function ExpressionStatement(t, e) {evaluate(t.expression, e);}, ReturnStatement: function ReturnStatement(t, e) {return RETURN_SINGAL.result = t.argument ? evaluate(t.argument, e) : void 0, RETURN_SINGAL;}, LabeledStatement: function LabeledStatement(t, e) {t.type;}, BreakStatement: function BreakStatement(t, e) {return BREAK_SINGAL;}, ContinueStatement: function ContinueStatement(t, e) {return CONTINUE_SINGAL;}, IfStatement: function IfStatement(t, e) {return evaluate(t.test, e) ? evaluate(t.consequent, e) : t.alternate ? evaluate(t.alternate, e) : void 0;}, SwitchStatement: function SwitchStatement(t, e) {for (var i = evaluate(t.discriminant, e), s = new Scope("switch", e), r = !1, a = 0, n = t.cases; a < n.length; a++) {var o = n[a];if (r || o.test && i !== evaluate(o.test, s) || (r = !0), r) {var h = evaluate(o, s);if (h === BREAK_SINGAL) break;if (h === CONTINUE_SINGAL || h === RETURN_SINGAL) return h;}}}, SwitchCase: function SwitchCase(t, e) {for (var i = 0, s = t.consequent; i < s.length; i++) {var r = s[i],a = evaluate(r, e);if (a === BREAK_SINGAL || a === CONTINUE_SINGAL || a === RETURN_SINGAL) return a;}}, WithStatement: function WithStatement(t, e) {throw "因为 with 很多问题，已经被基本弃用了，不实现";}, ThrowStatement: function ThrowStatement(t, e) {throw evaluate(t.argument, e);}, TryStatement: function TryStatement(e, i) {try {return evaluate(e.block, i);} catch (t) {if (e.handler) {var s = e.handler.param,r = new Scope("block", i);return r.invasived = !0, r.$const(s.name, t), evaluate(e.handler, r);}throw t;} finally {if (e.finalizer) return evaluate(e.finalizer, i);}}, CatchClause: function CatchClause(t, e) {return evaluate(t.body, e);}, WhileStatement: function WhileStatement(t, e) {for (; evaluate(t.test, e);) {var i = new Scope("loop", e);i.invasived = !0;var s = evaluate(t.body, i);if (s === BREAK_SINGAL) break;if (s !== CONTINUE_SINGAL && s === RETURN_SINGAL) return s;}}, DoWhileStatement: function DoWhileStatement(t, e) {do {var i = new Scope("loop", e);i.invasived = !0;var s = evaluate(t.body, i);if (s === BREAK_SINGAL) break;if (s !== CONTINUE_SINGAL && s === RETURN_SINGAL) return s;} while (evaluate(t.test, e));}, ForStatement: function ForStatement(t, e) {var i = new Scope("loop", e);for (t.init && evaluate(t.init, i); !t.test || evaluate(t.test, i); t.update && evaluate(t.update, i)) {var s = evaluate(t.body, i);if (s === BREAK_SINGAL) break;if (s !== CONTINUE_SINGAL && s === RETURN_SINGAL) return s;}}, ForInStatement: function ForInStatement(t, e) {var i = t.left.kind,s = t.left.declarations[0].id.name;for (var r in evaluate(t.right, e)) {var a = new Scope("loop", e);a.invasived = !0, e.$declar(i, s, r);var n = evaluate(t.body, a);if (n === BREAK_SINGAL) break;if (n !== CONTINUE_SINGAL && n === RETURN_SINGAL) return n;}}, FunctionDeclaration: function FunctionDeclaration(t, e) {var i = evaluate_map.FunctionExpression(t, e),s = t.id.name;if (!e.$const(s, i)) throw "[Error] " + name + " 重复定义";}, VariableDeclaration: function VariableDeclaration(t, e) {for (var i = t.kind, s = 0, r = t.declarations; s < r.length; s++) {var a = r[s],n = a.id.name,o = a.init ? evaluate(a.init, e) : void 0;if (!e.$declar(i, n, o)) throw "[Error] " + n + " 重复定义";}}, VariableDeclarator: function VariableDeclarator(t, e) {throw "执行这里就错了";}, ThisExpression: function ThisExpression(t, e) {var i = e.$find("this");return i ? i.$get() : null;}, ArrayExpression: function ArrayExpression(t, e) {return t.elements.map(function (t) {return evaluate(t, e);});}, ObjectExpression: function ObjectExpression(t, e) {for (var i = {}, s = 0, r = t.properties; s < r.length; s++) {var a = r[s],n = a.kind,o = void 0;if ("Literal" === a.key.type) o = evaluate(a.key, e);else {if ("Identifier" !== a.key.type) throw "这里绝对就错了";o = a.key.name;}var h = evaluate(a.value, e);if ("init" === n) i[o] = h;else if ("set" === n) Object.defineProperty(i, o, { set: h });else {if ("get" !== n) throw "这里绝对就错了";Object.defineProperty(i, o, { get: h });}}return i;}, FunctionExpression: function FunctionExpression(n, o) {return function () {for (var t = [], e = 0; e < arguments.length; e++) {t[e] = arguments[e];}var i = new Scope("function", o);i.invasived = !0;for (var s = 0; s < n.params.length; s++) {var r = n.params[s].name;i.$const(r, t[s]);}i.$const("this", this), i.$const("arguments", arguments);var a = evaluate(n.body, i);if (a === RETURN_SINGAL) return a.result;};}, UnaryExpression: function UnaryExpression(r, a) {return { "-": function _() {return -evaluate(r.argument, a);}, "+": function _() {return +evaluate(r.argument, a);}, "!": function _() {return !evaluate(r.argument, a);}, "~": function _() {return ~evaluate(r.argument, a);}, void: function _void() {evaluate(r.argument, a);}, typeof: function _typeof() {if ("Identifier" !== r.argument.type) return _typeof2(evaluate(r.argument, a));var t = a.$find(r.argument.name);return t ? _typeof2(t.$get()) : "undefined";}, delete: function _delete() {if ("MemberExpression" === r.argument.type) {var t = r.argument,e = t.object,i = t.property;return t.computed ? delete evaluate(e, a)[evaluate(i, a)] : delete evaluate(e, a)[i.name];}if ("Identifier" === r.argument.type) {var s = a.$find("this");if (s) return s.$get()[r.argument.name];}} }[r.operator]();}, UpdateExpression: function UpdateExpression(t, e) {var i,s = t.prefix;if ("Identifier" === t.argument.type) {var r = t.argument.name;if (!(i = e.$find(r))) throw r + " 未定义";} else if ("MemberExpression" === t.argument.type) {var a = t.argument,n = evaluate(a.object, e),o = a.computed ? evaluate(a.property, e) : a.property.name;i = { $set: function $set(t) {return n[o] = t, !0;}, $get: function $get() {return n[o];} };}return { "--": function _(t) {return i.$set(t - 1), s ? --t : t--;}, "++": function _(t) {return i.$set(t + 1), s ? ++t : t++;} }[t.operator](evaluate(t.argument, e));}, BinaryExpression: function BinaryExpression(t, e) {return { "==": function _(t, e) {return t == e;}, "!=": function _(t, e) {return t != e;}, "===": function _(t, e) {return t === e;}, "!==": function _(t, e) {return t !== e;}, "<": function _(t, e) {return t < e;}, "<=": function _(t, e) {return t <= e;}, ">": function _(t, e) {return e < t;}, ">=": function _(t, e) {return e <= t;}, "<<": function _(t, e) {return t << e;}, ">>": function _(t, e) {return t >> e;}, ">>>": function _(t, e) {return t >>> e;}, "+": function _(t, e) {return t + e;}, "-": function _(t, e) {return t - e;}, "*": function _(t, e) {return t * e;}, "/": function _(t, e) {return t / e;}, "%": function _(t, e) {return t % e;}, "|": function _(t, e) {return t | e;}, "^": function _(t, e) {return t ^ e;}, "&": function _(t, e) {return t & e;}, in: function _in(t, e) {return t in e;}, instanceof: function _instanceof(t, e) {return t instanceof e;} }[t.operator](evaluate(t.left, e), evaluate(t.right, e));}, AssignmentExpression: function AssignmentExpression(t, e) {var i;if ("Identifier" === t.left.type) {var s = t.left.name,r = e.$find(s);if (!r) throw s + " 未定义";i = r;} else {if ("MemberExpression" !== t.left.type) throw "如果出现在这里，那就说明有问题了";var a = t.left,n = evaluate(a.object, e),o = a.computed ? evaluate(a.property, e) : a.property.name;i = { $set: function $set(t) {return n[o] = t, !0;}, $get: function $get() {return n[o];} };}return { "=": function _(t) {return i.$set(t), t;}, "+=": function _(t) {return i.$set(i.$get() + t), i.$get();}, "-=": function _(t) {return i.$set(i.$get() - t), i.$get();}, "*=": function _(t) {return i.$set(i.$get() * t), i.$get();}, "/=": function _(t) {return i.$set(i.$get() / t), i.$get();}, "%=": function _(t) {return i.$set(i.$get() % t), i.$get();}, "<<=": function _(t) {return i.$set(i.$get() << t), i.$get();}, ">>=": function _(t) {return i.$set(i.$get() >> t), i.$get();}, ">>>=": function _(t) {return i.$set(i.$get() >>> t), i.$get();}, "|=": function _(t) {return i.$set(i.$get() | t), i.$get();}, "^=": function _(t) {return i.$set(i.$get() ^ t), i.$get();}, "&=": function _(t) {return i.$set(i.$get() & t), i.$get();} }[t.operator](evaluate(t.right, e));}, LogicalExpression: function LogicalExpression(t, e) {return { "||": function _() {return evaluate(t.left, e) || evaluate(t.right, e);}, "&&": function _() {return evaluate(t.left, e) && evaluate(t.right, e);} }[t.operator]();}, MemberExpression: function MemberExpression(t, e) {var i = t.object,s = t.property;return t.computed ? evaluate(i, e)[evaluate(s, e)] : evaluate(i, e)[s.name];}, ConditionalExpression: function ConditionalExpression(t, e) {return evaluate(t.test, e) ? evaluate(t.consequent, e) : evaluate(t.alternate, e);}, CallExpression: function CallExpression(t, e) {var i = evaluate(t.callee, e),s = t.arguments.map(function (t) {return evaluate(t, e);});if ("MemberExpression" === t.callee.type) {var r = evaluate(t.callee.object, e);return i.apply(r, s);}var a = e.$find("this");return i.apply(a ? a.$get() : null, s);}, NewExpression: function NewExpression(t, e) {var i = evaluate(t.callee, e),s = t.arguments.map(function (t) {return evaluate(t, e);});return new (i.bind.apply(i, [null].concat(s)))();}, SequenceExpression: function SequenceExpression(t, e) {for (var i, s = 0, r = t.expressions; s < r.length; s++) {var a = r[s];i = evaluate(a, e);}return i;}, Property: function Property(t, e, i) {throw "这里如果被执行了那也是错的...";}, ClassExpression: function ClassExpression(t, e) {throw t.type + " 未实现";}, RestElement: function RestElement(t, e) {throw t.type + " 未实现";}, MetaProperty: function MetaProperty(t, e) {throw t.type + " 未实现";}, AwaitExpression: function AwaitExpression(t, e) {throw t.type + " 未实现";}, Super: function Super(t, e) {throw t.type + " 未实现";}, SpreadElement: function SpreadElement(t, e) {throw t.type + " 未实现";}, TemplateElement: function TemplateElement(t, e) {throw t.type + " 未实现";}, ClassDeclaration: function ClassDeclaration(t, e) {throw t.type + " 未实现";}, TaggedTemplateExpression: function TaggedTemplateExpression(t, e) {throw t.type + " 未实现";}, MethodDefinition: function MethodDefinition(t, e) {throw t.type + " 未实现";}, AssignmentPattern: function AssignmentPattern(t, e) {throw t.type + " 未实现";}, ObjectPattern: function ObjectPattern(t, e) {throw t.type + " 未实现";}, ArrayPattern: function ArrayPattern(t, e) {throw t.type + " 未实现";}, ForOfStatement: function ForOfStatement(t, e) {throw t.type + " 未实现";}, TemplateLiteral: function TemplateLiteral(t, e) {throw t.type + " 未实现";}, ClassBody: function ClassBody(t, e) {throw t.type + " 未实现";}, ImportDeclaration: function ImportDeclaration(t, e) {throw t.type + " 未实现";}, ExportNamedDeclaration: function ExportNamedDeclaration(t, e) {throw t.type + " 未实现";}, ExportDefaultDeclaration: function ExportDefaultDeclaration(t, e) {throw t.type + " 未实现";}, ExportAllDeclaration: function ExportAllDeclaration(t, e) {throw t.type + " 未实现";}, ImportSpecifier: function ImportSpecifier(t, e) {throw t.type + " 未实现";}, ImportDefaultSpecifier: function ImportDefaultSpecifier(t, e) {throw t.type + " 未实现";}, ImportNamespaceSpecifier: function ImportNamespaceSpecifier(t, e) {throw t.type + " 未实现";}, ExportSpecifier: function ExportSpecifier(t, e) {throw t.type + " 未实现";}, YieldExpression: function YieldExpression(t, e) {throw t.type + " 未实现";}, ArrowFunctionExpression: function ArrowFunctionExpression(t, e) {throw t.type + " 未实现";} },evaluate = function evaluate(t, e, i) {return (0, evaluate_map[t.type])(t, e, i);},options = { ecmaVersion: 5, sourceType: "script", locations: !0 },default_api = { console: console, setTimeout: setTimeout, setInterval: setInterval, clearTimeout: clearTimeout, clearInterval: clearInterval, encodeURI: encodeURI, encodeURIComponent: encodeURIComponent, decodeURI: decodeURI, decodeURIComponent: decodeURIComponent, escape: escape, unescape: unescape, Infinity: 1 / 0, NaN: NaN, isFinite: isFinite, isNaN: isNaN, parseFloat: parseFloat, parseInt: parseInt, Object: Object, Boolean: Boolean, Error: Error, EvalError: EvalError, RangeError: RangeError, ReferenceError: ReferenceError, SyntaxError: SyntaxError, TypeError: TypeError, URIError: URIError, Number: Number, Math: Math, Date: Date, String: String, RegExp: RegExp, Array: Array, JSON: JSON, Promise: Promise };function _run(t, e) {void 0 === e && (e = {});var i = new Scope("block");i.$const("this", this);for (var s = 0, r = Object.getOwnPropertyNames(default_api); s < r.length; s++) {var a = r[s];i.$const(a, default_api[a]);}for (var n = 0, o = Object.getOwnPropertyNames(e); n < o.length; n++) {var h = o[n];i.$const(h, e[h]);}var p = {},l = { exports: p };i.$const("module", l), i.$const("exports", p), evaluate(parse(t, options), i);var c = i.$find("module");return c ? c.$get().exports : null;}var _appendApis = Object.create(null),interpreter = { clearApi: function clearApi() {_appendApis = Object.create(null);}, appendApis: function appendApis(t) {var e = 0 < arguments.length && void 0 !== t ? t : {};Object.keys(e).forEach(function (t) {_appendApis[t] = e[t];});}, run: function run(t, e) {var i = 1 < arguments.length && void 0 !== e ? e : {};return _run(t, Object.assign(_appendApis, i));} },bm_pow = Math.pow,bm_sqrt = Math.sqrt,bm_floor = Math.floor,bm_min = Math.min,roundCorner = .5519;function RGBtoHSV(t, e, i) {var s = Math.max(t, e, i),r = Math.min(t, e, i),a = s - r,n = void 0,o = 0 === s ? 0 : a / s,h = s / 255;switch (s) {case r:n = 0;break;case t:n = e - i + a * (e < i ? 6 : 0), n /= 6 * a;break;case e:n = i - t + 2 * a, n /= 6 * a;break;case i:n = t - e + 4 * a, n /= 6 * a;}return [n, o, h];}function HSVtoRGB(t, e, i) {var s,r,a,n,o,h = void 0,p = void 0,l = void 0;switch (a = i * (1 - e), n = i * (1 - (r = 6 * t - (s = Math.floor(6 * t))) * e), o = i * (1 - (1 - r) * e), s % 6) {case 0:h = i, p = o, l = a;break;case 1:h = n, p = i, l = a;break;case 2:h = a, p = i, l = o;break;case 3:h = a, p = n, l = i;break;case 4:h = o, p = a, l = i;break;case 5:h = i, p = a, l = n;}return [h, p, l];}function addHueToRGB(t, e) {var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);return i[0] += e / 360, 1 < i[0] ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]);}function addSaturationToRGB(t, e) {var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);return i[1] += e, 1 < i[1] ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]);}function addBrightnessToRGB(t, e) {var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);return i[2] += e, 1 < i[2] ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]);}function BMEnterFrameEvent(t, e, i, s) {this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1;}function BMCompleteEvent(t, e) {this.type = t, this.direction = e < 0 ? -1 : 1;}function BMCompleteLoopEvent(t, e, i, s) {this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1;}function BMSegmentStartEvent(t, e, i) {this.type = t, this.firstFrame = e, this.totalFrames = i;}function BMDestroyEvent(t, e) {this.type = t, this.target = e;}function double(t) {return t.concat(createSizedArray(t.length));}var pooling = { double: double };function pool_factory(t, e, i, s) {var r = 0,a = t,n = createSizedArray(a);function o() {return r ? n[r -= 1] : e();}return { clone: function clone() {var t = o();return s(t);}, newElement: o, release: function release(t) {r === a && (n = pooling.double(n), a *= 2), i && i(t), n[r] = t, r += 1;} };}function create() {return createTypedArray("float32", 2);}var point_pool = pool_factory(8, create),ShapePath = function () {function h() {classCallCheck(this, h), this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);}return createClass(h, [{ key: "setPathData", value: function value(t, e) {this.c = t, this.setLength(e);for (var i = 0; i < e;) {this.v[i] = point_pool.newElement(), this.o[i] = point_pool.newElement(), this.i[i] = point_pool.newElement(), i += 1;}} }, { key: "setLength", value: function value(t) {for (; this._maxLength < t;) {this.doubleArrayLength();}this._length = t;} }, { key: "doubleArrayLength", value: function value() {this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;} }, { key: "setXYAt", value: function value(t, e, i, s, r) {var a = void 0;switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {case "v":a = this.v;break;case "i":a = this.i;break;case "o":a = this.o;}a[s] && (!a[s] || r) || (a[s] = point_pool.newElement()), a[s][0] = t, a[s][1] = e;} }, { key: "setTripleAt", value: function value(t, e, i, s, r, a, n, o) {this.setXYAt(t, e, "v", n, o), this.setXYAt(i, s, "o", n, o), this.setXYAt(r, a, "i", n, o);} }, { key: "reverse", value: function value() {var t = new h();t.setPathData(this.c, this._length);var e = this.v,i = this.o,s = this.i,r = 0;this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), r = 1);var a = this._length - 1,n = this._length,o = void 0;for (o = r; o < n; o += 1) {t.setTripleAt(e[a][0], e[a][1], s[a][0], s[a][1], i[a][0], i[a][1], o, !1), a -= 1;}return t;} }]), h;}();function create$1() {return new ShapePath();}function release(t) {var e = t._length,i = void 0;for (i = 0; i < e; i += 1) {point_pool.release(t.v[i]), point_pool.release(t.i[i]), point_pool.release(t.o[i]), t.v[i] = null, t.i[i] = null, t.o[i] = null;}t._length = 0, t.c = !1;}var factory = pool_factory(4, create$1, release);factory.clone = function (t) {var e = factory.newElement(),i = void 0,s = void 0 === t._length ? t.v.length : t._length;for (e.setLength(s), e.c = t.c, i = 0; i < s; i += 1) {e.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], i);}return e;};var ob$1 = {},degToRads = Math.PI / 180;function $bm_isInstanceOfArray(t) {return t.constructor === Array || t.constructor === Float32Array;}var easeInBez = ob.getBezierEasing(.333, 0, .833, .833, "easeIn").get,easeOutBez = ob.getBezierEasing(.167, .167, .667, 1, "easeOut").get,easeInOutBez = ob.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;function initiateExpression(n, o, t) {var e = o.x,i = /velocity(?![\w\d])/.test(e),s = -1 !== e.indexOf("random"),r = n.data.ty,a = void 0,h = void 0,p = void 0,l = void 0,c = t;c.valueAtTime = c.getValueAtTime, Object.defineProperty(c, "value", { get: function get() {return c.v;} }), n.comp.frameDuration = 1 / n.comp.globalData.frameRate, n.comp.displayStartTime = 0;var u = n.data.ip / n.comp.globalData.frameRate,f = n.data.op / n.comp.globalData.frameRate,d = n.data.sw ? n.data.sw : 0,m = n.data.sh ? n.data.sh : 0,y = (n.data.nm, void 0),v = void 0,g = void 0,k = void 0,x = void 0,b = void 0,P = void 0,_ = void 0,C = void 0,S = void 0,T = void 0,E = void 0,A = void 0,w = void 0,I = [];if (interpreter.appendApis({ thisProperty: c, _needsRandom: s, loopInDuration: function loopInDuration(t, e) {return y(t, e, !0);}, loopOutDuration: function loopOutDuration(t, e) {return g(t, e, !0);}, outPoint: f, inPoint: u, width: d, height: m, lookAt: function lookAt(t, e) {var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;return [-Math.atan2(i[1], i[2]) / degToRads, s, 0];}, easeOut: function easeOut(t, e, i, s, r) {return j(easeOutBez, t, e, i, s, r);}, sourceRectAtTime: function sourceRectAtTime() {return n.sourceRectAtTime();}, easeIn: function easeIn(t, e, i, s, r) {return j(easeInBez, t, e, i, s, r);}, ease: function ease(t, e, i, s, r) {return j(easeInOutBez, t, e, i, s, r);}, key: function key(t) {var e, i, s;if (!o.k.length || "number" == typeof o.k[0]) throw new Error("The property has no keyframe at index " + t);t -= 1, e = { time: o.k[t].t / n.comp.globalData.frameRate, value: [] };var r = o.k[t].hasOwnProperty("s") ? o.k[t].s : o.k[t - 1].e;for (s = r.length, i = 0; i < s; i += 1) {e[i] = r[i], e.value[i] = r[i];}return e;}, wiggle: L, substring: function substring(t, e) {return "string" != typeof V ? "" : void 0 !== e ? V.substring(t, e) : V.substring(t);}, substr: function substr(t, e) {return "string" != typeof V ? "" : void 0 !== e ? V.substr(t, e) : V.substr(t);}, framesToTime: function framesToTime(t, e) {e = e || n.comp.globalData.frameRate;return t / e;}, timeToFrames: function timeToFrames(t, e) {t || 0 === t || (t = R);e = e || n.comp.globalData.frameRate;return t * e;}, nearestKey: function nearestKey(t) {var e,i,s,r = o.k.length;if (o.k.length && "number" != typeof o.k[0]) {if (i = -1, (t *= n.comp.globalData.frameRate) < o.k[0].t) i = 1, s = o.k[0].t;else {for (e = 0; e < r - 1; e += 1) {if (t === o.k[e].t) {i = e + 1, s = o.k[e].t;break;}if (t > o.k[e].t && t < o.k[e + 1].t) {s = t - o.k[e].t > o.k[e + 1].t - t ? (i = e + 2, o.k[e + 1].t) : (i = e + 1, o.k[e].t);break;}}-1 === i && (i = e + 1, s = o.k[e].t);}} else s = i = 0;var a = {};return a.index = i, a.time = s / n.comp.globalData.frameRate, a;}, scoped_bm_rt: M }), o.xf) {var D = void 0,F = o.xf.length;for (D = 0; D < F; D += 1) {I[D] = interpreter.run("module.exports = " + o.xf[D]);}}var M = void 0,L = (t.kf && o.k.length, this.data && this.data.hd, function (t, e) {var i = void 0,s = void 0,r = this.pv.length ? this.pv.length : 1,a = createTypedArray("float32", r);var n = Math.floor(5 * R);for (s = i = 0; i < n;) {for (s = 0; s < r; s += 1) {a[s] += -e + 2 * e * Math.random();}i += 1;}var o = 5 * R,h = o - Math.floor(o),p = createTypedArray("float32", r);if (1 < r) {for (s = 0; s < r; s += 1) {p[s] = this.pv[s] + a[s] + (-e + 2 * e * Math.random()) * h;}return p;}return this.pv + a[0] + (-e + 2 * e * Math.random()) * h;}.bind(this));c.loopIn && (y = c.loopIn.bind(c), v = y), c.loopOut && (g = c.loopOut.bind(c), k = g), c.smooth && (x = c.smooth.bind(c)), this.getValueAtTime && this.getValueAtTime.bind(this), this.getVelocityAtTime && (w = this.getVelocityAtTime.bind(this));var R, $, V, O, N, z, B;n.comp.globalData.projectInterface.bind(n.comp.globalData.projectInterface);function j(t, e, i, s, r, a) {void 0 === r ? (r = i, a = s) : e = (e - i) / (s - i);var n = t(e = 1 < e ? 1 : e < 0 ? 0 : e);if ($bm_isInstanceOfArray(r)) {var o,h = r.length,p = createTypedArray("float32", h);for (o = 0; o < h; o += 1) {p[o] = (a[o] - r[o]) * n + r[o];}return p;}return (a - r) * n + r;}var G,q = n.data.ind,W = (n.hierarchy && n.hierarchy.length, Math.floor(1e6 * Math.random()));n.globalData;return function (t) {if (V = t, s && function (t) {Math.seedrandom(W + t);}(W), this.frameExpressionId === n.globalData.frameId && "textSelector" !== this.propType) return V;"textSelector" === this.propType && (N = this.textIndex, z = this.textTotal, B = this.selectorValue), E || (O = n.layerInterface.text, E = n.layerInterface, n.comp.compInterface, b = E.toWorld.bind(E), P = E.fromWorld.bind(E), _ = E.fromComp.bind(E), C = E.toComp.bind(E), A = E.mask ? E.mask.bind(E) : null, S = _), a || (a = n.layerInterface("ADBE Transform Group"), (h = a) && (T = a.anchorPoint)), 4 !== r || p || (p = E("ADBE Root Vectors Group")), l = l || E(4), !(!n.hierarchy || !n.hierarchy.length) && !G && (G = n.hierarchy[0].layerInterface), R = this.comp.renderedFrame / this.comp.globalData.frameRate, i && ($ = w(R));try {interpreter.appendApis({ velocity: $, parent: G, anchorPoint: T, textIndex: N, textTotal: z, selectorValue: B, index: q, transform: a, loopOut: g, loop_out: k, loop_in: v, smooth: x, text: O, thisLayer: E, toWorld: b, fromWorld: P, fromComp: _, toComp: C, mask: A, fromCompToSurface: S, $bm_transform: h }), M = interpreter.run(e + ";module.exports = $bm_rt");} catch (t) {console.error(t);}return this.frameExpressionId = n.globalData.frameId, "shape" === M.propType && (M = factory.clone(M.v)), M;};}function searchExpressions(t, e, i) {e.x && (i.k = !0, i.x = !0, i.initiateExpression = ob$1.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)));}function getValueAtTime(t) {return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;}function getSpeedAtTime(t) {var e = this.getValueAtTime(t),i = this.getValueAtTime(t + -.01),s = 0;if (e.length) {var r = void 0;for (r = 0; r < e.length; r += 1) {s += Math.pow(i[r] - e[r], 2);}s = 100 * Math.sqrt(s);} else s = 0;return s;}function getVelocityAtTime(t) {if (void 0 !== this.vel) return this.vel;var e = this.getValueAtTime(t),i = this.getValueAtTime(t + -.001),s = void 0;if (e.length) {s = createTypedArray("float32", e.length);var r = void 0;for (r = 0; r < e.length; r += 1) {s[r] = (i[r] - e[r]) / -.001;}} else s = (i - e) / -.001;return s;}function getStaticValueAtTime() {return this.pv;}function setGroupProperty(t) {this.propertyGroup = t;}function loopOut(t, e, i) {if (!this.k || !this.keyframes) return this.pv;t = t ? t.toLowerCase() : "";var s = this.comp.renderedFrame,r = this.keyframes,a = r[r.length - 1].t;if (s <= a) return this.pv;var n = void 0,o = void 0;i ? o = a - (n = e ? Math.abs(a - this.elem.comp.globalData.frameRate * e) : Math.max(0, a - this.elem.data.ip)) : ((!e || e > r.length - 1) && (e = r.length - 1), n = a - (o = r[r.length - 1 - e].t));var h = void 0,p = void 0,l = void 0;if ("pingpong" === t) {if (Math.floor((s - o) / n) % 2 != 0) return this.getValueAtTime((n - (s - o) % n + o) / this.comp.globalData.frameRate, 0);} else {if ("offset" === t) {var c = this.getValueAtTime(o / this.comp.globalData.frameRate, 0),u = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),f = this.getValueAtTime(((s - o) % n + o) / this.comp.globalData.frameRate, 0),d = Math.floor((s - o) / n);if (this.pv.length) {for (p = (l = new Array(c.length)).length, h = 0; h < p; h += 1) {l[h] = (u[h] - c[h]) * d + f[h];}return l;}return (u - c) * d + f;}if ("continue" === t) {var m = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),y = this.getValueAtTime((a - .001) / this.comp.globalData.frameRate, 0);if (this.pv.length) {for (p = (l = new Array(m.length)).length, h = 0; h < p; h += 1) {l[h] = m[h] + (m[h] - y[h]) * ((s - a) / this.comp.globalData.frameRate) / 5e-4;}return l;}return m + (s - a) / .001 * (m - y);}}return this.getValueAtTime(((s - o) % n + o) / this.comp.globalData.frameRate, 0);}function loopIn(t, e, i) {if (!this.k) return this.pv;t = t ? t.toLowerCase() : "";var s = this.comp.renderedFrame,r = this.keyframes,a = r[0].t;if (a <= s) return this.pv;var n = void 0,o = void 0;i ? o = a + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - a)) : ((!e || e > r.length - 1) && (e = r.length - 1), n = (o = r[e].t) - a);var h = void 0,p = void 0,l = void 0;if ("pingpong" === t) {if (Math.floor((a - s) / n) % 2 == 0) return this.getValueAtTime(((a - s) % n + a) / this.comp.globalData.frameRate, 0);} else {if ("offset" === t) {var c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),u = this.getValueAtTime(o / this.comp.globalData.frameRate, 0),f = this.getValueAtTime((n - (a - s) % n + a) / this.comp.globalData.frameRate, 0),d = Math.floor((a - s) / n) + 1;if (this.pv.length) {for (p = (l = new Array(c.length)).length, h = 0; h < p; h += 1) {l[h] = f[h] - (u[h] - c[h]) * d;}return l;}return f - (u - c) * d;}if ("continue" === t) {var m = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),y = this.getValueAtTime((a + .001) / this.comp.globalData.frameRate, 0);if (this.pv.length) {for (p = (l = new Array(m.length)).length, h = 0; h < p; h += 1) {l[h] = m[h] + (m[h] - y[h]) * (a - s) / .001;}return l;}return m + (m - y) * (a - s) / .001;}}return this.getValueAtTime((n - (a - s) % n + a) / this.comp.globalData.frameRate, 0);}function smooth(t, e) {if (!this.k) return this.pv;if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;var i = this.comp.renderedFrame / this.comp.globalData.frameRate,s = i - t,r = 1 < e ? (i + t - s) / (e - 1) : 1,a = 0,n = 0,o = void 0;o = this.pv.length ? createTypedArray("float32", this.pv.length) : 0;for (var h = void 0; a < e;) {if (h = this.getValueAtTime(s + a * r), this.pv.length) for (n = 0; n < this.pv.length; n += 1) {o[n] += h[n];} else o += h;a += 1;}if (this.pv.length) for (n = 0; n < this.pv.length; n += 1) {o[n] /= e;} else o /= e;return o;}function getShapeValueAtTime(t) {return this._cachingAtTime || (this._cachingAtTime = { shapeValue: factory.clone(this.pv), lastIndex: 0, lastTime: -999999 }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;}function GetProp(t, e, i) {var o = i.value;return i.value = function (t, e, i, s, r) {var a = o(t, e, i, s, r);a.kf ? a.getValueAtTime = getValueAtTime.bind(a) : a.getValueAtTime = getStaticValueAtTime.bind(a), a.setGroupProperty = setGroupProperty, a.loopOut = loopOut, a.loopIn = loopIn, a.smooth = smooth, a.getVelocityAtTime = getVelocityAtTime.bind(a), a.getSpeedAtTime = getSpeedAtTime.bind(a), a.numKeys = 1 === e.a ? e.k.length : 0, a.propertyIndex = e.ix;var n = 0;return 0 !== i && (n = createTypedArray("float32", 1 === e.a ? e.k[0].s.length : e.k.length)), a._cachingAtTime = { lastFrame: -999999, lastIndex: 0, value: n }, searchExpressions(t, e, a), a.k && r.addDynamicProperty(a), a;}, i;}function GetShapeProp(t, e, i) {var n = i.value;return i.value = function (t, e, i, s, r) {var a = n(t, e, i, s, r);return a.propertyIndex = e.ix, a.lock = !1, 3 === i ? searchExpressions(t, e.pt, a) : 4 === i && searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a;}, i;}function getValueProxy(t, e) {return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v;}function TextExpressionSelectorProp(t, e) {this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ob$1.initiateExpression.bind(this)(t, e, this), this.getMult = getValueProxy, this.getVelocityAtTime = getVelocityAtTime, this.kf ? this.getValueAtTime = getValueAtTime.bind(this) : this.getValueAtTime = getStaticValueAtTime.bind(this), this.setGroupProperty = setGroupProperty;}function GetTextSelectorProp(t, e, i) {var s = i.value;return i.value = function (t, e, i) {return 1 === e.t ? new TextExpressionSelectorProp(t, e, i) : s(t, e, i);}, i;}ob$1.initiateExpression = initiateExpression;var bezier_length_pool = pool_factory(8, function () {return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) };});function create$2() {return { lengths: [], totalLength: 0 };}function release$1(t) {var e,i = t.lengths.length;for (e = 0; e < i; e += 1) {bezier_length_pool.release(t.lengths[e]);}t.lengths.length = 0;}var segments_length_pool = pool_factory(8, create$2, release$1);function bezFunction() {function y(t, e, i, s, r, a) {var n = t * s + e * r + i * a - r * s - a * t - i * e;return -.001 < n && n < .001;}var l = function l(t, e, i, s) {var r,a = defaultCurveSegments,n = void 0,o = void 0,h = void 0,p = void 0,l = 0,c = void 0,u = [],f = [],d = bezier_length_pool.newElement();for (r = i.length, n = 0; n < a; n += 1) {for (p = n / (a - 1), o = c = 0; o < r; o += 1) {h = bm_pow(1 - p, 3) * t[o] + 3 * bm_pow(1 - p, 2) * p * i[o] + 3 * (1 - p) * bm_pow(p, 2) * s[o] + bm_pow(p, 3) * e[o], u[o] = h, null !== f[o] && (c += bm_pow(u[o] - f[o], 2)), f[o] = u[o];}c && (l += c = bm_sqrt(c)), d.percents[n] = p, d.lengths[n] = l;}return d.addedLength = l, d;};function v(t) {this.segmentLength = 0, this.points = new Array(t);}function g(t, e) {this.partialLength = t, this.point = e;}var k,t = (k = {}, function (t, e, i, s) {var r = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1]).replace(/\./g, "p");if (!k[r]) {var a,n = defaultCurveSegments,o = void 0,h = void 0,p = void 0,l = void 0,c = 0,u = void 0,f = void 0,d = null;2 === t.length && (t[0] !== e[0] || t[1] !== e[1]) && y(t[0], t[1], e[0], e[1], t[0] + i[0], t[1] + i[1]) && y(t[0], t[1], e[0], e[1], e[0] + s[0], e[1] + s[1]) && (n = 2);var m = new v(n);for (a = i.length, o = 0; o < n; o += 1) {for (f = createSizedArray(a), l = o / (n - 1), h = u = 0; h < a; h += 1) {p = bm_pow(1 - l, 3) * t[h] + 3 * bm_pow(1 - l, 2) * l * (t[h] + i[h]) + 3 * (1 - l) * bm_pow(l, 2) * (e[h] + s[h]) + bm_pow(l, 3) * e[h], f[h] = p, null !== d && (u += bm_pow(f[h] - d[h], 2));}c += u = bm_sqrt(u), m.points[o] = new g(u, f), d = f;}m.segmentLength = c, k[r] = m;}return k[r];});function w(t, e) {var i = e.percents,s = e.lengths,r = i.length,a = bm_floor((r - 1) * t),n = t * e.addedLength,o = 0;if (a === r - 1 || 0 === a || n === s[a]) return i[a];for (var h = s[a] > n ? -1 : 1, p = !0; p;) {if (s[a] <= n && s[a + 1] > n ? (o = (n - s[a]) / (s[a + 1] - s[a]), p = !1) : a += h, a < 0 || r - 1 <= a) {if (a === r - 1) return i[a];p = !1;}}return i[a] + (i[a + 1] - i[a]) * o;}var I = createTypedArray("float32", 8);return { getSegmentsLength: function getSegmentsLength(t) {var e = segments_length_pool.newElement(),i = t.c,s = t.v,r = t.o,a = t.i,n = void 0,o = t._length,h = e.lengths,p = 0;for (n = 0; n < o - 1; n += 1) {h[n] = l(s[n], s[n + 1], r[n], a[n + 1]), p += h[n].addedLength;}return i && (h[n] = l(s[n], s[0], r[n], a[0]), p += h[n].addedLength), e.totalLength = p, e;}, getNewSegment: function getNewSegment(t, e, i, s, r, a, n) {var o = w(r = r < 0 ? 0 : 1 < r ? 1 : r, n),h = w(a = 1 < a ? 1 : a, n),p = void 0,l = t.length,c = 1 - o,u = 1 - h,f = c * c * c,d = o * c * c * 3,m = o * o * c * 3,y = o * o * o,v = c * c * u,g = o * c * u + c * o * u + c * c * h,k = o * o * u + c * o * h + o * c * h,x = o * o * h,b = c * u * u,P = o * u * u + c * h * u + c * u * h,_ = o * h * u + c * h * h + o * u * h,C = o * h * h,S = u * u * u,T = h * u * u + u * h * u + u * u * h,E = h * h * u + u * h * h + h * u * h,A = h * h * h;for (p = 0; p < l; p += 1) {I[4 * p] = Math.round(1e3 * (f * t[p] + d * i[p] + m * s[p] + y * e[p])) / 1e3, I[4 * p + 1] = Math.round(1e3 * (v * t[p] + g * i[p] + k * s[p] + x * e[p])) / 1e3, I[4 * p + 2] = Math.round(1e3 * (b * t[p] + P * i[p] + _ * s[p] + C * e[p])) / 1e3, I[4 * p + 3] = Math.round(1e3 * (S * t[p] + T * i[p] + E * s[p] + A * e[p])) / 1e3;}return I;}, getPointInSegment: function getPointInSegment(t, e, i, s, r, a) {var n = w(r, a),o = 1 - n;return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * i[0] + (n * n * o + o * n * n + n * o * n) * s[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * i[1] + (n * n * o + o * n * n + n * o * n) * s[1] + n * n * n * e[1])) / 1e3];}, buildBezierData: t, pointOnLine2D: y, pointOnLine3D: function pointOnLine3D(t, e, i, s, r, a, n, o, h) {if (0 === i && 0 === a && 0 === h) return y(t, e, s, r, n, o);var p = Math.sqrt(Math.pow(s - t, 2) + Math.pow(r - e, 2) + Math.pow(a - i, 2)),l = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - i, 2)),c = Math.sqrt(Math.pow(n - s, 2) + Math.pow(o - r, 2) + Math.pow(h - a, 2)),u = void 0;return -1e-4 < (u = l < p ? c < p ? p - l - c : c - l - p : l < c ? c - l - p : l - p - c) && u < 1e-4;} };}var _class,bez = bezFunction();function _applyDecoratedDescriptor(i, s, t, e, r) {var a = {};return Object.keys(e).forEach(function (t) {a[t] = e[t];}), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = t.slice().reverse().reduce(function (t, e) {return e(i, s, t) || t;}, a), r && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(r) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, s, a), a = null), a;}var initFrame = -999999,math_abs = Math.abs,degToRads$1 = Math / 180;function interpolateValue(t, e) {var i = this.offsetTime,s = void 0;"multidimensional" === this.propType && (s = createTypedArray("float32", this.pv.length));for (var r = e.lastIndex, a = r, n = this.keyframes.length - 1, o = !0, h = void 0, p = void 0; o;) {if (h = this.keyframes[a], p = this.keyframes[a + 1], a === n - 1 && t >= p.t - i) {h.h && (h = p), r = 0;break;}if (p.t - i > t) {r = a;break;}a < n - 1 ? a += 1 : (r = 0, o = !1);}var l = void 0,c = void 0,u = void 0,f = void 0,d = void 0,m = void 0,y = p.t - i,v = h.t - i,g = void 0;if (h.to) {h.bezierData || (h.bezierData = bez.buildBezierData(h.s, p.s || h.e, h.to, h.ti));var k = h.bezierData;if (y <= t || t < v) {var x = y <= t ? k.points.length - 1 : 0;for (c = k.points[x].point.length, l = 0; l < c; l += 1) {s[l] = k.points[x].point[l];}} else {h.__fnct ? m = h.__fnct : (m = ob.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n).get, h.__fnct = m), u = m((t - v) / (y - v));var b = k.segmentLength * u,P = void 0,_ = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;for (d = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, o = !0, f = k.points.length; o;) {if (_ += k.points[d].partialLength, 0 == b || 0 === u || d === k.points.length - 1) {for (c = k.points[d].point.length, l = 0; l < c; l += 1) {s[l] = k.points[d].point[l];}break;}if (_ <= b && b < _ + k.points[d + 1].partialLength) {for (P = (b - _) / k.points[d + 1].partialLength, c = k.points[d].point.length, l = 0; l < c; l += 1) {s[l] = k.points[d].point[l] + (k.points[d + 1].point[l] - k.points[d].point[l]) * P;}break;}d < f - 1 ? d += 1 : o = !1;}e._lastPoint = d, e._lastAddedLength = _ - k.points[d].partialLength, e._lastKeyframeIndex = a;}} else {var C = void 0,S = void 0,T = void 0,E = void 0,A = void 0;if (n = h.s.length, g = p.s || h.e, this.sh && 1 !== h.h) {if (y <= t) s[0] = g[0], s[1] = g[1], s[2] = g[2];else if (t <= v) s[0] = h.s[0], s[1] = h.s[1], s[2] = h.s[2];else {quaternionToEuler(s, slerp(createQuaternion(h.s), createQuaternion(g), (t - v) / (y - v)));}} else for (a = 0; a < n; a += 1) {1 !== h.h && (u = y <= t ? 1 : t < v ? 0 : (h.o.x.constructor === Array ? (h.__fnct || (h.__fnct = []), h.__fnct[a] ? m = h.__fnct[a] : (C = void 0 === h.o.x[a] ? h.o.x[0] : h.o.x[a], S = void 0 === h.o.y[a] ? h.o.y[0] : h.o.y[a], T = void 0 === h.i.x[a] ? h.i.x[0] : h.i.x[a], E = void 0 === h.i.y[a] ? h.i.y[0] : h.i.y[a], m = ob.getBezierEasing(C, S, T, E).get, h.__fnct[a] = m)) : h.__fnct ? m = h.__fnct : (C = h.o.x, S = h.o.y, T = h.i.x, E = h.i.y, m = ob.getBezierEasing(C, S, T, E).get, h.__fnct = m), m((t - v) / (y - v)))), g = p.s || h.e, A = 1 === h.h ? h.s[a] : h.s[a] + (g[a] - h.s[a]) * u, 1 === n ? s = A : s[a] = A;}}return e.lastIndex = r, s;}function slerp(t, e, i) {var s = [],r = t[0],a = t[1],n = t[2],o = t[3],h = e[0],p = e[1],l = e[2],c = e[3],u = void 0,f = void 0,d = void 0,m = void 0,y = void 0;return (f = r * h + a * p + n * l + o * c) < 0 && (f = -f, h = -h, p = -p, l = -l, c = -c), y = 1e-6 < 1 - f ? (u = Math.acos(f), d = Math.sin(u), m = Math.sin((1 - i) * u) / d, Math.sin(i * u) / d) : (m = 1 - i, i), s[0] = m * r + y * h, s[1] = m * a + y * p, s[2] = m * n + y * l, s[3] = m * o + y * c, s;}function quaternionToEuler(t, e) {var i = e[0],s = e[1],r = e[2],a = e[3],n = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r),o = Math.asin(2 * i * s + 2 * r * a),h = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r);t[0] = n / degToRads$1, t[1] = o / degToRads$1, t[2] = h / degToRads$1;}function createQuaternion(t) {var e = t[0] * degToRads$1,i = t[1] * degToRads$1,s = t[2] * degToRads$1,r = Math.cos(e / 2),a = Math.cos(i / 2),n = Math.cos(s / 2),o = Math.sin(e / 2),h = Math.sin(i / 2),p = Math.sin(s / 2);return [o * h * n + r * a * p, o * a * n + r * h * p, r * h * n - o * a * p, r * a * n - o * h * p];}function getValueAtCurrentTime() {var t = this.comp.renderedFrame - this.offsetTime,e = this.keyframes[0].t - this.offsetTime,i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && i <= t || this._caching.lastFrame < e && t < e))) {this._caching.lastIndex = this._caching.lastFrame < t ? this._caching.lastIndex : 0;var s = this.interpolateValue(t, this._caching);this.pv = s;}return this._caching.lastFrame = t, this.pv;}function setVValue(t) {var e = void 0;if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < math_abs(this.v - e) && (this.v = e, this._mdf = !0);else for (var i = 0, s = this.v.length; i < s;) {e = t[i] * this.mult, 1e-5 < math_abs(this.v[i] - e) && (this.v[i] = e, this._mdf = !0), i += 1;}}function processEffectsSequence() {if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);else {this.lock = !0, this._mdf = this._isFirstFrame;var t = void 0,e = this.effectsSequence.length,i = this.kf ? this.pv : this.data.k;for (t = 0; t < e; t += 1) {i = this.effectsSequence[t](i);}this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;}}function addEffect(t) {this.effectsSequence.push(t), this.container.addDynamicProperty(this);}function ValueProperty(t, e, i, s) {this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;}function MultiDimensionalProperty(t, e, i, s) {this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;var r = void 0,a = e.k.length;for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), r = 0; r < a; r += 1) {this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];}this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;}function KeyframedValueProperty(t, e, i, s) {this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0 }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;}function KeyframedMultidimensionalProperty(t, e, i, s) {this.propType = "multidimensional";var r = void 0,a = e.k.length,n = void 0,o = void 0,h = void 0,p = void 0;for (r = 0; r < a - 1; r += 1) {e.k[r].to && e.k[r].s && e.k[r].e && (n = e.k[r].s, o = e.k[r].e, h = e.k[r].to, p = e.k[r].ti, (2 === n.length && (n[0] !== o[0] || n[1] !== o[1]) && bez.pointOnLine2D(n[0], n[1], o[0], o[1], n[0] + h[0], n[1] + h[1]) && bez.pointOnLine2D(n[0], n[1], o[0], o[1], o[0] + p[0], o[1] + p[1]) || 3 === n.length && (n[0] !== o[0] || n[1] !== o[1] || n[2] !== o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], o[0], o[1], o[2], n[0] + h[0], n[1] + h[1], n[2] + h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], o[0], o[1], o[2], o[0] + p[0], o[1] + p[1], o[2] + p[2])) && (e.k[r].to = null, e.k[r].ti = null), n[0] === o[0] && n[1] === o[1] && 0 === h[0] && 0 === h[1] && 0 === p[0] && 0 === p[1] && (2 === n.length || n[2] === o[2] && 0 === h[2] && 0 === p[2]) && (e.k[r].to = null, e.k[r].ti = null));}this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;var l = e.k[0].s.length;for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), r = 0; r < l; r += 1) {this.v[r] = initFrame, this.pv[r] = initFrame;}this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", l) }, this.addEffect = addEffect;}var PropertyFactory = (_applyDecoratedDescriptor((_class = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "getProp", value: function value(t, e, i, s, r) {var a = void 0;if (e.k.length) {if ("number" == typeof e.k[0]) a = new MultiDimensionalProperty(t, e, s, r);else switch (i) {case 0:a = new KeyframedValueProperty(t, e, s, r);break;case 1:a = new KeyframedMultidimensionalProperty(t, e, s, r);}} else a = new ValueProperty(t, e, s, r);return a.effectsSequence.length && r.addDynamicProperty(a), a;} }]), t;}()).prototype, "getProp", [GetProp], Object.getOwnPropertyDescriptor(_class.prototype, "getProp"), _class.prototype), _class),PropertyFactory$1 = new PropertyFactory();function SliderEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 0, 0, i);}function AngleEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 0, 0, i);}function ColorEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 1, 0, i);}function PointEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 1, 0, i);}function LayerIndexEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 0, 0, i);}function MaskIndexEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 0, 0, i);}function CheckboxEffect(t, e, i) {this.p = PropertyFactory$1.getProp(e, t.v, 0, 0, i);}function NoValueEffect() {this.p = {};}var DynamicPropertyContainer = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "addDynamicProperty", value: function value(t) {-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);} }, { key: "iterateDynamicProperties", value: function value() {this._mdf = !1;var t = void 0,e = this.dynamicProperties.length;for (t = 0; t < e; t += 1) {this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);}} }, { key: "initDynamicPropertyContainer", value: function value(t) {this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;} }]), t;}();function EffectsManager(t, e) {var i = t.ef || [];this.effectElements = [];var s = void 0,r = i.length,a = void 0;for (s = 0; s < r; s++) {a = new GroupEffect(i[s], e), this.effectElements.push(a);}}var GroupEffect = function () {function s(t, e) {classCallCheck(this, s);var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));return i.init(t, e), i;}return inherits(s, DynamicPropertyContainer), createClass(s, [{ key: "init", value: function value(t, e) {this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);var i = void 0,s = this.data.ef.length,r = void 0,a = this.data.ef;for (i = 0; i < s; i += 1) {switch (r = null, a[i].ty) {case 0:r = new SliderEffect(a[i], e, this);break;case 1:r = new AngleEffect(a[i], e, this);break;case 2:r = new ColorEffect(a[i], e, this);break;case 3:r = new PointEffect(a[i], e, this);break;case 4:case 7:r = new CheckboxEffect(a[i], e, this);break;case 10:r = new LayerIndexEffect(a[i], e, this);break;case 11:r = new MaskIndexEffect(a[i], e, this);break;case 5:r = new EffectsManager(a[i], e, this);break;default:r = new NoValueEffect(a[i], e, this);}r && this.effectElements.push(r);}} }]), s;}();function MaskInterface(t, e) {this._mask = t, this._data = e;}function MaskManagerInterface(e) {var i = createSizedArray(e.viewData.length),s = void 0,r = e.viewData.length;for (s = 0; s < r; s += 1) {i[s] = new MaskInterface(e.viewData[s], e.masksProperties[s]);}return function (t) {for (s = 0; s < r;) {if (e.masksProperties[s].nm === t) return i[s];s += 1;}};}GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, Object.defineProperty(MaskInterface.prototype, "maskPath", { get: function get() {return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;} });var defaultUnidimensionalValue = { pv: 0, v: 0, mult: 1 },defaultMultidimensionalValue = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };function completeProperty(s, r, a) {Object.defineProperty(s, "velocity", { get: function get() {return r.getVelocityAtTime(r.comp.currentFrame);} }), s.numKeys = r.keyframes ? r.keyframes.length : 0, s.key = function (t) {if (!s.numKeys) return 0;var e = "";e = "s" in r.keyframes[t - 1] ? r.keyframes[t - 1].s : "e" in r.keyframes[t - 2] ? r.keyframes[t - 2].e : r.keyframes[t - 2].s;var i = "unidimensional" === a ? new Number(e) : _extends({}, e);return i.time = r.keyframes[t - 1].t / r.elem.comp.globalData.frameRate, i;}, s.valueAtTime = r.getValueAtTime, s.speedAtTime = r.getSpeedAtTime, s.velocityAtTime = r.getVelocityAtTime, s.propertyGroup = r.propertyGroup;}function UnidimensionalPropertyInterface(t) {t && "pv" in t || (t = defaultUnidimensionalValue);var e = 1 / t.mult,i = t.pv * e,s = new Number(i);return s.value = i, completeProperty(s, t, "unidimensional"), function () {return t.k && t.getValue(), i = t.v * e, s.value !== i && ((s = new Number(i)).value = i, completeProperty(s, t, "unidimensional")), s;};}function MultidimensionalPropertyInterface(e) {e && "pv" in e || (e = defaultMultidimensionalValue);var i = 1 / e.mult,s = e.pv.length,r = createTypedArray("float32", s),a = createTypedArray("float32", s);return r.value = a, completeProperty(r, e, "multidimensional"), function () {e.k && e.getValue();for (var t = 0; t < s; t += 1) {r[t] = a[t] = e.v[t] * i;}return r;};}function defaultGetter() {return defaultUnidimensionalValue;}function ExpressionPropertyInterface(t) {return t ? "unidimensional" === t.propType ? UnidimensionalPropertyInterface(t) : MultidimensionalPropertyInterface(t) : defaultGetter;}var TextExpressionInterface = function TextExpressionInterface(t) {function e(t) {switch (t) {case "scale":case "Scale":case "ADBE Scale":case 6:return e.scale;case "rotation":case "Rotation":case "ADBE Rotation":case "ADBE Rotate Z":case 10:return e.rotation;case "ADBE Rotate X":return e.xRotation;case "ADBE Rotate Y":return e.yRotation;case "position":case "Position":case "ADBE Position":case 2:return e.position;case "ADBE Position_0":return e.xPosition;case "ADBE Position_1":return e.yPosition;case "ADBE Position_2":return e.zPosition;case "anchorPoint":case "AnchorPoint":case "Anchor Point":case "ADBE AnchorPoint":case 1:return e.anchorPoint;case "opacity":case "Opacity":case 11:return e.opacity;}}Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) });var i = void 0;return t.p && (i = ExpressionPropertyInterface(t.p)), Object.defineProperty(e, "position", { get: function get() {return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0];} }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;};function toWorld(t, e) {var i = new Matrix();i.reset();if (this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {var s = void 0,r = this._elem.hierarchy.length;for (s = 0; s < r; s += 1) {this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);}return i.applyToPointArray(t[0], t[1], t[2] || 0);}return i.applyToPointArray(t[0], t[1], t[2] || 0);}function fromWorld(t, e) {var i = new Matrix();i.reset();if (this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {var s = void 0,r = this._elem.hierarchy.length;for (s = 0; s < r; s += 1) {this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);}return i.inversePoint(t);}return i.inversePoint(t);}function fromComp(t) {var e = new Matrix();if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {var i = void 0,s = this._elem.hierarchy.length;for (i = 0; i < s; i += 1) {this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);}return e.inversePoint(t);}return e.inversePoint(t);}function sampleImage() {return [1, 1, 1, 1];}function LayerExpressionInterface(e) {var i = void 0;function s(t) {switch (t) {case "ADBE Root Vectors Group":case "Contents":case 2:return s.shapeInterface;case 1:case 6:case "Transform":case "transform":case "ADBE Transform Group":return i;case 4:case "ADBE Effect Parade":return s.effect;}}s.toWorld = toWorld, s.fromWorld = fromWorld, s.toComp = toWorld, s.fromComp = fromComp, s.sampleImage = sampleImage, s.sourceRectAtTime = e.sourceRectAtTime.bind(e);var t = getDescriptor(i = TextExpressionInterface((s._elem = e).finalTransform.mProp), "anchorPoint");return Object.defineProperties(s, { hasParent: { get: function get() {return e.hierarchy.length;} }, parent: { get: function get() {return e.hierarchy[0].layerInterface;} }, rotation: getDescriptor(i, "rotation"), scale: getDescriptor(i, "scale"), position: getDescriptor(i, "position"), opacity: getDescriptor(i, "opacity"), anchorPoint: t, anchor_point: t, transform: { get: function get() {return i;} }, active: { get: function get() {return e.isInRange;} } }), s.startTime = e.data.st, s.index = e.data.ind, s.source = e.data.refId, s.height = 0 === e.data.ty ? e.data.h : 100, s.width = 0 === e.data.ty ? e.data.w : 100, s.registerMaskInterface = function (t) {s.mask = new MaskManagerInterface(t, e);}, s.registerEffectsInterface = function (t) {s.effect = t;}, s;}function createEffectsInterface(i, t) {if (i.effectsManager) {var s = [],e = i.data.ef,r = void 0,a = i.effectsManager.effectElements.length;for (r = 0; r < a; r += 1) {s.push(createGroupInterface(e[r], i.effectsManager.effectElements[r], t, i));}return function (t) {for (var e = i.data.ef || []; r < a;) {if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return s[r];r += 1;}};}}function createGroupInterface(i, t, e, s) {var r = [],a = void 0,n = i.ef.length;for (a = 0; a < n; a += 1) {5 === i.ef[a].ty ? r.push(createGroupInterface(i.ef[a], t.effectElements[a], t.effectElements[a].propertyGroup, s)) : r.push(createValueInterface(t.effectElements[a], i.ef[a].ty, s, h));}var o = function o(t) {for (var e = i.ef; a < n;) {if (t === e[a].nm || t === e[a].mn || t === e[a].ix) return 5 === e[a].ty ? r[a] : r[a]();a += 1;}return r[0]();};function h(t) {return 1 === t ? o : e(t - 1);}return o.propertyGroup = h, "ADBE Color Control" === i.mn && Object.defineProperty(o, "color", { get: function get() {return r[0]();} }), Object.defineProperty(o, "numProperties", { get: function get() {return i.np;} }), o.active = o.enabled = 0 !== i.en, o;}function createValueInterface(t, e, i, s) {var r = ExpressionPropertyInterface(t.p);return t.p.setGroupProperty && t.p.setGroupProperty(s), function () {return 10 === e ? i.comp.compInterface(t.p.v) : r();};}var ob$2 = { createEffectsInterface: createEffectsInterface };function iterateElements(t, e, i) {var s = [],r = void 0,a = t ? t.length : 0;for (r = 0; r < a; r += 1) {"gr" === t[r].ty ? s.push(groupInterfaceFactory(t[r], e[r], i)) : "fl" === t[r].ty ? s.push(fillInterfaceFactory(t[r], e[r], i)) : "st" === t[r].ty ? s.push(strokeInterfaceFactory(t[r], e[r], i)) : "tm" === t[r].ty ? s.push(trimInterfaceFactory(t[r], e[r], i)) : "tr" === t[r].ty || ("el" === t[r].ty ? s.push(ellipseInterfaceFactory(t[r], e[r], i)) : "sr" === t[r].ty ? s.push(starInterfaceFactory(t[r], e[r], i)) : "sh" === t[r].ty ? s.push(pathInterfaceFactory(t[r], e[r], i)) : "rc" === t[r].ty ? s.push(rectInterfaceFactory(t[r], e[r], i)) : "rd" === t[r].ty ? s.push(roundedInterfaceFactory(t[r], e[r], i)) : "rp" === t[r].ty && s.push(repeaterInterfaceFactory(t[r], e[r], i)));}return s;}function contentsInterfaceFactory(t, e, i) {function s(t) {for (var e = 0, i = r.length; e < i;) {if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];e += 1;}if ("number" == typeof t) return r[t - 1];}var r = void 0;return s.propertyGroup = function (t) {return 1 === t ? s : i(t - 1);}, r = iterateElements(t.it, e.it, s.propertyGroup), s.numProperties = r.length, s.propertyIndex = t.cix, s._name = t.nm, s;}function groupInterfaceFactory(t, e, i) {var s = function s(t) {switch (t) {case "ADBE Vectors Group":case "Contents":case 2:return s.content;default:return s.transform;}};s.propertyGroup = function (t) {return 1 === t ? s : i(t - 1);};var r = contentsInterfaceFactory(t, e, s.propertyGroup),a = transformInterfaceFactory(t.it[t.it.length - 1], e.it[e.it.length - 1], s.propertyGroup);return s.content = r, s.transform = a, Object.defineProperty(s, "_name", { get: function get() {return t.nm;} }), s.numProperties = t.np, s.propertyIndex = t.ix, s.nm = t.nm, s.mn = t.mn, s;}function fillInterfaceFactory(t, e, i) {function s(t) {return "Color" === t || "color" === t ? s.color : "Opacity" === t || "opacity" === t ? s.opacity : void 0;}return Object.defineProperties(s, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), s;}var ob$3 = {};function strokeInterfaceFactory(t, e, i) {function s(t) {return 1 === t ? ob$3 : i(t - 1);}function r(t) {return 1 === t ? h : s(t - 1);}var a,n = void 0,o = t.d ? t.d.length : 0,h = {};for (n = 0; n < o; n += 1) {a = n, Object.defineProperty(h, t.d[a].nm, { get: ExpressionPropertyInterface(e.d.dataProps[a].p) }), e.d.dataProps[n].p.setGroupProperty(r);}function p(t) {return "Color" === t || "color" === t ? p.color : "Opacity" === t || "opacity" === t ? p.opacity : "Stroke Width" === t || "stroke width" === t ? p.strokeWidth : void 0;}return Object.defineProperties(p, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, strokeWidth: { get: ExpressionPropertyInterface(e.w) }, dash: { get: function get() {return h;} }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(s), e.o.setGroupProperty(s), e.w.setGroupProperty(s), p;}function trimInterfaceFactory(e, t, i) {function s(t) {return 1 === t ? r : i(--t);}function r(t) {return t === e.e.ix || "End" === t || "end" === t ? r.end : t === e.s.ix ? r.start : t === e.o.ix ? r.offset : void 0;}return r.propertyIndex = e.ix, t.s.setGroupProperty(s), t.e.setGroupProperty(s), t.o.setGroupProperty(s), r.propertyIndex = e.ix, r.propertyGroup = i, Object.defineProperties(r, { start: { get: ExpressionPropertyInterface(t.s) }, end: { get: ExpressionPropertyInterface(t.e) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), r.mn = e.mn, r;}function transformInterfaceFactory(e, t, i) {function s(t) {return 1 === t ? r : i(--t);}function r(t) {return e.a.ix === t || "Anchor Point" === t ? r.anchorPoint : e.o.ix === t || "Opacity" === t ? r.opacity : e.p.ix === t || "Position" === t ? r.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? r.rotation : e.s.ix === t || "Scale" === t ? r.scale : e.sk && e.sk.ix === t || "Skew" === t ? r.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? r.skewAxis : void 0;}return t.transform.mProps.o.setGroupProperty(s), t.transform.mProps.p.setGroupProperty(s), t.transform.mProps.a.setGroupProperty(s), t.transform.mProps.s.setGroupProperty(s), t.transform.mProps.r.setGroupProperty(s), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(s), t.transform.mProps.sa.setGroupProperty(s)), t.transform.op.setGroupProperty(s), Object.defineProperties(r, { opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(t.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) }, _name: { value: e.nm } }), r.ty = "tr", r.mn = e.mn, r.propertyGroup = i, r;}function ellipseInterfaceFactory(e, t, i) {function s(t) {return 1 === t ? a : i(--t);}a.propertyIndex = e.ix;var r = "tm" === t.sh.ty ? t.sh.prop : t.sh;function a(t) {return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0;}return r.s.setGroupProperty(s), r.p.setGroupProperty(s), Object.defineProperties(a, { size: { get: ExpressionPropertyInterface(r.s) }, position: { get: ExpressionPropertyInterface(r.p) }, _name: { value: e.nm } }), a.mn = e.mn, a;}function starInterfaceFactory(e, t, i) {function s(t) {return 1 === t ? a : i(--t);}var r = "tm" === t.sh.ty ? t.sh.prop : t.sh;function a(t) {return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius;}return a.propertyIndex = e.ix, r.or.setGroupProperty(s), r.os.setGroupProperty(s), r.pt.setGroupProperty(s), r.p.setGroupProperty(s), r.r.setGroupProperty(s), e.ir && (r.ir.setGroupProperty(s), r.is.setGroupProperty(s)), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(r.p) }, rotation: { get: ExpressionPropertyInterface(r.r) }, points: { get: ExpressionPropertyInterface(r.pt) }, outerRadius: { get: ExpressionPropertyInterface(r.or) }, outerRoundness: { get: ExpressionPropertyInterface(r.os) }, innerRadius: { get: ExpressionPropertyInterface(r.ir) }, innerRoundness: { get: ExpressionPropertyInterface(r.is) }, _name: { value: e.nm } }), a.mn = e.mn, a;}function rectInterfaceFactory(e, t, i) {function s(t) {return 1 === t ? a : i(--t);}var r = "tm" === t.sh.ty ? t.sh.prop : t.sh;function a(t) {return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0;}return a.propertyIndex = e.ix, r.p.setGroupProperty(s), r.s.setGroupProperty(s), r.r.setGroupProperty(s), Object.defineProperties(a, { position: { get: ExpressionPropertyInterface(r.p) }, roundness: { get: ExpressionPropertyInterface(r.r) }, size: { get: ExpressionPropertyInterface(r.s) }, _name: { value: e.nm } }), a.mn = e.mn, a;}function roundedInterfaceFactory(e, t, i) {var s = t;function r(t) {if (e.r.ix === t || "Round Corners 1" === t) return r.radius;}return r.propertyIndex = e.ix, s.rd.setGroupProperty(function (t) {return 1 === t ? r : i(--t);}), Object.defineProperties(r, { radius: { get: ExpressionPropertyInterface(s.rd) }, _name: { value: e.nm } }), r.mn = e.mn, r;}function repeaterInterfaceFactory(e, t, i) {function s(t) {return 1 === t ? a : i(--t);}var r = t;function a(t) {return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0;}return a.propertyIndex = e.ix, r.c.setGroupProperty(s), r.o.setGroupProperty(s), Object.defineProperties(a, { copies: { get: ExpressionPropertyInterface(r.c) }, offset: { get: ExpressionPropertyInterface(r.o) }, _name: { value: e.nm } }), a.mn = e.mn, a;}function pathInterfaceFactory(t, e, i) {var s = e.sh;function r(t) {if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return r.path;}return s.setGroupProperty(function (t) {return 1 === t ? r : i(--t);}), Object.defineProperties(r, { path: { get: function get() {return s.k && s.getValue(), s;} }, shape: { get: function get() {return s.k && s.getValue(), s;} }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn } }), r;}function ShapeExpressionInterface(t, e, i) {var s = void 0;function r(t) {if ("number" == typeof t) return s[t - 1];for (var e = 0, i = s.length; e < i;) {if (s[e]._name === t) return s[e];e += 1;}}return r.propertyGroup = i, s = iterateElements(t, e, r), r.numProperties = s.length, r;}function CompExpressionInterface(s) {function t(t) {for (var e = 0, i = s.layers.length; e < i;) {if (s.layers[e].nm === t || s.layers[e].ind === t) return s.elements[e].layerInterface;e += 1;}return null;}return Object.defineProperty(t, "_name", { value: s.data.nm }), (t.layer = t).pixelAspect = 1, t.height = s.data.h || s.globalData.compSize.h, t.width = s.data.w || s.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / s.globalData.frameRate, t.displayStartTime = 0, t.numLayers = s.layers.length, t;}var BaseElement = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "checkMasks", value: function value() {if (!this.data.hasMask) return !1;for (var t = 0, e = this.data.masksProperties.length; t < e;) {if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;t += 1;}return !1;} }, { key: "initExpressions", value: function value() {this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);var t = ob$2.createEffectsInterface(this, this.layerInterface);this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);} }, { key: "getBlendMode", value: function value() {return this.blendModeEnums[this.data.bm] || "";} }, { key: "setBlendMode", value: function value() {var t = this.getBlendMode();(this.baseElement || this.layerElement).style["mix-blend-mode"] = t;} }, { key: "initBaseData", value: function value(t, e, i) {this.globalData = e, this.comp = i, this.data = t, this.layerId = "ly_" + randomString(10), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);} }, { key: "getType", value: function value() {return this.type;} }, { key: "blendModeEnums", get: function get() {return { 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };} }]), t;}(),degToRads$2 = Math.PI / 180,TransformProperty = function () {function n(t, e, i) {classCallCheck(this, n);var s = possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));if (s.elem = t, s.frameId = -1, s.propType = "transform", s.data = e, s.v = new Matrix(), s.pre = new Matrix(), s.appliedTransformations = 0, s.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (s.px = PropertyFactory$1.getProp(t, e.p.x, 0, 0, s), s.py = PropertyFactory$1.getProp(t, e.p.y, 0, 0, s), e.p.z && (s.pz = PropertyFactory$1.getProp(t, e.p.z, 0, 0, s))) : s.p = PropertyFactory$1.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, s), e.rx) {if (s.rx = PropertyFactory$1.getProp(t, e.rx, 0, degToRads$2, s), s.ry = PropertyFactory$1.getProp(t, e.ry, 0, degToRads$2, s), s.rz = PropertyFactory$1.getProp(t, e.rz, 0, degToRads$2, s), e.or.k[0].ti) {var r = void 0,a = e.or.k.length;for (r = 0; r < a; r += 1) {e.or.k[r].to = e.or.k[r].ti = null;}}s.or = PropertyFactory$1.getProp(t, e.or, 1, degToRads$2, s), s.or.sh = !0;} else s.r = PropertyFactory$1.getProp(t, e.r || { k: 0 }, 0, degToRads$2, s);return e.sk && (s.sk = PropertyFactory$1.getProp(t, e.sk, 0, degToRads$2, s), s.sa = PropertyFactory$1.getProp(t, e.sa, 0, degToRads$2, s)), s.a = PropertyFactory$1.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, s), s.s = PropertyFactory$1.getProp(t, e.s || { k: [100, 100, 100] }, 1, .01, s), e.o ? s.o = PropertyFactory$1.getProp(t, e.o, 0, .01, t) : s.o = { _mdf: !1, v: 1 }, s._isDirty = !0, s.dynamicProperties.length || s.getValue(!0), s;}return inherits(n, DynamicPropertyContainer), createClass(n, [{ key: "applyToMatrix", value: function value(t) {var e = this._mdf;this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);} }, { key: "getValue", value: function value(t) {if (this.elem.globalData.frameId !== this.frameId) {if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {var e = void 0,i = void 0,s = this.elem.globalData.frameRate;if (this.p && this.p.keyframes && this.p.getValueAtTime) i = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / s, 0), this.p.getValueAtTime(this.p.keyframes[0].t / s, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / s, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / s, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / s, this.p.offsetTime));else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {e = [], i = [];var r = this.px,a = this.py;r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (e[0] = r.getValueAtTime((r.keyframes[0].t + .01) / s, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / s, 0), i[0] = r.getValueAtTime(r.keyframes[0].t / s, 0), i[1] = a.getValueAtTime(a.keyframes[0].t / s, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (e[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / s, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / s, 0), i[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / s, 0), i[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / s, 0)) : (e = [r.pv, a.pv], i[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / s, r.offsetTime), i[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / s, a.offsetTime));}this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]));}this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);}this.frameId = this.elem.globalData.frameId;}} }, { key: "precalculateMatrix", value: function value() {if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;}this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);}} }, { key: "autoOrient", value: function value() {} }, { key: "addDynamicProperty", value: function value(t) {get(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "addDynamicProperty", this).call(this, t), this.elem.addDynamicProperty(t), this._isDirty = !0;} }]), n;}();TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;var TransformPropertyFactory = { getTransformProperty: function getTransformProperty(t, e, i) {return new TransformProperty(t, e, i);} },TransformElement = function () {function t() {classCallCheck(this, t), this.mHelper = new Matrix();}return createClass(t, [{ key: "initTransform", value: function value() {this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix() }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;} }, { key: "renderTransform", value: function value() {if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {var t = void 0,e = this.finalTransform.mat,i = 0,s = this.hierarchy.length;if (!this.finalTransform._matMdf) for (; i < s;) {if (this.hierarchy[i].finalTransform.mProp._mdf) {this.finalTransform._matMdf = !0;break;}i += 1;}if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) {t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);}}} }, { key: "globalToLocal", value: function value(t) {var e = [];e.push(this.finalTransform);for (var i = !0, s = this.comp; i;) {s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;}var r = void 0,a = e.length,n = void 0;for (r = 0; r < a; r += 1) {n = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];}return t;} }]), t;}(),HierarchyElement = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "initHierarchy", value: function value() {this.hierarchy = [], this._isParent = !1, this.checkParenting();} }, { key: "setHierarchy", value: function value(t) {this.hierarchy = t;} }, { key: "setAsParent", value: function value() {this._isParent = !0;} }, { key: "checkParenting", value: function value() {void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);} }]), t;}(),FrameElement = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "initFrame", value: function value() {this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;} }, { key: "prepareProperties", value: function value(t, e) {var i = void 0,s = this.dynamicProperties.length;for (i = 0; i < s; i += 1) {(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));}} }, { key: "addDynamicProperty", value: function value(t) {-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);} }]), t;}(),RenderableElement = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "initRenderable", value: function value() {this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];} }, { key: "addRenderableComponent", value: function value(t) {-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);} }, { key: "removeRenderableComponent", value: function value(t) {-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);} }, { key: "prepareRenderableFrame", value: function value(t) {this.checkLayerLimits(t);} }, { key: "checkTransparency", value: function value() {this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());} }, { key: "checkLayerLimits", value: function value(t) {this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());} }, { key: "renderRenderable", value: function value() {var t = void 0,e = this.renderableComponents.length;for (t = 0; t < e; t += 1) {this.renderableComponents[t].renderFrame(this._isFirstFrame);}} }, { key: "sourceRectAtTime", value: function value() {return { top: 0, left: 0, width: 100, height: 100 };} }, { key: "getLayerSize", value: function value() {return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };} }]), t;}(),RenderableDOMElement = function () {function t() {return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));}return inherits(t, RenderableElement), createClass(t, [{ key: "initElement", value: function value(t, e, i) {this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.addMasks(), this.createContent(), this.hide();} }, { key: "hide", value: function value() {} }, { key: "show", value: function value() {} }, { key: "renderFrame", value: function value() {this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));} }, { key: "renderInnerContent", value: function value() {} }, { key: "prepareFrame", value: function value(t) {this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();} }, { key: "destroy", value: function value() {this.innerElem = null, this.destroyBaseElement();} }]), t;}(),ICompElement = function (t) {function e() {return classCallCheck(this, e), possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));}return inherits(e, t), createClass(e, [{ key: "initElement", value: function value(t, e, i) {this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.addMasks(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();} }, { key: "prepareFrame", value: function value(t) {if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;else {var e = this.tm.v;e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;}var i = void 0,s = this.elements.length;for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; 0 <= i; i -= 1) {(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));}}} }, { key: "renderInnerContent", value: function value() {var t = void 0,e = this.layers.length;for (t = 0; t < e; t += 1) {(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();}} }, { key: "setElements", value: function value(t) {this.elements = t;} }, { key: "getElements", value: function value() {return this.elements;} }, { key: "destroyElements", value: function value() {var t = void 0,e = this.layers.length;for (t = 0; t < e; t += 1) {this.elements[t] && this.elements[t].destroy();}} }, { key: "destroy", value: function value() {this.destroyElements(), this.destroyBaseElement();} }]), e;}(Mixin(BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement)),CVEffects = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "renderFrame", value: function value() {} }]), t;}(),initFrame$1 = -9999;function interpolateShape(t, e, i) {var s,r,a = i.lastIndex,n = void 0,o = void 0,h = void 0,p = void 0,l = void 0,c = void 0,u = void 0,f = this.keyframes;if (t < f[0].t - this.offsetTime) n = f[0].s[0], h = !0, a = 0;else if (t >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], h = !0;else {for (var d = a, m = f.length - 1, y = !0, v = void 0, g = void 0; y && (v = f[d], !((g = f[d + 1]).t - this.offsetTime > t));) {d < m - 1 ? d += 1 : y = !1;}if (a = d, !(h = 1 === v.h)) {if (t >= g.t - this.offsetTime) c = 1;else if (t < v.t - this.offsetTime) c = 0;else {var k = void 0;v.__fnct ? k = v.__fnct : (k = ob.getBezierEasing(v.o.x, v.o.y, v.i.x, v.i.y).get, v.__fnct = k), c = k((t - (v.t - this.offsetTime)) / (g.t - this.offsetTime - (v.t - this.offsetTime)));}o = g.s ? g.s[0] : v.e[0];}n = v.s[0];}for (s = e._length, r = n.i[0].length, i.lastIndex = a, p = 0; p < s; p += 1) {for (l = 0; l < r; l += 1) {u = h ? n.i[p][l] : n.i[p][l] + (o.i[p][l] - n.i[p][l]) * c, e.i[p][l] = u, u = h ? n.o[p][l] : n.o[p][l] + (o.o[p][l] - n.o[p][l]) * c, e.o[p][l] = u, u = h ? n.v[p][l] : n.v[p][l] + (o.v[p][l] - n.v[p][l]) * c, e.v[p][l] = u;}}}function interpolateShapeCurrentTime() {var t = this.comp.renderedFrame - this.offsetTime,e = this.keyframes[0].t - this.offsetTime,i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,s = this._caching.lastFrame;return s !== initFrame$1 && (s < e && t < e || i < s && i < t) || (this._caching.lastIndex = s < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv;}function resetShape() {this.paths = this.localShapeCollection;}function shapesEqual(t, e) {if (t._length !== e._length || t.c !== e.c) return !1;var i = void 0,s = t._length;for (i = 0; i < s; i += 1) {if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;}return !0;}function setVValue$1(t) {shapesEqual(this.v, t) || (this.v = factory.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);}function processEffectsSequence$1() {if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) {if (this.lock) this.setVValue(this.pv);else {this.lock = !0, this._mdf = !1;var t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,e = void 0,i = this.effectsSequence.length;for (e = 0; e < i; e += 1) {t = this.effectsSequence[e](t);}this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId;}} else this._mdf = !1;}function addEffect$1(t) {this.effectsSequence.push(t), this.container.addDynamicProperty(this);}var ShapeCollection = function () {function t() {classCallCheck(this, t), this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);}return createClass(t, [{ key: "addShape", value: function value(t) {this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;} }, { key: "releaseShapes", value: function value() {var t = void 0;for (t = 0; t < this._length; t += 1) {factory.release(this.shapes[t]);}this._length = 0;} }]), t;}(),_length = 0,_maxLength = 4,pool = createSizedArray(_maxLength);function newShapeCollection() {return _length ? pool[_length -= 1] : new ShapeCollection();}function release$2(t) {var e = void 0,i = t._length;for (e = 0; e < i; e += 1) {factory.release(t.shapes[e]);}t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1;}var ob$4 = { newShapeCollection: newShapeCollection, release: release$2 },ShapeExpressions = function () {function t() {classCallCheck(this, t), this.setGroupProperty = setGroupProperty, this.getValueAtTime = getStaticValueAtTime;}return createClass(t, [{ key: "vertices", value: function value(t, e) {this.k && this.getValue();var i = this.v;void 0 !== e && (i = this.getValueAtTime(e, 0));var s = void 0,r = i._length,a = i[t],n = i.v,o = createSizedArray(r);for (s = 0; s < r; s += 1) {o[s] = "i" === t || "o" === t ? [a[s][0] - n[s][0], a[s][1] - n[s][1]] : [a[s][0], a[s][1]];}return o;} }, { key: "points", value: function value(t) {return this.vertices("v", t);} }, { key: "inTangents", value: function value(t) {return this.vertices("i", t);} }, { key: "outTangents", value: function value(t) {return this.vertices("o", t);} }, { key: "isClosed", value: function value() {return this.v.c;} }, { key: "pointOnPath", value: function value(t, e) {var i = this.v;void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));for (var s = this._segmentsLength, r = s.lengths, a = s.totalLength * t, n = 0, o = r.length, h = 0, p = void 0; n < o;) {if (h + r[n].addedLength > a) {var l = n,c = i.c && n === o - 1 ? 0 : n + 1,u = (a - h) / r[n].addedLength;p = bez.getPointInSegment(i.v[l], i.v[c], i.o[l], i.i[c], u, r[n]);break;}h += r[n].addedLength, n += 1;}return p = p || (i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]);} }, { key: "vectorOnPath", value: function value(t, e, i) {t = 1 === t ? this.v.c ? 0 : .999 : t;var s = this.pointOnPath(t, e),r = this.pointOnPath(t + .001, e),a = r[0] - s[0],n = r[1] - s[1],o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o];} }, { key: "tangentOnPath", value: function value(t, e) {return this.vectorOnPath(t, e, "tangent");} }, { key: "normalOnPath", value: function value(t, e) {return this.vectorOnPath(t, e, "normal");} }]), t;}(),KeyframedShapeProperty = function () {function a(t, e, i) {classCallCheck(this, a);var s = possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));s.getShapeValueAtTime = getShapeValueAtTime, s.initiateExpression = ob$1.initiateExpression, s.propType = "shape", s.comp = t.comp, s.elem = t, s.container = t, s.offsetTime = t.data.st, s.keyframes = 3 === i ? e.pt.k : e.ks.k, s.k = !0, s.kf = !0;var r = s.keyframes[0].s[0].i.length;return s.v = factory.newElement(), s.v.setPathData(s.keyframes[0].s[0].c, r), s.pv = factory.clone(s.v), s.localShapeCollection = ob$4.newShapeCollection(), s.paths = s.localShapeCollection, s.paths.addShape(s.v), s.lastFrame = initFrame$1, s.reset = resetShape, s._caching = { lastFrame: initFrame$1, lastIndex: 0 }, s.effectsSequence = [interpolateShapeCurrentTime.bind(s)], s;}return inherits(a, ShapeExpressions), a;}();KeyframedShapeProperty.prototype.getValue = processEffectsSequence$1, KeyframedShapeProperty.prototype.interpolateShape = interpolateShape, KeyframedShapeProperty.prototype.setVValue = setVValue$1, KeyframedShapeProperty.prototype.addEffect = addEffect$1;var ShapeProperty = function () {function a(t, e, i) {classCallCheck(this, a);var s = possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));s.propType = "shape", s.comp = t.comp, s.container = t, s.elem = t, s.data = e, s.k = !1, s.kf = !1, s._mdf = !1;var r = 3 === i ? e.pt.k : e.ks.k;return s.v = factory.clone(r), s.pv = factory.clone(s.v), s.localShapeCollection = ob$4.newShapeCollection(), s.paths = s.localShapeCollection, s.paths.addShape(s.v), s.reset = resetShape, s.effectsSequence = [], s;}return inherits(a, ShapeExpressions), a;}();ShapeProperty.prototype.interpolateShape = interpolateShape, ShapeProperty.prototype.getValue = processEffectsSequence$1, ShapeProperty.prototype.setVValue = setVValue$1, ShapeProperty.prototype.addEffect = addEffect$1;var _class$1,RectShapeProperty = function () {function s(t, e) {classCallCheck(this, s);var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));return i.reset = resetShape, i.v = factory.newElement(), i.v.c = !0, i.localShapeCollection = ob$4.newShapeCollection(), i.localShapeCollection.addShape(i.v), i.paths = i.localShapeCollection, i.elem = t, i.comp = t.comp, i.frameId = -1, i.d = e.d, i.initDynamicPropertyContainer(t), i.p = PropertyFactory$1.getProp(t, e.p, 1, 0, i), i.s = PropertyFactory$1.getProp(t, e.s, 1, 0, i), i.r = PropertyFactory$1.getProp(t, e.r, 0, 0, i), i.dynamicProperties.length ? i.k = !0 : (i.k = !1, i.convertRectToPath()), i;}return inherits(s, DynamicPropertyContainer), createClass(s, [{ key: "convertRectToPath", value: function value() {var t = this.p.v[0],e = this.p.v[1],i = this.s.v[0] / 2,s = this.s.v[1] / 2,r = bm_min(i, s, this.r.v),a = r * (1 - roundCorner);this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, !0), this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, !0), this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, !0), this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, !0), this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, !0), this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, !0)));} }, { key: "getValue", value: function value() {this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());} }]), s;}(),cPoint = .5519,EllShapeProperty = function () {function s(t, e) {classCallCheck(this, s);var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));return i.reset = resetShape, i.v = factory.newElement(), i.v.setPathData(!0, 4), i.localShapeCollection = ob$4.newShapeCollection(), i.paths = i.localShapeCollection, i.localShapeCollection.addShape(i.v), i.d = e.d, i.elem = t, i.comp = t.comp, i.frameId = -1, i.initDynamicPropertyContainer(t), i.p = PropertyFactory$1.getProp(t, e.p, 1, 0, i), i.s = PropertyFactory$1.getProp(t, e.s, 1, 0, i), i.dynamicProperties.length ? i.k = !0 : (i.k = !1, i.convertEllToPath()), i;}return inherits(s, DynamicPropertyContainer), createClass(s, [{ key: "getValue", value: function value() {this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());} }, { key: "convertEllToPath", value: function value() {var t = this.p.v[0],e = this.p.v[1],i = this.s.v[0] / 2,s = this.s.v[1] / 2,r = 3 !== this.d,a = this.v;a.v[0][0] = t, a.v[0][1] = e - s, a.v[1][0] = r ? t + i : t - i, a.v[1][1] = e, a.v[2][0] = t, a.v[2][1] = e + s, a.v[3][0] = r ? t - i : t + i, a.v[3][1] = e, a.i[0][0] = r ? t - i * cPoint : t + i * cPoint, a.i[0][1] = e - s, a.i[1][0] = r ? t + i : t - i, a.i[1][1] = e - s * cPoint, a.i[2][0] = r ? t + i * cPoint : t - i * cPoint, a.i[2][1] = e + s, a.i[3][0] = r ? t - i : t + i, a.i[3][1] = e + s * cPoint, a.o[0][0] = r ? t + i * cPoint : t - i * cPoint, a.o[0][1] = e - s, a.o[1][0] = r ? t + i : t - i, a.o[1][1] = e + s * cPoint, a.o[2][0] = r ? t - i * cPoint : t + i * cPoint, a.o[2][1] = e + s, a.o[3][0] = r ? t - i : t + i, a.o[3][1] = e - s * cPoint;} }]), s;}(),degToRads$3 = Math.PI / 180,StarShapeProperty = function () {function s(t, e) {classCallCheck(this, s);var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));return i.reset = resetShape, i.v = factory.newElement(), i.v.setPathData(!0, 0), i.elem = t, i.comp = t.comp, i.data = e, i.frameId = -1, i.d = e.d, i.initDynamicPropertyContainer(t), 1 === e.sy ? (i.ir = PropertyFactory$1.getProp(t, e.ir, 0, 0, i), i.is = PropertyFactory$1.getProp(t, e.is, 0, .01, i), i.convertToPath = i.convertStarToPath) : i.convertToPath = i.convertPolygonToPath, i.pt = PropertyFactory$1.getProp(t, e.pt, 0, 0, i), i.p = PropertyFactory$1.getProp(t, e.p, 1, 0, i), i.r = PropertyFactory$1.getProp(t, e.r, 0, degToRads$3, i), i.or = PropertyFactory$1.getProp(t, e.or, 0, 0, i), i.os = PropertyFactory$1.getProp(t, e.os, 0, .01, i), i.localShapeCollection = ob$4.newShapeCollection(), i.localShapeCollection.addShape(i.v), i.paths = i.localShapeCollection, i.dynamicProperties.length ? i.k = !0 : (i.k = !1, i.convertToPath()), i;}return inherits(s, DynamicPropertyContainer), createClass(s, [{ key: "getValue", value: function value() {this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());} }, { key: "convertStarToPath", value: function value() {var t = 2 * Math.floor(this.pt.v),e = 2 * Math.PI / t,i = !0,s = this.or.v,r = this.ir.v,a = this.os.v,n = this.is.v,o = 2 * Math.PI * s / (2 * t),h = 2 * Math.PI * r / (2 * t),p = void 0,l = void 0,c = void 0,u = void 0,f = -Math.PI / 2;f += this.r.v;var d = 3 === this.data.d ? -1 : 1;for (p = this.v._length = 0; p < t; p += 1) {c = i ? a : n, u = i ? o : h;var m = (l = i ? s : r) * Math.cos(f),y = l * Math.sin(f),v = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),g = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - v * u * c * d, y - g * u * c * d, m + v * u * c * d, y + g * u * c * d, p, !0), i = !i, f += e * d;}} }, { key: "convertPolygonToPath", value: function value() {var t = Math.floor(this.pt.v),e = 2 * Math.PI / t,i = this.or.v,s = this.os.v,r = 2 * Math.PI * i / (4 * t),a = void 0,n = -Math.PI / 2,o = 3 === this.data.d ? -1 : 1;for (n += this.r.v, a = this.v._length = 0; a < t; a += 1) {var h = i * Math.cos(n),p = i * Math.sin(n),l = 0 === h && 0 === p ? 0 : p / Math.sqrt(h * h + p * p),c = 0 === h && 0 === p ? 0 : -h / Math.sqrt(h * h + p * p);h += +this.p.v[0], p += +this.p.v[1], this.v.setTripleAt(h, p, h - l * r * s * o, p - c * r * s * o, h + l * r * s * o, p + c * r * s * o, a, !0), n += e * o;}this.paths.length = 0, this.paths[0] = this.v;} }]), s;}();function _applyDecoratedDescriptor$1(i, s, t, e, r) {var a = {};return Object.keys(e).forEach(function (t) {a[t] = e[t];}), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = t.slice().reverse().reduce(function (t, e) {return e(i, s, t) || t;}, a), r && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(r) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, s, a), a = null), a;}var ShapePropertyFactory = (_applyDecoratedDescriptor$1((_class$1 = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "getShapeProp", value: function value(t, e, i) {var s = void 0;3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new KeyframedShapeProperty(t, e, i) : new ShapeProperty(t, e, i) : 5 === i ? s = new RectShapeProperty(t, e) : 6 === i ? s = new EllShapeProperty(t, e) : 7 === i && (s = new StarShapeProperty(t, e));return s.k && t.addDynamicProperty(s), s;} }, { key: "getConstructorFunction", value: function value() {return ShapeProperty;} }, { key: "getKeyframedConstructorFunction", value: function value() {return KeyframedShapeProperty;} }]), t;}()).prototype, "getShapeProp", [GetShapeProp], Object.getOwnPropertyDescriptor(_class$1.prototype, "getShapeProp"), _class$1.prototype), _class$1),ShapePropertyFactory$1 = new ShapePropertyFactory(),CVMaskElement = function () {function a(t, e) {classCallCheck(this, a), this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);var i = void 0,s = this.masksProperties.length,r = !1;for (i = 0; i < s; i++) {"n" !== this.masksProperties[i].mode && (r = !0), this.viewData[i] = ShapePropertyFactory$1.getShapeProp(this.element, this.masksProperties[i], 3);}(this.hasMasks = r) && this.element.addRenderableComponent(this);}return createClass(a, [{ key: "renderFrame", value: function value() {if (this.hasMasks) {var t = this.element.finalTransform.mat,e = this.element.canvasContext,i = void 0,s = this.masksProperties.length,r = void 0,a = void 0,n = void 0;for (e.beginPath(), i = 0; i < s; i++) {if ("n" !== this.masksProperties[i].mode) {this.masksProperties[i].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[i].v, r = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(r[0], r[1]);var o = void 0,h = n._length;for (o = 1; o < h; o++) {a = t.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);}a = t.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);}}this.element.globalData.renderer.save(!0), e.clip();}} }, { key: "getMaskProperty", value: function value(t) {return this.viewData[t].prop;} }, { key: "destroy", value: function value() {this.element = null;} }]), a;}(),blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };function getBlendMode(t) {return blendModeEnums[t] || "";}var CVBaseElement = function () {function t() {classCallCheck(this, t), this.mHelper = new Matrix();}return createClass(t, [{ key: "createElements", value: function value() {} }, { key: "initRendererElement", value: function value() {} }, { key: "createContainerElements", value: function value() {this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);} }, { key: "createContent", value: function value() {} }, { key: "setBlendMode", value: function value() {var t = this.globalData;if (t.blendMode !== this.data.bm) {t.blendMode = this.data.bm;var e = getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation = e;}} }, { key: "createRenderableComponents", value: function value() {this.maskManager = new CVMaskElement(this.data, this);} }, { key: "addMasks", value: function value() {this.maskManager = new CVMaskElement(this.data, this);} }, { key: "hideElement", value: function value() {this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);} }, { key: "showElement", value: function value() {this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);} }, { key: "renderFrame", value: function value() {if (!this.hidden && !this.data.hd) {this.renderTransform(), this.renderRenderable(), this.setBlendMode();var t = 0 === this.data.ty;this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);}} }, { key: "destroy", value: function value() {this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();} }, { key: "hide", value: function value() {this.hideElement();} }, { key: "show", value: function value() {this.showElement();} }]), t;}(),CVCompElementClass = void 0,CVCompElementFactory = function CVCompElementFactory(t) {if (CVCompElementClass) return CVCompElementClass;function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.completeLayers = !1, s.layers = t.layers || [], s.pendingElements = [], s.elements = Array.apply(null, { length: s.layers.length }), s.initElement(t, e, i), s.tm = t.tm ? PropertyFactory$1.getProp(s, t.tm, 0, e.frameRate, s) : { _placeholder: !0 }, s;}var e;return e = Mixin(t, ICompElement, CVBaseElement), inherits(r, e), createClass(r, [{ key: "renderInnerContent", value: function value() {var t = void 0;for (t = this.layers.length - 1; 0 <= t; t -= 1) {(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();}} }, { key: "destroy", value: function value() {var t = void 0;for (t = this.layers.length - 1; 0 <= t; t -= 1) {this.elements[t] && this.elements[t].destroy();}this.layers = null, this.elements = null;} }]), CVCompElementClass = r;},CVContextData = function () {function e() {classCallCheck(this, e), this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1;var t = void 0;for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) {this.saved[t] = createTypedArray("float32", 16);}this._length = 15;}return createClass(e, [{ key: "duplicate", value: function value() {var t = 2 * this._length,e = this.savedOp;this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);var i = 0;for (i = this._length; i < t; i += 1) {this.saved[i] = createTypedArray("float32", 16);}this._length = t;} }, { key: "reset", value: function value() {this.cArrPos = 0, this.cTr.reset(), this.cO = 1;} }]), e;}(),SVGBaseElement = function t() {classCallCheck(this, t);},IImageElement = function (t) {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.assetData = e.getAssetData(t.refId), s.initElement(t, e, i), s;}return inherits(r, t), createClass(r, [{ key: "createContent", value: function value() {console.warn("createContent");} }]), r;}(Mixin(BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement)),CVImageElement = function (t) {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.initElement = RenderableDOMElement.prototype.initElement, s.prepareFrame = IImageElement.prototype.prepareFrame, s.failed = !1, s.assetData = e.getAssetData(t.refId), s.img = e.imageLoader.getImage(s.assetData), s.renderer = i, s.initElement(t, e, i), s;}return inherits(r, t), createClass(r, [{ key: "createContent", value: function value() {} }, { key: "renderInnerContent", value: function value() {!this.failed && this.img.src && (this.img.src instanceof Uint8ClampedArray ? this.canvasContext.canvasPutImageData({ canvasId: this.canvasContext.canvasId || "", data: this.img.src, x: 0, y: 0 }) : !this.img.width || this.assetData.w === this.img.width && this.assetData.h === this.img.height ? this.canvasContext.drawImage(this.img.src || this.img, 0, 0) : this.canvasContext.drawImage(this.img.src || this.img, 0, 0, this.assetData.w, this.assetData.h));} }, { key: "destroy", value: function value() {this.img = null;} }]), r;}(Mixin(BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement)),CVShapeData = function () {function h(t, e, i, s) {classCallCheck(this, h), this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];var r = 4;"rc" === e.ty ? r = 5 : "el" === e.ty ? r = 6 : "sr" === e.ty && (r = 7), this.sh = ShapePropertyFactory$1.getShapeProp(t, e, r, t);var a = void 0,n = i.length,o = void 0;for (a = 0; a < n; a += 1) {i[a].closed || (o = { transforms: s.addTransformSequence(i[a].transforms), trNodes: [] }, this.styledShapes.push(o), i[a].elements.push(o));}}return createClass(h, [{ key: "setAsAnimated", value: function value() {this._isAnimated = !0;} }]), h;}(),ProcessedElement = function t(e, i) {classCallCheck(this, t), this.elem = e, this.pos = i;},IShapeElement = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "addShapeToModifiers", value: function value(t) {var e = void 0,i = this.shapeModifiers.length;for (e = 0; e < i; e += 1) {this.shapeModifiers[e].addShape(t);}} }, { key: "isShapeInAnimatedModifiers", value: function value(t) {for (var e = this.shapeModifiers.length; 0 < e;) {if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;}return !1;} }, { key: "renderModifiers", value: function value() {if (this.shapeModifiers.length) {var t = void 0,e = this.shapes.length;for (t = 0; t < e; t += 1) {this.shapes[t].sh.reset();}for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) {this.shapeModifiers[t].processShapes(this._isFirstFrame);}}} }, { key: "searchProcessedElement", value: function value(t) {for (var e = this.processedElements, i = 0, s = e.length; i < s;) {if (e[i].elem === t) return e[i].pos;i += 1;}return 0;} }, { key: "addProcessedElement", value: function value(t, e) {for (var i = this.processedElements, s = i.length; s;) {if (i[s -= 1].elem === t) return void (i[s].pos = e);}i.push(new ProcessedElement(t, e));} }, { key: "prepareFrame", value: function value(t) {this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);} }, { key: "lcEnum", get: function get() {return { 1: "butt", 2: "round", 3: "square" };} }, { key: "ljEnum", get: function get() {return { 1: "miter", 2: "round", 3: "butt" };} }]), t;}(),DashProperty = function () {function h(t, e, i, s) {classCallCheck(this, h);var r = possibleConstructorReturn(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this));r.elem = t, r.frameId = -1, r.dataProps = createSizedArray(e.length), r.renderer = i, r.k = !1, r.dashStr = "", r.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), r.dashoffset = createTypedArray("float32", 1), r.initDynamicPropertyContainer(s);var a = void 0,n = e.length || 0,o = void 0;for (a = 0; a < n; a += 1) {o = PropertyFactory$1.getProp(t, e[a].v, 0, 0, r), r.k = o.k || r.k, r.dataProps[a] = { n: e[a].n, p: o };}return r.k || r.getValue(!0), r._isAnimated = r.k, r;}return inherits(h, DynamicPropertyContainer), createClass(h, [{ key: "getValue", value: function value(t) {if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {var e = 0,i = this.dataProps.length;for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) {"o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;}}} }]), h;}(),ShapeModifier = function () {function t() {return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));}return inherits(t, DynamicPropertyContainer), createClass(t, [{ key: "initModifierProperties", value: function value() {} }, { key: "addShapeToModifier", value: function value() {} }, { key: "addShape", value: function value(t) {if (!this.closed) {t.sh.container.addDynamicProperty(t.sh);var e = { shape: t.sh, data: t, localShapeCollection: ob$4.newShapeCollection() };this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();}} }, { key: "init", value: function value(t, e) {this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = -999999, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);} }, { key: "processKeys", value: function value() {this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());} }]), t;}(),modifiers = {},ShapeModifiers = { registerModifier: function registerModifier(t, e) {modifiers[t] || (modifiers[t] = e);}, getModifier: function getModifier(t, e, i) {return new modifiers[t](e, i);} },GradientProperty = function () {function s(t, e) {classCallCheck(this, s), this.container = t, this.prop = PropertyFactory$1.getProp(t, e.k, 1, null, this), this.data = e, this.k = this.prop.k, this.c = createTypedArray("uint8c", 4 * e.p);var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this._mdf = !1, this.getValue(!0);}return createClass(s, [{ key: "addDynamicProperty", value: function value() {this.container.addDynamicProperty(this);} }, { key: "comparePoints", value: function value(t, e) {for (var i = 0, s = this.o.length / 2; i < s;) {if (.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;i += 1;}return !0;} }, { key: "checkCollapsable", value: function value() {if (this.o.length / 2 != this.c.length / 4) return !1;if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e;) {if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;t += 1;} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;return !0;} }, { key: "getValue", value: function value(t) {if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {var e = void 0,i = 4 * this.data.p,s = void 0,r = void 0;for (e = 0; e < i; e += 1) {s = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * s), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);}if (this.o.length) for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) {s = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);}this._mdf = !t;}} }]), s;}(),RoundCornersModifier = function () {function t() {return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));}return inherits(t, ShapeModifier), createClass(t, [{ key: "initModifierProperties", value: function value(t, e) {this.getValue = this.processKeys, this.rd = PropertyFactory$1.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;} }, { key: "processPath", value: function value(t, e) {var i = factory.newElement();i.c = t.c;var s = void 0,r = t._length,a = void 0,n = void 0,o = void 0,h = void 0,p = void 0,l = void 0,c = 0,u = void 0,f = void 0,d = void 0,m = void 0,y = void 0,v = void 0;for (s = 0; s < r; s += 1) {a = t.v[s], o = t.o[s], n = t.i[s], a[0] === o[0] && a[1] === o[1] && a[0] === n[0] && a[1] === n[1] ? 0 !== s && s !== r - 1 || t.c ? (h = 0 === s ? t.v[r - 1] : t.v[s - 1], l = (p = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(p / 2, e) / p : 0, u = y = a[0] + (h[0] - a[0]) * l, f = v = a[1] - (a[1] - h[1]) * l, d = u - (u - a[0]) * roundCorner, m = f - (f - a[1]) * roundCorner, i.setTripleAt(u, f, d, m, y, v, c), c += 1, h = s === r - 1 ? t.v[0] : t.v[s + 1], l = (p = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(p / 2, e) / p : 0, u = d = a[0] + (h[0] - a[0]) * l, f = m = a[1] + (h[1] - a[1]) * l, y = u - (u - a[0]) * roundCorner, v = f - (f - a[1]) * roundCorner, i.setTripleAt(u, f, d, m, y, v, c)) : i.setTripleAt(a[0], a[1], o[0], o[1], n[0], n[1], c) : i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], c), c += 1;}return i;} }, { key: "processShapes", value: function value(t) {var e = void 0,i = void 0,s = this.shapes.length,r = void 0,a = void 0,n = this.rd.v;if (0 !== n) {var o = void 0,h = void 0;for (i = 0; i < s; i += 1) {if (h = (o = this.shapes[i]).localShapeCollection, o.shape._mdf || this._mdf || t) for (h.releaseShapes(), o.shape._mdf = !0, e = o.shape.paths.shapes, a = o.shape.paths._length, r = 0; r < a; r += 1) {h.addShape(this.processPath(e[r], n));}o.shape.paths = o.localShapeCollection;}}this.dynamicProperties.length || (this._mdf = !1);} }]), t;}(),MouseModifier = function () {function t() {return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));}return inherits(t, ShapeModifier), createClass(t, [{ key: "processKeys", value: function value(t) {this.elem.globalData.frameId === this.frameId && !t || (this._mdf = !0);} }, { key: "addShapeToModifier", value: function value() {this.positions.push([]);} }, { key: "processPath", value: function value(t, e, i) {var s = void 0,r = t.v.length,a = [],n = [],o = [],h = void 0,p = void 0,l = void 0;for (s = 0; s < r; s += 1) {i.v[s] || (i.v[s] = [t.v[s][0], t.v[s][1]], i.o[s] = [t.o[s][0], t.o[s][1]], i.i[s] = [t.i[s][0], t.i[s][1]], i.distV[s] = 0, i.distO[s] = 0, i.distI[s] = 0), h = Math.atan2(t.v[s][1] - e[1], t.v[s][0] - e[0]), p = e[0] - i.v[s][0], l = e[1] - i.v[s][1];var c = Math.sqrt(p * p + l * l);i.distV[s] += (c - i.distV[s]) * this.data.dc, i.v[s][0] = Math.cos(h) * Math.max(0, this.data.maxDist - i.distV[s]) / 2 + t.v[s][0], i.v[s][1] = Math.sin(h) * Math.max(0, this.data.maxDist - i.distV[s]) / 2 + t.v[s][1], h = Math.atan2(t.o[s][1] - e[1], t.o[s][0] - e[0]), p = e[0] - i.o[s][0], l = e[1] - i.o[s][1], c = Math.sqrt(p * p + l * l), i.distO[s] += (c - i.distO[s]) * this.data.dc, i.o[s][0] = Math.cos(h) * Math.max(0, this.data.maxDist - i.distO[s]) / 2 + t.o[s][0], i.o[s][1] = Math.sin(h) * Math.max(0, this.data.maxDist - i.distO[s]) / 2 + t.o[s][1], h = Math.atan2(t.i[s][1] - e[1], t.i[s][0] - e[0]), p = e[0] - i.i[s][0], l = e[1] - i.i[s][1], c = Math.sqrt(p * p + l * l), i.distI[s] += (c - i.distI[s]) * this.data.dc, i.i[s][0] = Math.cos(h) * Math.max(0, this.data.maxDist - i.distI[s]) / 2 + t.i[s][0], i.i[s][1] = Math.sin(h) * Math.max(0, this.data.maxDist - i.distI[s]) / 2 + t.i[s][1], a.push(i.v[s]), n.push(i.o[s]), o.push(i.i[s]);}return { v: a, o: n, i: o, c: t.c };} }, { key: "processShapes", value: function value() {var t = this.elem.globalData.mouseX,e = this.elem.globalData.mouseY,i = void 0,s = void 0,r = this.shapes.length,a = void 0,n = void 0;if (t) {var o = this.elem.globalToLocal([t, e, 0]),h = void 0,p = [],l = this.shapes,c = this._mdf,u = this.positions;for (s = 0; s < r; s += 1) {if ((h = l[s]).shape._mdf || c) {for (h.shape._mdf = !0, n = (i = h.shape.paths).length, a = 0; a < n; a += 1) {u[s][a] || (this.positions[s][a] = { v: [], o: [], i: [], distV: [], distO: [], distI: [] }), p.push(this.processPath(i[a], o, this.positions[s][a]));}h.shape.paths = p, h.last = p;} else h.shape.paths = h.last;}}} }, { key: "initModifierProperties", value: function value(t, e) {this.getValue = this.processKeys, this.data = e, this.positions = [];} }]), t;}(),RepeaterModifier = function () {function t() {return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));}return inherits(t, ShapeModifier), createClass(t, [{ key: "initModifierProperties", value: function value(t, e) {this.getValue = this.processKeys, this.c = PropertyFactory$1.getProp(t, e.c, 0, null, this), this.o = PropertyFactory$1.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory$1.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory$1.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();} }, { key: "applyTransforms", value: function value(t, e, i, s, r, a) {var n = a ? -1 : 1,o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r),h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * r), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);} }, { key: "init", value: function value(t, e, i, s) {for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); 0 < i;) {i -= 1, this._elements.unshift(e[i]);}this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);} }, { key: "resetElements", value: function value(t) {var e = void 0,i = t.length;for (e = 0; e < i; e += 1) {t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it);}} }, { key: "cloneElements", value: function value(t) {var e = JSON.parse(JSON.stringify(t));return this.resetElements(e), e;} }, { key: "changeGroupRender", value: function value(t, e) {var i = void 0,s = t.length;for (i = 0; i < s; i += 1) {t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);}} }, { key: "processShapes", value: function value(t) {var e = void 0,i = void 0,s = void 0,r = void 0,a = void 0;if (this._mdf || t) {var n = Math.ceil(this.c.v);if (this._groups.length < n) {for (; this._groups.length < n;) {var o = { it: this.cloneElements(this._elements), ty: "gr" };o.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;}this.elem.reloadShapes();}var h = void (a = 0);for (s = 0; s <= this._groups.length - 1; s += 1) {h = a < n, this._groups[s]._render = h, this.changeGroupRender(this._groups[s].it, h), a += 1;}this._currentCopies = n;var p = this.o.v,l = p % 1,c = 0 < p ? Math.floor(p) : Math.ceil(p),u = this.pMatrix.props,f = this.rMatrix.props,d = this.sMatrix.props;this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();var m = 0;if (0 < p) {for (; m < c;) {this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), m += 1;}l && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, l, !1), m += l);} else if (p < 0) {for (; c < m;) {this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), m -= 1;}l && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -l, !0), m -= l);}s = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, a = this._currentCopies;for (var y = void 0, v = void 0; a;) {if (v = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== m) {for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), y = 0; y < v; y += 1) {i[y] = this.matrix.props[y];}this.matrix.reset();} else for (this.matrix.reset(), y = 0; y < v; y += 1) {i[y] = this.matrix.props[y];}m += 1, a -= 1, s += r;}} else for (a = this._currentCopies, s = 0, r = 1; a;) {i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, s += r;}} }, { key: "addShape", value: function value() {} }]), t;}(),TrimModifier = function () {function t() {return classCallCheck(this, t), possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));}return inherits(t, ShapeModifier), createClass(t, [{ key: "initModifierProperties", value: function value(t, e) {this.s = PropertyFactory$1.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory$1.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory$1.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;} }, { key: "addShapeToModifier", value: function value(t) {t.pathsData = [];} }, { key: "calculateShapeEdges", value: function value(t, e, i, s, r) {var a = [];e <= 1 ? a.push({ s: t, e: e }) : 1 <= t ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));var n = [],o = void 0,h = a.length,p = void 0;for (o = 0; o < h; o += 1) {if ((p = a[o]).e * r < s || p.s * r > s + i) ;else {var l = void 0,c = void 0;l = p.s * r <= s ? 0 : (p.s * r - s) / i, c = p.e * r >= s + i ? 1 : (p.e * r - s) / i, n.push([l, c]);}}return n.length || n.push([0, 0]), n;} }, { key: "releasePathsData", value: function value(t) {var e = void 0,i = t.length;for (e = 0; e < i; e += 1) {segments_length_pool.release(t[e]);}return t.length = 0, t;} }, { key: "processShapes", value: function value(t) {var e = void 0,i = void 0;if (this._mdf || t) {var s = this.o.v % 360 / 360;if (s < 0 && (s += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s, (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s) < e) {var r = e;e = i, i = r;}e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i;} else e = this.sValue, i = this.eValue;var a = void 0,n = void 0,o = this.shapes.length,h = void 0,p = void 0,l = void 0,c = void 0,u = void 0,f = 0;if (i === e) for (n = 0; n < o; n += 1) {this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;} else if (1 === i && 0 === e || 0 === i && 1 === e) {if (this._mdf) for (n = 0; n < o; n += 1) {this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;}} else {var d = [],m = void 0,y = void 0;for (n = 0; n < o; n += 1) {if ((m = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {if (p = (a = m.shape.paths)._length, u = 0, !m.shape._mdf && m.pathsData.length) u = m.totalShapeLength;else {for (l = this.releasePathsData(m.pathsData), h = 0; h < p; h += 1) {c = bez.getSegmentsLength(a.shapes[h]), l.push(c), u += c.totalLength;}m.totalShapeLength = u, m.pathsData = l;}f += u, m.shape._mdf = !0;} else m.shape.paths = m.localShapeCollection;}var v = e,g = i,k = 0,x = void 0;for (n = o - 1; 0 <= n; n -= 1) {if ((m = this.shapes[n]).shape._mdf) {for ((y = m.localShapeCollection).releaseShapes(), 2 === this.m && 1 < o ? (x = this.calculateShapeEdges(e, i, m.totalShapeLength, k, f), k += m.totalShapeLength) : x = [[v, g]], p = x.length, h = 0; h < p; h += 1) {v = x[h][0], g = x[h][1], d.length = 0, g <= 1 ? d.push({ s: m.totalShapeLength * v, e: m.totalShapeLength * g }) : 1 <= v ? d.push({ s: m.totalShapeLength * (v - 1), e: m.totalShapeLength * (g - 1) }) : (d.push({ s: m.totalShapeLength * v, e: m.totalShapeLength }), d.push({ s: 0, e: m.totalShapeLength * (g - 1) }));var b = this.addShapes(m, d[0]);if (d[0].s !== d[0].e) {if (1 < d.length) if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {var P = b.pop();this.addPaths(b, y), b = this.addShapes(m, d[1], P);} else this.addPaths(b, y), b = this.addShapes(m, d[1]);this.addPaths(b, y);}}m.shape.paths = y;}}}} }, { key: "addPaths", value: function value(t, e) {var i = void 0,s = t.length;for (i = 0; i < s; i += 1) {e.addShape(t[i]);}} }, { key: "addSegment", value: function value(t, e, i, s, r, a, n) {r.setXYAt(e[0], e[1], "o", a), r.setXYAt(i[0], i[1], "i", a + 1), n && r.setXYAt(t[0], t[1], "v", a), r.setXYAt(s[0], s[1], "v", a + 1);} }, { key: "addSegmentFromArray", value: function value(t, e, i, s) {e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);} }, { key: "addShapes", value: function value(t, e, i) {var s = t.pathsData,r = t.shape.paths.shapes,a = void 0,n = t.shape.paths._length,o = void 0,h = void 0,p = 0,l = void 0,c = void 0,u = void 0,f = void 0,d = [],m = void 0,y = !0;for (m = i ? (c = i._length, i._length) : (i = factory.newElement(), c = 0), d.push(i), a = 0; a < n; a += 1) {for (u = s[a].lengths, i.c = r[a].c, h = r[a].c ? u.length : u.length + 1, o = 1; o < h; o += 1) {if (p + (l = u[o - 1]).addedLength < e.s) p += l.addedLength, i.c = !1;else {if (p > e.e) {i.c = !1;break;}e.s <= p && e.e >= p + l.addedLength ? (this.addSegment(r[a].v[o - 1], r[a].o[o - 1], r[a].i[o], r[a].v[o], i, c, y), y = !1) : (f = bez.getNewSegment(r[a].v[o - 1], r[a].v[o], r[a].o[o - 1], r[a].i[o], (e.s - p) / l.addedLength, (e.e - p) / l.addedLength, u[o - 1]), this.addSegmentFromArray(f, i, c, y), y = !1, i.c = !1), p += l.addedLength, c += 1;}}if (r[a].c && u.length) {if (l = u[o - 1], p <= e.e) {var v = u[o - 1].addedLength;e.s <= p && e.e >= p + v ? (this.addSegment(r[a].v[o - 1], r[a].o[o - 1], r[a].i[0], r[a].v[0], i, c, y), y = !1) : (f = bez.getNewSegment(r[a].v[o - 1], r[a].v[0], r[a].o[o - 1], r[a].i[0], (e.s - p) / v, (e.e - p) / v, u[o - 1]), this.addSegmentFromArray(f, i, c, y), y = !1, i.c = !1);} else i.c = !1;p += l.addedLength, c += 1;}if (i._length && (i.setXYAt(i.v[m][0], i.v[m][1], "i", m), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), p > e.e) break;a < n - 1 && (i = factory.newElement(), y = !0, d.push(i), c = 0);}return d;} }]), t;}(),ShapeTransformManager = function () {function t() {classCallCheck(this, t), this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;}return createClass(t, [{ key: "addTransformSequence", value: function value(t) {var e = void 0,i = t.length,s = "_";for (e = 0; e < i; e += 1) {s += t[e].transform.key + "_";}var r = this.sequences[s];return r || (r = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: !1 }, this.sequences[s] = r, this.sequenceList.push(r)), r;} }, { key: "processSequence", value: function value(t, e) {for (var i = 0, s = t.transforms.length, r = e; i < s && !e;) {if (t.transforms[i].transform.mProps._mdf) {r = !0;break;}i += 1;}if (r) {var a = void 0;for (t.finalTransform.reset(), i = s - 1; 0 <= i; i -= 1) {a = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);}}t._mdf = r;} }, { key: "processSequences", value: function value(t) {var e = void 0,i = this.sequenceList.length;for (e = 0; e < i; e += 1) {this.processSequence(this.sequenceList[e], t);}} }, { key: "getNewKey", value: function value() {return "_" + this.transform_key_count++;} }]), t;}();ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("ms", MouseModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("tm", TrimModifier);var degToRads$4 = Math.PI / 180,CVShapeElement = function (t) {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.initElement = RenderableDOMElement.prototype.initElement, s.transformHelper = { opacity: 1, _opMdf: !1 }, s.dashResetter = [], s.shapes = [], s.shapesData = t.shapes, s.stylesList = [], s.itemsData = [], s.prevViewData = [], s.shapeModifiers = [], s.processedElements = [], s.transformsManager = new ShapeTransformManager(), s.initElement(t, e, i), s;}return inherits(r, t), createClass(r, [{ key: "createContent", value: function value() {this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);} }, { key: "createStyleElement", value: function value(t, e) {var i = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: !0 === t.hd },s = {};if ("fl" === t.ty || "st" === t.ty ? (s.c = PropertyFactory$1.getProp(this, t.c, 1, 255, this), s.c.k || (i.co = "rgb(" + bm_floor(s.c.v[0]) + "," + bm_floor(s.c.v[1]) + "," + bm_floor(s.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (s.s = PropertyFactory$1.getProp(this, t.s, 1, null, this), s.e = PropertyFactory$1.getProp(this, t.e, 1, null, this), s.h = PropertyFactory$1.getProp(this, t.h || { k: 0 }, 0, .01, this), s.a = PropertyFactory$1.getProp(this, t.a || { k: 0 }, 0, degToRads$4, this), s.g = new GradientProperty(this, t.g, this)), s.o = PropertyFactory$1.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 === t.lj && (i.ml = t.ml), s.w = PropertyFactory$1.getProp(this, t.w, 0, null, this), s.w.k || (i.wi = s.w.v), t.d) {var r = new DashProperty(this, t.d, "canvas", this);s.d = r, s.d.k || (i.da = s.d.dashArray, i.do = s.d.dashoffset[0]);}} else i.r = 2 === t.r ? "evenodd" : "nonzero";return this.stylesList.push(i), s.style = i, s;} }, { key: "createGroupElement", value: function value() {return { it: [], prevViewData: [] };} }, { key: "createTransformElement", value: function value(t) {return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory$1.getProp(this, t.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };} }, { key: "createShapeElement", value: function value(t) {var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);return this.shapes.push(e), this.addShapeToModifiers(e), e;} }, { key: "reloadShapes", value: function value() {this._isFirstFrame = !0;var t = void 0,e = this.itemsData.length;for (t = 0; t < e; t += 1) {this.prevViewData[t] = this.itemsData[t];}for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) {this.dynamicProperties[t].getValue();}this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);} }, { key: "addTransformToStyleList", value: function value(t) {var e = void 0,i = this.stylesList.length;for (e = 0; e < i; e += 1) {this.stylesList[e].closed || this.stylesList[e].transforms.push(t);}} }, { key: "removeTransformFromStyleList", value: function value() {var t = void 0,e = this.stylesList.length;for (t = 0; t < e; t += 1) {this.stylesList[t].closed || this.stylesList[t].transforms.pop();}} }, { key: "closeStyles", value: function value(t) {var e = void 0,i = t.length;for (e = 0; e < i; e += 1) {t[e].closed = !0;}} }, { key: "searchShapes", value: function value(t, e, i, s, r) {var a = void 0,n = t.length - 1,o = void 0,h = void 0,p = [],l = [],c = void 0,u = void 0,f = void 0,d = [].concat(r);for (a = n; 0 <= a; a -= 1) {if ((c = this.searchProcessedElement(t[a])) ? e[a] = i[c - 1] : t[a]._shouldRender = s, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) c ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), p.push(e[a].style);else if ("gr" === t[a].ty) {if (c) for (h = e[a].it.length, o = 0; o < h; o += 1) {e[a].prevViewData[o] = e[a].it[o];} else e[a] = this.createGroupElement(t[a]);this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, d);} else "tr" === t[a].ty ? (c || (f = this.createTransformElement(t[a]), e[a] = f), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? c || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty ? (c ? (u = e[a]).closed = !1 : ((u = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = u, this.shapeModifiers.push(u)), l.push(u)) : "rp" === t[a].ty && (c ? (u = e[a]).closed = !0 : (u = ShapeModifiers.getModifier(t[a].ty), (e[a] = u).init(this, t, a, e), this.shapeModifiers.push(u), s = !1), l.push(u));this.addProcessedElement(t[a], a + 1);}for (this.removeTransformFromStyleList(), this.closeStyles(p), n = l.length, a = 0; a < n; a += 1) {l[a].closed = !0;}} }, { key: "renderInnerContent", value: function value() {this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);} }, { key: "renderShapeTransform", value: function value(t, e) {(t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);} }, { key: "drawLayer", value: function value() {var t = void 0,e = this.stylesList.length,i = void 0,s = void 0,r = void 0,a = void 0,n = void 0,o = void 0,h = this.globalData.renderer,p = this.globalData.canvasContext,l = void 0,c = void 0;for (t = 0; t < e; t += 1) {if (("st" !== (l = (c = this.stylesList[t]).type) && "gs" !== l || 0 !== c.wi) && c.data._shouldRender && 0 !== c.coOp && 0 !== this.globalData.currentGlobalAlpha) {for (h.save(), n = c.elements, "st" === l || "gs" === l ? (p.strokeStyle = "st" === l ? c.co : c.grd, p.lineWidth = c.wi, p.lineCap = c.lc, p.lineJoin = c.lj, p.miterLimit = c.ml || 0) : p.fillStyle = "fl" === l ? c.co : c.grd, h.ctxOpacity(c.coOp), "st" !== l && "gs" !== l && p.beginPath(), h.ctxTransform(c.preTransforms.finalTransform.props), s = n.length, i = 0; i < s; i += 1) {for ("st" !== l && "gs" !== l || (p.beginPath(), c.da && (p.setLineDash(c.da), p.lineDashOffset = c.do)), a = (o = n[i].trNodes).length, r = 0; r < a; r += 1) {"m" === o[r].t ? p.moveTo(o[r].p[0], o[r].p[1]) : "c" === o[r].t ? p.bezierCurveTo(o[r].pts[0], o[r].pts[1], o[r].pts[2], o[r].pts[3], o[r].pts[4], o[r].pts[5]) : p.closePath();}"st" !== l && "gs" !== l || (p.stroke(), c.da && p.setLineDash(this.dashResetter));}"st" !== l && "gs" !== l && ("nonzero" === c.r ? p.fill() : p.fill(c.r)), h.restore();}}} }, { key: "renderShape", value: function value(t, e, i, s) {var r = void 0,a = void 0;for (a = t, r = e.length - 1; 0 <= r; r -= 1) {"tr" === e[r].ty ? (a = i[r].transform, this.renderShapeTransform(t, a)) : "sh" === e[r].ty || "el" === e[r].ty || "rc" === e[r].ty || "sr" === e[r].ty ? this.renderPath(e[r], i[r]) : "fl" === e[r].ty ? this.renderFill(e[r], i[r], a) : "st" === e[r].ty ? this.renderStroke(e[r], i[r], a) : "gf" === e[r].ty || "gs" === e[r].ty ? this.renderGradientFill(e[r], i[r], a) : "gr" === e[r].ty ? this.renderShape(a, e[r].it, i[r].it) : e[r].ty;}s && this.drawLayer();} }, { key: "renderStyledShape", value: function value(t, e) {if (this._isFirstFrame || e._mdf || t.transforms._mdf) {var i = t.trNodes,s = e.paths,r = void 0,a = void 0,n = void 0,o = s._length;i.length = 0;var h = t.transforms.finalTransform;for (n = 0; n < o; n += 1) {var p = s.shapes[n];if (p && p.v) {for (a = p._length, r = 1; r < a; r += 1) {1 === r && i.push({ t: "m", p: h.applyToPointArray(p.v[0][0], p.v[0][1], 0) }), i.push({ t: "c", pts: h.applyToTriplePoints(p.o[r - 1], p.i[r], p.v[r]) });}1 === a && i.push({ t: "m", p: h.applyToPointArray(p.v[0][0], p.v[0][1], 0) }), p.c && a && (i.push({ t: "c", pts: h.applyToTriplePoints(p.o[r - 1], p.i[0], p.v[0]) }), i.push({ t: "z" }));}}t.trNodes = i;}} }, { key: "renderPath", value: function value(t, e) {if (!0 !== t.hd && t._shouldRender) {var i = void 0,s = e.styledShapes.length;for (i = 0; i < s; i += 1) {this.renderStyledShape(e.styledShapes[i], e.sh);}}} }, { key: "renderFill", value: function value(t, e, i) {var s = e.style;(e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity);} }, { key: "renderGradientFill", value: function value(t, e, i) {var s = e.style;if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {var r = this.globalData.canvasContext,a = void 0,n = e.s.v,o = e.e.v;if (1 === t.t) a = r.createLinearGradient(n[0], n[1], o[0], o[1]);else {var h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)),p = Math.atan2(o[1] - n[1], o[0] - n[0]),l = h * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),c = Math.cos(p + e.a.v) * l + n[0],u = Math.sin(p + e.a.v) * l + n[1];a = r.createRadialGradient(c, u, 0, n[0], n[1], h);}var f = void 0,d = t.g.p,m = e.g.c,y = 1;for (f = 0; f < d; f += 1) {e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * f + 1]), a.addColorStop(m[4 * f] / 100, "rgba(" + m[4 * f + 1] + "," + m[4 * f + 2] + "," + m[4 * f + 3] + "," + y + ")");}s.grd = a;}s.coOp = e.o.v * i.opacity;} }, { key: "renderStroke", value: function value(t, e, i) {var s = e.style,r = e.d;r && (r._mdf || this._isFirstFrame) && (s.da = r.dashArray, s.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v);} }, { key: "destroy", value: function value() {this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;} }]), r;}(Mixin(BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement)),CVSolidElement = function (t) {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.prepareFrame = IImageElement.prototype.prepareFrame, s.initElement(t, e, i), s;}return inherits(r, t), createClass(r, [{ key: "initElement", value: function value(t, e, i) {this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.addMasks(), this.createContent(), this.hide();} }, { key: "renderInnerContent", value: function value() {var t = this.canvasContext;t.setFillStyle(this.data.sc), t.fillRect(0, 0, this.data.sw, this.data.sh);} }]), r;}(Mixin(BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement)),LetterProps = function () {function n(t, e, i, s, r, a) {classCallCheck(this, n), this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = r, this.p = a, this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!s, m: !0, p: !0 };}return createClass(n, [{ key: "update", value: function value(t, e, i, s, r, a) {this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;var n = this._mdf.p = !1;return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== i && (this.sc = i, n = this._mdf.sc = !0), this.fc !== s && (this.fc = s, n = this._mdf.fc = !0), this.m !== r && (this.m = r, n = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, n = this._mdf.p = !0), n;} }]), n;}(),emptyChar = { w: 0, size: 0, shapes: [] },combinedCharacters = [];combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);var Font = function () {function t() {classCallCheck(this, t), this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now();}return createClass(t, [{ key: "addChars", value: function value(t) {if (t) {var e;this.chars || (this.chars = []);var i,s,r = t.length,a = this.chars.length;for (e = 0; e < r; e += 1) {for (i = 0, s = !1; i < a;) {this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;}s || (this.chars.push(t[e]), a += 1);}}} }, { key: "addFonts", value: function value(t) {if (t) {if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list);var e = t.list,i = void 0,s = e.length,r = s;for (i = 0; i < s; i += 1) {var a = !0;e[i].loaded = !1, e[i].monoCase = this.setUpNode(e[i].fFamily, "monospace"), e[i].sansCase = this.setUpNode(e[i].fFamily, "sans-serif"), e[i].fPath ? "p" === e[i].fOrigin || 3 === e[i].origin ? a && (api.loadFontFace ? api.loadFontFace({ family: e[i].fFamily, source: e[i].fPath, fail: function fail(t) {console.error(t);} }) : console.warn("下载字体文件方法：wx.loadFontFace 基础库 2.1.0 开始支持")) : "t" !== e[i].fOrigin && 2 !== e[i].origin || (console.warn("not support"), a = !1) : (e[i].loaded = !0, r -= 1), e[i].cache = {}, this.fonts.push(e[i]);}0 === r ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);} else this.isLoaded = !0;} }, { key: "setUpNode", value: function value(t, e) {console.log(t, e);} }, { key: "checkLoadedFonts", value: function value() {} }, { key: "getCharData", value: function value(t, e, i) {var s = 0;if (!this.chars) return emptyChar;for (var r = this.chars.length; s < r;) {if (this.chars[s].ch === t && this.chars[s].style === e && this.chars[s].fFamily === i) return this.chars[s];s += 1;}return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, e, i), emptyChar;} }, { key: "getFontByName", value: function value(t) {for (var e = 0, i = this.fonts.length; e < i;) {if (this.fonts[e].fName === t) return this.fonts[e];e += 1;}return this.fonts[0];} }, { key: "measureText", value: function value() {return 0;} }, { key: "loaded", value: function value() {return this.isLoaded;} }], [{ key: "getCombinedCharacterCodes", value: function value() {return combinedCharacters;} }]), t;}();function searchExpressions$1() {if (this.data.d.x) return this.calculateExpression = ob$1.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0;}function getExpressionValue(t, e) {var i = this.calculateExpression(e);if (t.t === i) return t;var s = {};return this.copyData(s, t), s.t = i.toString(), s.__complete = !1, s;}function searchProperty() {var t = this.searchKeyframes(),e = this.searchExpressions();return this.kf = t || e, this.kf;}var _class$2,TextProperty = function () {function i(t, e) {classCallCheck(this, i), _initialiseProps.call(this), this._frameId = -999999, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);}return createClass(i, [{ key: "copyData", value: function value(t, e) {for (var i in e) {e.hasOwnProperty(i) && (t[i] = e[i]);}return t;} }, { key: "searchProperty", value: function value() {return this.searchKeyframes();} }, { key: "searchKeyframes", value: function value() {return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;} }, { key: "addEffect", value: function value(t) {this.effectsSequence.push(t), this.elem.addDynamicProperty(this);} }, { key: "getValue", value: function value(t) {if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {this.currentData.t = this.data.d.k[this.keysIndex].s.t;var e = this.currentData,i = this.keysIndex;if (this.lock) this.setCurrentData(this.currentData);else {this.lock = !0, this._mdf = !1;var s = void 0,r = this.effectsSequence.length,a = t || this.data.d.k[this.keysIndex].s;for (s = 0; s < r; s += 1) {a = i !== this.keysIndex ? this.effectsSequence[s](a, a.t) : this.effectsSequence[s](this.currentData, a.t);}e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId;}}} }, { key: "getKeyframeValue", value: function value() {for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) {i += 1;}return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;} }, { key: "buildFinalText", value: function value(t) {for (var e = Font.getCombinedCharacterCodes(), i = [], s = 0, r = t.length, a = void 0; s < r;) {a = t.charCodeAt(s), -1 !== e.indexOf(a) ? i[i.length - 1] += t.charAt(s) : 55296 <= a && a <= 56319 && 56320 <= (a = t.charCodeAt(s + 1)) && a <= 57343 ? (i.push(t.substr(s, 2)), ++s) : i.push(t.charAt(s)), s += 1;}return i;} }, { key: "completeTextData", value: function value(t) {t.__complete = !0;var e,i = this.elem.globalData.fontManager,s = this.data,r = [],a = void 0,n = void 0,o = void 0,h = 0,p = void 0,l = s.m.g,c = 0,u = 0,f = 0,d = [],m = 0,y = 0,v = void 0,g = i.getFontByName(t.f),k = void 0,x = 0,b = g.fStyle ? g.fStyle.split(" ") : [],P = "normal",_ = "normal";n = b.length;for (a = 0; a < n; a += 1) {switch (b[a].toLowerCase()) {case "italic":_ = "italic";break;case "bold":P = "700";break;case "black":P = "900";break;case "medium":P = "500";break;case "regular":case "normal":P = "400";break;case "light":case "thin":P = "200";}}t.fWeight = g.fWeight || P, t.fStyle = _, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;var C = t.tr / 1e3 * t.finalSize,S = void 0;if (t.sz) for (var T = !0, E = t.sz[0], A = t.sz[1], w = void 0, I = void 0; T;) {m = w = 0, n = (I = this.buildFinalText(t.t)).length, C = t.tr / 1e3 * t.finalSize;var D = -1;for (a = 0; a < n; a += 1) {S = I[a].charCodeAt(0), o = !1, " " === I[a] ? D = a : 13 !== S && 3 !== S || (o = !(m = 0), w += t.finalLineHeight || 1.2 * t.finalSize), E < m + (x = i.chars ? (k = i.getCharData(I[a], g.fStyle, g.fFamily), o ? 0 : k.w * t.finalSize / 100) : i.measureText(I[a], t.f, t.finalSize)) && " " !== I[a] ? (-1 === D ? n += 1 : a = D, w += t.finalLineHeight || 1.2 * t.finalSize, I.splice(a, D === a ? 1 : 0, "\r"), D = -1, m = 0) : (m += x, m += C);}w += g.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < w ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = I, n = t.finalText.length, T = !1);}m = -C;var F = x = 0,M = void 0;for (a = 0; a < n; a += 1) {if (o = !1, S = (M = t.finalText[a]).charCodeAt(0), " " === M ? p = " " : 13 === S || 3 === S ? (F = 0, d.push(m), y = y < m ? m : y, m = -2 * C, o = !(p = ""), f += 1) : p = t.finalText[a], x = i.chars ? (k = i.getCharData(M, g.fStyle, i.getFontByName(t.f).fFamily), o ? 0 : k.w * t.finalSize / 100) : i.measureText(p, t.f, t.finalSize), " " === M ? F += x + C : (m += x + C + F, F = 0), r.push({ l: x, an: x, add: c, n: o, anIndexes: [], val: p, line: f, animatorJustifyOffset: 0 }), 2 === l) {if (c += x, "" === p || " " === p || a === n - 1) {for ("" !== p && " " !== p || (c -= x); u <= a;) {r[u].an = c, r[u].ind = h, r[u].extra = x, u += 1;}h += 1, c = 0;}} else if (3 === l) {if (c += x, "" === p || a === n - 1) {for ("" === p && (c -= x); u <= a;) {r[u].an = c, r[u].ind = h, r[u].extra = x, u += 1;}c = 0, h += 1;}} else r[h].ind = h, r[h].extra = 0, h += 1;}if (t.l = r, y = y < m ? m : y, d.push(m), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;else switch (t.boxWidth = y, t.j) {case 1:t.justifyOffset = -t.boxWidth;break;case 2:t.justifyOffset = -t.boxWidth / 2;break;default:t.justifyOffset = 0;}t.lineWidths = d;var L = s.a,R = void 0,$ = void 0;e = L.length;var V = void 0,O = void 0,N = [];for (v = 0; v < e; v += 1) {for ((R = L[v]).a.sc && (t.strokeColorAnim = !0), R.a.sw && (t.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (t.fillColorAnim = !0), O = 0, V = R.s.b, a = 0; a < n; a += 1) {($ = r[a]).anIndexes[v] = O, (1 === V && "" !== $.val || 2 === V && "" !== $.val && " " !== $.val || 3 === V && ($.n || " " === $.val || a === n - 1) || 4 === V && ($.n || a === n - 1)) && (1 === R.s.rn && N.push(O), O += 1);}s.a[v].s.totalChars = O;var z = -1,B = void 0;if (1 === R.s.rn) for (a = 0; a < n; a += 1) {z !== ($ = r[a]).anIndexes[v] && (z = $.anIndexes[v], B = N.splice(Math.floor(Math.random() * N.length), 1)[0]), $.anIndexes[v] = B;}}t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = g.ascent * t.finalSize / 100;} }, { key: "updateDocumentData", value: function value(t, e) {e = void 0 === e ? this.keysIndex : e;var i = this.copyData({}, this.data.d.k[e].s);i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this);} }, { key: "recalculate", value: function value(t) {var e = this.data.d.k[t].s;e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);} }, { key: "canResizeFont", value: function value(t) {this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);} }, { key: "setMinimumFontSize", value: function value(t) {this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);} }]), i;}(),_initialiseProps = function _initialiseProps() {this.defaultBoxWidth = [0, 0], this.setCurrentData = function (t) {t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;};};function addDynamicProperty(t) {-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this));}function _applyDecoratedDescriptor$2(i, s, t, e, r) {var a = {};return Object.keys(e).forEach(function (t) {a[t] = e[t];}), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = t.slice().reverse().reduce(function (t, e) {return e(i, s, t) || t;}, a), r && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(r) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, s, a), a = null), a;}TextProperty.prototype.getExpressionValue = getExpressionValue, TextProperty.prototype.searchProperty = searchProperty, TextProperty.prototype.searchExpressions = searchExpressions$1;var max = Math.max,min = Math.min,floor = Math.floor,TextSelectorProp = function () {function s(t, e) {classCallCheck(this, s);var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));return i.addDynamicProperty = addDynamicProperty, i._mdf = !1, i.k = !1, i.data = e, i.dynamicProperties = [], i.elem = t, i.container = t, i.comp = t.comp, i.finalS = 0, i.finalE = 0, i.s = PropertyFactory$1.getProp(t, e.s || { k: 0 }, 0, 0, i), i.e = "e" in e ? PropertyFactory$1.getProp(t, e.e, 0, 0, i) : { v: 100 }, i.o = PropertyFactory$1.getProp(t, e.o || { k: 0 }, 0, 0, i), i.xe = PropertyFactory$1.getProp(t, e.xe || { k: 0 }, 0, 0, i), i.ne = PropertyFactory$1.getProp(t, e.ne || { k: 0 }, 0, 0, i), i.a = PropertyFactory$1.getProp(t, e.a, 0, .01, i), i.dynamicProperties.length || i.getValue(), i;}return inherits(s, DynamicPropertyContainer), createClass(s, [{ key: "getMult", value: function value(t) {this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();var e = ob.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,i = 0,s = this.finalS,r = this.finalE,a = this.data.sh;if (2 === a) i = e(i = r === s ? r <= t ? 1 : 0 : max(0, min(.5 / (r - s) + (t - s) / (r - s), 1)));else if (3 === a) i = e(i = r === s ? r <= t ? 0 : 1 : 1 - max(0, min(.5 / (r - s) + (t - s) / (r - s), 1)));else if (4 === a) r === s ? i = 0 : (i = max(0, min(.5 / (r - s) + (t - s) / (r - s), 1))) < .5 ? i *= 2 : i = 1 - 2 * (i - .5), i = e(i);else if (5 === a) {if (r === s) i = 0;else {var n = r - s,o = -n / 2 + (t = min(max(0, t + .5 - s), r - s)),h = n / 2;i = Math.sqrt(1 - o * o / (h * h));}i = e(i);} else i = 6 === a ? e(i = r === s ? 0 : (t = min(max(0, t + .5 - s), r - s), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (r - s))) / 2)) : (t >= floor(s) && (i = t - s < 0 ? 1 - (s - t) : max(0, min(r - t, 1))), e(i));return i * this.a.v;} }, { key: "getValue", value: function value(t) {this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,i = this.o.v / e,s = this.s.v / e + i,r = this.e.v / e + i;if (r < s) {var a = s;s = r, r = a;}this.finalS = s, this.finalE = r;} }]), s;}(),TextSelectorProperty = (_applyDecoratedDescriptor$2((_class$2 = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "getTextSelectorProp", value: function value(t, e, i) {return new TextSelectorProp(t, e, i);} }]), t;}()).prototype, "getTextSelectorProp", [GetTextSelectorProp], Object.getOwnPropertyDescriptor(_class$2.prototype, "getTextSelectorProp"), _class$2.prototype), _class$2),TextSelectorProp$1 = new TextSelectorProperty(),degToRads$5 = Math.PI / 180,TextAnimatorDataProperty = function t(e, i, s) {classCallCheck(this, t);var r = { propType: !1 },a = PropertyFactory$1.getProp,n = i.a;this.a = { r: n.r ? a(e, n.r, 0, degToRads$5, s) : r, rx: n.rx ? a(e, n.rx, 0, degToRads$5, s) : r, ry: n.ry ? a(e, n.ry, 0, degToRads$5, s) : r, sk: n.sk ? a(e, n.sk, 0, degToRads$5, s) : r, sa: n.sa ? a(e, n.sa, 0, degToRads$5, s) : r, s: n.s ? a(e, n.s, 1, .01, s) : r, a: n.a ? a(e, n.a, 1, 0, s) : r, o: n.o ? a(e, n.o, 0, .01, s) : r, p: n.p ? a(e, n.p, 1, 0, s) : r, sw: n.sw ? a(e, n.sw, 0, 0, s) : r, sc: n.sc ? a(e, n.sc, 1, 0, s) : r, fc: n.fc ? a(e, n.fc, 1, 0, s) : r, fh: n.fh ? a(e, n.fh, 0, 0, s) : r, fs: n.fs ? a(e, n.fs, 0, .01, s) : r, fb: n.fb ? a(e, n.fb, 0, .01, s) : r, t: n.t ? a(e, n.t, 0, 0, s) : r }, this.s = TextSelectorProp$1.getTextSelectorProp(e, i.s, s), this.s.t = i.s.t;},TextAnimatorProperty = function () {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.mHelper = new Matrix(), s.defaultPropsArray = [], s._isFirstFrame = !0, s._hasMaskedPath = !1, s._frameId = -1, s._textData = t, s._renderType = e, s._elem = i, s._animatorsData = createSizedArray(s._textData.a.length), s._pathData = {}, s._moreOptions = { alignment: {} }, s.renderedLetters = [], s.lettersChangedFlag = !1, s.initDynamicPropertyContainer(i), s;}return inherits(r, DynamicPropertyContainer), createClass(r, [{ key: "addDynamicProperty", value: function value() {console.log("see:", "https://github.com/airbnb/lottie-web/blob/adb67aaed3058a331d93fe0b87df5129f9fcab57/player/js/utils/text/TextAnimatorProperty.js#L21:53");} }, { key: "searchProperties", value: function value() {var t = void 0,e = this._textData.a.length,i = void 0,s = PropertyFactory$1.getProp;for (t = 0; t < e; t += 1) {i = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, i, this);}this._textData.p && "m" in this._textData.p ? (this._pathData = { f: s(this._elem, this._textData.p.f, 0, 0, this), l: s(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this);} }, { key: "getMeasures", value: function value(t, e) {if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {this._isFirstFrame = !1;var i = this._moreOptions.alignment.v,s = this._animatorsData,r = this._textData,a = this.mHelper,n = this._renderType,o = this.renderedLetters.length,h = void 0,p = void 0,l = void 0,c = void 0,u = t.l,f = void 0,d = void 0,m = void 0,y = void 0,v = void 0,g = void 0,k = void 0,x = void 0,b = void 0,P = void 0,_ = void 0,C = void 0,S = void 0,T = void 0,E = void 0;if (this._hasMaskedPath) {if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {var A = E.v;this._pathData.r && (A = A.reverse()), f = { tLength: 0, segments: [] }, c = A._length - 1;var w = void 0;for (l = C = 0; l < c; l += 1) {w = bez.buildBezierData(A.v[l], A.v[l + 1], [A.o[l][0] - A.v[l][0], A.o[l][1] - A.v[l][1]], [A.i[l + 1][0] - A.v[l + 1][0], A.i[l + 1][1] - A.v[l + 1][1]]), f.tLength += w.segmentLength, f.segments.push(w), C += w.segmentLength;}l = c, E.v.c && (w = bez.buildBezierData(A.v[l], A.v[0], [A.o[l][0] - A.v[l][0], A.o[l][1] - A.v[l][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), f.tLength += w.segmentLength, f.segments.push(w), C += w.segmentLength), this._pathData.pi = f;}if (f = this._pathData.pi, d = this._pathData.f.v, g = 1, v = !(y = k = 0), P = f.segments, d < 0 && E.v.c) for (f.tLength < Math.abs(d) && (d = -Math.abs(d) % f.tLength), g = (b = P[k = P.length - 1].points).length - 1; d < 0;) {d += b[g].partialLength, (g -= 1) < 0 && (g = (b = P[k -= 1].points).length - 1);}x = (b = P[k].points)[g - 1], _ = (m = b[g]).partialLength;}c = u.length, p = h = 0;var I,D = 1.2 * t.finalSize * .714,F = !0,M = void 0,L = void 0,R = void 0;I = s.length;var $ = void 0,V = -1,O = void 0,N = void 0,z = void 0,B = d,j = k,G = g,q = -1,W = void 0,U = void 0,H = void 0,Y = void 0,K = void 0,X = void 0,J = void 0,Z = void 0,Q = "",tt = this.defaultPropsArray,et = void 0;if (2 === t.j || 1 === t.j) {var it = 0,st = 0,rt = 2 === t.j ? -.5 : -1,at = 0,nt = !0;for (l = 0; l < c; l += 1) {if (u[l].n) {for (it && (it += st); at < l;) {u[at].animatorJustifyOffset = it, at += 1;}nt = !(it = 0);} else {for (L = 0; L < I; L += 1) {(M = s[L].a).t.propType && (nt && 2 === t.j && (st += M.t.v * rt), ($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars)).length ? it += M.t.v * $[0] * rt : it += M.t.v * $ * rt);}nt = !1;}}for (it && (it += st); at < l;) {u[at].animatorJustifyOffset = it, at += 1;}}for (l = 0; l < c; l += 1) {if (a.reset(), W = 1, u[l].n) h = 0, p += t.yOffset, p += F ? 1 : 0, d = B, F = !1, this._hasMaskedPath && (g = G, x = (b = P[k = j].points)[g - 1], _ = (m = b[g]).partialLength, y = 0), et = X = Z = Q = "", tt = this.defaultPropsArray;else {if (this._hasMaskedPath) {if (q !== u[l].line) {switch (t.j) {case 1:d += C - t.lineWidths[u[l].line];break;case 2:d += (C - t.lineWidths[u[l].line]) / 2;}q = u[l].line;}V !== u[l].ind && (u[V] && (d += u[V].extra), d += u[l].an / 2, V = u[l].ind), d += i[0] * u[l].an / 200;var ot = 0;for (L = 0; L < I; L += 1) {(M = s[L].a).p.propType && (($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars)).length ? ot += M.p.v[0] * $[0] : ot += M.p.v[0] * $), M.a.propType && (($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars)).length ? ot += M.a.v[0] * $[0] : ot += M.a.v[0] * $);}for (v = !0; v;) {d + ot <= y + _ || !b ? (S = (d + ot - y) / m.partialLength, N = x.point[0] + (m.point[0] - x.point[0]) * S, z = x.point[1] + (m.point[1] - x.point[1]) * S, a.translate(-i[0] * u[l].an / 200, -i[1] * D / 100), v = !1) : b && (y += m.partialLength, (g += 1) >= b.length && (g = 0, b = P[k += 1] ? P[k].points : E.v.c ? P[k = g = 0].points : (y -= m.partialLength, null)), b && (x = m, _ = (m = b[g]).partialLength));}O = u[l].an / 2 - u[l].add, a.translate(-O, 0, 0);} else O = u[l].an / 2 - u[l].add, a.translate(-O, 0, 0), a.translate(-i[0] * u[l].an / 200, -i[1] * D / 100, 0);for (L = 0; L < I; L += 1) {(M = s[L].a).t.propType && ($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars), 0 === h && 0 === t.j || (this._hasMaskedPath ? $.length ? d += M.t.v * $[0] : d += M.t.v * $ : $.length ? h += M.t.v * $[0] : h += M.t.v * $));}for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (U = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (Y = [t.fc[0], t.fc[1], t.fc[2]]), L = 0; L < I; L += 1) {(M = s[L].a).a.propType && (($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars)).length ? a.translate(-M.a.v[0] * $[0], -M.a.v[1] * $[1], M.a.v[2] * $[2]) : a.translate(-M.a.v[0] * $, -M.a.v[1] * $, M.a.v[2] * $));}for (L = 0; L < I; L += 1) {(M = s[L].a).s.propType && (($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars)).length ? a.scale(1 + (M.s.v[0] - 1) * $[0], 1 + (M.s.v[1] - 1) * $[1], 1) : a.scale(1 + (M.s.v[0] - 1) * $, 1 + (M.s.v[1] - 1) * $, 1));}for (L = 0; L < I; L += 1) {if (M = s[L].a, $ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars), M.sk.propType && ($.length ? a.skewFromAxis(-M.sk.v * $[0], M.sa.v * $[1]) : a.skewFromAxis(-M.sk.v * $, M.sa.v * $)), M.r.propType && ($.length ? a.rotateZ(-M.r.v * $[2]) : a.rotateZ(-M.r.v * $)), M.ry.propType && ($.length ? a.rotateY(M.ry.v * $[1]) : a.rotateY(M.ry.v * $)), M.rx.propType && ($.length ? a.rotateX(M.rx.v * $[0]) : a.rotateX(M.rx.v * $)), M.o.propType && ($.length ? W += (M.o.v * $[0] - W) * $[0] : W += (M.o.v * $ - W) * $), t.strokeWidthAnim && M.sw.propType && ($.length ? H += M.sw.v * $[0] : H += M.sw.v * $), t.strokeColorAnim && M.sc.propType) for (K = 0; K < 3; K += 1) {$.length ? U[K] = U[K] + (M.sc.v[K] - U[K]) * $[0] : U[K] = U[K] + (M.sc.v[K] - U[K]) * $;}if (t.fillColorAnim && t.fc) {if (M.fc.propType) for (K = 0; K < 3; K += 1) {$.length ? Y[K] = Y[K] + (M.fc.v[K] - Y[K]) * $[0] : Y[K] = Y[K] + (M.fc.v[K] - Y[K]) * $;}M.fh.propType && (Y = $.length ? addHueToRGB(Y, M.fh.v * $[0]) : addHueToRGB(Y, M.fh.v * $)), M.fs.propType && (Y = $.length ? addSaturationToRGB(Y, M.fs.v * $[0]) : addSaturationToRGB(Y, M.fs.v * $)), M.fb.propType && (Y = $.length ? addBrightnessToRGB(Y, M.fb.v * $[0]) : addBrightnessToRGB(Y, M.fb.v * $));}}for (L = 0; L < I; L += 1) {(M = s[L].a).p.propType && ($ = s[L].s.getMult(u[l].anIndexes[L], r.a[L].s.totalChars), this._hasMaskedPath ? $.length ? a.translate(0, M.p.v[1] * $[0], -M.p.v[2] * $[1]) : a.translate(0, M.p.v[1] * $, -M.p.v[2] * $) : $.length ? a.translate(M.p.v[0] * $[0], M.p.v[1] * $[1], -M.p.v[2] * $[2]) : a.translate(M.p.v[0] * $, M.p.v[1] * $, -M.p.v[2] * $));}if (t.strokeWidthAnim && (X = H < 0 ? 0 : H), t.strokeColorAnim && (J = "rgb(" + Math.round(255 * U[0]) + "," + Math.round(255 * U[1]) + "," + Math.round(255 * U[2]) + ")"), t.fillColorAnim && t.fc && (Z = "rgb(" + Math.round(255 * Y[0]) + "," + Math.round(255 * Y[1]) + "," + Math.round(255 * Y[2]) + ")"), this._hasMaskedPath) {if (a.translate(0, -t.ls), a.translate(0, i[1] * D / 100 + p, 0), r.p.p) {T = (m.point[1] - x.point[1]) / (m.point[0] - x.point[0]);var ht = 180 * Math.atan(T) / Math.PI;m.point[0] < x.point[0] && (ht += 180), a.rotate(-ht * Math.PI / 180);}a.translate(N, z, 0), d -= i[0] * u[l].an / 200, u[l + 1] && V !== u[l + 1].ind && (d += u[l].an / 2, d += t.tr / 1e3 * t.finalSize);} else {switch (a.translate(h, p, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {case 1:a.translate(u[l].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[u[l].line]), 0, 0);break;case 2:a.translate(u[l].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[u[l].line]) / 2, 0, 0);}a.translate(0, -t.ls), a.translate(O, 0, 0), a.translate(i[0] * u[l].an / 200, i[1] * D / 100, 0), h += u[l].l + t.tr / 1e3 * t.finalSize;}"html" === n ? Q = a.toCSS() : "svg" === n ? Q = a.to2dCSS() : tt = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], et = W;}o <= l ? (R = new LetterProps(et, X, J, Z, Q, tt), this.renderedLetters.push(R), o += 1, this.lettersChangedFlag = !0) : (R = this.renderedLetters[l], this.lettersChangedFlag = R.update(et, X, J, Z, Q, tt) || this.lettersChangedFlag);}}} }, { key: "getValue", value: function value() {this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());} }]), r;}();function buildShapeString(t, e, i, s) {if (0 === e) return "";var r = t.o,a = t.i,n = t.v,o = void 0,h = " M" + s.applyToPointStringified(n[0][0], n[0][1]);for (o = 1; o < e; o += 1) {h += " C" + s.applyToPointStringified(r[o - 1][0], r[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]);}return i && e && (h += " C" + s.applyToPointStringified(r[o - 1][0], r[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]), h += "z"), h;}var ITextElement = function () {function t() {classCallCheck(this, t), this.emptyProp = new LetterProps();}return createClass(t, [{ key: "initElement", value: function value(t, e, i) {this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.addMasks(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);} }, { key: "prepareFrame", value: function value(t) {this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);} }, { key: "createPathShape", value: function value(t, e) {var i = void 0,s = e.length,r = void 0,a = "";for (i = 0; i < s; i += 1) {a += buildShapeString(r = e[i].ks.k, r.i.length, !0, t);}return a;} }, { key: "updateDocumentData", value: function value(t, e) {this.textProperty.updateDocumentData(t, e);} }, { key: "canResizeFont", value: function value(t) {this.textProperty.canResizeFont(t);} }, { key: "setMinimumFontSize", value: function value(t) {this.textProperty.setMinimumFontSize(t);} }, { key: "applyTextPropertiesToMatrix", value: function value(t, e, i, s, r) {switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {case 1:e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);break;case 2:e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);}e.translate(s, r, 0);} }, { key: "buildColor", value: function value(t) {return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";} }, { key: "destroy", value: function value() {} }]), t;}(),CVTextElement = function (t) {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.tHelper = createTag("canvas"), s.textSpans = [], s.yOffset = 0, s.fillColorAnim = !1, s.strokeColorAnim = !1, s.strokeWidthAnim = !1, s.stroke = !1, s.fill = !1, s.justifyOffset = 0, s.currentRender = null, s.renderType = "canvas", s.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, s.initElement(t, e, i), s;}return inherits(r, t), createClass(r, [{ key: "buildNewText", value: function value() {var t = this.textProperty.currentData;this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);var e = !1;t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;var i = !1;t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);var s,r = this.globalData.fontManager.getFontByName(t.f),a = void 0,n = t.l,o = this.mHelper;this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;var h = void 0,p = void 0,l = void 0,c = void 0,u = void 0,f = void 0,d = void 0,m = void 0,y = void 0,v = void 0,g = this.data.singleShape,k = t.tr / 1e3 * t.finalSize,x = 0,b = 0,P = !0,_ = 0;for (a = 0; a < s; a += 1) {for (p = (h = this.globalData.fontManager.getCharData(t.finalText[a], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), g && n[a].n && (x = -k, b += t.yOffset, b += P ? 1 : 0, P = !1), d = (u = p.shapes ? p.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), g && this.applyTextPropertiesToMatrix(t, o, n[a].line, x, b), y = createSizedArray(d), f = 0; f < d; f += 1) {for (c = u[f].ks.k.i.length, m = u[f].ks.k, v = [], l = 1; l < c; l += 1) {1 === l && v.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), v.push(o.applyToX(m.o[l - 1][0], m.o[l - 1][1], 0), o.applyToY(m.o[l - 1][0], m.o[l - 1][1], 0), o.applyToX(m.i[l][0], m.i[l][1], 0), o.applyToY(m.i[l][0], m.i[l][1], 0), o.applyToX(m.v[l][0], m.v[l][1], 0), o.applyToY(m.v[l][0], m.v[l][1], 0));}v.push(o.applyToX(m.o[l - 1][0], m.o[l - 1][1], 0), o.applyToY(m.o[l - 1][0], m.o[l - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), y[f] = v;}g && (x += n[a].l, x += k), this.textSpans[_] ? this.textSpans[_].elem = y : this.textSpans[_] = { elem: y }, _ += 1;}} }, { key: "renderInnerContent", value: function value() {var t = this.canvasContext;t.font = this.values.fValue, t.setLineCap("butt"), t.setLineJoin("miter"), t.setMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);var e,i = void 0,s = void 0,r = void 0,a = void 0,n = void 0,o = this.textAnimator.renderedLetters,h = this.textProperty.currentData.l;e = h.length;var p = void 0,l = null,c = null,u = null,f = void 0,d = void 0;for (i = 0; i < e; i += 1) {if (!h[i].n) {if ((p = o[i]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(p.p), this.globalData.renderer.ctxOpacity(p.o)), this.fill) {for (p && p.fc ? l !== p.fc && (l = p.fc, t.setFillStyle(p.fc)) : l !== this.values.fill && (l = this.values.fill, t.setFillStyle(this.values.fill)), r = (f = this.textSpans[i].elem).length, this.globalData.canvasContext.beginPath(), s = 0; s < r; s += 1) {for (n = (d = f[s]).length, this.globalData.canvasContext.moveTo(d[0], d[1]), a = 2; a < n; a += 6) {this.globalData.canvasContext.bezierCurveTo(d[a], d[a + 1], d[a + 2], d[a + 3], d[a + 4], d[a + 5]);}}this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();}if (this.stroke) {for (p && p.sw ? u !== p.sw && (u = p.sw, t.setLineWidth(p.sw)) : u !== this.values.sWidth && (u = this.values.sWidth, t.setLineWidth(this.values.sWidth)), p && p.sc ? c !== p.sc && (c = p.sc, t.setStrokeStyle(p.sc)) : c !== this.values.stroke && (c = this.values.stroke, t.setStrokeStyle(this.values.stroke)), r = (f = this.textSpans[i].elem).length, this.globalData.canvasContext.beginPath(), s = 0; s < r; s += 1) {for (n = (d = f[s]).length, this.globalData.canvasContext.moveTo(d[0], d[1]), a = 2; a < n; a += 6) {this.globalData.canvasContext.bezierCurveTo(d[a], d[a + 1], d[a + 2], d[a + 3], d[a + 4], d[a + 5]);}}this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();}p && this.globalData.renderer.restore();}}} }]), r;}(Mixin(BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement)),NullElement = function (t) {function r(t, e, i) {classCallCheck(this, r);var s = possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));return s.initFrame(), s.initBaseData(t, e, i), s.initFrame(), s.initTransform(t, e, i), s.initHierarchy(), s;}return inherits(r, t), createClass(r, [{ key: "prepareFrame", value: function value(t) {this.prepareProperties(t, !0);} }, { key: "renderFrame", value: function value() {} }, { key: "getBaseElement", value: function value() {return null;} }, { key: "destroy", value: function value() {} }, { key: "sourceRectAtTime", value: function value() {} }, { key: "hide", value: function value() {} }]), r;}(Mixin(BaseElement, TransformElement, HierarchyElement, FrameElement)),BaseRenderer = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "checkLayers", value: function value(t) {var e = void 0,i = this.layers.length,s = void 0;for (this.completeLayers = !0, e = i - 1; 0 <= e; e--) {this.elements[e] || (s = this.layers[e]).ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;}this.checkPendingElements();} }, { key: "createItem", value: function value(t) {switch (t.ty) {case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t);}return this.createNull(t);} }, { key: "createCamera", value: function value() {throw new Error("You're using a 3d camera. Try the html renderer.");} }, { key: "buildAllItems", value: function value() {var t = void 0,e = this.layers.length;for (t = 0; t < e; t += 1) {this.buildItem(t);}this.checkPendingElements();} }, { key: "includeLayers", value: function value(t) {this.completeLayers = !1;var e = void 0,i = t.length,s = void 0,r = this.layers.length;for (e = 0; e < i; e += 1) {for (s = 0; s < r;) {if (this.layers[s].id === t[e].id) {this.layers[s] = t[e];break;}s += 1;}}} }, { key: "setProjectInterface", value: function value(t) {this.globalData.projectInterface = t;} }, { key: "initItems", value: function value() {this.globalData.progressiveLoad || this.buildAllItems();} }, { key: "buildElementParenting", value: function value(t, e, i) {for (var s = this.elements, r = this.layers, a = 0, n = r.length; a < n;) {r[a].ind === e && (s[a] && !0 !== s[a] ? (i.push(s[a]), s[a].setAsParent(), void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;}} }, { key: "addPendingElement", value: function value(t) {this.pendingElements.push(t);} }, { key: "searchExtraCompositions", value: function value(t) {var e = void 0,i = t.length;for (e = 0; e < i; e += 1) {if (t[e].xt) {var s = this.createComp(t[e]);s.initExpressions(), this.globalData.projectInterface.registerComposition(s);}}} }, { key: "setupGlobalData", value: function value(t, e) {this.globalData.fontManager = new Font(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };} }]), t;}(),CVCompElement = void 0,CanvasRenderer = function () {function s(t, e) {classCallCheck(this, s);var i = possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));return i.animationItem = t, i.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, canvas: e && e.canvas, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "" }, i.renderConfig.dpr = e && e.dpr || 1, i.renderedFrame = -1, i.globalData = { frameNum: -1, _mdf: !1, renderConfig: i.renderConfig, currentGlobalAlpha: -1 }, i.contextData = new CVContextData(), i.elements = [], i.pendingElements = [], i.transformMat = new Matrix(), i.completeLayers = !1, i.rendererType = "canvas", i;}return inherits(s, BaseRenderer), createClass(s, [{ key: "createShape", value: function value(t) {return new CVShapeElement(t, this.globalData, this);} }, { key: "createText", value: function value(t) {return new CVTextElement(t, this.globalData, this);} }, { key: "createImage", value: function value(t) {return new CVImageElement(t, this.globalData, this);} }, { key: "createComp", value: function value(t) {return new CVCompElement(t, this.globalData, this);} }, { key: "createSolid", value: function value(t) {return new CVSolidElement(t, this.globalData, this);} }, { key: "createNull", value: function value(t) {return new NullElement(t, this.globalData, this);} }, { key: "ctxTransform", value: function value(t) {if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) if (this.renderConfig.clearCanvas) {this.transformMat.cloneFromProps(t);var e = this.contextData.cTr.props;this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);var i = this.contextData.cTr.props;this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);} else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);} }, { key: "ctxOpacity", value: function value(t) {if (!this.renderConfig.clearCanvas) {var e = this.canvasContext.globalAlpha * (t < 0 ? 0 : t);return this.canvasContext.globalAlpha = e, this.canvasContext.setGlobalAlpha(e), void (this.globalData.currentGlobalAlpha = this.contextData.cO);}this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.canvasContext.setGlobalAlpha(this.contextData.cO), this.globalData.currentGlobalAlpha = this.contextData.cO);} }, { key: "reset", value: function value() {this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();} }, { key: "save", value: function value(t) {if (this.renderConfig.clearCanvas) {t && this.canvasContext.save();var e = this.contextData.cTr.props;this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();var i = void 0,s = this.contextData.saved[this.contextData.cArrPos];for (i = 0; i < 16; i += 1) {s[i] = e[i];}this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;} else this.canvasContext.save();} }, { key: "restore", value: function value(t) {if (this.renderConfig.clearCanvas) {t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;var e = this.contextData.saved[this.contextData.cArrPos],i = void 0,s = this.contextData.cTr.props;for (i = 0; i < 16; i += 1) {s[i] = e[i];}this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), e = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = e, this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.canvasContext.setGlobalAlpha(e), this.globalData.currentGlobalAlpha = e);} else this.canvasContext.restore();} }, { key: "configAnimation", value: function value(t) {this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();} }, { key: "updateContainerSize", value: function value() {this.reset();var t, e;t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr;var i = void 0,s = void 0;if (-1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {var r = this.renderConfig.preserveAspectRatio.split(" "),a = r[1] || "meet",n = r[0] || "xMidYMid",o = n.substr(0, 4),h = n.substr(4);(i = t / e) < (s = this.transformCanvas.w / this.transformCanvas.h) && "meet" === a || s < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (s < i && "meet" === a || i < s && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (s < i && "meet" === a || i < s && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (i < s && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i < s && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;} else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip();} }, { key: "destroy", value: function value() {var t = void 0;for (t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) {this.elements[t] && this.elements[t].destroy();}this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;} }, { key: "renderFrame", value: function value(t) {if (!(this.renderedFrame === t && !0 === this.renderConfig.clearCanvas || this.destroyed || -1 === t)) {this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas, this.globalData.projectInterface.currentFrame = t;var e = void 0,i = this.layers.length;for (this.completeLayers || this.checkLayers(t), e = 0; e < i; e++) {(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);}if (this.globalData._mdf) {for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), e = i - 1; 0 <= e; e -= 1) {(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame(0 === e);}this.canvasContext.draw && this.canvasContext.draw(), !0 !== this.renderConfig.clearCanvas || this.save(), this.restore();}}} }, { key: "buildItem", value: function value(t) {var e = this.elements;if (!e[t] && 99 !== this.layers[t].ty) {var i = this.createItem(this.layers[t], this, this.globalData);(e[t] = i).initExpressions();}} }, { key: "checkPendingElements", value: function value() {for (; this.pendingElements.length;) {this.pendingElements.pop().checkParenting();}} }, { key: "hide", value: function value() {} }, { key: "show", value: function value() {} }]), s;}();CVCompElement = CVCompElementFactory(CanvasRenderer);var assetLoader = { load: function load(t, s, e) {var r = this;if (t.includes(".zip")) return loadZipFiles(t).then(function (t) {var e = t.data,i = t.tempDir;r.path = i, s(e);}).catch(function (t) {"function" == typeof e && e(t);});api.request({ url: t, success: function success(t) {s(t.data);}, fail: function fail(t) {"function" == typeof e && e(t);} });} },fs = "function" == typeof api.getFileSystemManager ? api.getFileSystemManager() : {};function downloadZip(t) {return new Promise(function (e) {api.downloadFile({ url: t, success: function success(t) {console.log("downloadZip", t), e(t.tempFilePath);} });});}function ensureDir(t) {for (var e = t.split("/"), i = e.length, s = 1; s <= i;) {var r = e.slice(0, s).join("/");try {fs.mkdirSync(r);} catch (t) {console.warn("ensureDir [" + r + "]", t);}s++;}}function unzipFile(t) {var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : getUserDataPath() + "/tmp-unzip";return new Promise(function (e) {ensureDir(i), fs.unzip({ targetPath: i, zipFilePath: t, success: function success(t) {console.log("unzipFile", t), e({ targetPath: i });}, fail: function fail(t) {console.error("unzipFile", t);} });});}function getDirStat(t) {return fs.statSync(t);}function getFileTree(s) {var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return fs.readdirSync(s).forEach(function (t) {var e = s + "/" + t,i = getDirStat(e).isDirectory();r[t] = i ? getFileTree(e) : e;}), r;}function loadZipFiles(t) {var e = getUserDataPath() + "/tmp-unzip/" + easyHashCode(t);return downloadZip(t).then(function (t) {return unzipFile(t, e);}).then(function (t) {var e = t.targetPath,i = flatAETree(e, getFileTree(e)),s = i.dir,r = i.dataJsonPath;if (r) return { tempDir: s, data: JSON.parse(fs.readFileSync(r, "utf-8") || "{}") };});}function flatAETree(t, e) {if ("string" == typeof e) {var i = t.split("/");return i.pop(), { dir: i.join("/") + "/", dataJsonPath: e.endsWith("data.json") ? e : "" };}if (e && "object" === (void 0 === e ? "undefined" : _typeof2(e))) for (var s = Object.keys(e), r = 0; r < s.length; r++) {if ("__MACOSX" !== s[r]) {var a = flatAETree(t + "/" + s[r], e[s[r]]);if (a.dataJsonPath) return a;}}return { dir: t + "/", dataJsonPath: "" };}function easyHashCode() {for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = t.length, i = 0, s = 0; i < e;) {s = (s << 5) - s + t.charCodeAt(i), s &= s, i++;}return Math.abs(("" + s).toString(16));}var BaseEvent = function () {function t() {classCallCheck(this, t);}return createClass(t, [{ key: "triggerEvent", value: function value(t, e) {if (this._cbs[t]) for (var i = this._cbs[t].length, s = 0; s < i; s++) {this._cbs[t][s](e);}} }, { key: "addEventListener", value: function value(t, e) {return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function () {this.removeEventListener(t, e);}.bind(this);} }, { key: "removeEventListener", value: function value(t, e) {if (e) {if (this._cbs[t]) {for (var i = 0, s = this._cbs[t].length; i < s;) {this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;}this._cbs[t].length || (this._cbs[t] = null);}} else this._cbs[t] = null;} }]), t;}();function dataFunctionManager() {function c(t, e) {for (var i = 0, s = e.length; i < s;) {if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);i += 1;}}function u(t) {var e = void 0,i = void 0,s = void 0;for (e = t.length - 1; 0 <= e; e -= 1) {if ("sh" === t[e].ty) {if (t[e].ks.k.i) f(t[e].ks.k);else for (s = t[e].ks.k.length, i = 0; i < s; i += 1) {t[e].ks.k[i].s && f(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && f(t[e].ks.k[i].e[0]);}} else "gr" === t[e].ty && u(t[e].it);}}function f(t) {var e = void 0,i = t.i.length;for (e = 0; e < i; e += 1) {t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1];}}function o(t, e) {var i = e ? e.split(".") : [100, 100, 100];return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && void 0));}var s,i = (s = [4, 4, 14], function (t) {if (o(s, t.v) && (r(t.layers), t.assets)) {var e = void 0,i = t.assets.length;for (e = 0; e < i; e += 1) {t.assets[e].layers && r(t.assets[e].layers);}}});function r(t) {var e,i,s = void 0,r = t.length;for (s = 0; s < r; s += 1) {5 === t[s].ty && (e = t[s], void 0, i = e.t.d, e.t.d = { k: [{ s: i, t: 0 }] });}}var h,a,n = (h = [4, 7, 99], function (t) {if (t.chars && !o(h, t.v)) {var e = void 0,i = t.chars.length,s = void 0,r = void 0,a = void 0,n = void 0;for (e = 0; e < i; e += 1) {if (t.chars[e].data && t.chars[e].data.shapes) for (r = (n = t.chars[e].data.shapes[0].it).length, s = 0; s < r; s += 1) {(a = n[s].ks.k).__converted || (f(n[s].ks.k), a.__converted = !0);}}}}),p = (a = [4, 1, 9], function (t) {if (o(a, t.v) && (d(t.layers), t.assets)) {var e = void 0,i = t.assets.length;for (e = 0; e < i; e += 1) {t.assets[e].layers && d(t.assets[e].layers);}}});function l(t) {var e = void 0,i = t.length,s = void 0,r = void 0;for (e = 0; e < i; e += 1) {if ("gr" === t[e].ty) l(t[e].it);else if ("fl" === t[e].ty || "st" === t[e].ty) if (t[e].c.k && t[e].c.k[0].i) for (r = t[e].c.k.length, s = 0; s < r; s += 1) {t[e].c.k[s].s && (t[e].c.k[s].s[0] /= 255, t[e].c.k[s].s[1] /= 255, t[e].c.k[s].s[2] /= 255, t[e].c.k[s].s[3] /= 255), t[e].c.k[s].e && (t[e].c.k[s].e[0] /= 255, t[e].c.k[s].e[1] /= 255, t[e].c.k[s].e[2] /= 255, t[e].c.k[s].e[3] /= 255);} else t[e].c.k[0] /= 255, t[e].c.k[1] /= 255, t[e].c.k[2] /= 255, t[e].c.k[3] /= 255;}}function d(t) {var e = void 0,i = t.length;for (e = 0; e < i; e += 1) {4 === t[e].ty && l(t[e].shapes);}}var m,y = (m = [4, 4, 18], function (t) {if (o(m, t.v) && (g(t.layers), t.assets)) {var e = void 0,i = t.assets.length;for (e = 0; e < i; e += 1) {t.assets[e].layers && g(t.assets[e].layers);}}});function v(t) {var e = void 0,i = void 0,s = void 0;for (e = t.length - 1; 0 <= e; e -= 1) {if ("sh" === t[e].ty) {if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;else for (s = t[e].ks.k.length, i = 0; i < s; i += 1) {t[e].ks.k[i].s && (t[e].ks.k[i].s[0].c = t[e].closed), t[e].ks.k[i].e && (t[e].ks.k[i].e[0].c = t[e].closed);}} else "gr" === t[e].ty && v(t[e].it);}}function g(t) {var e = void 0,i = void 0,s = t.length,r = void 0,a = void 0,n = void 0,o = void 0;for (i = 0; i < s; i += 1) {if ((e = t[i]).hasMask) {var h = e.masksProperties;for (a = h.length, r = 0; r < a; r += 1) {if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl;else for (o = h[r].pt.k.length, n = 0; n < o; n += 1) {h[r].pt.k[n].s && (h[r].pt.k[n].s[0].c = h[r].cl), h[r].pt.k[n].e && (h[r].pt.k[n].e[0].c = h[r].cl);}}}4 === e.ty && v(e.shapes);}}function k(t) {0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);}var t = {};return t.completeData = function (t, e) {t.__complete || (p(t), i(t), n(t), y(t), function t(e, i) {var s = void 0,r = void 0,a = e.length,n = void 0,o = void 0,h = void 0,p = void 0;for (r = 0; r < a; r += 1) {if ("ks" in (s = e[r]) && !s.completed) {if (s.completed = !0, s.tt && (e[r - 1].td = s.tt), s.hasMask) {var l = s.masksProperties;for (o = l.length, n = 0; n < o; n += 1) {if (l[n].pt.k.i) f(l[n].pt.k);else for (p = l[n].pt.k.length, h = 0; h < p; h += 1) {l[n].pt.k[h].s && f(l[n].pt.k[h].s[0]), l[n].pt.k[h].e && f(l[n].pt.k[h].e[0]);}}}0 === s.ty ? (s.layers = c(s.refId, i), t(s.layers, i)) : 4 === s.ty ? u(s.shapes) : 5 === s.ty && k(s);}}}(t.layers, t.assets), t.__complete = !0);}, t;}var dataManager = dataFunctionManager(),expressionsPlugin = { initExpressions: function initExpressions(t) {var e = 0,i = [];t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {e += 1;}, t.renderer.globalData.popExpression = function () {0 === (e -= 1) && function () {var t,e = i.length;for (t = 0; t < e; t += 1) {i[t].release();}i.length = 0;}();}, t.renderer.globalData.registerExpressionProperty = function (t) {-1 === i.indexOf(t) && i.push(t);};} },ImagePreloader = function () {function t() {classCallCheck(this, t), this.assetsPath = "", this.path = "", this.totalAssets = 0, this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.canvas = null, this.images = [];}return createClass(t, [{ key: "imageLoaded", value: function value() {this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);} }, { key: "getAssetsPath", value: function value(t) {var e = "";if (t.e) e = t.p;else if (this.assetsPath) {var i = t.p;-1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i;} else e = this.path, e += t.u ? t.u : "", e += t.p;return e;} }, { key: "getImage", value: function value(t) {for (var e = 0, i = this.images.length; e < i;) {if (this.images[e].assetData === t) return this.images[e].img;e += 1;}} }, { key: "createImageData", value: function value(t) {var i = this,e = this.getAssetsPath(t, this.assetsPath, this.path),r = { src: e };return this.loadImage(e, function (s) {if (s) {if (i.canvas && i.canvas.createImage) {var e = i.canvas.createImage();return void new Promise(function (t) {e.onload = t, e.onerror = t, (r.src = e).src = s;}).then(function () {return i.imageLoaded();});}new Promise(function (t) {return api.getImageInfo({ src: s, success: function success(t) {var e = t.width,i = t.height;r.src = s, r.width = e, r.height = i;}, complete: t });}).then(function () {return i.imageLoaded();});}}), { img: r, assetData: t };} }, { key: "loadImage", value: function value(t, e) {var i = this.imageLoaded.bind(this);t.startsWith("data:") ? loadBase64Image(t).then(function (t) {console.log("loadImage base64", t), e(t);}, function (t) {console.log("loadBase64Image:fail", t), e();}) : t.startsWith("http") ? api.downloadFile({ url: t, success: function success(t) {e(t.tempFilePath);}, fail: function fail() {e(), i();} }) : e(t);} }, { key: "loaded", value: function value() {return this.totalImages === this.loadedAssets;} }, { key: "loadAssets", value: function value(t, e) {this.imagesLoadedCb = e;var i = void 0,s = t.length;for (i = 0; i < s; i += 1) {t[i].layers || (this.images.push(this.createImageData(t[i])), this.totalImages += 1);}} }, { key: "setPath", value: function value(t) {this.path = t || "";} }, { key: "setAssetsPath", value: function value(t) {this.assetsPath = t || "";} }, { key: "setCanvas", value: function value(t) {this.canvas = t;} }, { key: "destroy", value: function value() {this.imagesLoadedCb = null, this.images.length = 0;} }]), t;}();function easyHashCode$1() {for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = t.length, i = 0, s = 0; i < e;) {s = (s << 5) - s + t.charCodeAt(i), s &= s, i++;}return Math.abs(("" + s).toString(16));}function loadBase64Image(l) {return new Promise(function (t, e) {var i = /data:image\/(\w+);base64,(.*)/.exec(l) || [],s = slicedToArray(i, 3),r = s[1],a = s[2];if (!r) return e(new Error("ERROR_BASE64SRC_PARSE"));var n = api.base64ToArrayBuffer(a),o = api.getFileSystemManager();if (!o || "undefined" != typeof my && my.ap) try {return t(new Uint8ClampedArray(n));} catch (t) {return e();}var h = "lottie-" + easyHashCode$1(a),p = getUserDataPath() + "/" + h + "." + r;try {if (o.accessSync(p)) return t(p);} catch (t) {}o.writeFile({ filePath: p, data: n, encoding: "binary", success: function success() {t(p);}, fail: function fail(t) {console.error(t.errMsg), e(new Error("ERROR_BASE64SRC_WRITE"));} });});}function registerComposition(t) {this.compositions.push(t);}function ProjectInterface() {function t(t) {for (var e = 0, i = this.compositions.length; e < i;) {if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;e += 1;}}return t.compositions = [], t.currentFrame = 0, t.registerComposition = registerComposition, t;}var AnimationItem = function () {function e() {classCallCheck(this, e);var t = possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return t._cbs = [], t.name = "", t.path = "", t.isLoaded = !1, t.currentFrame = 0, t.currentRawFrame = 0, t.totalFrames = 0, t.frameRate = 0, t.frameMult = 0, t.playSpeed = 1, t.playDirection = 1, t.pendingElements = 0, t.playCount = 0, t.animationData = {}, t.assets = [], t.isPaused = !0, t.autoplay = !1, t.loop = !0, t.renderer = null, t.animationID = randomString(10), t.assetsPath = "", t.timeCompleted = 0, t.segmentPos = 0, t.subframeEnabled = subframeEnabled, t.segments = [], t._idle = !0, t.projectInterface = ProjectInterface(), t.imagePreloader = new ImagePreloader(), t;}return inherits(e, BaseEvent), createClass(e, [{ key: "fixMissingApi", value: function value(s) {[{ fn: "setGlobalAlpha", key: "globalAlpha" }, { fn: "setFillStyle", key: "fillStyle" }, { fn: "setFontSize", key: "font" }, { fn: "setLineCap", key: "lineCap" }, { fn: "setLineJoin", key: "lineJoin" }, { fn: "setLineWidth", key: "lineWidth" }, { fn: "setMiterLimit", key: "miterLimit" }, { fn: "setStrokeStyle", key: "strokeStyle" }].forEach(function (t) {var e = t.fn,i = t.key;"function" != typeof s[e] && Object.defineProperty(s, e, { value: function value(t) {s[i] = t;} });});} }, { key: "setParams", value: function value(t) {var e = this;if (this.fixMissingApi(t.rendererSettings.context), t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container), this.renderer = new CanvasRenderer(this, t.rendererSettings), this.renderer.setProjectInterface(this.projectInterface), this.animType = "canvas", "" === t.loop || null === t.loop ? this.loop = !1 : !1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.hasTriggerplay = !1, this.name = t.name ? t.name : "", this.autoloadSegments = !t.autoloadSegments || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 === t.path.lastIndexOf(".zip") && "json" !== t.path.substr(-4) && ("/" !== t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json"), -1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load.call(this, t.path, this.configAnimation.bind(this), function () {this.trigger("data_failed");}.bind(this))), api.createIntersectionObserver) {var i = t.rendererSettings.context.canvasId,s = api.createIntersectionObserver(this.context);(this.$observer = s).relativeToViewport({ bottom: 10, top: 10, left: 0, right: 10 }).observe("#" + i, function (t) {e.hasTriggerplay && (0 < t.intersectionRatio ? e.play() : e.stop());});}} }, { key: "includeLayers", value: function value(t) {t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));var e = this.animationData.layers,i = void 0,s = e.length,r = t.layers,a = void 0,n = r.length;for (a = 0; a < n; a += 1) {for (i = 0; i < s;) {if (e[i].id === r[a].id) {e[i] = r[a];break;}i += 1;}}if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, i = 0; i < s; i += 1) {this.animationData.assets.push(t.assets[i]);}this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();} }, { key: "loadNextSegment", value: function value() {var t = this.animationData.segments;if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);var e = t.shift();this.timeCompleted = e.time * this.frameRate;var i = this.path + this.fileName + "_" + this.segmentPos + ".json";this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function () {this.trigger("data_failed");}.bind(this));} }, { key: "loadSegments", value: function value() {this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();} }, { key: "imagesLoaded", value: function value() {this.trigger("loaded_images"), this.checkLoaded();} }, { key: "preloadImages", value: function value() {this.imagePreloader.setCanvas(this.renderer.renderConfig.canvas), this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));} }, { key: "configAnimation", value: function value(t) {this.renderer && (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.renderer.searchExtraCompositions(t.assets), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded());} }, { key: "waitForFontsLoaded", value: function value() {this.renderer && this.checkLoaded();} }, { key: "checkLoaded", value: function value() {!this.isLoaded && this.renderer.globalData.fontManager.loaded() && this.imagePreloader.loaded() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {this.trigger("DOMLoaded");}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play());} }, { key: "resize", value: function value() {this.renderer.updateContainerSize();} }, { key: "setSubframe", value: function value(t) {this.subframeEnabled = !!t;} }, { key: "gotoFrame", value: function value() {this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();} }, { key: "renderFrame", value: function value() {!1 !== this.isLoaded && this.renderer && this.renderer.renderFrame(this.currentFrame + this.firstFrame);} }, { key: "play", value: function value(t) {t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.hasTriggerplay = !0, this.trigger("_active")));} }, { key: "pause", value: function value(t) {t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"));} }, { key: "togglePause", value: function value(t) {t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause());} }, { key: "stop", value: function value(t) {t && this.name !== t || (this.pause(), this.playCount = 0, this.setCurrentRawFrameValue(0));} }, { key: "goToAndStop", value: function value(t, e, i) {i && this.name !== i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause());} }, { key: "goToAndPlay", value: function value(t, e, i) {this.goToAndStop(t, e, i), this.play();} }, { key: "advanceTime", value: function value(t) {if (!0 !== this.isPaused && !1 !== this.isLoaded) {var e = this.currentRawFrame + t * this.frameModifier,i = !1;e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e % this.totalFrames) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));}} }, { key: "adjustSegment", value: function value(t, e) {this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");} }, { key: "setSegment", value: function value(t, e) {var i = -1;this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== i && this.goToAndStop(i, !0);} }, { key: "playSegments", value: function value(t, e) {if ("object" === _typeof2(t[0])) {var i = void 0,s = t.length;for (i = 0; i < s; i += 1) {this.segments.push(t[i]);}} else this.segments.push(t);e && this.checkSegments(0), this.isPaused && this.play();} }, { key: "resetSegments", value: function value(t) {this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);} }, { key: "checkSegments", value: function value(t) {return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);} }, { key: "destroy", value: function value(t) {t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null, this.$observer && this.$observer.disconnect());} }, { key: "setCurrentRawFrameValue", value: function value(t) {this.currentRawFrame = t, this.gotoFrame();} }, { key: "setSpeed", value: function value(t) {this.playSpeed = t, this.updaFrameModifier();} }, { key: "setDirection", value: function value(t) {this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();} }, { key: "updaFrameModifier", value: function value() {this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;} }, { key: "getPath", value: function value() {return this.path;} }, { key: "getAssetsPath", value: function value(t) {var e = "";if (t.e) e = t.p;else if (this.assetsPath) {var i = t.p;-1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i;} else e = this.path, e += t.u ? t.u : "", e += t.p;return e;} }, { key: "getAssetData", value: function value(t) {for (var e = 0, i = this.assets.length; e < i;) {if (t === this.assets[e].id) return this.assets[e];e += 1;}} }, { key: "hide", value: function value() {this.renderer.hide();} }, { key: "show", value: function value() {this.renderer.show();} }, { key: "getDuration", value: function value(t) {return t ? this.totalFrames : this.totalFrames / this.frameRate;} }, { key: "trigger", value: function value(t) {if (this._cbs && this._cbs[t]) switch (t) {case "enterFrame":this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));break;case "loopComplete":this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));break;case "complete":this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));break;case "segmentStart":this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));break;case "destroy":this.triggerEvent(t, new BMDestroyEvent(t, this));break;default:this.triggerEvent(t);}"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));} }]), e;}(),AnimationManager = function () {function t() {classCallCheck(this, t), this.moduleOb = {}, this.registeredAnimations = [], this.initTime = 0, this.len = 0, this.playingAnimationsNum = 0, this._stopped = !0, this._isFrozen = !1, this.raf = raf;}return createClass(t, [{ key: "removeElement", value: function value(t) {for (var e = 0, i = t.target, s = this.registeredAnimations; e < this.len;) {s[e].animation === i && (s.splice(e, 1), e -= 1, this.len -= 1, i.isPaused || this.subtractPlayingCount()), e += 1;}} }, { key: "getRegisteredAnimations", value: function value() {var t = this.registeredAnimations,e = void 0,i = t.length,s = [];for (e = 0; e < i; e += 1) {s.push(t[e].animation);}return s;} }, { key: "addPlayingCount", value: function value() {this.playingAnimationsNum += 1, this.activate();} }, { key: "subtractPlayingCount", value: function value() {this.playingAnimationsNum -= 1;} }, { key: "setupAnimation", value: function value(t, e) {t.addEventListener("destroy", this.removeElement.bind(this)), t.addEventListener("_active", this.addPlayingCount.bind(this)), t.addEventListener("_idle", this.subtractPlayingCount.bind(this)), this.registeredAnimations.push({ elem: e, animation: t }), this.len += 1;} }, { key: "loadAnimation", value: function value(t) {var e = new AnimationItem();return this.setupAnimation(e, null), e.setParams(t), e;} }, { key: "setSpeed", value: function value(t, e) {var i = void 0,s = this.registeredAnimations;for (i = 0; i < this.len; i += 1) {s[i].animation.setSpeed(t, e);}} }, { key: "setDirection", value: function value(t, e) {var i = void 0,s = this.registeredAnimations;for (i = 0; i < this.len; i += 1) {s[i].animation.setDirection(t, e);}} }, { key: "play", value: function value(t) {var e = void 0,i = this.registeredAnimations;for (e = 0; e < this.len; e += 1) {i[e].animation.play(t);}} }, { key: "resume", value: function value(t) {var e = ~~(t - this.initTime),i = this.registeredAnimations,s = void 0;for (s = 0; s < this.len; s += 1) {i[s].animation.advanceTime(e);}this.initTime = t, this.playingAnimationsNum && !this._isFrozen ? this.raf(this.resume.bind(this)) : this._stopped = !0;} }, { key: "first", value: function value(t) {this.initTime = t, this.raf(this.resume.bind(this));} }, { key: "pause", value: function value(t) {var e = void 0,i = this.registeredAnimations;for (e = 0; e < this.len; e += 1) {i[e].animation.pause(t);}} }, { key: "goToAndStop", value: function value(t, e, i) {var s = void 0,r = this.registeredAnimations;for (s = 0; s < this.len; s += 1) {r[s].animation.goToAndStop(t, e, i);}} }, { key: "stop", value: function value(t) {var e = void 0,i = this.registeredAnimations;for (e = 0; e < this.len; e += 1) {i[e].animation.stop(t);}} }, { key: "togglePause", value: function value(t) {var e = void 0,i = this.registeredAnimations;for (e = 0; e < this.len; e += 1) {i[e].animation.togglePause(t);}} }, { key: "destroy", value: function value(t) {var e = void 0,i = this.registeredAnimations;for (e = this.len - 1; 0 <= e; e -= 1) {i[e].animation.destroy(t);}this.registeredAnimations.length = 0, this.len = 0;} }, { key: "resize", value: function value() {var t = void 0,e = this.registeredAnimations;for (t = 0; t < this.len; t += 1) {e[t].animation.resize();}} }, { key: "activate", value: function value() {!this._isFrozen && this.playingAnimationsNum && this._stopped && (this.raf(this.first.bind(this)), this._stopped = !1);} }, { key: "freeze", value: function value() {this._isFrozen = !0;} }, { key: "unfreeze", value: function value() {this._isFrozen = !1, this.activate();} }]), t;}(),AnimationManager$1 = new AnimationManager(),enableProxyLog = !0;function enableDebug(t) {enableProxyLog = !!t;}var methods = ["save", "setFillStyle", "moveTo", "bezierCurveTo", "closePath", "fill", "draw", "beginPath", "stroke", "setTransform"];function proxyCtx(a) {methods.forEach(function (s) {var r = a[s];"function" == typeof r && Object.defineProperty(a, s, { value: function value() {for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) {e[i] = arguments[i];}return enableProxyLog && console.log.call(null, ["ctx." + s + "("].concat(e.join(",")).concat(")").join("")), r.apply(a, e);} });}), "undefined" != typeof Proxy && new Proxy(a, { set: function set(t, e, i) {console.log("ctx." + e + " = " + i), a[e] = i;} });}function debugElapsedTimeFactory() {var i = {};return { start: function start(t) {i[t] = +new Date();}, end: function end(t) {var e = i[t];if (void 0 === e) throw new Error("debugElapsedTimeFactory start(" + t + ") is not invoke before end()");console.log("debug:" + t, +new Date() - e + "ms"), delete i[t];} };}var debug = debugElapsedTimeFactory();exports.api = api, exports.debug = debug, exports.default = AnimationManager$1, exports.enableDebug = enableDebug, exports.proxyCtx = proxyCtx;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map