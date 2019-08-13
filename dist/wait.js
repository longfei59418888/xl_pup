'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitXpath = exports.dispatchNext = undefined;

var _utils = require('./utils');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * xl_pup wait
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

var dispatchNext = exports.dispatchNext = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';
        var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var _global, PAGE, _option$text, text, _option$count, count, msg, element, _option$delay, delay, i, s, eleText;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _global = global, PAGE = _global.PAGE;
                        _option$text = option.text, text = _option$text === undefined ? null : _option$text, _option$count = option.count, count = _option$count === undefined ? null : _option$count;
                        msg = _chalk2.default.green(path) + '_' + _chalk2.default.cyan(type);

                        if (text) msg = msg + '_' + _chalk2.default.blue(text);
                        if (count) msg = msg + '_' + _chalk2.default.grey(count);
                        console.log(msg);
                        _context.next = 8;
                        return PAGE.waitForXPath(path);

                    case 8:
                        _context.next = 10;
                        return PAGE.$x(path);

                    case 10:
                        element = _context.sent;

                        element = element[0];
                        _context.t0 = type;
                        _context.next = _context.t0 === 'click' ? 15 : _context.t0 === 'input' ? 18 : _context.t0 === 'delete' ? 24 : _context.t0 === 'enter' ? 38 : _context.t0 === 'focus' ? 52 : _context.t0 === 'check' ? 55 : 62;
                        break;

                    case 15:
                        _context.next = 17;
                        return element.click();

                    case 17:
                        return _context.abrupt('break', 63);

                    case 18:
                        _option$delay = option.delay, delay = _option$delay === undefined ? 100 : _option$delay;
                        _context.next = 21;
                        return element.focus();

                    case 21:
                        _context.next = 23;
                        return element.type(text, { delay: delay });

                    case 23:
                        return _context.abrupt('break', 63);

                    case 24:
                        _context.next = 26;
                        return element.focus();

                    case 26:
                        i = count;

                    case 27:
                        if (!i--) {
                            _context.next = 37;
                            break;
                        }

                        _context.next = 30;
                        return PAGE.keyboard.down('Backspace');

                    case 30:
                        _context.next = 32;
                        return PAGE.keyboard.up('Backspace');

                    case 32:
                        _context.next = 34;
                        return wait(300);

                    case 34:
                        i > 0;
                        _context.next = 27;
                        break;

                    case 37:
                        return _context.abrupt('break', 63);

                    case 38:
                        _context.next = 40;
                        return element.focus();

                    case 40:
                        s = 0;

                    case 41:
                        if (!(s < text.length)) {
                            _context.next = 51;
                            break;
                        }

                        _context.next = 44;
                        return PAGE.keyboard.down(text[s]);

                    case 44:
                        _context.next = 46;
                        return PAGE.keyboard.up(text[s]);

                    case 46:
                        _context.next = 48;
                        return wait(300);

                    case 48:
                        s += 1;
                        _context.next = 41;
                        break;

                    case 51:
                        return _context.abrupt('break', 63);

                    case 52:
                        _context.next = 54;
                        return element.focus();

                    case 54:
                        return _context.abrupt('break', 63);

                    case 55:
                        _context.next = 57;
                        return element.getProperty('innerHTML');

                    case 57:
                        _context.next = 59;
                        return _context.sent.jsonValue();

                    case 59:
                        eleText = _context.sent;

                        if (text && eleText === text) {
                            console.log(_chalk2.default.green('check__' + text + ':') + _chalk2.default.blue('success'));
                        } else {
                            console.log(_chalk2.default.green('check__' + text + ':') + _chalk2.default.red('error'));
                        }
                        return _context.abrupt('break', 63);

                    case 62:
                        return _context.abrupt('break', 63);

                    case 63:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function dispatchNext(_x) {
        return _ref.apply(this, arguments);
    };
}();

var wait = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

        var _global2, PAGE;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _global2 = global, PAGE = _global2.PAGE;
                        _context2.next = 3;
                        return PAGE.waitFor(time);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function wait() {
        return _ref2.apply(this, arguments);
    };
}();

var nextStep = null;
var waitXpath = exports.waitXpath = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(xpath, option) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var _global3, PAGE;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _global3 = global, PAGE = _global3.PAGE;
                        _context3.next = 3;
                        return wait(time);

                    case 3:
                        _context3.next = 5;
                        return PAGE.waitForXPath(xpath);

                    case 5:
                        _context3.next = 7;
                        return dispatchNext(xpath, 'click', {});

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function waitXpath(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();
// export const waitXpath = async (paths, time = 0) => {
//     const {PAGE} = global
//     await wait(time)
//     for (let i = 0; i++; i < paths.length) {
//         const item = paths[i];
//         const {path, type} = item
//         const itemNext = paths[i + 1] || null;
//         await dispatchNext(path, type, item)
//         if (itemNext) await PAGE.waitForXPath(itemNext.path)
//     }
// }


exports.default = wait;
