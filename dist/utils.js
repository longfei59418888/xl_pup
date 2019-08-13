'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.read = exports.parse = exports.error = exports.log = exports.logInfo = undefined;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isEmptyObject = isEmptyObject;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * utils
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

var count = 0;
var logInfo = exports.logInfo = function logInfo(msg) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (type) count += 1;
    console.log(_chalk2.default.green(count + '\u3001' + msg));
};

var log = exports.log = function log(msg) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (type) count += 1;
    console.log(_chalk2.default.green(count + '\u3001' + msg));
};
var error = exports.error = function error(msg) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (type) count += 1;
    console.log(_chalk2.default.red(count + '\u3001' + msg));
};

var parse = exports.parse = function parse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.warn(jsonString + '___JSON.parse__\u53C2\u6570\u4E0D\u5BF9');
        return {};
    }
};

/*
* 类型判断
* */
var _ARRAY_NAME = '[object Array]';
var _OBJECT_NAME = '[object Object]';
var _FUNCTION_NAME = '[object Function]';

// 得到对象类型
function _isType(obj) {
    return Object.prototype.toString.call(obj);
}

function isFunction(obj) {
    return _isType(obj) === _FUNCTION_NAME;
}

function isObject(obj) {
    return _isType(obj) === _OBJECT_NAME;
}

function isArray(obj) {
    return _isType(obj) === _ARRAY_NAME;
}

function isEmptyObject(obj) {
    // 是否是空对象
    for (var t in obj) {
        return false;
    }
    return true;
}

var getStorage = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
        var _global, PAGE, page;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _global = global, PAGE = _global.PAGE;
                        page = getPage();
                        _context.next = 4;
                        return page.evaluate(function () {
                            return window.localStorage.getItem(name);
                        });

                    case 4:
                        return _context.abrupt('return', _context.sent);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getStorage(_x4) {
        return _ref.apply(this, arguments);
    };
}();
var setStorage = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, storage) {
        var _global2, PAGE, page;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _global2 = global, PAGE = _global2.PAGE;
                        page = getPage();
                        _context2.next = 4;
                        return page.evaluate(function (storage) {
                            return window.localStorage.setItem(name, storage);
                        }, storage);

                    case 4:
                        return _context2.abrupt('return', _context2.sent);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function setStorage(_x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}();
var saveStorage = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path) {
        var storage;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return getStorage();

                    case 2:
                        storage = _context3.sent;

                        shell.exec('echo ' + storage + ' > ' + path);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function saveStorage(_x7) {
        return _ref3.apply(this, arguments);
    };
}();
var readStorage = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(path) {
        var storage;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        if (!_fs2.default.existsSync(path)) {
                            _context4.next = 4;
                            break;
                        }

                        storage = _fs2.default.readFileSync(path, 'utf8');
                        _context4.next = 4;
                        return setStorage(storage);

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function readStorage(_x8) {
        return _ref4.apply(this, arguments);
    };
}();

var read = exports.read = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(path) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        return _context5.abrupt('return', new Promise(function (resolve) {
                            if (_fs2.default.existsSync(path)) {
                                var storage = _fs2.default.readFileSync(path, 'utf8');
                                resolve(storage);
                            }
                        }));

                    case 1:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function read(_x9) {
        return _ref5.apply(this, arguments);
    };
}();
