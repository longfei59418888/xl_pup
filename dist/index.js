'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.proxy = exports.setReq = exports.setRes = exports.error = exports.log = exports.Util = exports.check = exports.focus = exports.enter = exports.del = exports.input = exports.click = exports.dispatch = exports.wait = exports.path = exports.setTime = exports.setExpose = undefined;

var _init = require('./init');

var _init2 = _interopRequireDefault(_init);

var _exposeFunction = require('./exposeFunction');

var _exposeFunction2 = _interopRequireDefault(_exposeFunction);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _wait = require('./wait');

var _wait2 = _interopRequireDefault(_wait);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * xl_pup start
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

/*
* 注入函数
* 拦截函数
* */
var setExpose = exports.setExpose = _exposeFunction.setExposeFun; // 设置全局函数拦截，并返回数据

/*
* 异步操作
* */
var waitTime = 500;
var setTime = exports.setTime = function setTime(time) {
    waitTime = time;
};
var path = exports.path = _wait.waitXpath;
var wait = exports.wait = _wait2.default;
var dispatch = exports.dispatch = _wait.dispatchNext;
var click = exports.click = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : waitTime;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return wait(time);

                    case 2:
                        _context.next = 4;
                        return (0, _wait.dispatchNext)(path);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function click(_x) {
        return _ref.apply(this, arguments);
    };
}();
var input = exports.input = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, text) {
        var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : waitTime;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return wait(time);

                    case 2:
                        _context2.next = 4;
                        return (0, _wait.dispatchNext)(path, 'input', {
                            text: text,
                            delay: delay
                        });

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function input(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();
var del = exports.del = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path, count) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : waitTime;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return wait(time);

                    case 2:
                        _context3.next = 4;
                        return (0, _wait.dispatchNext)(path, 'delete', {
                            count: count
                        });

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function del(_x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();
var enter = exports.enter = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(path, text) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : waitTime;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return wait(time);

                    case 2:
                        _context4.next = 4;
                        return (0, _wait.dispatchNext)(path, 'enter', {
                            text: text
                        });

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function enter(_x10, _x11) {
        return _ref4.apply(this, arguments);
    };
}();
var focus = exports.focus = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(path) {
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : waitTime;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return wait(time);

                    case 2:
                        _context5.next = 4;
                        return (0, _wait.dispatchNext)(path, 'focus');

                    case 4:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function focus(_x13) {
        return _ref5.apply(this, arguments);
    };
}();
var check = exports.check = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path, text) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : waitTime;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return wait(time);

                    case 2:
                        _context6.next = 4;
                        return (0, _wait.dispatchNext)(path, 'check', {
                            text: text
                        });

                    case 4:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined);
    }));

    return function check(_x15, _x16) {
        return _ref6.apply(this, arguments);
    };
}();

/*
* Util
* */
var Util = exports.Util = utils;
var log = exports.log = utils.log;
var error = exports.error = utils.error;

/*
* request
* */

var setRes = exports.setRes = _request.setResponse;
var setReq = exports.setReq = _request.setRequest;
var proxy = exports.proxy = _request.setProxy;

/*
* 实例化页面
* */
var index = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(URL, option) {
        var PAGE;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return (0, _init2.default)(option, URL);

                    case 2:
                        PAGE = _context7.sent;
                        _context7.next = 5;
                        return (0, _request2.default)();

                    case 5:
                        return _context7.abrupt('return', PAGE);

                    case 6:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, undefined);
    }));

    return function index(_x18, _x19) {
        return _ref7.apply(this, arguments);
    };
}();

exports.default = index;
