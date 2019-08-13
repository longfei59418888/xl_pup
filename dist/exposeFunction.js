'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setExposeFun = undefined;

var _utils = require('./utils');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * xl_pup 请求拦截
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var NAME = null;
var exposeFunctionHandlers = {};

var setExposeFun = exports.setExposeFun = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, data) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        exposeFunctionHandlers[name] = data;

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function setExposeFun(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var dealExpose = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, data) {
        var rst;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        (0, _utils.log)('\u8C03\u7528\u65B9\u6CD5\uFF1A' + NAME + '_' + name);
                        rst = exposeFunctionHandlers[name];

                        if ((0, _utils.isFunction)(rst)) {
                            rst = rst(data);
                        }
                        return _context2.abrupt('return', rst);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function dealExpose(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var exposeFunction = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(name) {
        var deal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dealExpose;

        var _global, PAGE;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _global = global, PAGE = _global.PAGE;

                        NAME = name;
                        _context3.next = 4;
                        return PAGE.exposeFunction(name, deal);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function exposeFunction(_x5) {
        return _ref3.apply(this, arguments);
    };
}();

exports.default = exposeFunction;
