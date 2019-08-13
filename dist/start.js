"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _exposeFunction = require("./exposeFunction");

var _exposeFunction2 = _interopRequireDefault(_exposeFunction);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * xl_pup start
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

var startList = [{ name: '默认', storage: {}, storagePath: '', session: {}, sessionPath: '', cookie: '', cookiePath: '', set: null }];

var getHost = function getHost() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var reg = url.match(/(^https?:\/\/[^/@!~`$%^&*()+=]+)\/.+$/);
    return reg[1];
};

var setStart = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(list) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        startList = startList.concat(startList, list);

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function setStart(_x2) {
        return _ref.apply(this, arguments);
    };
}();

var start = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, URL) {
        var pageContent, content, host;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _exposeFunction2.default)('startItem', function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(index) {
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                            case "end":
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, undefined);
                            }));

                            return function (_x5) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 2:
                        _context3.next = 4;
                        return (0, _utils.read)(_path2.default.join(__dirname, '../index.html'));

                    case 4:
                        pageContent = _context3.sent;
                        content = '';

                        Object.keys(startList).forEach(function (item, index) {
                            content += "<li index=\"" + index + "\">\u9ED8\u8BA4</li>";
                        });
                        pageContent.replace('<!--list-->', content);
                        host = getHost(URL);
                        _context3.next = 11;
                        return page.goto(host + "/puppeteer.html");

                    case 11:
                        _context3.next = 13;
                        return page.setContent(pageContent);

                    case 13:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function start(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

exports.default = start;
