'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _puppeteerCore = require('puppeteer-core');

var _puppeteerCore2 = _interopRequireDefault(_puppeteerCore);

var _utils = require('./utils');

var _exposeFunction = require('./exposeFunction');

var _exposeFunction2 = _interopRequireDefault(_exposeFunction);

var _request = require('./request');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * xl_pup 初始化
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author Xiaolong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

var OPTIONS = {
    ignoreHTTPSErrors: true,
    headless: false,
    userDataDir: _path2.default.join(process.cwd(), './pup_data_cache/'),
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: {
        width: 375,
        height: 667,
        isMobile: true
    }
};

var PresetPage = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var browser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _puppeteerCore2.default.launch(OPTIONS).catch(function () {
                            console.log('错误');
                            browser.close();
                        });

                    case 2:
                        browser = _context.sent;
                        _context.next = 5;
                        return browser.newPage();

                    case 5:
                        return _context.abrupt('return', _context.sent);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function PresetPage() {
        return _ref.apply(this, arguments);
    };
}();

var init = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var URL = arguments[1];
        var beforePage, exposes, beforeProxy, page;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        beforePage = option.beforePage, exposes = option.exposes, beforeProxy = option.beforeProxy;

                        OPTIONS = _extends({}, OPTIONS, option);
                        _context2.next = 4;
                        return PresetPage();

                    case 4:
                        page = _context2.sent;

                        global.PAGE = page;

                        if (!exposes) {
                            _context2.next = 9;
                            break;
                        }

                        _context2.next = 9;
                        return (0, _exposeFunction2.default)(exposes);

                    case 9:
                        if (beforeProxy) (0, _request.setBefore)(beforeProxy);

                        if (!beforePage) {
                            _context2.next = 14;
                            break;
                        }

                        (0, _utils.log)('\u6253\u5F00\u9875\u9762beforePage:' + URL);
                        _context2.next = 14;
                        return beforePage(URL, option);

                    case 14:
                        (0, _utils.log)('\u6253\u5F00\u9875\u9762:' + URL);
                        _context2.next = 17;
                        return page.goto(URL);

                    case 17:
                        return _context2.abrupt('return', page);

                    case 18:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function init() {
        return _ref2.apply(this, arguments);
    };
}();

exports.default = init;
